<template>
  <div id="head">
    <div class="search">
      <div class="search-nav">
        <a href="javascript:;" class="search-navT"><span>猫猫站</span><span>|</span><span>蓬莱◆</span></a>
        <p class="search-text">
          <a href="javascript:;">
            <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          </a>
        </p>
        <a href="javascript:;" class="search-img">
          <img src="../../imgs/mydope.png">
        </a>
      </div>
    </div>
    <div class="nav" ref="wrapper">
      <ul>
        <li v-for="(nav,index) in main.menus" :key="index"><a href="javascript:;" class="active">{{nav.menu_name}}</a></li>
        <span class="small"></span>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
      }
    },
    mounted() {
      new BScroll(this.$refs.wrapper, {
        scrollX: true
      })
    },
    computed:{
      ...mapState(['main'])
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #head
    width 100%
    font-size 0
    height 87px
    position fixed
    z-index 2
    background: #ffffff;
    .search
      width 100%
      height 51px
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
      width 375px
      height 36px
      ul
        position relative
        width 518px
        height 100%
        overflow hidden
        span
          position absolute
          left 20px
          bottom .2rem
          width 33.59px
          height 2px
          background #e73f85
        li
          float left
          width 74px
          &:first-child
            a
              color #e73f85;
          a
            display: block
            width 100%
            height 100%
            line-height 36px
            font-size 14px
            text-align center
            color #666

</style>
