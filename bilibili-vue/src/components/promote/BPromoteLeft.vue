<template>
  <div>
    <div class="b-head">
      <div class="b-head-i"></div>
      <div class="b-head-t">
        <h2>推广</h2>
      </div>
      <div class="pmt-list">
        <div class="pmt-link">
          <a :href="promoteTitleList.url" target="_blank">
            {{promoteTitleList.title || promoteTitleList.name}}
          </a>
        </div>
      </div>
    </div>
    <div class="b-body" v-if="promoteList">
      <ul class="rm-list">
        <BPromoteItem v-for="item in promoteList" :key="item.id" :promoteItem="item"></BPromoteItem>
      </ul>
    </div>
  </div>
</template>

<script>
import BPromoteItem from "./BPromoteItem";
import { mapState } from "vuex";
export default {
  name: "BPromoteLeft",
  components: { BPromoteItem },
  computed: {
    ...mapState({
      promoteTitleList: state => state.promoteStore.promoteTitleList,
      promoteList: state => state.promoteStore.promoteList
    })
  },
  mounted() {
    this.$store.dispatch("promote")
  }
}
</script>

<style lang="stylus" scoped>
.b-head
  margin 4px 0 6px
  height 24px
  white-space nowrap
  position relative
  .b-head-i
    position absolute
    left 0
    top -8px
    background  url(../../assets/images/icons.png) no-repeat
    background-position -141px -75px
    width 40px
    height 39px
    display inline-block
    vertical-align middle
    margin-right 10px
  .b-head-t
    margin-left 46px
    float left
    vertical-align middle
    display inline-block
    font-size 18px
    line-height 24px
    color #222
    h2
      font-size 24px!important
      line-height 24px
      font-weight normal
  .pmt-list
    display inline-block
    vertical-align bottom
    margin-left 10px
    margin-top 10px
    .pmt-link
      display inline-block
      vertical-align top
      padding 0 10px
      a
        display block
        line-height 16px
        color #6d757a
.b-body
  margin-right -20px
  clear both
  .rm-list
    padding-top 10px
    height 150px
    overflow hidden
    &:after
      content ''
      display block
      visibility hidden
      height 0
      clear both
      font-size 0
</style>
