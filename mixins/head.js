export default {
  head() {
    const ID = (this.HEAD.ID) ? `p-${this.HEAD.ID}` : ``
    const SITE_NAME = this.$SITE_NAME
    const TITLE = (this.HEAD.TITLE) ? `${this.HEAD.TITLE}／${SITE_NAME}` : SITE_NAME
    const DESCRIPTION = (this.HEAD.DESCRIPTION) || this.$SITE_DESCRIPTION
    const TYPE = ('front-page' === this.HEAD.ID) ? 'website' : 'article'
    const URL = (this.HEAD.ID) ? `${this.$SITE_URL}/${this.HEAD.ID}/` : this.$SITE_URL

    // console.log(`
    //   ID： ${ID}
    //   siteName： ${SITE_NAME}
    //   title： ${TITLE}
    //   discription: ${DESCRIPTION}
    //   type :${TYPE}
    //   siteURL: ${this.$SITE_URL}
    //   pageURL: ${URL}
    // `)

    return {
      bodyAttrs: {
        class: ID
      },
      title: TITLE,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // { hid: 'robots', name: 'robots', content: 'noindex,nofollow' },

        { hid: 'description', name: 'description', content: DESCRIPTION },
        { hid: 'og:type', propery: 'og:type', content: TYPE },
        { hid: 'og:title', propery: 'og:type', content: TITLE },
        { hid: 'og:url', property: 'og:url', content: URL },
        { hid: 'og:description', property: 'og:description', content: DESCRIPTION },
        { hid: 'og:image', property: 'og:image', content: (this.meta && this.meta.image) || 'https//example.com/ogImagePath.png' },
        { hid: 'og:site_name', property: 'og:site_name', content: SITE_NAME },

        { hid: 'twitter:card', name: 'twitter:cpard', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/png', href: '/images/meta/icon.png' },
        { rel: 'apple-touch-icon', href: this.$SITE_URL + '/images/meta/icon.png' },
      ]
    }
  }
}
