<template>
  <div class="banner" @mouseover="show=true" @mouseout="show=false">
    <div class="topic-preview-wrapper">
      <div class="topic-preview-list-wrapper">
        <ul class="topic-preview" ref="banner">
          <BannerItem v-for="item in bannerList" :key="item.id" :banner="item"></BannerItem>
        </ul>
      </div>
      <a v-show="show" class="more-topic" href="//www.bilibili.com/blackboard/topic_list.html" target="_blank">
        更多
        <i class="b-icon"></i>
      </a>
      <div class="s-bottom">
        <div class="title" v-if="bannerList[count]">
          <span>
						<a :href="bannerList[count].url" target="_blank">
              {{ bannerList[count].name }}
            </a>
					</span>
        </div>
        <ul class="slide-bar">
          <li :class="{on: count === index}" @click="cutItem(index)"
              v-for="(item, index) in bannerList" :key="item.id"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BannerItem from "./BannerItem";
import {mapState} from "vuex";

export default {
  name: "Banner",
  components: { BannerItem },
  data() {
    return {
      count: 0,
      show: false,
    }
  },
  computed: {
    ...mapState({
      bannerList: state => state.contentTopStore.bannerList
    })
  },
  mounted() {
    this.$store.dispatch("banner")
    this.startInterval()
  },
  methods: {
    startInterval() {
      //轮播图定时滚动
      this.interval = setInterval(() => {
        this.count ++
        if (this.count === this.bannerList.length) {
          this.count = 0
        }
        let distance = -100 * this.count
        let left = distance + "%"
        if (this.$refs.banner) {
          this.$refs.banner.style.marginLeft = left
        }
      }, 5000)
    },
    cutItem(index) {
      this.count = index
      let distance = -100 * this.count
      this.$refs.banner.style.marginLeft = distance + "%"

      //点击圆点停止计时 并重新开启
      clearInterval(this.interval)
      this.startInterval()
    },
  }
}
</script>

<style lang="stylus" scoped>
.banner
  height 210px
  width 440px
  .topic-preview-wrapper
    position relative
    height 100%
    width 100%
    a
      color #fff
      text-decoration none
    .topic-preview-list-wrapper
      overflow hidden
      border-radius 4px
      .topic-preview
        list-style none
        padding: 0
        margin: 0
        width 500%
        height 100%
        transition .2s
    .more-topic
      position absolute
      right 15px
      bottom 35px
      color #fff
      background rgba(0,0,0,0.64)
      width 50px
      height 24px
      line-height 24px
      text-align center
      border-radius 4px
      transition .2s all linear
      &:hover
        text-shadow 0 0 3px #fff
        color #fff
      .b-icon
        display inline-block
        vertical-align middle
        width 6px
        height 12px
        margin -2px 0 0 5px
        background url(../../assets/images/icons.png) no-repeat
        background-position -541px -218px
    .s-bottom
      position absolute
      bottom 0
      left 0
      width 100%
      height 35px
      background linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.5) 65%,rgba(0,0,0,0.66))
      border-radius 0 0 4px 4px
      .title
        position absolute
        bottom 0
        vertical-align top
        left 20px
        top 0
        height 35px
        line-height 35px
        width 50%
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        color #fff
        font-size 14px
          span
            img
              width: 32px
              height: 20px
              margin-left: 5px
              vertical-align: middle
      .slide-bar
        position absolute
        right 5px
        bottom 5px
        overflow hidden
        padding 2px 5px
        li
          float left
          cursor pointer
          width 18px
          height 18px
          margin 2px 2px
          background url(../../assets/images/icons.png) -855px -790px no-repeat
          &:hover
            background-position -919px -790px
          &.on
            background-position -855px -727px
</style>
