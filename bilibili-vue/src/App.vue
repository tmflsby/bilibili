<template>
  <div id="app">
    <TopContainer></TopContainer>
  </div>
</template>

<script>
import { rankingApi } from "./api";
import TopContainer from "./components/commom/TopContainer";
export default {
  name: "App",
  components: { TopContainer },
  mounted() {
    // test api
    rankingApi().then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
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
</style>
