<template lang="pug">
  section#map.map
    .map--inr.c-cnt-frm--inr--l
      h2.map__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': 'map', 'alt': ttl}")
      .map__cnt(v-inview)
        .map__cnt__gmap
          .
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2197.961345676824!2d141.16713756327533!3d39.55428919110006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x5f8585fbe401467f%3A0xfea77e0c3eda1331!2z44CSMDI4LTMzMDUg5bKp5omL55yM57Sr5rOi6YOh57Sr5rOi55S65pel6Kmw6KW_6KOP77yS77yT4oiS77yR!5e0!3m2!1sja!2sjp!4v1632233590556!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        .map__cnt__address
          .map__cnt__address__ttl(v-html="address.ttl")
          .map__cnt__address__txt.u-d-none--sp(v-html="address.txt.pc")
          .map__cnt__address__txt.u-d-none--pc(v-html="address.txt.sp")
</template>

<script>
export default {
  mixins:[],
  components: {},
  data: () => ({
    ttl: 'MAP マップ',
    address: {
      ttl: '住所',
      txt: {
        pc: '〒〇二八-三三〇五<br>岩手県紫波郡紫波町日詰西裏　二十三 -一',
        sp: '〒028-3305<br>岩手県紫波郡紫波町日詰西裏23-1',
      },
    }
  }),
  created() {},
  mounted() {},
  watch: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
  .map
    background-color $purple
    +pc()
      padding-top 70px
      padding-bottom 70px
    +sp()
      padding-top rem(52)
      padding-bottom rem(135)

    .map--inr
      display flex
      flex-wrap wrap
      +pc()
        justify-content space-between
        padding-right $cntFrmInrEdge * 1px

    .map__ttl
      +sp()
        width rem($cntFrmEdgeL)

    .map__ttl__pic
      +pc()
        margin-top -24px
        margin-left -20px
      +sp()
        margin-top spPx(-18)
        margin-left spPx(-24)

    .map__cnt
      +pc()
        display flex
        flex-wrap wrap
        justify-content space-between
        width cntFrmInrSSizePc()
      +sp()
        width cntFrmInrSSizeSp()

    .map__cnt__gmap
      overflow hidden
      position relative
      height 0
      +pc()
        width 843px
        padding-top per(499, 843)
      +sp()
        padding-top per(368, 550)

    .map__cnt__gmap iframe
      position absolute
      left 0
      top 0
      height 100%
      width 100%

    .map__cnt__address
      display flex
      fontPc(16, 18, 100, 400)
      fontSp(24, 30, 100, 400)
      +pc()
        align-items center
        vWriting()
      +sp()
        margin-top rem(24)

    .map__cnt__address__txt
      +pc()
        margin-top 54px
      +sp()
        margin-left spPx(86)
</style>
