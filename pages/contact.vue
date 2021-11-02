<template lang="pug">
  div(:class="'p-' + id + '--inr'")
    section.contact.c-cnt-frm--inr--l
      h2.contact__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': id, 'alt': ttl}")
      .contact__cnt
        .contact__cnt__intro
          .contact__cnt__intro__txt(v-for="txt in txts" v-html="txt")
        form(class="contact__cnt__forms")
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
                name=`name`
                required
              )
            .contact__cnt__forms__itm__input(v-if="'mail_address' === key")
              input(
                v-model="contactForm.email.contents"
                type=`email`
                id=`email`
                name=`email`
                required
              )
            .contact__cnt__forms__itm__input(v-if="'body' === key")
              textarea(
                v-model="contactForm.contents.contents"
                id=`body`
                name=`body`
                rows=`8`
              )
          button(
            type=`button`
            class=`contact__cnt__forms__submit`
            @click="sendMail()"
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
  // import Meta from '~/mixins/meta'
  import { httpsCallable } from 'firebase/functions'

  const ID = 'contact'
  export default {
　　　head: {
      bodyAttrs: {
        class: 'p-' + ID
      },
      title: `お問い合わせ／ひづめゆ｜地域をつなぐ温浴施設`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: `岩手県紫波町の旧庁舎が、地域をつなぐ新しい温浴施設に生まれ変わります。`},
        { hid: 'og:site_name', property: 'og:site_name', content: `ひづめゆ｜地域をつなぐ温浴施設` },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: `https://hizumeyu.jp/${ID}/` },
        { hid: 'og:title', property: 'og:title', content: `お問い合わせ／ひづめゆ｜地域をつなぐ温浴施設` },
        { hid: 'og:description', property: 'og:description', content: `温浴・サウナをはじめ、リンゴのシードル醸造所、コンビニエンスストア、レストランなど、地域の方、全国の方、お年寄りから若者までの憩いの場を目指してまいります。` },
        { hid: 'og:image', property: 'og:image', content: `https://hizumeyu.jp/image/meta/ogp.jpg` },
        { hid: 'twitter:card', name: 'twitter:cpard', content: 'summary_large_image' },
      ],
    },
    // mixins: [Meta],
    data: () => ({
      id : ID,
      // meta: {
      //   title: 'contact' + '｜' + process.env.SITE_NAME,
      //   keywords: 'hoge',
      //   description: 'hoge',
      //   type: 'article',
      //   url: 'https://hogehoge.com/news',
      //   image: 'https://hogehoge.com/img/ogp/news.png'
      // },
      ttl: 'CONTACT お問い合わせ',
      txts: [
        'お問い合わせは下記のメールフォームからお願いします。',
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
        // loading: false
      },
      // contactFormValidation: {
      //   valid: false,
      //   nameRules: [v => !!v || '名前は必須項目です'],
      //   emailRules: [v => !!v || 'メールアドレスは必須項目です'],
      //   contentsRules: [v => !!v || '内容は必須項目です']
      // },
      // snackBar: {
      //   show: false,
      //   color: '',
      //   message: ''
      // }
    }),
    methods: {
      sendMail() {
         const form = this.contactForm
         const sendMail = httpsCallable('sendMail')

         console.log(sendMail);

         sendMail({ form })
          .then((response) => {
            console.log(response);
            // alert(response)
          })
          .catch((error) => {
            console.log(error);
            // alert(error)
          })

        // if (this.$refs.form.validate()) {
          // this.contactForm.loading = true
          // const mailer = httpsCallable('sendMail')

          // mailer(this.contactForm)
          //   .then(() => {
          //     this.formReset()
          //     this.showSnackBar(
          //       'success',
          //       'お問い合わせありがとうございます。送信完了しました'
          //     )
          //   })
          //   .catch(err => {
          //     this.showSnackBar(
          //       'error',
          //       '送信に失敗しました。時間をおいて再度お試しください'
          //     )
          //     console.log(err)
          //   })
          //   .finally(() => {
          //     this.contactForm.loading = false
          //   })
        // }
      },
      // showSnackBar: function (color, message) {
      //   this.snackBar.message = message
      //   this.snackBar.color = color
      //   this.snackBar.show = true
      // },
      // formReset: function () {
      //   this.$refs.form.reset()
      // }
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

