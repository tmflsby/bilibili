<template>
  <div class="content">
    <div class="container-top-wrapper">
      <BContentTop></BContentTop>
    </div>
    <div class="container-row">
      <BPromote></BPromote>
    </div>
  </div>
</template>

<script>
import BContentTop from "./BContentTop";
import BPromote from "./BPromote";
export default {
  name: "BContent",
  components: { BContentTop, BPromote }
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
