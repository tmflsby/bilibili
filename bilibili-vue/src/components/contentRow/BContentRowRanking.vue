<template>
  <div class="rank">
    <div class="b-head">
      <div class="left">
				<div class="b-head-t">
					<h3>排行榜</h3>
				</div>
      </div>
      <div class="right">
        <div class="b-link-more">
          <a :href="contentRowRankingLink" target="_blank">
            更多
            <i class="b-icon b-icon-arrow-r"></i>
          </a>
        </div>
      </div>
    </div>
    <BContentRowRankingBody :contentRowRankingLink="contentRowRankingLink"
                            :contentRowRankingTid="contentRowBody[0].tid"
    ></BContentRowRankingBody>
  </div>
</template>

<script>
import BContentRowRankingBody from "./BContentRowRankingBody";
export default {
  name: "BContentRowRanking",
  components: { BContentRowRankingBody },
  props: {
    contentRowRankingLink: {
      type: String,
      required: true
    },
    contentRowBody: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.rank
  .b-head
    position relative
    .left
      float left
    .b-head-t
      font-size 18px
      height 24px
      line-height 24px
      vertical-align middle
      display inline-block
      color #222
      h3
        font-size 18px!important
        font-weight normal
    .right
      float right
      .b-link-more
        float right
        text-align center
        margin-left 10px
        a
          display block
          width 52px
          height 22px
          line-height 22px
          background-color #fff
          border 1px solid #ccd0d7
          color #555
          border-radius 4px
          .b-icon-arrow-r
            display inline-block
            vertical-align middle
            background url(../../assets/images/icons.png) no-repeat
            width 6px
            height 12px
            margin -2px 0 0 5px
            background-position -478px -218px
</style>
