<template lang="pug">
  div(:class="'p-' + id + '--inr'")
    section.privacy-policy.c-cnt-frm--inr--l
      h2.privacy-policy__ttl(v-inview)
        CommonHeadingLv1(:data="{'id': id, 'alt': ttl}")
      .privacy-policy__cnt
        .privacy-policy__cnt__intro(v-for="txt in intro" v-inview)
          p.privacy-policy__cnt__intro__txt(v-html="txt")
        ol.privacy-policy__cnt__list
          PrivacyPolicyList(v-for="(data, index) in list" :data="data" :key="index")
</template>

<script>
  import Meta from '~/mixins/meta'

  const ID = 'privacy-policy'
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
        title: 'privacy-policy' + '｜' + process.env.SITE_NAME,
        keywords: 'hoge',
        description: 'hoge',
        type: 'article',
        url: 'https://hogehoge.com/news',
        image: 'https://hogehoge.com/img/ogp/news.png'
      },
      intro: [
        'ダミー文章です。ひづめゆは、皆様の個人情報の重要性を認識し、その適正な収集、利用、保護をはかるとともに、安全管理を行うため、プライバシーポリシーを定め、次のとおり運用します。'
      ],
      ttl: 'PRIVACY POLICY プライバシーポリシー',
      list: [
        {
          ttl: '1）個人情報の定義',
          desc: [
            'このプライバシーポリシーにおいて、個人情報とは生存する個人に関する情報であって、以下のいずれかに該当するものをいいます。<br>当該情報に含まれる氏名、生年月日その他の記述等｛文書、図画もしくは電磁的記録（電子的方式、磁気的方式そのほか人の知覚によって認識することができない方式により作られた記録をいう）に記載され、もしくは記録され、または音声、動作その他の方法を用いて表された一切の事項（個人識別符号を除く）をいう｝により、特定の個人を識別できるもの（他の情報と容易に照合でき、それにより特定の個人を識別できるものを含む）。個人識別符号が含まれるもの。'
          ]
        },
        {
          ttl: '2）個人情報の管理',
          desc: [
            '個人情報の保護に関する運用要領を定めるとともに、個人情報の管理責任者を置いて適切に管理します。'
          ]
        },
        {
          ttl: '3）個人情報の収集',
          desc: [
            '個人情報の収集に際しては、あらかじめ利用目的を定め、お知らせするとともに、その目的の達成に必要な範囲内で、適正な方法により収集、利用いたします。また、「個人情報の保護に関する法律」（平成15年法律第57号。以下「個人情報保護法」とします）に定める場合を除き、あらかじめ本人の同意を得ることなく、収集した個人情報を利用目的以外には使用せず、利用目的達成後には当該個人情報を遅滞なく消去するよう努めるものといたします。'
          ]
        },
        {
          ttl: '4）個人情報の利用目的',
          desc: [
            'ひづめゆは、以下に示す利用目的のために、皆様から個人情報をご提供いただく場合があります。下記以外の目的で個人情報を収集・利用する際は、前項に則り、利用目的をお知らせしたうえで収集いたします。',
            '① ご登録いただいた会員様向けサービスの提供のため<br>② ご注文、ご応募いただいた商品、賞品の発送のため<br>③ アンケート、イベント等にご協力いただいた方へのご報告のため<br>④ ダイレクトメールや電子メール等による、情報の提供のため<br>⑤ ひづめゆのウェブサイトや各種ネットサービス（以下、「公式サイト等」とします）のサービス向上・改善、新しいサービス開発のため<br>⑥ 上記①～⑤の目的に関連する業務の遂行のため<br>公式サイト等においては、ご利用者様ご自身の判断により、講談社に対して個人情報を提供するか否かを選択できます。ただし、個人情報を提供いただけない場合は、公式サイト等におけるサービスをご利用いただけないことがあります。'
          ]
        },
        {
          ttl: '5）個人情報の第三者提供',
          desc: [
            'ご本人から承諾を得たとき、個人情報保護法その他の法令等に基づく場合、または次のいずれかに該当する場合を除き、個人情報を第三者に提供することはありません。',
            '人の生命、身体、または財産の保護のために個人データの第三者提供が必要である場合であって、本人の同意を得ることが困難である場合<br>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を取ることが困難である場合<br>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合<br>有料サービス利用や商品注文等に伴うクレジットカード等の決済手続きに際してユーザーの銀行口座やクレジットカード等の正当性を金融機関、カード会社等に確認する場合また、ご本人から承諾を得たとき、または個人情報保護法で認められている場合を除き、個人情報を海外の第三者に提供することはありません。'
          ]
        }
      ]
    })
  }
</script>

<style lang="stylus" scoped>
  .privacy-policy
    display flex
    flex-wrap wrap
    +pc()
      padding-top 132px
    +sp()
      padding-top spPx(160)

    .privacy-policy__ttl
      +pc()
        width $cntFrmInrEdge * 1px
      +sp()
        width rem($cntFrmEdgeL)

    .privacy-policy__ttl__pic
      background-color $purple
      +pc()
        margin-top -24px
        margin-left -20px
      +sp()
        margin-top spPx(-24)
        margin-left spPx(-24)

    .privacy-policy__cnt
      fontPc(14, 30, 0, 400)
      fontSp(24, 39, 0, 400)
      +pc()
        width cntFrmInrSSizePc()
        margin-top -8px
      +sp()
        width cntFrmInrSSizeSp()
        margin-top spPx(-4)

    .privacy-policy__cnt__list
      +pc()
        margin-top 29px
      +sp()
        margin-top spPx(42)
</style>

