<template>
  <div class="b-body">
    <ul class="vidbox v-list">
      <BContentRowItem v-for="item in contentRowBody" :key="item.aid" :contentRowBodyItem="item"></BContentRowItem>
    </ul>
  </div>
</template>

<script>
import BContentRowItem from "./BContentRowItem";
export default {
  name: "BContentRowBody",
  components: { BContentRowItem },
  props: {
    contentRowBody: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-body
  margin-right -20px
  clear both
  .v-list
    width 100%
    height 316px
    overflow hidden
    padding-top 20px
</style>
