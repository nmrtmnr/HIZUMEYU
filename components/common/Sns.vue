<template lang="pug">
  transition
    .b-sns
      ul.b-sns__list
        li(
          v-for="(val, key) in list"
          :class="'b-sns__list__itm--' + key"
        )
          component(
            :is="isExternal(val.href) ? 'a' : 'NuxtLink'"
            :href="isExternal(val.href) ? val.href : undefined"
            :to="isExternal(val.href) ? undefined : val.href"
            :target="isExternal(val.href) ? '_blank' : undefined"
            :class="'b-sns__list__itm__link'"
          )
            img.b-sns__list__itm__link__img(
              :src="'/images/common/ico-' + key + '-01.png'" :alt="'ひづめゆ ' + key + ' ' + val.txt"
            )
</template>

<script>
  export default {
    mixins:[],
    components: {},
    data: () => ({
      list: {
        instagram: {
          txt: 'インスタグラム',
          href: 'https://www.instagram.com/hizumeyu/'
        },
        twitter: {
          txt: 'ツイッター',
          href: 'https://twitter.com/hizumeyu2022?s=20&t=CJDqPT4ULsmu9g2xGlsB1w'
        },
        line: {
          txt: 'ライン',
          href: 'https://page.line.me/577ypmst'
        }
      }
    }),
    created() {},
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .b-sns
    .b-sns__list
      +pc()
        display flex
        flex-wrap wrap
        align-items center
      +sp()
        width spPx(44)

    [class*="b-sns__list__itm--"]
      +sp()
        margin-right auto
        margin-left auto

    .b-sns__list__itm--instagram
      +pc()
        width 22px
        height 22px
      +sp()
        width spPx(39)
        height spPx(39)

    .b-sns__list__itm--twitter
      +pc()
        width 23px
        height 20px
        margin-left 15px
      +sp()
        width spPx(43)
        height spPx(35)
        margin-top spPx(29)

    .b-sns__list__itm--line
      +pc()
        width 22px
        height 21px
        margin-left 13px
      +sp()
        width spPx(44)
        height spPx(42)
        margin-top spPx(28)

    .b-sns__list__itm__link
      +pc()
        transition opacity .25s ease
        &:hover
          opacity .7
</style>
