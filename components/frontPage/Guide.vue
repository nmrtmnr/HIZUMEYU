<template lang="pug">
  section#guide.guide
    .guide--inr.c-cnt-frm--inr--l
      h2.guide__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': 'guide', 'alt': ttl}")
      .guide__cnt
        ul.guide__cnt__list
          li.guide__cnt__list__itm(v-for="(val, index) in list" v-inview)
            h3.guide__cnt__list__itm__ttl(v-html="val.ttl")
            .guide__cnt__list__itm__txt(v-html="val.txt")
        .guide__cnt__note(v-inview)
          .guide__cnt__note__txt(v-for="(val, index) in note" v-html="val")
</template>

<script>
export default {
  mixins:[],
  components: {},
  data: () => ({
    ttl: 'GUIDE ご利用案内',
    list: [
      {
        ttl: '営業時間/定休日',
        // txt: `<span>営業時間 10:00〜22:00</span><br><span>最終受付 21:30</span><br><span>定休日 毎月第1月曜日</span>`,
        txt: `<span>営業時間 10:00〜22:00</span><br><span>最終受付 21:30</span><br><span>定休日 不定休</span>`,
      },
      {
        ttl: '入浴料金<br><small>(サウナ含む）</small>',
        txt: `<span>大人 700円 (税込)</span><br><span>子供 350円 (税込)</span><br><span>未就学児無料</span>`,
      },
      {
        ttl: 'ウィスキング料金',
        txt: `<span>2022年8月以降</span><br><span>サービス開始予定</span>`,
      },
    ],
    note: [
      '*シャンプー、トリートメント、ボディソープは<br class="u-d-none--pc">備え付けがございます。',
      '*各種レンタルをご用意しております。',
    ]
  }),
  created() {},
  mounted() {},
  watch: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
  .guide
    background-color $blue
    +pc()
      padding-top 70px
      padding-bottom 40px
    +sp()
      padding-top rem(56)
      padding-bottom rem(50)

    .guide--inr
      display flex
      flex-wrap wrap
      +pc()
        justify-content space-between
        padding-right $cntFrmInrEdge * 1px

    .guide__ttl
      +sp()
        width rem($cntFrmEdgeL)

    .guide__ttl__pic
      +pc()
        margin-top -24px
        margin-left -20px
      +sp()
        margin-top spPx(-18)
        margin-left spPx(-24)

    .guide__cnt
      +pc()
        width cntFrmInrSSizePc()
      +sp()
        width cntFrmInrSSizeSp()

    .guide__cnt__list
      +pc()
        display flex
        flex-wrap wrap
        justify-content space-between
        width 100%
        padding-right 58px
        padding-left 64px

    .guide__cnt__list__itm
      text-align center

    .guide__cnt__list__itm + .guide__cnt__list__itm
      +sp()
        margin-top spPx(103)

    .guide__cnt__list__itm__ttl
      fontPc(22, 24, 50, 400)
      fontSp(36, 36, 50, 400)
      ::v-deep small
        fontPc(13, 24, 50, 400)
        fontSp(24, 24, 50, 400)
        +sp()
          margin-top spPx(4)

    .guide__cnt__list__itm:not(:last-child)
      .guide__cnt__list__itm__txt
        fontPc(16, 36, 50, 400)
        fontSp(26, 40, 50, 400)
        ::v-deep span
          display inline-block
          border-bottom 1px solid $white
          +pc()
            margin-top 3px
          +sp()
            margin-top spPx(12)

    .guide__cnt__list__itm:first-child
      .guide__cnt__list__itm__txt
        +pc()
          margin-top 50px
        +sp()
          margin-top spPx(64)

    .guide__cnt__list__itm:nth-child(2)
      .guide__cnt__list__itm__txt
        +pc()
          margin-top 22px
        +sp()
          margin-top spPx(44)

    .guide__cnt__list__itm:last-child
      .guide__cnt__list__itm__txt
        fontPc(15, 24, 50, 400)
        fontSp(26, 40, 50, 400)
        +pc()
          margin-top 82px
        +sp()
          margin-top spPx(50)

    .guide__cnt__note
      +pc()
        padding-left 64px
        margin-top 62px
      +sp()
        margin-top spPx(106)

    .guide__cnt__note__txt
      display block
      fontPc(13, 24, 50, 400)
      fontSp(22, 36, 50, 400)
      padding-left .5em
      text-indent -.5em
</style>
