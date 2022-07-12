<template lang="pug">
  section#cidery.cidery(v-inview)
    h2.cidery__ttl
      CommonHeadingLv1(:data="{'id': 'cidery', 'alt': ttl}")
    .cidery__stmt(v-inview)
      .cidery__stmt__logo
        component(
          :is="isExternal(stmt.link.path) ? 'a' : 'NuxtLink'"
          :href="isExternal(stmt.link.path) ? stmt.link.path : undefined"
          :to="isExternal(stmt.link.path) ? undefined : stmt.link.path"
          :target="isExternal(stmt.link.path) ? '_blank' : undefined"
          :class="'cidery__stmt__logo__link'"
        )
          img.cidery__stmt__logo__link__img(src=`/images/front-page/cidery-stmt-img-01.png` :alt="stmt.logo")
      .cidery__stmt__wrting
        .cidery__stmt__writing__txt(v-html="stmt.txt")
        component(
          :is="isExternal(stmt.link.path) ? 'a' : 'NuxtLink'"
          :href="isExternal(stmt.link.path) ? stmt.link.path : undefined"
          :to="isExternal(stmt.link.path) ? undefined : stmt.link.path"
          :target="isExternal(stmt.link.path) ? '_blank' : undefined"
          :class="'cidery__stmt__writing__link c-underlink'"
          v-html="stmt.link.txt"
        )
</template>

<script>
export default {
  mixins:[],
  components: {},
  data: () => ({
    ttl: 'CIDERY サイダリー',
    stmt: {
      logo: 'Green Neighbors Hard Cider',
      txt: '豊かな自然と暮らしやすい町を大切にする<br class="u-d-none--sp">オープンマインドな人々 ( 緑の隣人 ) に向けて<br class="u-d-none--sp">日曜日のリラックスした空気感を詰め込んだ<br class="u-d-none--sp">ハードサイダーを届けます',
      link: {
        txt: '> オフィシャルサイト',
        path: 'https://greenneighbors.jp'
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
  .cidery
    position relative
    background-repeat no-repeat
    background-position center
    background-size cover
    background-image url('/images/front-page/cidery-img-01.jpg')
    +pc()
      height 771px
      // background-image url('/images/front-page/cidery-img-01-pc.jpg')
    +sp()
      height rem(821)
      // background-image url('/images/front-page/cidery-img-01-sp.jpg')

    .cidery__ttl__pic
      position absolute
      z-index 1
      background-color $green
      +pc()
        top 54px
        left 50%
        margin-left -546px
        padding-top 20px
      +sp()
        top rem(46)
        left rem($windowEdgeL)

    .cidery__stmt
      display flex
      justify-content center
      align-items center
      position absolute
      z-index 1
      background-color $green
      +pc()
        bottom 64px
        left 50%
        width 557px
        height 178px
      +sp()
        bottom rem(50)
        right 0
        left 0
        width cntFrmInrSSizeSp()
        height rem(286)
        margin-right auto
        margin-left auto

    .cidery__stmt__logo
      position relative
      +pc()
        padding-right 30px
        &::after
          content ''
          display block
          position absolute
          top 50%
          right 0
          z-index 1
          width 1px
          height 120px
          margin-top -60px
          background-color $white
      +sp()
        padding-right rem(35)

    .cidery__stmt__logo__link
      +pc()
        width 110px
        height 110px
        transition opacity .25s ease
        &:hover
          opacity .7
      +sp()
        width rem(116)
        height rem(116)

    .cidery__stmt__wrting
      fontPc(14, 22, 50, 400)
      fontSp(24, 31, 50, 400)
      +pc()
        padding-left 37px
      +sp()
        width rem(333)
        text-align justify
        text-justify inter-ideograph

    .cidery__stmt__writing__link
      +pc()
        margin-top 12px
        transition opacity .25s ease
        &:hover
          opacity .7
      +sp()
        margin-top spPx(18)
</style>
