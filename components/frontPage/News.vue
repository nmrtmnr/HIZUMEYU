<template lang="pug">
  section#news.news
    .news--inr.c-cnt-frm--inr--l
      h2.news__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': 'news', 'alt': ttl}")
      ul.news__list.c-col-list--3--pc.c-col-list--1--sp
        li.news__list__itm.c-col-list__itm(v-for="(news, index) in news" v-inview)
          component(
            :is="isExternal(`/news/${news.fields.slug}/`) ? 'a' : 'NuxtLink'"
            :href="isExternal(`/news/${news.fields.slug}/`) ? `/news/'${news.fields.slug}/` : undefined"
            :to="isExternal(`/news/${news.fields.slug}/`) ? undefined : `/news/${news.fields.slug}/`"
            :target="isExternal(`/news/${news.fields.slug}/`) ? '_blank' : undefined"
            :class="'news__list__itm__link c-col-list__itm__link'"
          )
            img.news__list__itm__img.c-col-list__itm__link__img(:src="news.fields.mainvisual.fields.file.url")
            h4.news__list__itm__ttl.c-col-list__itm__link__ttl(v-html="news.fields.title")
            .news__list__itm__txt.c-col-list__itm__link__txt(v-html="dateFormat(news.fields.date)")
      .news__to-list(v-inview)
        component(
          :is="isExternal(toList.path) ? 'a' : 'NuxtLink'"
          :href="isExternal(toList.path) ? toList.path : undefined"
          :to="isExternal(toList.path) ? undefined : toList.path"
          :target="isExternal(toList.path) ? '_blank' : undefined"
          :class="'news__to-list--inr'"
        )
         commonPicture(:data="{'class': 'news__to-list__pic', 'src': '/images/common/to-list-news-txt-01-pc.svg', 'alt': toList.txt}")
</template>

<script>
  import { createClient } from '~/plugins/contentful'
  const cdaClient = createClient()

  export default {
    mixins:[],
    components: {},
    props: {
      news: Array
    },
    data: () => ({
      ttl: 'NEWS ニュース',
      toList: {
        txt: 'すべての記事を見る',
        path: '/news/'
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
.news
  +pc()
    padding-top 53px
    padding-bottom 57px
  +sp()
    padding-top rem(50)
    padding-bottom rem(66)

  .news--inr
    display flex
    flex-wrap wrap
    +sp()
      position relative

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

  .news__list
    +pc()
      width cntFrmInrSSizePc()
      margin-left 21px
    +sp()
      width cntFrmInrSSizeSp()

  .news__to-list
    +sp()
      position absolute
      top spPx(366)
      left 0
      z-index 1

  .news__to-list--inr
    display flex
    align-items center
    background-color rgba($white, 1)
    +pc()
      width 35px
      height 210px
      margin-left 20px
      transition background-color .25s ease
      &:hover
        background-color rgba($white, .7)
    +sp()
      width spPx(50)
      height spPx(390)
</style>
