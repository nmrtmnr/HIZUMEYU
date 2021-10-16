<template lang="pug">
  div(:class="'p-' + id + '--inr'")
    SaunaBathSection(v-for="(data, index) in cnts" :data="data" :key="index")
</template>

<script>
  import Meta from '~/mixins/meta'

  const ID = 'sauna-bath'
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
        title: 'sauna bath' + '｜' + process.env.SITE_NAME,
        keywords: 'hoge',
        description: 'hoge',
        type: 'article',
        url: 'https://hogehoge.com/news',
        image: 'https://hogehoge.com/img/ogp/news.png'
      },
      cnts: {
        sauna: {
          id: 'sauna',
          ttl: 'SAUNA サウナ',
          stmt: {
            ttl: '身体とこころを<br class="u-d-none--sp">ととのえる<br class="u-d-none--pc">サウナ施設',
            txt: [
              'ダミー文章です。本伝統の様式美を感じさせる平屋造りと、<br class="u-d-none--sp">木材をふんだんに使った素朴な佇まいは、<br class="u-d-none--sp">仏生山温泉の建築で知られる岡昇平氏によるデザイン。<br>頭上の丘に鎮座する住吉神社と恩湯、<br class="u-d-none--sp">音信川をひとつながりとするパブリック空間は、<br class="u-d-none--sp">観光客と生活者がともに楽しむ、長門湯本の新しい景色です。',
              '長門湯本の景色を遮らない平屋造りの恩湯施設は<br class="u-d-none--sp">周辺の自然と一体感を生み出す。',
              '建物は泉源の真上に立ち、入浴時には<br class="u-d-none--sp">「岩盤からの湧き出るお湯を見ることができる」<br class="u-d-none--sp">全国でも珍しい温泉施設となります。',
              '深さ1メートルの湯船にゆっくりと浸かり<br class="u-d-none--sp">古代より滔々と湧き続ける「神授のお湯」を堪能してください。<br>泉質はアルカリ性単純温泉（ＰＨ9.62）。<br>少しぬる目の39度のお湯にゆっくりとお入りいただき、<br class="u-d-none--sp">すべすべの化粧水のようなお湯に全身を浸すのがお薦めです。'
            ]
          },
          images: [
            {'cap': 'ダミー文章です。広々とした休憩所では、ソフトクリームやサイダーが楽しめる'},
            {'cap': 'ダミー文章です。広々とした休憩所では、ソフトクリームやサイダーが楽しめる'},
            {'cap': 'ダミー文章です。広々とした休憩所では、ソフトクリームやサイダーが楽しめる'},
            {'cap': 'ダミー文章です。広々とした休憩所では、ソフトクリームやサイダーが楽しめる'}
          ]
        },
        bath: {
          id: 'bath',
          ttl: 'BATH 温浴',
          stmt: {
            ttl: '歴史と伝統を<br class="u-d-none--sp">継承する温浴施設',
            txt: [
              'ダミー文章です。本伝統の様式美を感じさせる平屋造りと、<br class="u-d-none--sp">木材をふんだんに使った素朴な佇まいは、<br class="u-d-none--sp">仏生山温泉の建築で知られる岡昇平氏によるデザイン。<br>頭上の丘に鎮座する住吉神社と恩湯、<br class="u-d-none--sp">音信川をひとつながりとするパブリック空間は、<br class="u-d-none--sp">観光客と生活者がともに楽しむ、長門湯本の新しい景色です。',
              '長門湯本の景色を遮らない平屋造りの恩湯施設は<br class="u-d-none--sp">周辺の自然と一体感を生み出す。',
              '建物は泉源の真上に立ち、入浴時には<br class="u-d-none--sp">「岩盤からの湧き出るお湯を見ることができる」<br class="u-d-none--sp">全国でも珍しい温泉施設となります。',
              '深さ1メートルの湯船にゆっくりと浸かり<br class="u-d-none--sp">古代より滔々と湧き続ける「神授のお湯」を堪能してください。<br>泉質はアルカリ性単純温泉（ＰＨ9.62）。<br>少しぬる目の39度のお湯にゆっくりとお入りいただき、<br class="u-d-none--sp">すべすべの化粧水のようなお湯に全身を浸すのがお薦めです。'
            ]
          },
          images: [
            {'cap': 'ダミー文章です。広々とした休憩所では、ソフトクリームやサイダーが楽しめる'}
          ]
        }
      }
    })
  }
</script>

<style lang="stylus" scoped>
</style>

