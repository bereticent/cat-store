<template>
  <div>
    <div class="shopping_wrapper">
      <div class="shopping_header">
        <div class="shopping_header_left">
          <img src="./bico1.png" >
        </div>
        <div class="shopping_header_middle">
          <span>购物车</span>
        </div>
        <div class="shopping_header_right">
          <img src="./new.png" @click="showTool">
        </div>
      </div>

      <div class="shopping-nav" v-show="isShowTool">
        <ul>
          <li>
            <span class="s-h-img"></span>
            <p>首页</p>
          </li>
          <li>
            <span class="s-l-img"></span>
            <p>商品分类</p>
          </li>
          <li>
            <span class="s-c-img"></span>
            <div class="total">0</div>
            <p>购物车</p>
          </li>
          <li>
            <span class="s-m-img"></span>
            <p>我的e宠</p>
          </li>
        </ul>
      </div>

      <div class="shopping_content">
        <div class="shopping_icon">
          <span></span>
        </div>
        <div class="shopping_empty">购物车是空的</div>
        <div class="shopping_button">
          <a href="javascript:;"><span>去逛逛</span></a>
          <a href="javascript:;"><span>我的收藏</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShowTool: false
      }
    },

    computed: {},

    methods: {
      showTool() {
        this.isShowTool = !this.isShowTool;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .shopping_header
    position relative
    width 100%
    height 50px
    border-1px(#f3f4f5)
    .shopping_header_left
      display inline-block
      float left
      width 22px
      height 20px
      margin-top 16px
      padding-left 15px
      img
        width 10px
        height 18px
    .shopping_header_middle
      width 86%
      height 50px
      display inline-block
      float left
      text-align center
      overflow hidden
      font-size 18px
      line-height 50px
      margin-right -6%
    .shopping_header_right
      display inline-block
      float right
      width 20px
      height 20px
      margin 16px 15px 0 0
      img
        width 20px
        height 20px

  .shopping-nav
    background #fff
    width 100%
    height 75px
    padding px 0
    border-bottom 1px solid #d7d7d7
    ul
      li
        position relative
        float left
        width 25%
        height 50px
        margin 12.5px 0
        .total
          height 18px
          width: 18px
          color: #fff
          text-align center
          line-height 18px
          font-size 12px
          background #FF0000
          border-radius 100%
          border #fff solid 2px
          position absolute
          top -6px
          left 48px
        span
          display block
          margin 0 auto
          width 25px
          height 30px
          &.s-h-img
            background url(./head_icon1.png) no-repeat
            background-size 30px 30px
            background-position -3px 0
          &.s-l-img
            background url(./head_icon2.png) no-repeat
            background-size 30px 30px
            background-position -3px 0
          &.s-c-img
            background url(./head_icon4.png) no-repeat
            background-size 30px 30px
            background-position -3px 0
          &.s-m-img
            background url(./head_icon5.png) no-repeat
            background-size 30px 30px
            background-position -3px 0
        p
          color #666
          font-size 14px
          text-align center

  .shopping_content
    width 100%
    height 298px
    .shopping_icon
      width 100px
      height 100px
      margin 50px 0 20px 0
      span
        display inline-block
        width 100px
        height 100px
        margin-left 140px
        background url("./cart-ico.png") no-repeat
        background-size 105px auto
        background-position 0 -160px
    .shopping_empty
      width 100%
      height 20px
      color #dbdbdb
      text-align center
    .shopping_button
      text-align center
      box-sizing border-box
      margin-top 20px
      a
        display inline-block
        border-radius 5px
        border 1px solid #999
        height 40px
        line-height 40px
        width 100px
        font-size: 16px;
        text-align center
        color #999
        margin-right 5px



</style>
