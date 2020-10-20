<template>
  <div class="top-list-wrapper">
    <ul class="top-list">
      <BRankingItem v-for="item in rankingList[now]" :key="item.aid" :contentTop="item"></BRankingItem>
    </ul>
    <div class="prev" @click="prevClick"></div>
    <div class="next" @click="nextClick"></div>
  </div>
</template>

<script>
import BRankingItem from "./BRankingItem";
import { mapState } from "vuex";
export default {
  name: "BRanking",
  components: { BRankingItem },
  data() {
    return {
      now: 0
    }
  },
  computed: {
    ...mapState({
      rankingList: state => state.contentTopStore.rankingList,
    })
  },
  mounted() {
    this.$store.dispatch("ranking")
  },
  methods: {
    prevClick() {
      if (this.now === 0) {
        this.now = this.rankingList.length - 1
      } else {
        this.now = this.now - 1
      }
    },
    nextClick() {
      if (this.now === this.rankingList.length - 1) {
        this.now = 0
      } else {
        this.now = this.now + 1
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.top-list-wrapper
  position relative
  height 210px
  overflow hidden
  margin-left 10px
  .top-list
    margin-right -20px
  .prev, .next
    display none
    position absolute
    background-color rgba(0,0,0,0.6)
    background-image url(http://static.hdslb.com/images/v3images/icons2.png)
    background-repeat no-repeat
    width 20px
    top 50%
    margin-top -30px
    cursor pointer
    font-size 12px
    color #fff
    z-index 99
    text-align center
    line-height 16px
    user-select none
  .prev
    height: 30px
    width: 15px
    left 0
    border-radius 0 2px 2px 0
    background-position 6px -1211px
    padding 13px 0 13px 5px
  .next
    height: 30px
    width: 15px
    right 0
    border-radius 2px 0 0 2px
    background-position 10px -1262px
    padding 13px 0 13px 5px
  &:hover .prev, &:hover .next
    display block
  .prev:hover, .next:hover
    background-color rgba(0,0,0,0.8)
</style>
