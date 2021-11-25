// import ctfConfig from './.contentful.json'
import { createClient } from './plugins/contentful'
const cdaClient = createClient()

export default {
  target: 'static',

  env: {
    siteName: process.env.SITE_NAME,
    bpLv1: process.env.BREAKPOINT_LV1,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_NEWS_TYPE_ID: process.env.CTF_NEWS_TYPE_ID,
    CTF_STORY_TYPE_ID: process.env.CTF_STORY_TYPE_ID,
  },

  generate: {
    routes() {
      return cdaClient
      .getEntries(process.env.CTF_NEWS_TYPE_ID)
      .then(posts => {
        return [...posts.items.map(post => {
          return {
            route: `/news/${post.fields.slug}/`,
            payload: post
          }
        })]
      })
    },
    crawler: false
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      //NOTE: '~/plugins/constants' に記載
    ],
    link: [
      //NOTE: icon系は '~/plugins/constants' に記載
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/hannari.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/init.styl',
    '~/node_modules/swiper/dist/css/swiper.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/constants',
    '~/plugins/utils',
    '~/plugins/filter',
    '~/plugins/loading',
    '~/plugins/inview',
    '~/plugins/scrollto',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/style-resources',
    '@nuxtjs/date-fns',
    // '@nuxtjs/vuetify',
    // [
    //   '@nuxtjs/google-gtag',
    //   {
    //     id: process.env.GOOGLE_ANALYTICS_ID, //あなたのGoogleアナリティクスのプロパティID
    //     debug: true //本番環境以外でもGAを有効にしたい場合はtrueに。
    //   }
    // ],
    '@nuxtjs/gtm',
  ],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
  },
  styleResources: {
    stylus: [
      '~/assets/styles/setting.styl'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Page transition
  pageTransition: {
    beforeLeave(el) {},
    leave(el, done) {
      const wrpr = document.querySelector('.l-wrpr')
      wrpr.classList.add('off')

      const timer = setInterval(() => {
        const value = getComputedStyle(wrpr, null).getPropertyValue('opacity') - 0
        if (0 === value) {
          clearInterval(timer)
          done()
        }
      })
    },
    beforeEnter(el) {},
    enter(el, done) {
      const wrpr = document.querySelector('.l-wrpr')
      wrpr.classList.remove('off')
      wrpr.removeEventListener('transitionEnd', () => done)
    }
  },

  // GTM
  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID, // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  },
}
