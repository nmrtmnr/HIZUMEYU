<template lang="pug">
  div(:class="'p-' + id + '--inr'")
    .news-detail
      .news-detail--inr.c-cnt-frm--inr--l
        h2.news-detail__ttl(v-inview)
          CommonHeadingLv1(:data="{'id': 'news', 'alt': ttl}")
        .news-detail__cnt
          img.news-detail__cnt__img(src=`/images/news/detail/cnt-img-01.jpg` alt=`` v-inview)
          h3.news-detail__cnt__ttl(v-html="cnt.ttl" v-inview)
          span.news-detail__cnt__date(v-html="cnt.date" v-inview)
          .news-detail__cnt__desc(v-inview)
            p.news-detail__cnt__desc__txt(v-for="txt in cnt.txt" v-html="txt")
          .news-detail__cnt__others(v-inview)
            h3.news-detail__cnt__others__ttl(v-html="others.ttl")
            ul.news-detail__cnt__others__list.c-col-list--3--pc.c-col-list--1--sp
              li.news-detail__cnt__others__list__itm.c-col-list__itm(v-for="(list, index) in others.list")
                component(
                  :is="isExternal(list.path) ? 'a' : 'NuxtLink'"
                  :href="isExternal(list.path) ? list.path : undefined"
                  :to="isExternal(list.path) ? undefined : list.path"
                  :target="isExternal(list.path) ? '_blank' : undefined"
                  :class="'news-detail__cnt__others__list__itm__link c-col-list__itm__link'"
                )
                  img.news-detail__cnt__others__list__itm__link__img.c-col-list__itm__link__img(:src="'/images/front-page/about-story-img-' + [zeroPadding(index + 1, 2)] + '.jpg'")
                  h4.news-detail__cnt__others__list__itm__link__ttl.c-col-list__itm__link__ttl(v-html="list.ttl")
                  .news-detail__cnt__others__list__itm__link__txt.c-col-list__itm__link__txt(v-html="list.txt")
                  .news-detail__cnt__others__list__itm__link__date.c-col-list__itm__link__date(v-html="list.date")
        component(
          :is="isExternal(toList.path) ? 'a' : 'NuxtLink'"
          :href="isExternal(toList.path) ? toList.path : undefined"
          :to="isExternal(toList.path) ? undefined : toList.path"
          :target="isExternal(toList.path) ? '_blank' : undefined"
          :class="'news-detail__to-list'"
          v-inview
        )
         commonPicture(:data="{'class': 'news-detail__to-list__pic', 'src': '/images/common/to-list-news-txt-01-pc.svg', 'alt': toList.txt}")
</template>

<script>
  import Meta from '~/mixins/meta'

  const ID = 'news-detail'
  export default {
    head: {
      bodyAttrs: {
        class: 'p-' + ID
      }
    },
    mixins: [Meta],
    data: () => ({
      id : ID,
      meta: {
        title: 'news detail' + '｜' + process.env.SITE_NAME,
        keywords: 'hoge',
        description: 'hoge',
        type: 'article',
        url: 'https://hogehoge.com/news',
        image: 'https://hogehoge.com/img/ogp/news.png'
      },
      ttl: 'NEWS ニュース',
      cnt: {
        ttl: 'オフィシャルサイトをオープン',
        date: 'June 28, 2022',
        txt: [
          'ひづめゆのオフィシャルサイトを公開しました。',
          'こちらでは、ひづめゆの施設案内やお知らせを行っていきます。<br>ぜひチェックしていただけましたら幸いです。'
        ]
      },
      others: {
        ttl: 'Other News',
        list: [
          {
            ttl: 'オフィシャルサイトをオープンしました',
            txt: 'ひづめゆのオフィシャルサイトが公開されました。こちらでは、ひづめゆの施設案内やお知らせを行っていきます。',
            date: 'June 28, 2022',
            path: '/news-detail/'
          },
          {
            ttl: '開業予定について',
            txt: 'ひづめゆの開業を2022年4月を目指してきましたが、諸事情により、2022年6月に変更となりました。',
            date: 'June 26, 2022',
            path: '/news-detail/'
          },
          {
            ttl: 'Instagram を立ち上げました',
            txt: 'ひづめゆのオフィシャルインスタグラムを立ち上げました。SNSでは、最新のニュースだけでなく背景も発信していきます。',
            date: 'June 26, 2022',
            path: '/news-detail/'
          }
        ]
      },
      toList: {
        txt: 'すべての記事を見る',
        path: '/news/'
      }
    })
  }
</script>

<style lang="stylus" scoped>
  .news-detail
    +pc()
      padding-top 136px
      padding-bottom 133px
    +sp()
      padding-top rem(164)
      padding-bottom rem(94)

    .news-detail--inr
      display flex
      flex-wrap wrap
      +sp()
        position relative

    .news-detail__ttl
      +sp()
        width rem($cntFrmEdgeL)

    .news__ttl__pic
      +pc()
        margin-top -24px
        margin-left -20px
      +sp()
        margin-top spPx(-18)
        margin-left spPx(-24)

    .news-detail__cnt
      +pc()
        width cntFrmInrSSizePc()
        margin-left 21px
      +sp()
        width cntFrmInrSSizeSp()

    .news-detail__cnt__ttl
      fontPc(24, 24, 0, 700)
      fontSp(32, 32, 0, 700)
      +pc()
        margin-top 48px
      +sp()
        margin-top spPx(52)

    .news-detail__cnt__date
      display block
      color $thinGray
      font-family $font-en
      font-style italic
      fontPc(19, 24, 100, 400)
      fontSp(24, 24, 100, 400)
      +pc()
        margin-top 15px
      +sp()
        margin-top spPx(14)

    .news-detail__cnt__desc
      +pc()
        margin-top 38px
      +sp()
        margin-top spPx(49)

    .news-detail__cnt__desc__txt
      fontPc(15, 22, -30, 400)
      fontSp(26, 40, -30, 400)

    .news-detail__cnt__desc__txt + .news-detail__cnt__desc__txt
      +pc()
        margin-top 9px
      +sp()
        margin-top spPx(20)

    .news-detail__cnt__others
      +pc()
        margin-top 130px
      +sp()
        margin-top spPx(120)

    .news-detail__cnt__others__ttl
      font-family $font-en
      fontPc(26, 30, 50, 600)
      fontSp(36, 30, 50, 600)

    .news-detail__cnt__others__list
      +pc()
        margin-top 22px
      +sp()
        margin-top rem(25)

    .news-detail__to-list
      line-height 0
      background-color rgba($white, 1)
      +pc()
        width 35px
        height 210px
        margin-left 20px
        transition background-color .25s ease
        &:hover
          background-color rgba($white, .7)
      +sp()
        position absolute
        top spPx(360)
        left 0
        z-index 1
        width spPx(50)
        height spPx(390)
</style>
