<template lang="pug">
  transition
    header.b-hdr
      | テスト
      h1.b-hdr__logo
        component(
          :is="isExternal(logo.path) ? 'a' : 'NuxtLink'"
          :href="isExternal(logo.path) ? logo.path : undefined"
          :to="isExternal(logo.path) ? undefined : logo.path"
          :target="isExternal(logo.path) ? '_blank' : undefined"
          :class="'b-hdr__logo__link'"
        )
          img.b-hdr__logo__link__img(src=`/images/common/logo-white-01.svg` :alt="logo.txt")
</template>

<script>
export default {
  mixins:[],
  components: {},
  data: () => ({
    logo: {
      txt: 'ひづめゆ',
      path: '/'
    }
  }),
  created() {},
  mounted () {
    // console.log(this)
  },
  watch: {},
  methods: {},
  beforeLeave() {}
}
</script>

<style lang="stylus" scoped>
  .b-hdr
    //*** logo
    $logoWPc = 104
    $logoWSp = 140
    .b-hdr__logo
      position fixed
      left 50%
      z-index 9998
      +pc()
        top 12px
        width $logoWPc * 1px
        height 63px
        margin-left ($logoWPc / 2) * -1px
      +sp()
        top spPx(12)
        width spPx($logoWSp)
        height spPx(84)
        margin-left spPx($logoWSp / -2)

    .b-hdr__logo__link
      +pc()
        transition opacity .25s ease
        &:hover
          opacity .7
</style>
