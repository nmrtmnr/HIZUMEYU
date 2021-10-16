import Vue from 'vue'

Vue.filter('zero2Dig', (value) => {
  const size = 2
  while (String(value).length < size) value = '0' + value
  return value
})
