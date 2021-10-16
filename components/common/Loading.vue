<template lang="pug">
  div(class=`loading` v-loading)
    img.loading__img(src=`/images/common/logo-white-01.svg` alt=`ひづめゆ`)
    img.loading__grad(src=`/images/common/loading-grad-01.png` alt=`` data-loading-grad)
</template>

<script>
  export default {
    mounted() {
      this.fullSp()
      window.addEventListener('resize', this.fullSp)
    },
    destroyed() {
      window.removeEventListener('resize', this.fullSp)
    },
    methods: {
      fullSp() {
        if (this.wW !== window.innerWidth) {
          this.wW = window.innerWidth
          let vh = window.innerHeight * 0.01
          document.documentElement.style.setProperty('--vh', `${vh}px`)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .loading
    position fixed
    top 0
    left 0
    z-index 9999
    width 100%
    opacity 1
    background-color $purple
    transition opacity 1.5s ease 1s
    +pc()
      height 100vh
    +sp()
      height: calc(var(--vh, 1vh) * 100)

    .loading__img
      position absolute
      top 50%
      left 50%
      z-index 1
      opacity 0
      +pc()
        width 180px
        height 109px
        margin-top -55px
        margin-left -90px
      +sp()
        width spPx(180)
        height spPx(109)
        margin-top spPx(-55)
        margin-left spPx(-90)

    .loading__grad
      position absolute
      top 50%
      left 50%
      z-index 2
      transition margin-top 3s ease 1s
      +pc()
        width 180px
        height 180px
        margin-top -70px
        margin-left -90px
      +sp()
        width spPx(180)
        height spPx(180)
        margin-top spPx(-70)
        margin-left spPx(-90)

  .loading.on
    .loading__img
      opacity 1
    .loading__grad
      +pc()
        margin-top -250px
      +sp()
        margin-top spPx(-250)

  .loading.off
    opacity 0
</style>
