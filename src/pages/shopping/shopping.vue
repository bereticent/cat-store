<template>
  <div>
    <div class="cart_wrapper">
      <div class="cart_header">
        <div class="cart_header_left">
          <img src="./bico1.png" >
        </div>
        <div class="cart_header_middle">
          <span>购物车</span>
        </div>
        <div class="cart_header_right">
          <img src="./new.png" alt="">
        </div>
      </div>

      <div class="cart_content">
        <div class="cart_icon">
          <span></span>
        </div>
        <div class="cart_empty">购物车是空的</div>
        <div class="cart_button">
          <a href="javascript:;"><span>去逛逛</span></a>
          <a href="javascript:;"><span>我的收藏</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .cart_header
    position relative
    width 100%
    height 50px
    border-1px(#f3f4f5)
    .cart_header_left
      display inline-block
      float left
      width 22px
      height 20px
      margin-top 16px
      padding-left 15px
      img
        width 10px
        height 18px
    .cart_header_middle
      width 86%
      height 50px
      display inline-block
      float left
      text-align center
      overflow hidden
      font-size 18px
      line-height 50px
      margin-right -6%
    .cart_header_right
      display inline-block
      float right
      width 20px
      height 20px
      margin 16px 15px 0 0
      img
        width 20px
        height 20px
  .cart_content
    width 100%
    height 298px
    .cart_icon
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
    .cart_empty
      width 100%
      height 20px
      color #dbdbdb
      text-align center
    .cart_button
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
