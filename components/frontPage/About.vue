<template lang="pug">
  section#about.about
    h2.about__ttl(v-inview)
      CommonHeadingLv1(:data="{'id': 'about', 'alt': ttl}")
    .about__stmt(v-inview)
      h3.about__stmt__ttl(v-html="stmt.ttl")
      p.about__stmt__txt(v-for="txt in stmt.txt" v-html="txt")
    .about__story
      .c-cnt-frm--inr--s
        h3.about__story__ttl(v-html="story.ttl" v-inview)
        ul.about__story__list.c-col-list--3--pc.c-col-list--1--sp
          li.about__story__list__itm.c-col-list__itm(v-for="(list, index) in story.list" v-inview)
            component(
              :is="isExternal(list.path) ? 'a' : 'NuxtLink'"
              :href="isExternal(list.path) ? list.path : undefined"
              :to="isExternal(list.path) ? undefined : list.path"
              :target="isExternal(list.path) ? '_blank' : undefined"
              :class="'about__story__list__itm__link c-col-list__itm__link'"
            )
              img.about__story__list__itm__link__img.c-col-list__itm__link__img(:src="'/images/front-page/about-story-img-' + [zeroPadding(index + 1, 2)] + '.jpg'")
              h4.about__story__list__itm__link__ttl.c-col-list__itm__link__ttl(v-html="list.ttl")
              .about__story__list__itm__link__txt.c-col-list__itm__link__txt(v-html="list.txt")
</template>

<script>
export default {
  mixins:[],
  components: {},
  data: () => ({
    ttl: 'ABOUT ひづめゆについて',
    stmt: {
      ttl: '街をかまし、<br>紫波をわかす。',
      txt: [
      '岩手県紫波町の旧庁舎が、<br>地域をつなぐ新しい温浴施設<br>に生まれ変わります。',
      '温浴・サウナをはじめ、<br>ハードサイダー醸造所、<br>コンビニエンスストア、<br>レストランなど',
      '地域の方、全国の方、<br>お年寄りから若者までの<br>憩いの場を<br>目指していきます。'
      ]
    },
    story: {
      ttl: 'Our Story',
      list: [
      {
        'ttl': 'Story 01 - なぜ、ひづめゆなのか',
        'txt': '初めまして。ひづめゆ取締役兼支配人の小川翔大です。私は今、岩手県紫波町という町で温浴サウナ施設「ひづめゆ」を開発。',
        'path': '#'
      },
      {
        'ttl': 'Story 02 - なぜ、サウナ・温浴なのか',
        'txt': '初めまして。ひづめゆ取締役兼支配人の小川翔大です。私は今、岩手県紫波町という町で温浴サウナ施設「ひづめゆ」を開発。',
        'path': '#'
      },
      {
        'ttl': 'Story 03 - 紫波日詰商店街について',
        'txt': '初めまして。ひづめゆ取締役兼支配人の小川翔大です。私は今、岩手県紫波町という町で温浴サウナ施設「ひづめゆ」を開発。',
        'path': '#'
      },
      ]
    }
  }),
  created() {},
  mounted() {},
  watch: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
  .about
    +pc()
      padding-bottom 59px
    +sp()
      padding-bottom rem(56)

    .about__ttl
      overflow hidden
      position relative
      width 100%
      height 0
      background-repeat no-repeat
      background-position center
      background-size cover
      +pc()
        padding-top 617px
        background-image url('/images/front-page/about-img-01-pc.jpg')
      +sp()
        padding-top rem(797)
        background-image url('/images/front-page/about-img-01-sp.jpg')

    .about__ttl__pic
      position absolute
      right 50%
      bottom 0
      z-index 1
      background-color $purple
      +pc()
        margin-right -550px
      +sp()
        margin-right rem(-295)

    .about__stmt
      display flex
      flex-wrap wrap
      flex-direction column
      justify-content center
      width 100%
      vWriting()
      +pc()
        padding-top 45px
      +sp()
        padding-top rem(42)

    .about__stmt__ttl
      fontPc(31, 48, 200, 400)
      fontSp(32, 45, 200, 400)
      +pc()
        margin-left 60px
      +sp()
        margin-left spPx(36)

    .about__stmt__txt
      fontPc(18, 40, 100, 400)
      fontSp(26, 37, 100, 400)

    .about__stmt__txt + .about__stmt__txt
      +pc()
        margin-right 38px
      +sp()
        margin-right spPx(30)

    .about__story
      +pc()
        margin-top 23px
      +sp()
        margin-top rem(30)

    .about__story__ttl
      font-family $font-en
      fontPc(26, 30, 50, 600)
      fontSp(36, 30, 50, 600)

    .about__story__list
      +pc()
        margin-top 21px
      +sp()
        margin-top spPx(34)
</style>
