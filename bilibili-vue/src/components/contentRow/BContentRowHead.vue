<template>
  <div class="b-head">
    <span class="b-head-i" :class="category"></span>
    <span class="b-head-t">
			<a :href="head.link" :title="head.title">
				<h2>{{head.title}}</h2>
			</a>
		</span>
    <div class="b-link-more">
      <a :href="head.link">
        更多<i class="b-icon b-icon-arrow-r"></i>
      </a>
    </div>
    <div class="change" @click="change">
      <span class="icon-refresh"></span>
      <span class="info">
				换一换
			</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BContentRowHead",
  props: {
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    head() {
      let head = {}
      let title = ""
      let link = ""
      if (this.category) {
        switch (this.category) {
          case 'douga':
            title = '动画'
            link = 'https://www.bilibili.com/v/douga'
            head = { title, link }
            break
          case 'bangumi':
            title = '番剧'
            link = 'https://www.bilibili.com/anime'
            head = { title, link }
            break
          case 'guochuang':
            title = '国创'
            link = 'https://www.bilibili.com/guochuang'
            head = { title, link }
            break
          case 'music':
            title = '音乐'
            link = 'https://www.bilibili.com/v/music/'
            head = { title, link }
            break
          case 'dance':
            title = '舞蹈'
            link = 'https://www.bilibili.com/v/dance'
            head = { title, link }
            break
          case 'game':
            title = '游戏'
            link = 'https://www.bilibili.com/v/game'
            head = { title, link }
            break
          case 'technology':
            title = '知识'
            link = 'https://www.bilibili.com/v/technology'
            head = { title, link }
            break
          case 'life':
            title = '生活'
            link = 'https://www.bilibili.com/v/life'
            head = { title, link }
            break
          case 'kichiku':
            title = '鬼畜'
            link = 'https://www.bilibili.com/v/kichiku'
            head = { title, link }
            break
          case 'fashion':
            title = '时尚'
            link = 'https://www.bilibili.com/v/fashion'
            head = { title, link }
            break
          case 'ent':
            title = '娱乐'
            link = 'https://www.bilibili.com/v/ent'
            head = { title, link }
            break
          case 'movie':
            title = '电影'
            link = 'https://www.bilibili.com/movie'
            head = { title, link }
            break
          case 'teleplay':
            title = '剧集'
            link = 'https://www.bilibili.com/tv'
            head = { title, link }
            break
          default:
            title =""
            link = ""
            head = { title, link }
        }
      }
      return head
    }
  },
  methods: {
    change() {
      this.$store.dispatch("ding")
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-head
  height 24px
  white-space nowrap
  position relative
  .b-head-i
    position absolute
    left 0
    top -8px
    background url(../../assets/images/icons.png) no-repeat
    width 40px
    height 39px
    display inline-block
    &.guochuang
      background-position -141px -588px
    &.douga
      background-position -141px -908px
    &.bangumi
      background-position -141px -140px
    &.music
      background-position -141px -266px
    &.dance
      background-position -141px -461px
    &.game
      background-position -141px -203px
    &.technology
      background-position -141px -525px
    &.life
      background-position -141px -970px
    &.kichiku
      background-position -141px -332px
    &.fashion
      background-position -141px -718px
    &.ad
      background-position -141px -1228px
    &.ent
      background-position -141px -1032px
    &.movie
      background-position -141px -396px
    &.teleplay
      background-position -141px -845px
  .b-head-t
    float left
    margin-left 46px
    vertical-align middle
    display inline-block
    font-size 18px
    line-height 24px
    color #222
    a
      color #222
    h2
      font-size 24px!important
      line-height 24px
      font-weight normal
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
  .change
    display block
    float right
    cursor pointer
    background-color #fff
    border 1px solid #ccd0d7
    border-radius 4px
    height 22px
    padding 0 10px
    &:hover
      .icon-refresh
        transform rotate(360deg)
    .icon-refresh
      background url(../../assets/images/icons.png) -475px -89px no-repeat
      display inline-block
      width 12px
      height 13px
      vertical-align: top
      transition .2s
      margin-top 5px
    .info
      display inline-block
      vertical-align top
      line-height 22px
      margin-left 5px
      b
        font-weight bold
      em
        font-style normal
        font-weight normal
  .pmt-list
    display inline-block
    vertical-align bottom
    &.pmt-inline
      margin-left 40px
      margin-top 3px
      max-width 214px
      overflow hidden
      float left
    .pmt-icon
      display inline-block
      vertical-align top
      background url(../../assets/images/icons.png) -665px -1113px no-repeat
      width 14px
      height 14px
      margin-top 1px
    i
      font-style normal
      font-weight normal
    .pmt-link
      vertical-align top
      height auto
      display inline-block
      padding 0 0 0 8px
      border 0
      a
        max-width 192px
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        display block
        line-height 16px
        color #6d757a
</style>
