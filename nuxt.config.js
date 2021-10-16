import ctfConfig from './.contentful.json'
import { createClient } from './plugins/contentful'
const cdaClient = createClient()

export default {
  target: 'static',

  generate: {
    routes() {
      return cdaClient
      .getEntries(ctfConfig.CTF_NEWS_TYPE_ID)
      .then(posts => {
        return [...posts.items.map(post => {
          return {
            route: `/news/${post.fields.slug}/`,
            payload: post
          }
        })]
      })
    }
  },

  env: {
    siteName: process.env.SITE_NAME,
    bpLv1: process.env.BREAKPOINT_LV1,
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    title: process.env.siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'robots', name: 'robots', content: 'noindex,nofollow' },
      { hid: 'description', name: 'description', content: 'page description'},
      { hid: 'keywords', name: 'keywords', content: 'page keywords' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'site name' },
      { hid: 'og:type', property: 'og:type', content: 'page type' },
      { hid: 'og:url', property: 'og:url', content: 'page url' },
      { hid: 'og:title', property: 'og:title', content: process.env.siteName },
      { hid: 'og:description', property: 'og:description', content: 'page description' },
      { hid: 'og:image', property: 'og:image', content: 'http://localhost:3000//image/meta/ogp.jpg' },

      { hid: 'twitter:card', name: 'twitter:cpard', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: 'http://localhost:3000/images/meta/icon.png' },
      { rel: 'apple-touch-icon', href: '/images/meta/icon.png' },
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
}
