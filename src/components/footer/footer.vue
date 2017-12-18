<template>
  <div>
    <div class="footernav">
      <ul class="footernav_ul">
        <li class="first_page"><router-link to="/main"></router-link></li>
        <li class="type"><router-link to="/types"></router-link></li>
        <li class="cart"><router-link to="/shopping"></router-link></li>
        <li class="mypet"><router-link to="/pets"></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
