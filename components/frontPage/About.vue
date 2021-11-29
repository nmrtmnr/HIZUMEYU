651 254
<template lang="pug">
  section#about.about
    h2.about__ttl(v-inview)
      CommonHeadingLv1(:data="{'id': 'about', 'alt': ttl}")
    .about__stmt(v-inview)
      CommonPicture(
        :data="{'class': 'about__stmt__pic','src': '/images/front-page/about-stmt-01-pc.svg', 'alt': `${stmt.ttl} ${stmt.alt}`}"
      )
      //- h3.about__stmt__ttl(v-html="stmt.ttl")
      //- p.about__stmt__txt(v-for="txt in stmt.txt" v-html="txt")
    .about__story
      .c-cnt-frm--inr--s
        h3.about__story__ttl(v-html="story.ttl" v-inview)
        ul.about__story__list.c-col-list--3--pc.c-col-list--1--sp
          li.about__story__list__itm.c-col-list__itm(v-for="(story, index) in stories" v-inview)
            component(
              :is="isExternal(story.fields.link) ? 'a' : 'NuxtLink'"
              :href="isExternal(story.fields.link) ? story.fields.link : undefined"
              :to="isExternal(story.fields.link) ? undefined : story.fields.link"
              :target="isExternal(story.fields.link) ? '_blank' : undefined"
              :class="'about__story__list__itm__link c-col-list__itm__link'"
            )
              img.about__story__list__itm__link__img.c-col-list__itm__link__img(:src="story.fields.thumbnail.fields.file.url")
              h4.about__story__list__itm__link__ttl.c-col-list__itm__link__ttl(v-html="story.fields.title")
              .about__story__list__itm__link__txt.c-col-list__itm__link__txt(v-html="dateFormat(story.fields.date)")
</template>

<script>
  import { createClient } from '~/plugins/contentful'
  const cdaClient = createClient()

  export default {
    mixins:[],
    components: {},
    props: {
      stories: Array
    },
    data: () => ({
      ttl: 'ABOUT ひづめゆについて',
      stmt: {
        ttl: '街をかまし、<br>紫波をわかす。',
        txt: [
        '岩手県紫波町の旧庁舎が、<br>地域をつなぐ新しい温浴施設<br>に生まれ変わります。',
        '温浴・サウナをはじめ、<br>ハードサイダー醸造所、<br>コンビニエンスストア、<br>レストランなど',
        '地域の方、全国の方、<br>お年寄りから若者までの<br>憩いの場を<br>目指していきます。'
        ],
        alt: [
        '岩手県紫波町の旧庁舎が、地域をつなぐ新しい温浴施設に生まれ変わります。温浴・サウナをはじめ、ハードサイダー醸造所、コンビニエンスストア、レストランなど地域の方、全国の方、お年寄りから若者までの憩いの場を目指していきます。テスト'
        ]
      },
      story: {
        ttl: 'Our Story',
      },
    }),
    created() {},
    mounted() {},
    watch: {},
    methods: {
      dateFormat: (date) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let ymd = date.split('-')

        ymd[1] = months[Number(ymd[1] - 1)]

        return `${ymd[1]} ${ymd[2]}, ${ymd[0]}`
      },

    },
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

    .about__stmt__pic
      display block
      margin 0 auto
      +pc()
        width 651px
        height 254px
      +sp()
        width spPx(550)

    // .about__stmt__ttl
    //   fontSp(32, 45, 200, 400)
    //   +pc()
    //     display none
    //   +sp()
    //     margin-left spPx(36)

    // .about__stmt__txt
    //   fontSp(26, 37, 100, 400)
    //   +pc()
    //     display none

    .about__stmt__txt + .about__stmt__txt
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
