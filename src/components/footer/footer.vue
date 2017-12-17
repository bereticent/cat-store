<template>
  <div>
    <div class="wap-footer-bar">
      <div class="ft">
        <span>触屏版</span>
        <span>手机客户端</span>
        <span>关于我们</span>
        <span>联系我们</span>
      </div>
      <div class="copy">&copy wap.epet.com 版权：重庆易宠科技有限公司</div>
    </div>
    <div class="footernav">
      <ul class="footernav_ul">
        <li class="first_page"><a href=""></a></li>
        <li class="type"><a href=""></a></li>
        <li class="cart"><a href=""></a></li>
        <li class="mypet"><a href=""></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wap-footer-bar
    width 375px
    height 86px
    text-align center
    background #fff
    margin  30px auto
    .ft
      font-size 14px
      padding 15px 0 5px
    .copy
      text-align:center;
      margin: 10px auto;
      padding-bottom:25px;
      font-size:12px

  .footernav
    position fixed
    bottom 0
    height 45px
    width 375px
    background #fff
    .footernav_ul
      width 100%
      height 45px
      li
        float left
        width 93px
        height 55px
        a
          display block
          width 42px
          height 40px
          margin 3px auto
          background url("../../imgs/img.png") no-repeat
          background-size 600% 400%
          background-position -42px 0



</style>
