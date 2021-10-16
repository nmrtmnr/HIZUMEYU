<template lang="pug">
  div(:class="'p-' + id + '--inr'")
    FrontPageMv
    FrontPageNews
    FrontPageAbout
    FrontPageSauna
    FrontPageBath
    FrontPageCidery
    FrontPageMap
</template>

<script>
  const ID = 'front-page'
  export default {
    head: {
      bodyAttrs: {
        class: 'p-' + ID
      }
    },
    data: () => ({
      id : ID
    }),
    mounted() {
      this.$el.classList.add('on')
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
