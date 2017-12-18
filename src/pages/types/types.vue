<template>
  <div class="tab-item">
    <div class="header">
      <div class="left">
        <router-link to="/types/goods">
          <span>分类</span>
        </router-link>
      </div>
      <div class="right">
        <router-link to="/types/brands">
          <span>品牌</span>
        </router-link>
        <img src="../../imgs/search.png">
      </div>
      <div class="border-1px"></div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .header
    width 375px
    height 40px
    border-1px rgba(7, 17, 27, 0.1)
    position relative
    background: #ffffff;
    z-index 10
    .left
      width 50%
      height 40px
      text-align right;
      line-height 40px
      padding-right 5%
      float: left;
      span
        display inline-block
        padding: 0 4px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 700;
        color red
    .right
      width 45%
      height 40px
      text-align left ;
      line-height 40px
      padding-left 5%
      float: left;
      span
        display inline-block
        padding: 0 4px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 700;
      img
        width 14px
        height  14px
        position absolute
        top 14px
        right 14px






</style>
