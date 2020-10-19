<template>
  <div class="menu">
    <div class="menu-wrapper">
      <ul class="nav-menu">
        <BMenuItem v-for="item in classify" :item="item" :key="item.title"></BMenuItem>
      </ul>
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
      padding: 0 38px
      margin: 0
</style>
