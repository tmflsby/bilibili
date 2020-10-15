<template>
  <div class="search">
    <form action="//search.bilibili.com/all" id="search-form">
      <label for="search-keyword"></label>
      <input type="text" name="keyword" class="search-keyword" id="search-keyword"
             autocomplete="off" accesskey="s" v-model="searchValue"
             :placeholder="searchDefaultShow" :data-recommend="searchDefaultWords"
      >
      <button type="submit" class="search-submit" @click="buttonSubmit"></button>
    </form>
    <a href="//www.bilibili.com/ranking" class="link-ranking" target="_blank">
      <span>排行榜</span>
    </a>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      searchValue: ""
    }
  },
  computed: {
    ...mapState({
      searchDefaultWords: state => state.headerStore.searchDefaultWords,
      searchDefaultShow: state => state.headerStore.searchDefaultShow
    })
  },
  mounted() {
    this.$store.dispatch("getSearchDefaultWords")
  },
  methods: {
    buttonSubmit() {
      if (this.searchValue === "") {
        this.searchValue = this.searchDefaultWords
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.search
  z-index 100
  position absolute
  top 3px
  right 250px
  width 268px
  height 32px
  padding 2px 2px 2px 72px
  background-color rgba(0, 0, 0, 0.12)
  border-radius 6px
  #search-form
    background-color rgba(255, 255, 255, 0.88)
    display block
    height 32px
    border-radius 4px
    transition .2s background-color
    margin-top 0
    .search-keyword
      float left
      width 200px
      color #222
      font-size 12px
      overflow hidden
      height 32px
      line-height 32px
      padding 0 12px
      border 0
      box-shadow none
      background-color transparent
      outline 0
    .search-submit
      display block
      position absolute
      right 3px
      width 48px
      cursor pointer
      height 32px
      background url(../../assets/images/icons.png) -650px -720px
      margin 0
      padding 0
      border 0
  .link-ranking
    position absolute
    left 2px
    top 2px
    height 32px
    line-height 32px
    background-color rgba(255, 255, 255, 0.8)
    border-radius 4px
    width 68px
    transition .2s background-color
    span
      padding-left 26px
      color #f25d8e
      display inline-block
      background url(../../assets/images/icons.png) -659px -655px no-repeat
</style>
