<template lang="pug">
  section#sauna-bath.sauna
    .sauna--inr.c-cnt-frm--inr--l
      h2.sauna__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': 'sauna', 'alt': ttl}")
      component(
        :is="isExternal(gallery.link.path) ? 'a' : 'NuxtLink'"
        :href="isExternal(gallery.link.path) ? gallery.link.path : undefined"
        :to="isExternal(gallery.link.path) ? undefined : gallery.link.path"
        :target="isExternal(gallery.link.path) ? '_blank' : undefined"
        :class="'sauna__gallery__itm__link'"
        v-inview
      )
        img.sauna__gallery__itm__link__img(src=`/images/front-page/sauna-gallery-link-img-01.svg` :alt="gallery.link.txt")
      .sauna__gallery
        .sauna__gallery__itm
          .sauna__gallery__itm--inr
            img.sauna__gallery__itm__img(src=`/images/front-page/sauna-gallery-img-01.jpg` alt=`` v-inview)
        .sauna__gallery__itm
          .sauna__gallery__itm--inr
            img.sauna__gallery__itm__img(src=`/images/front-page/sauna-gallery-img-02.jpg` alt=`` v-inview)
          .sauna__gallery__itm--inr
            img.sauna__gallery__itm__img(src=`/images/front-page/sauna-gallery-img-03.jpg` alt=`` v-inview)
            img.sauna__gallery__itm__img(src=`/images/front-page/sauna-gallery-img-04.jpg` alt=`` v-inview)
</template>

<script>
export default {
  mixins:[],
  components: {},
  data: () => ({
    ttl: 'SAUNA サウナ',
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
  .sauna
    background-color $blue
    +pc()
      padding-top 60px
    +sp()
      padding-top rem(53)

    .sauna--inr
      display flex
      flex-wrap wrap
      +pc()
        justify-content space-between
        padding-right $cntFrmInrEdge * 1px
      +sp()
        position relative

    .sauna__ttl
      +sp()
        width rem($cntFrmEdgeL)

    .sauna__ttl__pic
      +pc()
        margin-top -24px
        margin-left -20px
      +sp()
        margin-top spPx(-18)
        margin-left spPx(-24)

    .sauna__gallery__itm__link
      +pc()
        display none
      +sp()
        position absolute
        top spPx(322)
        left 0
        z-index 1
        width spPx(49)
        height spPX(240)
        background-color $white

    .sauna__gallery
      +pc()
        display flex
        flex-wrap wrap
        justify-content space-between
        width cntFrmInrSSizePc()
      +sp()
        width cntFrmInrSSizeSp()

    .sauna__gallery__itm
      +sp()
        width 100%

    .sauna__gallery__itm + .sauna__gallery__itm
    .sauna__gallery__itm--inr + .sauna__gallery__itm--inr
      +sp()
        margin-top rem(18)

    .sauna__gallery__itm:nth-child(1)
      +pc()
        width 593px

    .sauna__gallery__itm:nth-child(2)
      +pc()
        display flex
        flex-direction column
        justify-content space-between
        width 301px

    .sauna__gallery__itm:nth-child(2) .sauna__gallery__itm--inr:nth-child(2)
      display flex
      flex-wrap wrap
      justify-content space-between

      .sauna__gallery__itm__img:nth-child(1)
        +pc()
          width 140px
        +sp()
          width rem(254)

      .sauna__gallery__itm__img:nth-child(2)
        +pc()
          width 149px
        +sp()
          width rem(278)
</style>
