<template lang="pug">
  div(:class="'p-' + this.HEAD.ID + '--inr'")
    FrontPageMv
    FrontPageNews(:news="this.news")
    FrontPageAbout(:stories="this.stories")
    FrontPageSauna
    FrontPageBath
    FrontPageCidery
    FrontPageMap
</template>

<script>
  import Head from '~/mixins/head'

  import { createClient } from '~/plugins/contentful'
  const cdaClient = createClient()

  export default {
    mixins: [Head],
    data: () => ({
      wH: 0,
      mvIsGoneFlg: false,
    }),
    mounted() {
      this.$el.classList.add('on')
      this.setWH()
      window.addEventListener('resize', this.setWH)
      window.addEventListener('scroll', this.mvIsGone)
      window.addEventListener('resize', this.mvIsGone)
    },
    destroyed() {
      window.removeEventListener('resize', this.setWH)
      window.removeEventListener('scroll', this.mvIsGone)
      window.removeEventListener('resize', this.mvIsGone)
    },
    methods: {
      setWH() {
        if (this.wH !== window.innerWidth) {
          this.wH = window.innerHeight
        }
      },
      mvIsGone() {
        const sY = window.pageYOffset
        if(sY >= this.wH) {
          if(!this.mvIsGoneFlg) {
            document.body.classList.add('mvIsGone')
            this.mvIsGoneFlg = true
          }
        } else {
          if(this.mvIsGoneFlg) {
            document.body.classList.remove('mvIsGone')
            this.mvIsGoneFlg = false
          }
        }
      }
    },
    asyncData({ $CTF_MODEL }) {
      const HEAD = {
        ID: 'front-page'
      }

      const news = cdaClient
        .getEntries({
          content_type: $CTF_MODEL.NEWS,
          order: '-fields.date',
          limit: 3,
        })

      const stories = cdaClient
        .getEntries({
          content_type: $CTF_MODEL.STORIES,
          order: '-fields.date',
          limit: 3,
        })

      return Promise.all([HEAD, news, stories]).then(([HEAD, news, stories]) => {
        return {
          HEAD,
          news: news.items,
          stories: stories.items
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
  //*** wrapper
  $transitionDuration = .5s

  .p-front-page--inr
    opacity 0
    transition opacity $transitionDuration + .2 ease .2s

  .p-front-page--inr.on
    opacity 1
</style>
