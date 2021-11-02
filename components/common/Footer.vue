<template lang="pug">
  transition
    footer.b-ftr
      .b-ftr--inr.c-cnt-frm--pc.c-cnt-frm--inr--l--sp
        ul#contact.b-ftr__menu
          //- li.b-ftr__menu__itm(v-for="val in menu")
          //-   component(
          //-     :is="isExternal(val.path) ? 'a' : 'NuxtLink'"
          //-     :href="isExternal(val.path) ? val.path : undefined"
          //-     :to="isExternal(val.path) ? undefined : val.path"
          //-     :target="isExternal(val.path) ? '_blank' : undefined"
          //-     :class="'b-ftr__menu__itm__link'"
          //-     v-html="val.txt"
          //-   )
          li.b-ftr__menu__itm
            a(href=`mailto:hizumeyu@gmail.com` class=`b-ftr__menu__itm__link`)
              | お問い合わせ
          li.b-ftr__menu__itm
            NuxtLink(to="/privacy-policy/" class="b-ftr__menu__itm__link")
              | プライバシーポリシー
        .b-ftr__info
          .b-ftr__info__itm(v-for="val, key in info")
            .b-ftr__info__itm__hdg(v-html="key")
            .b-ftr__info__itm__txt(v-html="val")
        .b-ftr__logo
          component(
            :is="isExternal(logo.path) ? 'a' : 'NuxtLink'"
            :href="isExternal(logo.path) ? logo.path : undefined"
            :to="isExternal(logo.path) ? undefined : logo.path"
            :target="isExternal(logo.path) ? '_blank' : undefined"
            :class="'b-ftr__logo__link'"
          )
            img.b-ftr__logo__link__img(src=`/images/common/logo-white-01.svg` :alt="logo.txt")
</template>

<script>
export default {
  mixins:[],
  components: {},
  data: () => ({
    'menu': {
      'contact': {
        txt: 'お問い合わせ',
        path: '/contact/'
      },
      'privacy-policy': {
        txt: 'プライバシーポリシー',
        path: '/privacy-policy/'
      }
    },
    'info': {
      'url': 'www.hizumeyu.jp',
      'copyright': 'hizumeyu co.,ltd'
    },
    'logo': {
      'txt': 'ひづめゆ',
      'path': '/'
    }
  }),
  created() {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
  .b-ftr
    border-top 1px solid $white
    +pc()
      padding-top 68px
      padding-bottom 78px
    +sp()
      padding-top spPx(82)
      padding-bottom spPx(86)

    .b-ftr--inr
      display flex
      flex-wrap wrap
      justify-content space-between

    .b-ftr__menu
      fontPc(15, 30, 50, 700)
      fontSp(26, 50, 50, 700)
      vWriting()
      +pc()
        margin-left -7px
      +sp()
        margin-left spPx(-4)

    .b-ftr__menu__itm
      +pc()
        transition opacity .25s ease
        &:hover
          opacity .7

    .b-ftr__info
      +pc()
        display flex
        flex-wrap wrap
        width cntFrmInrSSizePc()
        margin-top -5px

    .b-ftr__info__itm
      font-family $font-en
      fontPc(16, 26, 100, 400)
      fontSp(25, 28, 100, 400)
      &:not(:first-child)
        +pc()
          margin-left 100px

    .b-ftr__info__itm + .b-ftr__info__itm
      +sp()
        margin-top spPx(22)

    .b-ftr__info__itm__hdg
      color $lightGray

    .b-ftr__logo
      +pc()
        width 115px
        height 69px
        margin-top 5px
      +sp()
        width spPx(106)
        height spPx(64)
        margin-top spPx(4)
        margin-right spPx(10)

    .b-ftr__logo__link
      +pc()
        transition opacity .25s ease
        &:hover
          opacity .7
</style>


















