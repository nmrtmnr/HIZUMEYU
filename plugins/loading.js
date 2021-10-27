import Vue from 'vue'

Vue.directive('loading', {
  bind: (el, binding) => {
    el.setAttribute('data-loading', '')
  },
  inserted: (el, binding) => {
    const grad = el.querySelector('[data-loading-grad]')

    const start = () => {
      window.removeEventListener('load', start)
      el.classList.add('on')
    }

    const logoFinish = () => {
      grad.removeEventListener('transitionend', logoFinish)
      el.classList.add('off')
      checkOpacity(el, 0)
    }

    const loadFinish = () => {
      window.dispatchEvent(new CustomEvent('END_LOADING'))
    }

    const checkOpacity = (el, val = 1) => {
      let timer = setInterval(() => {
        const value = getComputedStyle(el, null).getPropertyValue('opacity') - 0
        if (val === value) {
          clearInterval(timer)
          el.parentNode.removeChild(el)
          loadFinish()
        }
      })
    }

    window.addEventListener('load', start)
    grad.addEventListener('transitionend', logoFinish)
  }
})
