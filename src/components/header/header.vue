<template>
  <div id="head">
    <div class="search">
      <div class="search-nav">
        <a href="#" class="search-navT"><span>猫猫站</span><span>|</span><span>蓬莱◆</span></a>
        <p class="search-text">
          <a href="#">
            <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          </a>
        </p>
        <a href="#" class="search-img">
          <img src="../../imgs/mydope.png">
        </a>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">猫猫主粮</a></li>
        <li><a href="#">罐头超市</a></li>
        <li><a href="#">医疗保健</a></li>
        <li><a href="#">猫砂</a></li>
        <li><a href="#">零食玩具</a></li>
        <li><a href="#">美容香波</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #head
    width 100%
    font-size 0
    height 87px
    position fixed
    z-index 10
    background: #ffffff;
    .search
      width 100%
      height 41px
      padding 5px 0
      background #fff
      text-align center
      .search-nav
        padding 8px 0
        margin 0 auto
        .search-navT span
          vertical-align middle
          color #898989
          font-size 14px
          line-height 25px
          margin-right 2px
          last-child
            margin-right 8px
        .search-text
          vertical-align middle
          display inline-block
          width 220px
          height 25px
          background #e9e9e9
          border-radius 4px
          color #bcbcbc
          font-size 13px
          input
            width 100%
            border 0
            height 25px
            background #e9e9e9
            border-radius 4px
            color #bcbcbc
            text-indent 10px
            font-size 13px
            outline 0
        .search-img
          vertical-align middle
          display inline-block
          width 25px
          height 25px
          margin-left 10px
          img
            width 100%
            height 100%


    .nav
      background #fff
      width 100%
      height 36px
      ul
        width 100%
        height 100%
        overflow hidden
        li
          float left
          width 74px
          a
            display: block
            width 100%
            height 100%
            line-height 36px
            font-size 14px
            text-align center
            color #666
</style>
