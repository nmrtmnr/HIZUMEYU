<template lang="pug">
  CommonPicture(
    :data="{'class': data.id + '__ttl__pic c-hdg--lv1','src': '/images/common/ttl-' + data.id + '-01-pc.svg', 'alt': data.alt}"
  )
</template>

<script>
  export default {
    props: {
      data: Object
    }
  }
</script>

<style lang="stylus" scoped>
  .news__ttl__pic
    +pc()
      width 79px
      height 195px
    +sp()
      width spPx(76)
      height spPx(342)

  .about__ttl__pic
    +pc()
      width 78px
      height 360px
    +sp()
      width spPx(102)
      height spPx(440)

  .sauna__ttl__pic
    +pc()
      width 78px
      height 158px
    +sp()
      width spPx(77)
      height spPx(321)

  .guide__ttl__pic
    +pc()
      width 71px
      height 246px
    +sp()
      width spPx(80)
      height spPx(423)

  .bath__ttl__pic
    +pc()
      width 80px
      height 117px
    +sp()
      width spPx(81)
      height spPx(251)

  .whisking__ttl__pic
    +pc()
      width 78px
      height 289px
    +sp()
      width spPx(75)
      height spPx(529)

  .food__ttl__pic
    +pc()
      width 82px
      height 159px
    +sp()
      width spPx(81)
      height spPx(314)

  .cidery__ttl__pic
    +pc()
      width 78px
      height 244px
    +sp()
      width spPx(98)
      height spPx(310)

  .access__ttl__pic
    +pc()
      width 81px
      height 197px
    +sp()
      width spPx(75)
      height spPx(384)

  .privacy-policy__ttl__pic
    +pc()
      width 81px
      height 460px
    +sp()
      width spPx(78)
      height spPx(843)

  .contact__ttl__pic
    +pc()
      width 85px
      height 285px
    +sp()
      width spPx(81)
      height spPx(531)
</style>
