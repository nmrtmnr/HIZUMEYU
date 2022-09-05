<template lang="pug">
  div(:class="'p-' + this.HEAD.ID + '--inr'")
    section.contact.c-cnt-frm--inr--l
      h2.contact__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': this.HEAD.ID, 'alt': ttl}")
      .contact__cnt
        h3.contact__cnt__ttl(v-html="sub_ttl.mail")
        .contact__cnt__intro
          .contact__cnt__intro__txt(v-for="txt in txts" v-html="txt")
        form(class="contact__cnt__forms" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdFcQnJidzkHitms4RRogRTJ9w186xyFoXiGohodegXRRqyGg/formResponse" method="post" target="hidden_iframe")
          div(
            v-for="(form, key) in forms"
            :class="`contact__cnt__forms__itm--${key}`"
          )
            .contact__cnt__forms__itm__txt(v-html="form.txt")
            .contact__cnt__forms__itm__input(v-if="'name' === key")
              input(
                v-model="nameValidator"
                type=`text`
                id=`name`
                name=`entry.494838731`
                required
              )
            .contact__cnt__forms__itm__input(v-if="'mail_address' === key")
              input(
                v-model="mailValidator"
                type=`email`
                id=`email`
                name=`entry.555923394`
                required
              )
            //- .contact__cnt__forms__itm__select(v-if="'type' === key")
            //-   select(
            //-     v-model="contactForm.type.contents"
            //-     id=`type`
            //-     name=`entry.1205079384`
            //-   )
            //-     option(value=``) 選択をお願いします
            //-     option(
            //-       v-for="(option, index) in form.options"
            //-       :value="option.txt"
            //-       v-html="option.txt"
            //-     )
            .contact__cnt__forms__itm__radio(v-if="'type' === key")
              .contact__cnt__forms__itm__radio__label(
                v-for="(option, index) in form.options"
              )
                input(
                  v-model="typelValidator"
                  type=`radio`
                  name=`entry.471089054`
                  :id="option.id"
                  :value="option.txt"
                  :required="0 === index"
                )
                label(
                  :for="option.id"
                  v-html="option.txt"
                )
            .contact__cnt__forms__itm__input(v-if="'body' === key")
              textarea(
                v-model="contentsValidator"
                id=`body`
                name=`entry.1205079384`
                rows=`8`
              )
          button(
            type=`submit`
            class=`contact__cnt__forms__submit`
            @click="$router.push('/contact_completion/')"
            value=`送信`
            :class="{on: isValid}"
          ) 送信する

        h3.contact__cnt__ttl(v-html="sub_ttl.tel")
        .contact__cnt__tel
          | 電話番号 ：&nbsp;
          a.contact__cnt__tel__href(href=`tel:0196813151`)
            | 019-681-3151
        .contact__cnt__time
          | 受付時間 ： 10:00〜22:00

        .contact__cnt__to-privacy-policy
          .contact__cnt__to-privacy-policy__txt(v-html="to_privacy_policy.ttl")
          component(
            :is="isExternal(to_privacy_policy.href) ? 'a' : 'NuxtLink'"
            :href="isExternal(to_privacy_policy.href) ? to_privacy_policy.href : undefined"
            :to="isExternal(to_privacy_policy.href) ? undefined : to_privacy_policy.href"
            :target="isExternal(to_privacy_policy.href) ? '_blank' : undefined"
            :class="'contact__cnt__to-privacy-policy__link'"
            v-html="to_privacy_policy.txt"
          )
      iframe.contact__hidden-iframe(name=`hidden_iframe`)
</template>

<script>
  import Head from '~/mixins/head'

  const ID = 'contact'
  export default {
    mixins: [Head],
    data: () => ({
      ttl: 'CONTACT お問い合わせ',
      sub_ttl: {
        mail: 'メールでのお問い合わせ',
        tel: 'お電話でのお問い合わせ',
      },
      txts: [
        'お問い合わせは下記のメールフォームからお願いします。',
        'お問い合わせいただいた際に当方から連絡が来ない場合は、プログラムの不具合も考えられます。',
        '一週間経ちましても連絡が来ない場合はお手数ですが直接お問い合わせいただきますようお願い致します。'
      ],
      forms: {
        name: {
          txt: 'お名前（必須）',
        },
        mail_address: {
          txt: 'メールアドレス（必須）',
        },
        type: {
          txt: 'お問い合わせの種類（必須）',
          options: [
            {
              id: 'institution',
              txt: '営業・施設に関するお問い合わせ',
              entry: '471089054',
            },
            {
              id: 'coverage',
              txt: '取材やメディア掲載に関するお問い合わせ',
              entry: '471089054',
            },
            {
              id: 'others',
              txt: 'その他のお問い合わせ',
              entry: '471089054',
            },
          ]
        },
        body: {
          txt: '本文（必須）',
        },
      },
      contactForm: {
        name: { contents: '' },
        email: { contents: '' },
        type: { contents: '' },
        contents: { contents: '' },
      },
      to_privacy_policy: {
        ttl: '個人情報取り扱いについて',
        txt: 'https://hizumeyu.jp/privacy-policy/',
        href: '/privacy-policy/',
      },
      nameValidator: undefined,
      mailValidator: undefined,
      typelValidator: undefined,
      contentsValidator: undefined,
    }),
    computed: {
      isValid() {
        let valid = true
        for (var key in this.contactForm) {
          if (!this.contactForm[key].contents) {
            valid = false
          }
        }

        return valid
      }
    },
    watch:{
      nameValidator(value) {
        this.contactForm.name.contents = value
      },
      mailValidator(value) {
        this.contactForm.email.contents = value
      },
      typelValidator(value) {
        this.contactForm.type.contents = value
      },
      contentsValidator(value) {
        this.contactForm.contents.contents = value
      },
    },
    asyncData() {
      const ID = 'contact'
      const TITLE = 'お問い合わせ'
      const NO_ROBOTS = false

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
        margin-left -25px
      +sp()
        margin-top spPx(-24)
        margin-left spPx(-24)

    .contact__cnt
      +pc()
        width cntFrmInrSSizePc()
        margin-top -8px
      +sp()
        width cntFrmInrSSizeSp()
        margin-top spPx(-8)

    .contact__cnt__ttl
      fontPc(24, 30, 0, 400)
      fontSp(36, 36, 50, 400)
      +pc()
        margin-top 5px
      +sp()
        margin-top spPx(2)

    .contact__cnt__intro
      +pc()
        margin-top 33px
      +sp()
        margin-top spPx(40)

    .contact__cnt__forms
      +pc()
        padding-bottom 81px
      +sp()
        padding-bottom spPx(146)

    .contact__cnt__intro__txt
    .contact__cnt__forms__itm__txt
    .contact__cnt__forms__itm__input input
    .contact__cnt__forms__itm__radio__label input
    .contact__cnt__forms__itm__radio__label label
    .contact__cnt__forms__itm__input textarea
      fontPc(15, 30, 0, 400)

    .contact__cnt__forms__itm__input input
    .contact__cnt__forms__itm__input textarea
      display block
      width 100%
      padding 0 .7em
      background-color $white

    .contact__cnt__forms__itm__radio__label
      display flex
      flex-wrap wrap
      align-items center
      fontSp(24, 30, 0, 400)

    .contact__cnt__forms__itm__radio__label + .contact__cnt__forms__itm__radio__label
      +sp()
        margin-top spPx(8)

    .contact__cnt__forms__itm__radio__label:first-child
      +pc()
        margin-top 3px
      +sp()
        margin-top spPx(10)

    .contact__cnt__forms__itm__radio__label input
      margin 0 !important

    .contact__cnt__forms__itm__radio__label label
      +pc()
        padding-top 2px
        padding-right 8px
        padding-left 8px
      +sp()
        padding-right spPx(8)
        padding-left spPx(8)

    .contact__cnt__forms__itm__select
      position relative
      &::after
        content ''
        display block
        position absolute
        top 50%
        z-index 1
        width 0
        height 0
        border-style solid
        border-color: $black transparent transparent transparent
        transform translateY(-50%)
        +pc()
          left 456px
          border-width 8px 7px 0 7px
        +sp()
          left spPx(507)
          border-width spPx(8) spPx(8) 0 spPx(8)

    .contact__cnt__forms__itm__select select
      display block
      background-color $white
      +pc()
        width 488px
        padding-top 16px
        padding-right 44px
        padding-bottom 14px
        padding-left 22px
      +sp()
        width 100%
        padding-top spPx(12)
        padding-right spPx(62)
        padding-bottom spPx(11)
        padding-left spPx(22)

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
    .contact__cnt__forms__itm__txt + .contact__cnt__forms__itm__select
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
      color $black
      opacity .3
      pointer-events none
      background-color $white
      transition opacity .25s ease
      +pc()
        width 142px
        height 47px
        margin-top 30px
      +sp()
        width spPx(160)
        height spPx(60)
        margin-top spPx(38)
      &.on
        opacity 1
        pointer-events auto

    .contact__hidden-iframe
      display none

    .contact__cnt__to-privacy-policy
      fontPc(15, 30, 0, 400)
      fontSp(28, 48, 0, 400)
      +pc()
        margin-top 65px
      +sp()
        margin-top spPx(72)

    .contact__cnt__tel
    .contact__cnt__time
      fontPc(15, 30, 0, 400)
      fontSp(24, 42, 50, 400)

    .contact__cnt__tel
      +pc()
        margin-top 13px
      +sp()
        margin-top spPx(33)

    .contact__cnt__tel__href
      display inline

    .contact__cnt__to-privacy-policy__link
      text-decoration underline
</style>
