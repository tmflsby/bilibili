<template>
  <div>
    <div class="b-head">
      <div class="index-online">
        <a href="//www.bilibili.com/video/online.html" target="_blank">
          在线列表
        </a>
      </div>
    </div>
    <div class="b-body" v-if="promoteAdList[0]">
      <div class="index-promote">
        <div class="pmt-item pmt-mid">
          <a :href="promoteAdList[0].url" target="_blank">
            <img v-lazy="promoteAdList[0].pic" src="" :alt="promoteAdList[0].title || promoteAdList[0].name">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BPromoteRight",
  computed: {
    ...mapState({
      promoteAdList: state => state.promoteStore.promoteAdList
    })
  },
  mounted() {
    this.$store.dispatch("promoteAd")
  }
}
</script>

<style lang="stylus" scoped>
.b-head
  .index-online
    position relative
    height 34px
    border-radius 4px
    background #e5e9ef
    a
      position absolute
      top calc(50% - 6px)
      left calc(50% - 24px)
      color #6d757a
.b-body
  clear both
  .index-promote
    width 260px
    height 150px
    margin-top 10px
    a
      display block
      width 100%
      height 100%
    .pmt-promote, img
      border-radius 4px
      width 100%
      height 100%
</style>
