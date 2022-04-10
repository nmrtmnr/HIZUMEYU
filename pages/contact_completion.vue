<template lang="pug">
  div(:class="'p-' + this.HEAD.ID + '--inr'")
    section.contact_completion.c-cnt-frm--inr--l
      h2.contact_completion__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': 'contact', 'alt': ttl}")
      .contact_completion__cnt
        h3.contact_completion__cnt__hdg(v-html="hdg")
        .contact_completion__cnt__intro
          .contact_completion__cnt__intro__txt(v-for="txt in txts" v-html="txt")
</template>

<script>
  import Head from '~/mixins/head'

  const ID = 'contact_completion'
  export default {
    mixins: [Head],
    data: () => ({
      ttl: 'CONTACT お問い合わせ',
      hdg: 'お問い合わせ<br class="u-d-none--pc">ありがとうございます',
      txts: [
        'お問い合わせメールは無事送信されました。',
        '担当者が確認の上、ご連絡差し上げます。',
        'ご連絡まで今しばらくお待ちください。',
      ],
    }),
    asyncData() {
      const ID = 'contact_completion'
      const TITLE = 'お問い合わせ完了'
      const NO_ROBOTS = true

      return {
        HEAD: {
          ID,
          TITLE,
          NO_ROBOTS
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .contact_completion
    display flex
    flex-wrap wrap
    +pc()
      padding-top 132px
    +sp()
      padding-top spPx(160)

    .contact_completion__ttl
      +pc()
        width $cntFrmInrEdge * 1px
      +sp()
        width rem($cntFrmEdgeL)

    .contact__ttl__pic
      background-color $purple
      +pc()
        margin-top -24px
        margin-left -20px
      +sp()
        margin-top spPx(-24)
        margin-left spPx(-24)

    .contact_completion__cnt
      +pc()
        width cntFrmInrSSizePc()
        margin-left 21px
      +sp()
        width cntFrmInrSSizeSp()
        margin-top spPx(-5)

    .contact_completion__cnt__hdg
      fontPc(24, 30, 0, 400)
      fontSp(38, 54, 100, 400)

    .contact_completion__cnt__intro
      +pc()
        margin-top 35px
      +sp()
        margin-top spPx(54)

    .contact_completion__cnt__intro__txt
      fontPc(15, 30, 0, 400)
      fontSp(28, 48, 50, 400)
      +sp()
        display inline
</style>
