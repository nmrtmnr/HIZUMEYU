<template lang="pug">
  div(:class="'p-' + this.HEAD.ID + '--inr'")
    section.contact.c-cnt-frm--inr--l
      h2.contact__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': this.HEAD.ID, 'alt': ttl}")
      .contact__cnt
        .contact__cnt__intro
          .contact__cnt__intro__txt(v-for="txt in txts" v-html="txt")
        form(class="contact__cnt__forms" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd2IZQlv_CGw5lgKR_hgMit5lzoG2T2DvLnDxPeSsORQirCrg/formResponse")
          div(
            v-for="(form, key) in forms"
            :class="`contact__cnt__forms__itm--${key}`"
          )
            .contact__cnt__forms__itm__txt(v-html="form.txt")
            .contact__cnt__forms__itm__input(v-if="'name' === key")
              input(
                v-model="contactForm.name.contents"
                type=`text`
                id=`name`
                name=`entry.454335561`
                required
              )
            .contact__cnt__forms__itm__input(v-if="'mail_address' === key")
              input(
                v-model="contactForm.email.contents"
                type=`email`
                id=`email`
                name=`entry.1714677668`
                required
              )
            .contact__cnt__forms__itm__input(v-if="'body' === key")
              textarea(
                v-model="contactForm.contents.contents"
                id=`body`
                name=`entry.1507621216`
                rows=`8`
              )
          button(
            type=`submit`
            class=`contact__cnt__forms__submit`
            value=`送信`
          ) 送信する
        //- div(
        //-   v-model="snackBar.show"
        //-   :color="snackBar.color"
        //-   bottom
        //-   right
        //-   :timeout="6000"
        //-   class="font-weight-bold"
        //- ) {{snackBar.message}}
</template>

<script>
  import Head from '~/mixins/head'
  import { httpsCallable } from 'firebase/functions'

  const ID = 'contact'
  export default {
    mixins: [Head],
    data: () => ({
      ttl: 'CONTACT お問い合わせ',
      txts: [
        'お問い合わせは下記のメールフォームからお願いします。',
        'お問い合わせいただいた際に当方から連絡が来ない場合は、プログラムの不具合も考えられます。',
        '一週間経ちましても連絡が来ない場合はお手数ですが直接お問い合わせいただきますようお願い致します。'
      ],
      forms: {
        name: {
          txt: 'お名前 (必須)',
        },
        mail_address: {
          txt: 'メールアドレス (必須)',
        },
        body: {
          txt: '本文',
        },
      },
      contactForm: {
        name: { contents: '' },
        email: { contents: '' },
        contents: { contents: '' },
      },
    }),
    asyncData() {
      const ID = 'contact'
      const TITLE = 'お問い合わせ'
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
