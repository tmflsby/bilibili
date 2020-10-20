<template>
  <div class="container-top">
    <div class="b-l">
      <Banner></Banner>
    </div>
    <div class="b-r">
      <BRanking></BRanking>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/banner/Banner";
import BRanking from "@/components/ranking/BRanking";
export default {
  name: "BContentTop",
  components: { Banner, BRanking }
}
</script>

<style lang="stylus" scoped>
  .container-top
    padding 0
    margin 0 auto
    margin-bottom 20px
    zoom 1
    width 980px
    &:after
      content ''
      display block
      visibility hidden
      height 0
      clear both
      font-size 0
    .b-l
      float left
      width 440px
    .b-r
      float right
      width 540px
      height auto
</style>
