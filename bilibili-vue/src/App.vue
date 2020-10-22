<template>
  <div id="app">
    <TopContainer></TopContainer>
    <BHeader></BHeader>
    <BMenu></BMenu>
    <BContent></BContent>
    <BNavSide @change="isShowMask"></BNavSide>
    <div class="wnd-mask" ref="mask" v-show="showMask"></div>
  </div>
</template>

<script>
import TopContainer from "@/components/commom/TopContainer";
import BHeader from "@/components/commom/BHeader";
import BMenu from "@/components/commom/BMenu";
import BContent from "@/components/content/BContent";
import BNavSide from "@/components/navSide/BNavSide";
import { mapState } from "vuex";
export default {
  name: "App",
  components: { TopContainer, BHeader, BMenu, BContent, BNavSide },
  data() {
    return {
      showMask: false
    }
  },
  computed: {
    ...mapState({
      contentRows: state => state.contentRowStore.contentRows
    })
  },
  mounted() {
    this.$store.dispatch("ding")
  },
  methods: {
    isShowMask() {
      this.showMask = !this.showMask
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family "Microsoft YaHei",Arial,Helvetica,sans-serif
  -webkit-font-smoothing antialiased
  font-size 12px
  margin 0
  padding 0
  background #fff
  color #222
  min-width 990px
  tap-highlight-color transparent
  -webkit-tap-highlight-color transparent
  .wnd-mask
    position fixed
    width 100%
    height 150%
    background-color #000
    opacity .5!important
    z-index 1000
    top 0
    left 0
    transition .2s
</style>
