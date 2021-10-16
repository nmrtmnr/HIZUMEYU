<template lang="pug">
  section#news.news
    .news--inr.c-cnt-frm--inr--l
      h2.news__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': 'news', 'alt': ttl}")
      ul.news__list.c-col-list--3--pc.c-col-list--1--sp
        li.news__list__itm.c-col-list__itm(v-for="(list, index) in news" v-inview)
          component(
            :is="isExternal(list.path) ? 'a' : 'NuxtLink'"
            :href="isExternal(list.path) ? list.path : undefined"
            :to="isExternal(list.path) ? undefined : list.path"
            :target="isExternal(list.path) ? '_blank' : undefined"
            :class="'news__list__itm__link c-col-list__itm__link'"
          )
            img.news__list__itm__img.c-col-list__itm__link__img(:src="'/images/front-page/news-list-img-' + [zeroPadding(index + 1, 2)] + '.jpg'")
            h4.news__list__itm__ttl.c-col-list__itm__link__ttl(v-html="list.ttl")
            .news__list__itm__txt.c-col-list__itm__link__txt(v-html="list.txt")
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
export default {
  mixins:[],
  components: {},
  data: () => ({
    ttl: 'NEWS ニュース',
    news: [
      {
        ttl: 'オフィシャルサイトをオープンしました',
        txt: 'ひづめゆのオフィシャルサイトが公開されました。こちらでは、ひづめゆの施設案内やお知らせを行っていきます。',
        path: '/news-detail/'
      },
      {
        ttl: '開業予定について',
        txt: 'ひづめゆの開業を2022年4月を目指してきましたが、諸事情により、2022年6月に変更となりました。',
        path: '/news-detail/'
      },
      {
        ttl: 'Instagram を立ち上げました',
        txt: 'ひづめゆのオフィシャルインスタグラムを立ち上げました。SNSでは、最新のニュースだけでなく背景も発信していきます。',
        path: '/news-detail/'
      },
    ],
    toList: {
      txt: 'すべての記事を見る',
      path: '/news/'
    }
  }),
  created() {},
  mounted() {},
  watch: {},
  methods: {}
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
