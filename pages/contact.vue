<template lang="pug">
  div(:class="'p-' + id + '--inr'")
    section.contact.c-cnt-frm--inr--l
      h2.contact__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': id, 'alt': ttl}")
      .contact__cnt
        .contact__cnt__intro
          .contact__cnt__intro__txt(v-for="txt in txts" v-html="txt")
        form.contact__cnt__forms
          div(
            v-for="(form, key) in forms"
            :class="`contact__cnt__forms__itm--${key}`"
          )
            .contact__cnt__forms__itm__txt(v-html="form.txt")
            .contact__cnt__forms__itm__input(v-if="'name' === key")
              input(type=`text` id=`name` name=`name` required)
            .contact__cnt__forms__itm__input(v-if="'mail_address' === key")
              input(type=`email` id=`email` name=`email` required)
            .contact__cnt__forms__itm__input(v-if="'body' === key")
              textarea(id=`body` name=`body` rows=`8`)
          input.contact__cnt__forms__submit(type=`submit` value=`送信する`)
</template>

<script>
  import Meta from '~/mixins/meta'

  const ID = 'contact'
  export default {
    head: {
      bodyAttrs: {
        class: 'p-' + ID
      }
    },
    mixins: [Meta],
    data: () => ({
      id : ID,
      meta: {
        title: 'contact' + '｜' + process.env.SITE_NAME,
        keywords: 'hoge',
        description: 'hoge',
        type: 'article',
        url: 'https://hogehoge.com/news',
        image: 'https://hogehoge.com/img/ogp/news.png'
      },
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
    })
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

