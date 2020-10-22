<template>
  <li class="banner-item" v-if="banner">
    <a class="b-link" :href="banner.url" target="_blank">
      <img v-lazy="banner.pic" src="" alt="">
    </a>
  </li>
</template>

<script>
export default {
  name: "BannerItem",
  props: {
    banner: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner-item
  width 440px
  height 210px
  float left
  overflow hidden
  .b-link
    color #fff
    width 100%
    height 100%
    img
      width 100%
      height 100%
</style>
