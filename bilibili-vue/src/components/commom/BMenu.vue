<template>
  <div class="menu">
    <div class="menu-wrapper">
      <ul class="nav-menu">
        <BMenuItem v-for="item in classify" :item="item" :key="item.title"></BMenuItem>
      </ul>
      <div class="menu-r">
        <a id="mobile_p" class="mobile-p" href="//app.bilibili.com" target="_blank"
           @mouseover="showMobileLink=true" @mouseout="showMobileLink=false"
        >
          <transition name="fade">
            <div class="mobile-p-box" v-show="showMobileLink">
              <div class="mobile-p-qrcode">
              </div>
            </div>
          </transition>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import BMenuItem from "./BMenuItem";
import classify from "./classify";
export default {
  name: "BMenu",
  components: { BMenuItem },
  data() {
    return {
      showMobileLink: false,
      classify
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu
  width 100%
  background #fff
  .menu-wrapper
    position relative
    width 980px
    margin 0 auto
    padding 6px 0
    z-index 100
    .nav-menu
      zoom 1
      display inline-block
      vertical-align top
      height 50px
      margin: 0
    .menu-r
      position absolute
      right 0
      top 0
      height 50px
      padding 6px 0
      .mobile-p
        display inline-block
        vertical-align top
        margin 3px 0
        width 58px
        height 44px
        background url(../../assets/images/app-link.png) center center no-repeat
        position relative
        overflow visible
        .mobile-p-box
          position absolute
          overflow hidden
          top 44px
          width 259px
          height 174px
          right -20px
          background url(../../assets/images/app-box.png) center center no-repeat
          transition .2s
          transition-property opacity
          &.fade-enter-active, &.fade-leave
            opacity 1
          &.fade-enter, &.fade-leave-active
            opacity 0
          .mobile-p-qrcode
            position absolute
            top 30px
            width 100px
            height 100px
            left 80px
            background url(../../assets/images/app-qrcode.png) center center no-repeat
</style>
