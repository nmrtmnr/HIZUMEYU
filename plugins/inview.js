import Vue from 'vue'

Vue.directive('inview', {
  bind: (el, binding) => {
    el.setAttribute('data-inview', '')
  },
  inserted: (el, binding) => {
    const events = ['scroll']

    const getWindowHeight = () => {
      return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    }

    const getPosition = () => {
      return el.getBoundingClientRect().top
    }

    const fire = (event) => {
      if (getWindowHeight() / 3 * 2 > getPosition()) {
        el.classList.add('on')
        if(event) window.removeEventListener(event, fire)
      }
    }

    events.forEach(event => {
      window.addEventListener(event, () => {
        fire(event)
      })
    })

    fire()
  }
})
