<template lang="pug">
  section(:class="'sec--' + data.id" v-inview)
    h2.sec__ttl
      .sec__ttl__pic
        CommonHeadingLv1(:data="{'id': data.id, 'alt': data.ttl}")
    .sec__stmt.c-cnt-frm--inr--s(v-inview)
      h3.sec__stmt__ttl(v-html="data.stmt.ttl")
      p.sec__stmt__txt(v-for="txt in data.stmt.txt" v-html="txt")
    .sec__images.c-cnt-frm--inr--s
      .sec__images__itm(v-for="(image, index) in data.images" v-inview)
        img.sec__images__itm__img(
          :src="'/images/sauna-bath/' + data.id + '-imgs-img-' + [zeroPadding(index + 1, 2)] + '.jpg'"
          alt=``
        )
        span.sec__images__itm__cap(v-html="image.cap")
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style lang="stylus" scoped>
  //*** common
  [class*='sec--']
    .sec__ttl
      position relative
      background-repeat no-repeat
      background-position center
      background-size cover
      +pc()
        height 748px
      +sp()
        height rem(586)

    & + [class*='sec--']
      +pc()
        margin-top 105px
      +sp()
        margin-top spPx(103)

    .sec__ttl__pic
      position absolute
      bottom 0
      z-index 1
      background-color $blue

    .sec__stmt
      +pc()
        display flex
        flex-wrap wrap
        flex-direction column
        justify-content center
        padding-top 65px
        padding-bottom 125px
        vWriting()
      +sp()
        padding-top spPx(63)
        padding-bottom spPx(78)

    .sec__stmt__ttl
      fontPc(28, 48, 100, 400)
      fontSp(34, 48, 100, 400)

    .sec__stmt__txt
      fontPc(17, 36, 75, 400)
      fontSp(24, 38, 80, 400)

    .sec__stmt__ttl + .sec__stmt__txt
      +pc()
        margin-right 48px
      +sp()
        margin-top spPx(54)

    .sec__stmt__txt + .sec__stmt__txt
      +pc()
        margin-right 38px
      +sp()
        margin-top spPx(40)

    .sec__images__itm
      +pc()
        padding-right 41px
        padding-left 41px

    .sec__images__itm + .sec__images__itm
      +pc()
        margin-top 29px
      +sp()
        margin-top spPx(56)

    .sec__images__itm__cap
      display block
      fontPc(14, 48, 100, 400)
      fontSp(21, 30, 100, 400)
      +pc()
        margin-top 6px
      +sp()
        margin-top spPx(13)

  //*** sauna
  .sec--sauna
    .sec__ttl
      +pc()
        background-image url(/images/sauna-bath/sauna-ttl-img-01-pc.jpg)
      +sp()
        background-image url(/images/sauna-bath/sauna-ttl-img-01-sp.jpg)

    .sec__ttl__pic
      +pc()
        right 50%
        margin-right (cntFrmInrSSizePc() / 2)
      +sp()
        left rem($windowEdgeL)

  //*** sauna
  .sec--bath
    .sec__ttl
      +pc()
        background-image url(/images/sauna-bath/bath-ttl-img-01-pc.jpg)
      +sp()
        background-image url(/images/sauna-bath/bath-ttl-img-01-sp.jpg)

    .sec__ttl__pic
      +pc()
        left 50%
        margin-left (cntFrmInrSSizePc() / 2)
      +sp()
        left rem($windowEdgeL)
</style>
