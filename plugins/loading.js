import Vue from 'vue'

Vue.directive('loading', {
  bind: (el, binding) => {
    el.setAttribute('data-loading', '')
  },
  inserted: (el, binding) => {
    const grad = el.querySelector('[data-loading-grad]')

    const checkOpacity = (el, val = 1) => {
      let timer = setInterval(() => {
        const value = getComputedStyle(el, null).getPropertyValue('opacity') - 0
        if (val === value) {
          clearInterval(timer)
          el.parentNode.removeChild(el)
        }
      })
    }

    const start = () => {
      window.removeEventListener('load', start)
      el.classList.add('on')
    }

    const finish = () => {
      window.removeEventListener('transitionend', finish)
      el.classList.add('off')
      checkOpacity(el, 0)
    }

    window.addEventListener('load', start)
    grad.addEventListener('transitionend', finish)
  }
})
