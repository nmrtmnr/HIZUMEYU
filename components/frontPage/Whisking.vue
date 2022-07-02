<template lang="pug">
  section#whisking.whisking
    .whisking--inr.c-cnt-frm--inr--l
      h2.whisking__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': 'whisking', 'alt': ttl}")
      .whisking__lbl(v-inview)
        img.whisking__lbl__img(src=`/images/front-page/whisking-lbl-01.svg` alt=`2022年8月以降サービス開始予定`)
      .whisking__cnt
        .whisking__cnt__imgs(v-inview)
          img.whisking__cnt__imgs__img(v-for="n in imgNum" :src="'/images/front-page/whisking-img-' + [zeroPadding(n, 2)] + '.jpg'" alt='')
        .whisking__cnt__stmt(v-inview)
          img.whisking__cnt__stmt__img(src=`/images/front-page/whisking-stmt-txt-01.svg` :alt="stmt.img.alt")
          p.whisking__cnt__stmt__txt(v-for="txt in stmt.txt" v-html="txt")
</template>

<script>
export default {
  mixins:[],
  components: {},
  data: () => ({
    ttl: 'WHISKING ウィスキング',
    imgNum: 2,
    stmt: {
      img: {
        src: '',
        alt: '「ウィスキング」というのは、「サウナ内で行うサービス」で、ロシア〜バルト三国、フィンランドまで広がるサウナ文化です。植物を束ねた「サウナウィスク」（サウナほうき）を使って、「叩く、押し付ける、仰ぐ、撫でる」などを組み合わせて行うサービスで、主に血行促進を目的に「植物の香りや力」を体に入れてもらうイメージです。植物と蒸気につつまれる、まるで森林浴のような癒しのひとときをお過ごしください。ひづめゆは日本初のウィスキング集団「しらかばスポーツ」さんにウィスキングを監修いただいています。',
      },
      txt: [
        '「ウィスキング」というのは、「サウナ内で行うサービス」で、ロシア〜バルト三国、フィンランドまで広がるサウナ文化です。',
        '植物を束ねた「サウナウィスク」（サウナほうき）を使って、「叩く、押し付ける、仰ぐ、撫でる」などを組み合わせて行うサービスで、主に血行促進を目的に「植物の香りや力」を体に入れてもらうイメージです。',
        '植物と蒸気につつまれる、まるで森林浴のような癒しのひとときをお過ごしください。',
        'ひづめゆは日本初のウィスキング集団「しらかばスポーツ」さんにウィスキングを監修いただいています。',
      ],
    },
  }),
  created() {},
  mounted() {},
  watch: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
  .whisking
    background-color $blue
    +pc()
      padding-top 60px
      padding-bottom 76px
    +sp()
      padding-top rem(50)
      padding-bottom rem(82)

    .whisking--inr
      position relative
      display flex
      flex-wrap wrap
      +pc()
        justify-content space-between
        padding-right $cntFrmInrEdge * 1px

    .whisking__ttl
      +sp()
        width rem($cntFrmEdgeL)

    .whisking__ttl__pic
      +pc()
        margin-top -24px
        margin-left -20px
      +sp()
        margin-top spPx(-18)
        margin-left spPx(-24)

    .whisking__lbl
      display flex
      justify-content center
      align-items center
      position absolute
      left 0
      z-index 1
      background-color $white
      +pc()
        top 337px
        width 32px
        height 285px
        padding 16px 9px 11px 10px
      +sp()
        top spPx(550)
        width spPx(49)
        height spPx(505)
        padding spPx(23) spPx(13) spPx(21) spPx(13)

    .whisking__cnt
      +pc()
        width cntFrmInrSSizePc()
      +sp()
        width cntFrmInrSSizeSp()

    .whisking__cnt__imgs
      +pc()
        display flex
        flex-wrap wrap
        justify-content space-between

    .whisking__cnt__imgs__img
      +pc()
        width 445px

    .whisking__cnt__imgs__img + .whisking__cnt__imgs__img
      +sp()
        margin-top rem(18)

    .whisking__cnt__stmt
      +pc()
        margin-top 58px
      +sp()
        margin-top spPx(54)

    .whisking__cnt__stmt__img
      +pc()
        display block
        width 751px
        margin-right auto
        margin-left auto
      +sp()
        display none

    .whisking__cnt__stmt__txt
      fontSp(24, 34, 0, 400)
      +pc()
        display none

    .whisking__cnt__stmt__txt + .whisking__cnt__stmt__txt
      +sp()
        margin-top spPx(42)
</style>
