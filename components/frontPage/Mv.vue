<template lang="pug">
  section.mv
    h2.mv__ttl
      img.mv__ttl__img(src=`/images/common/logo-white-01.svg` :alt="ttl")
    h3.mv__stmt(v-html="stmt")
    .mv__scroll(v-html="scroll")
    .mv__menu
      ul.mv__menu__list
        li(
          v-for="(list, index) in menu"
          :class="'mv__menu__list__itm--' + Object.keys(list)[0]"
        )
          nuxt-link.mv__menu__list__itm__link(
            v-if="'contact' !== Object.keys(list)[0]"
            v-scroll-to="'#' + Object.keys(list)[0]"
            to
          )
            img.mv__menu__list__itm__link__img--over(:src="'/images/common/txt-menu-' + Object.keys(list)[0] + '-01-over.svg'")
            img.mv__menu__list__itm__link__img--under(:src="'/images/common/txt-menu-' + Object.keys(list)[0] + '-01-under.svg'")
          nuxt-link.mv__menu__list__itm__link(
            v-else
            :to="Object.keys(list)[0]"
          )
            img.mv__menu__list__itm__link__img--over(:src="'/images/common/txt-menu-' + Object.keys(list)[0] + '-01-over.svg'")
            img.mv__menu__list__itm__link__img--under(:src="'/images/common/txt-menu-' + Object.keys(list)[0] + '-01-under.svg'")
    .mv__btn
      CommonMenu
    .mv__slider
      .mv__slider__list
        CommonSwiper(:opts="swiperOpts")
          .mv__slider__list__itm.swiper-slide(
            v-for="n of 5"
          )
            .mv__slider__list__itm__copy(v-if="n%2")
              img.mv__slider__list__itm__copy__img(src=`/images/front-page/mv-copy-txt-01.svg` :alt="copy")
            .mv__slider__list__itm__moon(v-else)
              img.mv__slider__list__itm__moon__img(src=`/images/front-page/mv-moon-img-01.png` alt=``)
            img.mv__slider__list__itm__img.u-d-none--sp(:src="'/images/front-page/mv-slider-img-' + [zeroPadding(n,2)] + '-pc.jpg'")
            img.mv__slider__list__itm__img.u-d-none--pc(:src="'/images/front-page/mv-slider-img-' + [zeroPadding(n,2)] + '-sp.jpg'")
</template>

<script>
export default {
  mixins:[],
  components: {},
  data: () => ({
    ttl: 'ひづめゆ',
    stmt: '二〇二二年夏開業',
    copy: 'ととのうしあわせになる',
    scroll: 'scroll',
    menu: [
      {
        'news': {
          ja: 'ニュース',
          en: 'NEWS'
        }
      },
      {
        'about': {
          ja: 'ひづめゆについて',
          en: 'ABOUT'
        }
      },
      {
        'sauna-bath': {
          ja: 'サウナ｜温浴',
          en: 'SAUNA｜BATH'
        }
      },
      {
        'cidery': {
          ja: 'サイダリー',
          en: 'CIDERY'
        }
      },
      {
        'map': {
          ja: 'マップ',
          en: 'MAP'
        }
      },
      {
        'contact': {
          ja: 'お問い合わせ',
          en: 'CONTACT'
        }
      }
    ],
    slideNum: 5,
    wW: 0,
    swiperOpts: {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      loop: true,
      autoplay: {
        delay: 8000,
        disableOnInteraction: true,
      },
      speed: 2000,
      simulateTouch: false,
    }
  }),
  mounted() {
    this.fullSp()
    window.addEventListener('resize', this.fullSp)
  },
  destroyed() {
    window.removeEventListener('resize', this.fullSp)
  },
  methods: {
    fullSp() {
      if (this.wW !== window.innerWidth) {
        this.wW = window.innerWidth
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .mv
    position relative
    width 100%
    +pc()
      height 100vh
    +sp()
      height: calc(var(--vh, 1vh) * 100)

  .mv__ttl
    position absolute
    left 50%
    z-index 1
    +pc()
      top 33px
      width 180px
      height 109px
      margin-left -90px
    +sp()
      top spPx(40)
      width spPx(180)
      height spPx(110)
      margin-left spPx(-90)

  .mv__stmt
    position absolute
    top 50%
    left 50%
    z-index 1
    display flex
    flex-wrap wrap
    justify-content center
    align-items center
    fontPc(19, 18, 100, 400)
    fontSp(28, 18, 100, 400)
    vWriting()
    transform translate(-50%, -50%)

  .mv__scroll
    position absolute
    left 50%
    z-index 1
    font-family $font-en
    fontPc(20, 30, 50, 700)
    fontSp(26, 30, 50, 700)
    transform translateX(-50%)
    animation BLINK 2.5s linear infinite
    +pc()
      bottom 18px
      padding-bottom 28px
    +sp()
      bottom spPx(18)
      padding-bottom spPx(28)
    &::after
      content ''
      display block
      position absolute
      bottom 0
      left 50%
      z-index 1
      transform rotate(-90deg)
      background-image arrow01($white)
      background-repeat no-repeat
      background-position center
      background-size contain
      +pc()
        width 9px
        height 18px
        margin-left -5px
      +sp()
        display none

  .mv__menu
    +pc()
      position absolute
      top 35px
      left 35px
      z-index 1
    +sp()
      display none

  .mv__menu__list
    +pc()
      display flex
      flex-wrap wrap
      flex-direction row-reverse

  [class*='mv__menu__list__itm--']
    +pc()
      position relative
      width 34px
      margin-right 2px
      cursor pointer

  .mv__menu__list__itm--news
    +pc()
      height 183px

  .mv__menu__list__itm--about
    +pc()
      height 305px

  .mv__menu__list__itm--sauna-bath
    +pc()
      height 315px

  .mv__menu__list__itm--cidery
    +pc()
      height 235px

  .mv__menu__list__itm--map
    +pc()
      height 152px

  .mv__menu__list__itm--contact
    +pc()
      height 279px

  .mv__menu__list__itm__link
    display block
    width 100%
    height 100%

  [class*='mv__menu__list__itm__link__img--']
    +pc()
      position absolute
      top 0
      left 0
      width 100%
      height 100%

  .mv__menu__list__itm__link__img--over
    +pc()
      z-index 1
      background-color $white
      transition opacity .25s ease
      &:hover
        opacity 0

  .mv__menu__list__itm__link__img--under
    +pc()
      z-index 0
      background-color $purple

  //*** button（hamburger menu）
  $btnPadding = 10
  .mv__btn
    +pc()
      display none
    +sp()
      position absolute
      top spPx(44 - $btnPadding)
      left spPx($windowEdgeL - $btnPadding)
      z-index 1

  .mv__slider
  .mv__slider__list
  .mv__slider__list__itm
    width 100%
    height 100%

  .mv__slider
    position absolute
    top 0
    left 0
    z-index 0

  .mv__slider__list
    position relative

  .mv__slider__list__itm
    background-repeat no-repeat
    background-position center
    background-size cover

  .mv__slider__list__itm__copy
  .mv__slider__list__itm__moon
    position absolute
    left 50%
    z-index 1

  .mv__slider__list__itm__copy
    +pc()
      bottom 120px
      width 94px
      height 102px
      margin-left -47px
    +sp()
      bottom spPx(138)
      width spPx(120)
      height spPx(124)
      margin-left spPx(-60)

  .mv__slider__list__itm__moon
    +pc()
      bottom 122px
      width 200px
      height 20px
      margin-left -100px
    +sp()
      bottom spPx(136)
      width spPx(284)
      height spPx(34)
      margin-left spPx(-142)

  .mv__slider__list__itm__img
    display block
    width 100%
    height 100%
    object-fit cover
</style>
