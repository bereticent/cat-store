<template>
<div>
  <div id="content">
    <!--<div class="page-line"></div>-->
    <div class="daliyRush">
      <img src="../../imgs/title-img/suprice.png"/>
      <span class="text">距本场结束</span>
      <span class="time">00</span>
      <span>:</span>
      <span class="time">00</span>
      <span>:</span>
      <span class="time">00</span>
      <a href="javascript:;">
        <img src="https://img2.epetbar.com/nowater/2016-10/26/20/c6b7ac04e8c6cb827365c17bd74aef59.png">
      </a>
    </div>
  </div>
  <div id="promotionItem" ref="wrapper">
    <ul>
      <li >
        <a href="javascript:;">
          <img src="../../imgs/day/1.jpg">
          <span class="nowPrice">￥1.20</span>
          <span class="save">省￥10.80</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../../imgs/day/2.jpg">
          <span class="nowPrice">￥0.99</span>
          <span class="save">省￥8.91</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../../imgs/day/3.jpg">
          <span class="nowPrice">￥1.00</span>
          <span class="save">省￥9.00</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../../imgs/day/4.jpg">
          <span class="nowPrice">￥4.29</span>
          <span class="save">省￥38.61</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../../imgs/day/5.jpg">
          <span class="nowPrice">￥5.30</span>
          <span class="save">省￥47.70</span>
        </a>
      </li>
    </ul>
  </div>


</div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
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
    computed: {
      ...mapState(['main'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#content
  .daliyRush
    width 375px
    height 60px
    img
      float left
      width 105.11px
      height 24px
      display inline-block
      margin-top 10px
      margin-left -15px

    .text
      float left
      display inline-block
      font-size 13px
      margin-top 15px
      margin-left 5px
      margin-right 10px
    .time
      display inline-block
      border 1px solid
      font-size 12px
      margin-top 15px

    a img
      float right
      display right
      width 67.5px
      height 40px
      margin-top 0

#promotionItem
  width 375px
  height 130px
  overflow hidden
  ul
    width 550px
    height 130
    li
      width 100px
      height 130px
      float left
      margin-left 5px
      a
        width 100px
        height 130px
        text-align center
        display inline-block
        img
          width 85px
          height  85px
          display inline-block
        .nowPrice

          width 35px
          color red
          font-size 14px
          line-height 18px

        .save
          display block
          color: #999;
          font-size 12px

</style>
