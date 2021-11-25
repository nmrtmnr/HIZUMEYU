const SITE_URL = 'https://hizumeyu.jp'
const SITE_NAME = 'ひづめゆ｜地域をつなぐ温浴施設'
const SITE_DESCRIPTION = '岩手県紫波町の旧庁舎が、地域をつなぐ新しい温浴施設に生まれ変わります。温浴・サウナをはじめ、リンゴのシードル醸造所、コンビニエンスストア、レストランなど、地域の方、全国の方、お年寄りから若者までの憩いの場を目指してまいります。'
const BREAKPOINT_LV1 = 1080

const CTF_MODEL = {
  NEWS: 'news',
  STORIES: 'stories'
}

export default (context, inject) => {
  inject('SITE_URL', SITE_URL)
  inject('SITE_NAME', SITE_NAME)
  inject('SITE_DESCRIPTION', SITE_DESCRIPTION)
  inject('BREAKPOINT_LV1', BREAKPOINT_LV1)
  inject('CTF_MODEL', CTF_MODEL)
}
