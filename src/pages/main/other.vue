<template>
  <div>
    <div class="split"></div>
    <div class="title">
      <img src="../../imgs/title-img/41be554ac711057efbb82403f8618b72.jpg" class="left">
      <img src="../../imgs/more.jpg" class="right">
    </div>
    <div class="cat-video">
      <img src="../../imgs/123.jpg" class="cat-video">
      <div>
        <p>狮王 猫咪去毛喷剂  防静电 防打结 梳毛轻松</p>
        <span class="cmall"></span>
        <i>68272</i>
        <span class="line">|</span>
        01:53
      </div>
    </div>
    <div class="split"></div>
    <div class="title">
      <img src="../../imgs/title-img/11acf905ca327ed7aae8f9b4851850a0.jpg" class="left">
      <img src="../../imgs/more.jpg" class="right">
    </div>
    <div class="special-sall">
      <img src="../../imgs/品牌特卖/a.jpg">
    </div>
    <div class="split"></div>
    <div class="special-sall">
      <img src="../../imgs/品牌特卖/b.jpg">
    </div>
    <div class="split"></div>
    <div class="title">
      <img src="../../imgs/title-img/41be554ac711057efbb82403f8618b72.jpg" class="left">
      <img src="../../imgs/more.jpg" class="right">
    </div>
    <div>
      <mt-swipe :auto="4000" class="wrap">
        <mt-swipe-item><img src="../../imgs/2轮播/1.png"></mt-swipe-item>
        <mt-swipe-item><img src="../../imgs/2轮播/2.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../imgs/2轮播/3.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../imgs/2轮播/4.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="split"></div>
    <div class="title">
      <img src="../../imgs/title-img/77c0017136e51145788b7607a3a0914c.jpg" class="left">
      <img src="../../imgs/more.jpg" class="right">
    </div>
    <div class="cat-video">
      <img src="../../imgs/123.jpg" class="cat-video">
      <div>
        <p>狮王 猫咪去毛喷剂  防静电 防打结 梳毛轻松</p>
        <span class="cmall"></span>
        <i>68272</i>
        <span class="line">|</span>
        01:53
      </div>
    </div>
    <div class="title">
      <img src="../../imgs/title-img/e747ca83834dbd4d1f9663f11f7bf146.jpg" class="left">
      <img src="../../imgs/more.jpg" class="right">
    </div>
    <div class="cat-video">
      <img src="../../imgs/123.jpg" class="cat-video">
      <div>
        <p>狮王 猫咪去毛喷剂  防静电 防打结 梳毛轻松</p>
        <span class="cmall"></span>
        <i>68272</i>
        <span class="line">|</span>
        <i>01:53</i>
      </div>
    </div>
    <div class="end">
      <img src="../../imgs/2b4302241c921a29523ce43d465cd28d.jpg">
    </div>
    <div class="footer-bar">
      <div class="ft">
        <span>触屏版</span>
        <span>手机客户端</span>
        <span>关于我们</span>
        <span>联系我们</span>
      </div>
      <div class="copy">&copy wap.epet.com 版权：重庆易宠科技有限公司</div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .split
    width: 100%
    height: 10px
    border-top: 1px solid rgba(7, 17, 27, 0.1)
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    background: #f3f4f5
  .title
    width 375px
    height 72.36px
    .left
      float left
      width 187.5px
      height 72.36px
      margin-left 5px
    .right
      float right
      width 66px
      height 55px
  .cat-video
    img
      width 375px
      height 210.75px
    div
      width 375px
      height 58px
      padding 10px
      font-size: 12px;
      text-align center
      p
        text-align center
        color #333
        line-height 19px
      .cmall
        display inline-block
        width 10px
        height 9px
        background url("./view-black.png") no-repeat
        background-size 100% 100%
        line-height 19px
      i
        font-style normal
        color #999
      .line
        margin-left: 10px
        margin-right: 10px


  .special-sall
    img
      width 375px
      height 160px

  .end
    img
      width 375px
      height 30.5px
  .footer-bar
    width 375px
    height 86px
    text-align center
    background #fff
    margin 30px auto
    .ft
      padding 15px 0 5px
      text-align center
      font-size 14px
      span
        padding 0 6px
      :nth-child(1)
        color red
    .copy
      text-align:center;
      margin: 10px auto;
      padding-bottom:25px;
      font-size:12px
</style>
