<template>
  <div class="b-section-body">
    <div class="b-l">
      <BContentRowHead :category="category"></BContentRowHead>
      <BContentRowBody :contentRow="contentRow"></BContentRowBody>
    </div>
    <div class="b-r">
      <BContentRowRanking :category="category" :categoryId="categoryId"></BContentRowRanking>
    </div>
  </div>
</template>

<script>
import BContentRowHead from "@/components/contentRow/BContentRowHead";
import BContentRowBody from "@/components/contentRow/BContentRowBody";
import BContentRowRanking from "@/components/contentRow/BContentRowRanking";
export default {
  name: "BContentRow",
  components: { BContentRowHead, BContentRowBody, BContentRowRanking },
  props: {
    category: {
      type: String,
      required: true
    },
    categoryId: {
      type: Number,
      required: true
    },
    contentRow: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-section-body
  zoom 1
  .b-l
    float left
    width 700px
    margin-bottom 50px
  .b-r
    float right
    width 260px
    min-height 360px
    height 360px
    margin-bottom 50px
</style>
