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
</style>
