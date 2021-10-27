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

  .bath__ttl__pic
    +pc()
      width 80px
      height 117px
    +sp()
      width spPx(81)
      height spPx(251)

  .cidery__ttl__pic
    +pc()
      width 78px
      height 244px
    +sp()
      width spPx(98)
      height spPx(310)

  .map__ttl__pic
    +pc()
      width 78px
      height 151px
    +sp()
      width spPx(77)
      height spPx(274)

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
