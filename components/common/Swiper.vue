<template lang="pug">
  .swiper-container(ref=`mySwiper`)
    .swiper-wrapper
      slot
</template>

<script>
import Swiper from 'swiper'

export default {
  props: {
    opts: {
      type: Object,
      required: false,
      default: {}
    }
  },
  data: () => ({
    'swiper': {}
  }),
  mounted() {
    window.addEventListener('END_LOADING', () => {
      if(!Object.keys(this.swiper).length) {
        this.swiper = new Swiper(this.$refs.mySwiper, this.opts)
      }
    })
  },
  destroyed() {
    // this.swiper.destory()
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-container
  .swiper-wrapper
    height 100%
</style>
