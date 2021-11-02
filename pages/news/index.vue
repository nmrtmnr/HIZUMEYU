<template lang="pug">
  div(:class="'p-' + id + '--inr'")
    .news
      .news--inr.c-cnt-frm--inr--l
        h2.news__ttl(v-inview)
          CommonHeadingLv1(:data="{'id': id, 'alt': ttl}")
        .news__cnt
          //- ul.news__cnt__cats(v-inview)
          //-   li.news__cnt__cats__itm(v-for="(list, index) in cats")
          //-     component(
          //-       :is="isExternal(list.path) ? 'a' : 'NuxtLink'"
          //-       :href="isExternal(list.path) ? list.path : undefined"
          //-       :to="isExternal(list.path) ? undefined : list.path"
          //-       :target="isExternal(list.path) ? '_blank' : undefined"
          //-       :class="'news__cnt__cats__itm__link'"
          //-       v-html="list.txt"
          //-     )

          ul.news__cnt__list.c-col-list--3--pc.c-col-list--1--sp
            li.news__cnt__list__itm.c-col-list__itm(v-for="(post, index) in posts" v-inview)
              component(
                :is="isExternal(`/news/${post.fields.slug}/`) ? 'a' : 'NuxtLink'"
                :href="isExternal(`/news/${post.fields.slug}/`) ? `/news/'${post.fields.slug}/` : undefined"
                :to="isExternal(`/news/${post.fields.slug}/`) ? undefined : `/news/${post.fields.slug}/`"
                :target="isExternal(`/news/${post.fields.slug}/`) ? '_blank' : undefined"
                :class="'news__cnt__list__itm__link c-col-list__itm__link'"
              )
                img.news__cnt__list__itm__img.c-col-list__itm__link__img(:src="post.fields.mainvisual.fields.file.url")
                h3.news__cnt__list__itm__ttl.c-col-list__itm__link__ttl(v-html="post.fields.title")
                .news__cnt__list__itm__date.c-col-list__itm__link__date(v-html="dateFormat(post.fields.date)")
</template>

<script>
  // import Meta from '~/mixins/meta'

  // import ctfConfig from '~/.contentful.json'
  import { createClient } from '~/plugins/contentful'
  const cdaClient = createClient()

  const ID = 'news'
  export default {
　　　head: {
      bodyAttrs: {
        class: 'p-' + ID
      },
      title: `ニュース一覧／ひづめゆ｜地域をつなぐ温浴施設`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: `岩手県紫波町の旧庁舎が、地域をつなぐ新しい温浴施設に生まれ変わります。`},
        { hid: 'og:site_name', property: 'og:site_name', content: `ひづめゆ｜地域をつなぐ温浴施設` },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: `https://hizumeyu.jp/${ID}/` },
        { hid: 'og:title', property: 'og:title', content: `ニュース一覧／ひづめゆ｜地域をつなぐ温浴施設` },
        { hid: 'og:description', property: 'og:description', content: `温浴・サウナをはじめ、リンゴのシードル醸造所、コンビニエンスストア、レストランなど、地域の方、全国の方、お年寄りから若者までの憩いの場を目指してまいります。` },
        { hid: 'og:image', property: 'og:image', content: `https://hizumeyu.jp/image/meta/ogp.jpg` },
        { hid: 'twitter:card', name: 'twitter:cpard', content: 'summary_large_image' },
      ],
    },
    // mixins: [Meta],
    data: () => ({
      id : ID,
      // meta: {
      //   title: 'news archive' + '｜' + process.env.SITE_NAME,
      //   keywords: 'hoge',
      //   description: 'hoge',
      //   type: 'article',
      //   url: 'https://hogehoge.com/news',
      //   image: 'https://hogehoge.com/img/ogp/news.png'
      // },
      ttl: 'NEWS ニュース',
      cats: [
        {
          txt: '#お知らせ',
          path: '/news/'
        },
        {
          txt: '#館内イベント',
          path: '/news/'
        },
        {
          txt: '#メディア',
          path: '/news/'
        }
      ]
    }),
    methods: {
      dateFormat: (date) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let ymd = date.split('-')

        ymd[1] = months[Number(ymd[1])]

        return `${ymd[1]} ${ymd[2]}, ${ymd[0]}`
      },
    },
    mounted() {
      // console.log('thisthisthisthisthisthis', this);
    },
    asyncData({}) {
      return cdaClient
        .getEntries({
          content_type: process.env.CTF_NEWS_TYPE_ID,
          order: '-fields.date',
        })
        .then(entries => {
          return {
            posts: entries.items,
          }
        })
        .catch(console.error)
      // return cdaClient
      //   .getTags()
      //   .then(entries => {
      //     console.log('tagかも:::::::', entries.items)
      //   })
      //   .catch(console.error)
    },
  }
</script>

<style lang="stylus" scoped>
  .news
    +pc()
      padding-top 136px
      padding-bottom 133px
    +sp()
      padding-top rem(160)
      padding-bottom rem(256)

    .news--inr
      display flex
      flex-wrap wrap

    .news__ttl
      +sp()
        width rem($cntFrmEdgeL)

    .news__ttl__pic
      +pc()
        margin-top -24px
        margin-left -20px
      +sp()
        margin-top spPx(-18)
        margin-left spPx(-24)

    .news__cnt
      +pc()
        width cntFrmInrSSizePc()
        margin-left 21px
      +sp()
        width cntFrmInrSSizeSp()

    .news__cnt__cats
      display flex
      flex-wrap wrap

    .news__cnt__cats__itm:not(:last-child)
      +pc()
        margin-right 12px
      +sp()
        margin-right spPx(20)

    .news__cnt__cats__itm__link
      color $purple
      fontPc(14, 30, 75, 700)
      fontSp(24, 30, 75, 700)
      background-color $white
      +pc()
        padding 0 8px
        transition opacity .25s ease
        &:hover
          opacity .7
      +sp()
        padding spPx(8)

    .news__cnt__cats + .news__cnt__list
      +pc()
        margin-top 34px
      +sp()
        margin-top rem(50)
</style>

