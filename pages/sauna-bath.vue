<template lang="pug">
  div(:class="'p-' + id + '--inr'")
    SaunaBathSection(v-for="(data, key) in cnts" :data="data" :key="key")
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
              'ひづめゆのサウナは心身がリフレッシュし、<br class="u-d-none--sp">自然と元気になれる場所。',
              '入浴法は、熱したサウナストーンに自ら水をかけて<br class="u-d-none--sp">水蒸気を発生させる方式 = セルフロウリュを採用。<br class="u-d-none--sp">好みの湿度を自由に調整可能にすることで<br class="u-d-none--sp">最適な体感温度で無理なく<br class="u-d-none--sp">発汗作用を促進させることができます。',
              '暖かみのあるデザインは<br class="u-d-none--sp">岩手県産の木材をふんだんに使用。<br class="u-d-none--sp">自然との繋がりを感じることで<br class="u-d-none--sp">リラックス効果を高めます。',
              '時には友人と、時には家族と、時にはひとりで。<br class="u-d-none--sp">新旧、多世代の様々な人々と一緒に<br class="u-d-none--sp">快適な空間をつくり上げていく、<br class="u-d-none--sp">身体とこころに心地よいサウナ体験をお楽しみください。',
            ],
            note: [],
          },
          images: [
            {'cap': '男女で異なる水風呂をご用意しています'},
          ],
        },
        bath: {
          id: 'bath',
          ttl: 'BATH 温浴',
          stmt: {
            ttl: '高濃度炭酸泉による<br>「からだ」に優しい温浴施設',
            txt: [
              'ひづめゆのお風呂は、<br class="u-d-none--sp">日々の疲れを癒すだけではなく健康も向上させる場所。',

              '炭酸泉は、ヨーロッパで「心臓の湯」と呼ばれており、<br class="u-d-none--sp">心臓疾患の療養泉として古来より親しまれてきました。<br class="u-d-none--sp">ひづめゆでは、医療機関で使用されているものと<br class="u-d-none--sp">同等の高濃度炭酸泉生成装置を使用します。',

              '高濃度炭酸泉に入浴することで、<br class="u-d-none--sp">血流改善による高血圧・心疾患・肩こりの改善や予防効果、<br class="u-d-none--sp">また保湿成分の増加による皮膚疾患の改善や美肌効果が高まります。',
            ],
            note: [
              '※炭酸泉の効果を得るには入浴頻度が重要です。<br>可能な限り毎日入浴を行うことが理想です。',
            ]
          },
        }
      }
    })
  }
</script>

<style lang="stylus" scoped>
</style>

