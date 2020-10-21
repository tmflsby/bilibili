<template>
  <li>
    <div class="v">
      <a :href="promoteItem.url" class="preview" target="_blank">
        <img v-lazy="promoteItem.pic" src="" :alt="promoteItem.title || promoteItem.name">
        <div class="des" v-if="promoteItem.archive">
          <div class="title">{{promoteItem.title || promoteItem.name || promoteItem.archive.title}}</div>
          <div class="name">up主：{{promoteItem.archive.owner.name}}</div>
        </div>
        <div class="des" v-else>
          <div class="title">{{promoteItem.title || promoteItem.name}}</div>
        </div>
      </a>
    </div>
  </li>
</template>

<script>
export default {
  name: "BPromoteItem",
  props: {
    promoteItem: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
li
  float left
  width 160px
  margin-bottom 20px
  margin-right 20px
  .v
    position relative
    width 160px
    height 148px
    font-size 12px
    overflow hidden
    &:hover
      .preview
        .des
          color #00a1d6
          .title
            color #00a1d6
    .preview
      width: 100%
      height: 100%
      display block
      overflow hidden
      text-align center
      transition .2s all linear
      box-sizing border-box
      z-index 0
      border-radius 4px
      img
        width: 160px
        height: 100px
        display block
        margin 0 auto
        outline 0
      .des
        .title
          line-height 16px
          transition .2s all linear
          color #222
          word-break break-all
          overflow hidden
          text-align left
        .name
          text-align: left
          padding-top: 2px
</style>
