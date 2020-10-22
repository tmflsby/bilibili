<template>
  <div class="header"
       @mouseenter="showBannerTitle" @mouseleave="showBannerTitle"
  >
    <div class="header-layer">
      <img v-lazy="headerBackground" class="header-bg" src="" alt="">
      <img v-lazy="headerBackgroundLogo" class="header-bg-logo" src="" alt="">
    </div>
    <a :href="headerBackgroundUrl" class="header-link"></a>
    <div class="h-center">
      <a href="" class="log"></a>
      <div v-if="headerBackgroundName" v-show="isBannerTitleHover" class="banner-title">
        {{headerBackgroundName}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BHeader",
  data() {
    return {
      isBannerTitleHover: false
    }
  },
  computed: {
    ...mapState({
      headerBackground: state => state.headerStore.headerBackground,
      headerBackgroundLogo: state => state.headerStore.headerBackgroundLogo,
      headerBackgroundName: state => state.headerStore.headerBackgroundName,
      headerBackgroundUrl: state => state.headerStore.headerBackgroundUrl
    }),
  },
  mounted() {
    this.$store.dispatch("headerBackground")
  },
  methods: {
    showBannerTitle() {
      this.isBannerTitleHover = !this.isBannerTitleHover
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  height 160px
  position relative
  margin -42px auto 0
  background transparent no-repeat center -10px
  /*background-image url("../../assets/images/mask.png")*/
  .header-layer
    position absolute
    top 0
    left 0
    width 100%
    z-index 10
    img.header-bg
      padding-top: 42px
      width: 100%
      height: 118px
    img.header-bg-logo
      position absolute
      top 70px
      left: 0
      height: 75px
  .header-link
    position absolute
    top 0
    left 0
    width 100%
    height 160px
    z-index 10
  .h-center
    position relative
    height 160px
    transition .2s height
    .logo
      position absolute
      width 220px
      height 105px
      left 24px
      top 55px
      background transparent no-repeat left center
      z-index 100
    .banner-title
      position absolute
      top 115px
      left 40%
      line-height 20px
      padding 6px 10px
      background-color rgba(0, 0, 0, 0.68)
      color #fff
      border-radius 4px
      font-size 14px
      max-width 350px
      transition .2s
      z-index 1000
</style>
