<template lang="pug">
  li.privacy-policy__cnt__list__itm(v-inview)
    h3.privacy-policy__cnt__list__itm__ttl(v-html="data.ttl")
    .privacy-policy__cnt__list__itm__txt--wrp
      p.privacy-policy__cnt__list__itm__txt(v-for="txt in data.desc" v-html="txt")
</template>

<script>
export default {
  props: {
    data: Object
  },
  data: () => ({
    links: []
  }),
  mounted() {
    if (this.$router) {
      this.addListeners();
    }
  },
  beforeUnmount() {
    if (this.$router) {
      this.removeListeners();
    }
  },
  destroyed() {
    if (this.$router) {
      this.removeListeners();
    }
  },
  updated() {
    if (this.$router) {
      this.removeListeners();
      this.$nextTick(() => {
        this.addListeners();
      });
    }
  },
  methods: {
    /**
     * Prevents default browser behavior (page reload) for relative links.
     */
    navigate(event) {
      const href = event.target.getAttribute('href');
      const target = event.target.getAttribute('target');
      // TODO: add if it is the same domain check
      if (href && href[0] === '/' && target !== '_blank') {
        event.preventDefault();
        this.$router && this.$router.push(href);
      }
    },

    addListeners() {
      this.links = this.$el.getElementsByTagName('a');
      for (let i = 0; i < this.links.length; i++) {
        this.links[i].addEventListener('click', this.navigate, false);
      }
    },

    removeListeners() {
      for (let i = 0; i < this.links.length; i++) {
        this.links[i].removeEventListener('click', this.navigate, false);
      }
      this.links = [];
    }
  }
}
</script>

<style lang="stylus" scoped>
  .privacy-policy__cnt__list__itm__ttl
    font-weight 400

  .privacy-policy__cnt__list__itm + .privacy-policy__cnt__list__itm
  .privacy-policy__cnt__list__itm__txt + .privacy-policy__cnt__list__itm__txt
    +pc()
      margin-top 29px
    +sp()
      margin-top spPx(42)

  .privacy-policy__cnt__list__itm__txt ::v-deep a
    display inline
</style>
