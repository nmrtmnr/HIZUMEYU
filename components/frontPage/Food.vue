<template lang="pug">
  section#food.food
    .food--inr.c-cnt-frm--inr--l
      h2.food__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': 'food', 'alt': ttl}")
      .food__cnt
        ul.food__cnt__list(v-inview)
          li.food__cnt__list__itm(v-for="(val, index) in list")
            commonPicture(:data="{'class': 'food__cnt__list__itm__pic', 'src': '/images/front-page/food-img-' + [zeroPadding(index + 1, 2)] + '-pc.jpg', 'alt': val.img.alt}")
            h3.food__cnt__list__itm__ttl(v-html="val.ttl")
            .food__cnt__list__itm__txt(v-html="val.txt")
            .food__cnt__list__itm__price(v-html="val.price")
        .food__cnt__note(v-inview)
          .food__cnt__note__txt(v-for="(val, index) in note" v-html="val")
      .food__link(v-inview)
        commonPicture(:data="{'class': 'food__link__pic', 'src': '/images/front-page/food-link-txt-01-pc.svg', 'alt': '準備中'}")
</template>

<script>
export default {
  mixins:[],
  components: {},
  data: () => ({
    ttl: 'FOOD お食事',
    list: [
      {
        img: {
          src: '',
          alt: '',
        },
        ttl: '豚ロースと大根の山椒カレー',
        txt: 'お皿の中央で一際存在感を放つ大きい大根とほろほろになるまで煮込んだ豚肩ロースに山椒でアクセントを加えた、ボリューム満点の和風カレー。しっかり煮込んだ大根の甘みと豚肉の旨みがたっぷりのカレーはごはんと相性抜群。',
        price: '¥ 1,000 (税込)',
      },
      {
        img: {
          src: '',
          alt: '',
        },
        ttl: '薬味たっぷりキーマカレー',
        txt: '紫波町産の野菜をふんだんに使ったオリジナルブレンドの薬味。その薬味をたっぷり使ったひづめゆオリジナルのドライカレー。隠し味の紫波町産りんご（紅玉）ジュースとカレーと薬味の相性が抜群。',
        price: '¥ 1,000 (税込)',
      },
      {
        img: {
          src: '',
          alt: '',
        },
        ttl: 'ソフトクリーム',
        txt: '北海道十勝のこだわりの生乳をたっぷり使ったソフトクリーム。厳選された素材の風味と濃厚な味わいが、お風呂、サウナ上がりにピッタリの一品です。',
        price: '¥ 400 (税込)',
      },
    ],
    note: [
      '*提供可能時間 11:00〜22:00（L.O21:00）',
      '*テイクアウトもご利用いただけます。',
    ],
  }),
  created() {},
  mounted() {},
  watch: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
  .food
    +pc()
      padding-top 70px
      padding-bottom 70px
    +sp()
      padding-top rem(66)
      padding-bottom rem(74)

    .food--inr
      position relative
      display flex
      flex-wrap wrap
      +pc()
        justify-content space-between
        flex-direction row-reverse
        padding-left $cntFrmInrEdge * 1px

    .food__ttl
      +sp()
        width rem($cntFrmEdgeL)

    .food__ttl__pic
      +pc()
        margin-top -24px
        margin-right -9px
      +sp()
        margin-top spPx(-18)
        margin-left spPx(-24)

    .food__cnt
      +pc()
        width cntFrmInrSSizePc()
      +sp()
        width cntFrmInrSSizeSp()

    .food__cnt__list
      display flex
      flex-wrap wrap
      justify-content space-between

    .food__cnt__list__itm:not(:last-child)
      +pc()
        width 301px

    .food__cnt__list__itm:last-child
      +pc()
        width 271px

    .food__cnt__list__itm + .food__cnt__list__itm
      +sp()
        margin-top spPx(88)

    .food__cnt__list__itm__ttl
    .food__cnt__list__itm__price
      fontPc(15, 24, 0, 400)
      fontSp(28, 28, 0, 400)

    .food__cnt__list__itm__ttl
      +pc()
        margin-top 30px
      +sp()
        margin-top spPx(50)

    .food__cnt__list__itm__txt
      fontPc(13, 22, 0, 400)
      fontSp(24, 32, 0, 400)
      +pc()
        margin-top 13px
      +sp()
        margin-top spPx(33)

    .food__cnt__list__itm__price
      +pc()
        margin-top 10px
      +sp()
        margin-top spPx(34)

    .food__cnt__note
      +pc()
        margin-top 38px
      +sp()
        margin-top spPx(86)

    .food__cnt__note__txt
      fontPc(13, 24, 50, 400)
      fontSp(26, 48, 50, 400)

    .food__link
      display flex
      flex-wrap wrap
      justify-content center
      align-items center
      position absolute
      z-index 1
      background-color rgba($lightGray, .2)
      +pc()
        right 82px
        bottom 20px
        width 126px
        height 126px
        border-radius 50%
      +sp()
        top spPx(326)
        left 0
        width spPx(49)
        height spPx(178)

    .food__link__pic
      +pc()
        width 46px
        height 46px
      +sp()
        width spPx(30)
        height spPx(130)
</style>
