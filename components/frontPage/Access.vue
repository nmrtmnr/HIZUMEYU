<template lang="pug">
  section#access.access
    .access--inr.c-cnt-frm--inr--l(v-inview)
      h2.access__ttl
        CommonHeadingLv1(:data="{'id': 'access', 'alt': ttl}")
      .access__cnt
        .access__cnt__gmap
          .
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2197.961345676824!2d141.16713756327533!3d39.55428919110006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x5f8585fbe401467f%3A0xfea77e0c3eda1331!2z44CSMDI4LTMzMDUg5bKp5omL55yM57Sr5rOi6YOh57Sr5rOi55S65pel6Kmw6KW_6KOP77yS77yT4oiS77yR!5e0!3m2!1sja!2sjp!4v1632233590556!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        .access__cnt__address
          .access__cnt__address__ttl(v-html="address.ttl")
          .access__cnt__address__txt.u-d-none--sp(v-html="address.txt.pc")
          .access__cnt__address__txt.u-d-none--pc(v-html="address.txt.sp")
      .access__info
        .access__info__txt(v-for="(val, index) in info" v-html="val")
</template>

<script>
export default {
  mixins:[],
  components: {},
  data: () => ({
    ttl: 'ACCESS アクセス',
    address: {
      ttl: '住所',
      txt: {
        pc: '〒〇二八-三三〇五<br>岩手県紫波郡紫波町日詰西裏　二十三 - 十三',
        sp: '〒028-3305　<br class="u-d-none--sp">岩手県紫波郡紫波町日詰西裏23-13',
      },
    },
    info: [
      ' 公共交通機関をご利用の場合<br>「紫波中央駅」より徒歩15分',
      'お車をご利用の場合<br>東北自動車道「紫波IC」より約10分',
      '駐車場<br>有り（約50台分）',
    ],
  }),
  created() {},
  mounted() {},
  watch: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
  .access
    background-color $purple
    +pc()
      padding-top 70px
      padding-bottom 120px
    +sp()
      padding-top rem(52)
      padding-bottom rem(125)

    .access--inr
      display flex
      flex-wrap wrap
      +pc()
        justify-content space-between
        padding-right $cntFrmInrEdge * 1px

    .access__ttl
      +sp()
        width rem($cntFrmEdgeL)

    .access__ttl__pic
      +pc()
        margin-top -24px
        margin-left -20px
      +sp()
        margin-top spPx(-18)
        margin-left spPx(-24)

    .access__cnt
      +pc()
        display flex
        flex-wrap wrap
        justify-content space-between
        width cntFrmInrSSizePc()
      +sp()
        width cntFrmInrSSizeSp()

    .access__cnt__gmap
      overflow hidden
      position relative
      height 0
      +pc()
        width 843px
        padding-top per(499, 843)
      +sp()
        padding-top per(368, 550)

    .access__cnt__gmap iframe
      position absolute
      left 0
      top 0
      height 100%
      width 100%

    .access__cnt__address
      fontPc(16, 18, 100, 400)
      fontSp(24, 40, 25, 400)
      +pc()
        display flex
        align-items center
        vWriting()
      +sp()
        margin-top rem(54)

    .access__cnt__address__txt
      +pc()
        margin-top 54px

    .access__info
      +pc()
        display flex
        flex-wrap wrap
        justify-content space-between
        width 843px
        margin-top 46px
        margin-left 81px
        padding-right 40px
        padding-left 40px
      +sp()
        width cntFrmInrSSizeSp()
        margin-left rem($cntFrmEdgeL)

    .access__info__txt
      fontPc(13, 24, 50, 400)
      fontSp(24, 40, 25, 400)
      +sp()
        margin-top spPx(42)
</style>
