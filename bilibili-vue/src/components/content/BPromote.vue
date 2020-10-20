<template>
  <div class="b_promote">
    <div class="b-l">
      <BPromoteLeft></BPromoteLeft>
    </div>
    <div class="b-r">
      <BPromoteRight></BPromoteRight>
    </div>
  </div>
</template>

<script>
import BPromoteLeft from "@/components/promote/BPromoteLeft";
import BPromoteRight from "@/components/promote/BPromoteRight";
export default {
  name: "BPromote",
  components: { BPromoteLeft, BPromoteRight }
}
</script>

<style lang="stylus" scoped>
.b_promote
  .b-l
    float left
    width 700px
  .b-r
    float right
    width 260px
    margin-bottom 50px
    height 195px
    min-height 195px
</style>
