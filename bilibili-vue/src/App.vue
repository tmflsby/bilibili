<template>
  <div id="app">
    <TopContainer></TopContainer>
    <BHeader></BHeader>
    <BMenu></BMenu>
    <BContent></BContent>
  </div>
</template>

<script>
import TopContainer from "@/components/commom/TopContainer";
import BHeader from "@/components/commom/BHeader";
import BMenu from "@/components/commom/BMenu";
import BContent from "@/components/content/BContent";
export default {
  name: "App",
  components: { TopContainer, BHeader, BMenu, BContent }
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
</style>
