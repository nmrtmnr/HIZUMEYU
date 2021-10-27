<template lang="pug">
  div(:class="'p-' + id + '--inr'")
    FrontPageMv
    FrontPageNews(:cdaClient=cdaClient)
    FrontPageAbout
    FrontPageSauna
    FrontPageBath
    FrontPageCidery
    FrontPageMap
</template>

<script>
  import Meta from '~/mixins/meta'

  const ID = 'front-page'
  export default {
    head: {
      bodyAttrs: {
        class: 'p-' + ID,
      }
    },
    mixins: [Meta],
    data: () => ({
      id : ID,
      wH: 0,
      mvIsGoneFlg: false,
    }),
    mounted() {
      this.$el.classList.add('on')
      this.setWH()
      window.addEventListener('resize', this.setWH)
      window.addEventListener('scroll', this.mvIsGone)
      window.addEventListener('resize', this.mvIsGone)
    },
    destroyed() {
      window.removeEventListener('resize', this.setWH)
      window.removeEventListener('scroll', this.mvIsGone)
      window.removeEventListener('resize', this.mvIsGone)
    },
    methods: {
      setWH() {
        if (this.wH !== window.innerWidth) {
          this.wH = window.innerHeight
        }
      },
      mvIsGone() {
        const sY = window.pageYOffset
        if(sY >= this.wH) {
          if(!this.mvIsGoneFlg) {
            document.body.classList.add('mvIsGone')
            this.mvIsGoneFlg = true
          }
        } else {
          if(this.mvIsGoneFlg) {
            document.body.classList.remove('mvIsGone')
            this.mvIsGoneFlg = false
          }
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
  //*** wrapper
  $transitionDuration = .5s

  .p-front-page--inr
    opacity 0
    transition opacity $transitionDuration + .2 ease .2s

  .p-front-page--inr.on
    opacity 1
</style>
