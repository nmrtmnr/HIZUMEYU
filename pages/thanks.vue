<template lang="pug">
  div(:class="'p-' + this.HEAD.ID + '--inr'")
    section.thanks.c-cnt-frm--inr--l
      //- h2.thanks__ttl(v-inview)
      //-   CommonHeadingLv1(:data="{'id': this.HEAD.ID, 'alt': ttl}")
      | お問い合わせ完了ページ
</template>

<script>
  import Head from '~/mixins/head'
  import { httpsCallable } from 'firebase/functions'

  const ID = 'thanks'
  export default {
    mixins: [Head],
    data: () => ({
      ttl: 'CONTACT お問い合わせ',
    }),
    asyncData() {
      const ID = 'thanks'
      const TITLE = 'お問い合わせ完了'
      const NO_ROBOTS = true

      return {
        HEAD: {
          ID,
          TITLE,
          NO_ROBOTS
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .contact
    display flex
    flex-wrap wrap
    +pc()
      padding-top 132px
    +sp()
      padding-top spPx(160)

    .contact__ttl
      +pc()
        width $cntFrmInrEdge * 1px
      +sp()
        width rem($cntFrmEdgeL)

    .contact__ttl__pic
      background-color $purple
      +pc()
        margin-top -24px
        margin-left -20px
      +sp()
        margin-top spPx(-24)
        margin-left spPx(-24)

    .contact__cnt__intro
      +pc()
        width cntFrmInrSSizePc()
        margin-top -8px
      +sp()
        width cntFrmInrSSizeSp()
        margin-top spPx(-4)

    .contact__cnt__intro__txt
    .contact__cnt__forms__itm__txt
    .contact__cnt__forms__itm__input input
    .contact__cnt__forms__itm__input textarea
      fontPc(15, 30, 0, 400)

    .contact__cnt__forms__itm__input input
    .contact__cnt__forms__itm__input textarea
      display block
      width 100%
      padding 0 .7em
      background-color $white

    .contact__cnt__intro__txt
      fontSp(28, 48, 50, 400)
      +sp()
        display inline

    .contact__cnt__forms__itm__txt
      fontSp(24, 30, 0, 400)

    .contact__cnt__forms
      +pc()
        margin-top 44px
      +sp()
        margin-top spPx(65)

    [class*='contact__cnt__forms__itm--'] + [class*='contact__cnt__forms__itm--']
      +pc()
        margin-top 28px
      +sp()
        margin-top spPx(45)


    .contact__cnt__forms__itm__txt + .contact__cnt__forms__itm__input
      +pc()
        margin-top 8px
      +sp()
        margin-top spPx(16)

    .contact__cnt__forms__submit
      display flex
      align-items center
      justify-content center
      fontPc(16, 16, 100, 400)
      fontSp(28, 28, 100, 400)
      color $richBlack
      background-color $white
      +pc()
        width 142px
        height 47px
        margin-top 30px
      +sp()
        width spPx(160)
        height spPx(60)
        margin-top spPx(38)
</style>
