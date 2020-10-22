<template>
  <div class="content">
    <div class="container-top-wrapper">
      <BContentTop></BContentTop>
    </div>
    <div class="container-row">
      <BPromote></BPromote>
    </div>
    <div class="container-row" v-for="contentRow in contentRows" :key="contentRow.b_id">
      <BContentRow :contentRow="contentRow"></BContentRow>
    </div>
  </div>
</template>

<script>
import BContentTop from "./BContentTop";
import BPromote from "./BPromote";
import BContentRow from "./BContentRow";
import { mapState } from "vuex";
export default {
  name: "BContent",
  components: { BContentTop, BPromote, BContentRow },
  computed: {
    ...mapState({
      contentRows: state => state.contentRowStore.contentRows
    })
  },
  mounted() {
    this.$store.dispatch("ding")
  }
}
</script>

<style lang="stylus" scoped>
.content
  zoom 1
  .container-top-wrapper
    &:after
      content ''
      display block
      visibility hidden
      height 0
      clear both
      font-size 0
  .container-row
    margin 0 auto
    zoom 1
    width 980px
    &:after
      content ''
      display block
      visibility hidden
      height 0
      clear both
      font-size 0
</style>
