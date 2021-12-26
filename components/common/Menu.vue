<template lang="pug">
transition
  .b-menu
    button.b-menu__btn(
      v-on:click="onFlg = !onFlg"
      :class="{on:onFlg}"
    )
      .b-menu__btn--inr
        span.b-menu__btn__bar(v-for="n of 3")

    .b-menu__cnt(:class="{on:onFlg}")
      ul.b-menu__cnt__list
        li(
          v-for="(list, index) in menu"
          :class="'b-menu__cnt__list__itm--' + Object.keys(list)[0]"
        )
          NuxtLink.b-menu__cnt__list__itm__link(
            :to="list[Object.keys(list)[0]].path"
            @click.native="onFlg = false"
          )
            img.b-menu__cnt__list__itm__link__img(
              :src="'/images/common/txt-menu-' + Object.keys(list)[0] + '-01-under.svg'"
              :alt="list[Object.keys(list)[0]].ja + ' ' + list[Object.keys(list)[0]].en"
            )
      .b-menu__cnt__overlay(v-on:click="onFlg = false")
</template>

<script>
export default {
  data: () => ({
    onFlg: false,
    menu: [
      {
        'news': {
          ja: 'ニュース',
          en: 'NEWS',
          path: '/news/',
        }
      },
      {
        'about': {
          ja: 'ひづめゆについて',
          en: 'ABOUT',
          path: '/#about',
        }
      },
      {
        'sauna-bath': {
          ja: 'サウナ｜温浴',
          en: 'SAUNA｜BATH',
          path: '/sauna-bath/',
        }
      },
      {
        'cidery': {
          ja: 'サイダリー',
          en: 'CIDERY',
          path: '/#cidery',
        }
      },
      {
        'map': {
          ja: 'マップ',
          en: 'MAP',
          path: '/#map',
        }
      },
      // {
      //   'contact': {
      //     ja: 'お問い合わせ',
      //     en: 'CONTACT',
      //     path: 'mailto:hizumeyu@gmail.com',
      //   }
      // }
    ]
  })
}
</script>

<style lang="stylus" scoped>
.b-menu
  //*** button（hamburger menu）
  $btnPadding = 10
  $tDuration = .7
  .b-menu__btn
    position fixed
    z-index 9998
    +pc()
      top 32 - $btnPadding * 1px
      left 38 - $btnPadding * 1px
      width 43 + $btnPadding * 2px
      height 26 + $btnPadding * 2px
      padding $btnPadding * 1px
    +sp()
      top spPx(28 - $btnPadding)
      left spPx($windowEdgeL - $btnPadding)
      width spPx($cntFrmEdgeL + $btnPadding * 2)
      height spPx(48 + $btnPadding * 2)
      padding spPx($btnPadding)

  .b-menu__btn--inr
    position relative
    width 100%
    height 100%

  .b-menu__btn__bar
    display block
    position absolute
    left 0
    z-index 1
    height 2px
    background-color $white
    transition all .45s ease
    &:nth-child(1)
      top 1px
      width 100%
    &:nth-child(2)
      width 66%
      +pc()
        top 12px
      +sp()
        top 11px
    &:nth-child(3)
      bottom 1px
      width 33%

  .b-menu__btn:not(.on):hover
    +pc()
      .b-menu__btn__bar
        width 100%

  .b-menu__btn.on
    .b-menu__btn__bar
      width 100%
      height 1px
      &:nth-child(1)
        +pc()
          transform translateY(12px) rotate(45deg)
        +sp()
          transform translateY(11px) rotate(45deg)
      &:nth-child(2)
        opacity 0
      &:nth-child(3)
        +pc()
          transform translateY(-12px) rotate(-45deg)
        +sp()
          transform translateY(-11px) rotate(-45deg)

  //*** content
  .b-menu__cnt
    position fixed
    top 0
    left -100%
    z-index 9997
    width 100%
    height 100vh
    opacity 0
    background-color $purple
    transition left 0s linear ($tDuration + .2) * 1s, opacity $tDuration * 1s ease .2s
    &.on
      left 0
      opacity 1
      transition opacity $tDuration * 1s ease

  .b-menu__cnt__overlay
    position absolute
    top 0
    left 0
    z-index 0
    width 100%
    height 100%

  .b-menu__cnt__list
    display flex
    flex-wrap wrap
    flex-direction row-reverse
    position absolute
    left 50%
    z-index 1
    transform translateX(-50%)
    +pc()
      top 266px
    +sp()
      top spPx(320)

  [class*='b-menu__cnt__list__itm--']
    position relative
    +pc()
      width 34px
      margin-right 2px
      cursor pointer
    +sp()
      width spPx(53)
      margin-right spPx(4)

  .b-menu__cnt__list__itm__link
    display block
    width 100%
    height 100%
    +pc()
      transition opacity .25s ease
      &:hover
        opacity .7

  .b-menu__cnt__list__itm__link__img
    +pc()
      width 100%
      background-color $purple
</style>
