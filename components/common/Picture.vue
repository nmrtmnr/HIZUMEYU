<template lang="pug">
  picture(:class="data.class")
    source(:class="data.class + '__src'" :media="'(min-width:' + (parseInt(bpLv1) + 1) + 'px)'" :srcset="data.src")
    source(:class="data.class + '__src'" :media="'(max-width:' + bpLv1 + 'px)'" :srcset="data.src.replace(/-pc/g, '-sp')")
    img(:class="data.class + '__img'" :src="data.src" :alt="data.alt")
</template>

<script>
  export default {
    props: {
      data: Object
    },
    computed: {
      bpLv1() {
        return parseInt(process.env.bpLv1)
      },
    },
  }
</script>

<style lang="stylus" scoped>
</style>
