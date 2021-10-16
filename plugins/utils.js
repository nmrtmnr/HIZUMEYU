import Vue from 'vue'

Vue.prototype.zeroPadding = (num, size) => {
  let value = num + ''
  while (value.length < size) value = '0' + value
  return value
}

Vue.prototype.isExternal = (path) => {
  return path.match(/^https?:\/\//)
}
