<template>
  <div class="b-section-body">
    <div class="b-l">
      <BContentRowHead :category="contentRow.category"
                       :contentRowHeadTitle="contentRow.title"
                       :contentRowHeadLink="contentRow.titleLink"
      ></BContentRowHead>
      <BContentRowBody :contentRowBody="contentRow.item"></BContentRowBody>
    </div>
    <div class="b-r">
      <BContentRowRanking :contentRowBody="contentRow.item" :contentRowRankingLink="contentRow.rankingLink"></BContentRowRanking>
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
    contentRow: {
      type: Object,
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
