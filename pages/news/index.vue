<template lang="pug">
  div(:class="'p-' + this.HEAD.ID + '--inr'")
    .news
      .news--inr.c-cnt-frm--inr--l
        h2.news__ttl(v-inview)
          CommonHeadingLv1(:data="{'id': this.HEAD.ID, 'alt': ttl}")
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
  import Head from '~/mixins/head'
  import { createClient } from '~/plugins/contentful'
  const cdaClient = createClient()

  export default {
    mixins: [Head],
    data: () => ({
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

        ymd[1] = months[Number(ymd[1] - 1)]

        return `${ymd[1]} ${ymd[2]}, ${ymd[0]}`
      },
    },
    mounted() {
    },
    asyncData({ $CTF_MODEL }) {
      const HEAD = {
        ID: 'news',
        TITLE: 'ニュース一覧／ひづめゆ'
      }

      const posts = cdaClient
        .getEntries({
          content_type: $CTF_MODEL.NEWS,
          order: '-fields.date',
        })

      return Promise.all([HEAD, posts]).then(([HEAD, posts]) => {
        return {
          HEAD,
          posts: posts.items
        }
      })
    }
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
