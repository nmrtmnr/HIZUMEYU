<template lang="pug">
  section.bath
    .bath--inr.c-cnt-frm--inr--l
      h2.bath__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': 'bath', 'alt': ttl}")
      .bath__gallery
        .bath__gallery__itm
          .bath__gallery__itm--inr
            .bath__gallery__itm__link(v-inview)
              component(
                :is="isExternal(gallery.link.path) ? 'a' : 'NuxtLink'"
                :href="isExternal(gallery.link.path) ? gallery.link.path : undefined"
                :to="isExternal(gallery.link.path) ? undefined : gallery.link.path"
                :target="isExternal(gallery.link.path) ? '_blank' : undefined"
                :class="'bath__gallery__itm__link--inr'"
              )
                img.bath__gallery__itm__link__img(src=`/images/front-page/bath-gallery-link-img-01.svg` :alt="gallery.link.txt")
            img.bath__gallery__itm__img(src=`/images/front-page/bath-gallery-img-01.jpg` alt=`` v-inview)
        .bath__gallery__itm
          .bath__gallery__itm--inr
            img.bath__gallery__itm__img(src=`/images/front-page/bath-gallery-img-02.jpg` alt=`` v-inview)
</template>

<script>
export default {
  mixins:[],
  components: {},
  data: () => ({
    ttl: 'BATH 温浴',
    gallery: {
      link: {
        path: '/sauna-bath/',
        txt: '詳しく見る'
      }
    }
  }),
  created() {},
  mounted() {},
  watch: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
  .bath
    background-color $blue
    +pc()
      padding-top 25px
      padding-bottom 65px
    +sp()
      padding-top rem(18)
      padding-bottom rem(50)

    .bath--inr
      display flex
      flex-wrap wrap
      +pc()
        justify-content space-between
        flex-direction row-reverse
        padding-left $cntFrmInrEdge * 1px

    .bath__ttl
      +sp()
        width rem($cntFrmEdgeL)

    .bath__ttl__pic
      +pc()
        margin-top -24px
        margin-right -9px
      +sp()
        margin-top spPx(-18)
        margin-left spPx(-24)

    .bath__gallery
      +pc()
        display flex
        flex-wrap wrap
        justify-content space-between
        width cntFrmInrSSizePc()
      +sp()
        width cntFrmInrSSizeSp()

    .bath__gallery__itm + .bath__gallery__itm
      +sp()
        margin-top rem(18)

    .bath__gallery__itm:nth-child(1)
      +pc()
        width 232px

    .bath__gallery__itm__link
      +sp()
        display none

    .bath__gallery__itm__link--inr
      +pc()
        display flex
        flex-wrap wrap
        justify-content center
        align-items center
        width 126px
        height 126px
        margin-top -12px
        border-radius 50%
        background-color $white
        transition opacity .25s ease
        &:hover
          opacity .7

    .bath__gallery__itm__link__img
      +pc()
        width 78px
        height 47px
        margin-top -2px

    .bath__gallery__itm:nth-child(1) .bath__gallery__itm__img
      +pc()
        margin-top 12px

    .bath__gallery__itm:nth-child(2)
      +pc()
        width 661px
</style>
