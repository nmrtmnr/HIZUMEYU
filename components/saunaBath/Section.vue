<template lang="pug">
  section(:class="'sec--' + data.id" v-inview)
    h2.sec__ttl
      .sec__ttl__pic
        CommonHeadingLv1(:data="{'id': data.id, 'alt': data.ttl}")
    .sec__stmt.c-cnt-frm--inr--s(v-inview)
      img.sec__stmt__img(:src="`/images/sauna-bath/${data.id}-stmt-img.svg`" :alt="data.stmt.img.alt")
      h3.sec__stmt__ttl(v-html="data.stmt.ttl")
      p.sec__stmt__txt(v-for="txt in data.stmt.txt" v-html="txt")
      p.sec__stmt__note(v-for="note in data.stmt.note" v-html="note")
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

    .sec__stmt__img
      +pc()
        display block
        margin 0 auto
      +sp()
        display none

    .sec__stmt__ttl
      fontSp(38, 54, 100, 400)
      +pc()
        display none

    .sec__stmt__txt
      fontSp(28, 54, 80, 400)
      +pc()
        display none

    .sec__stmt__note
      fontSp(21, 46, 80, 400)
      +pc()
       display none

    .sec__stmt__ttl + .sec__stmt__txt
      +sp()
        margin-top spPx(54)

    .sec__stmt__txt + .sec__stmt__txt
    .sec__stmt__txt + .sec__stmt__note
      +sp()
        margin-top spPx(48)

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

    .sec__stmt__img
      +pc()
        width 782px

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

    .sec__stmt__img
      +pc()
        width 766px
</style>
