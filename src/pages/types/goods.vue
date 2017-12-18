<template>
<div>
  <div id="nav" ref="wrapper">
    <ul>
      <li data-id="recommend">为您推荐</li>
      <li data-id="food">猫咪主粮</li>
      <li data-id="snacks">猫咪零食</li>
      <li data-id="daily">猫咪日用</li>
      <li data-id="toys">猫咪玩具</li>
      <li data-id="health">猫咪保健</li>
      <li data-id="medical">猫咪医疗</li>
      <li data-id="trip">猫咪出行</li>
      <li data-id="dress">猫咪装扮</li>
      <li data-id="beautify">猫咪美容</li>
      <li data-id="shampoo">猫咪香波</li>
      <li data-id="rim">猫咪周边</li>
      <li data-id="custom">猫咪定制</li>
      <li data-id="books">猫猫书籍</li>
    </ul>
  </div>
  <div id="recommend-list">
    <p>热门分类</p>
    <ul>
      <li>
        <img src="./imgs/recommend/1.jpg">
        <span>进口猫粮</span>
      </li>
      <li>
        <img src="./imgs/recommend/2.jpg">
        <span>美毛化毛</span>
      </li>
      <li>
        <img src="./imgs/recommend/3.jpg">
        <span>体内驱虫</span>
      </li>
      <li>
        <img src="./imgs/recommend/5.jpg">
        <span>强化免疫</span>
      </li>
      <li>
        <img src="./imgs/recommend/6.jpg">
        <span>猫砂专区</span>
      </li>
      <li>
        <img src="./imgs/recommend/4.jpg">
        <span>罐头湿粮</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
      }
    },
    mounted() {
      new BScroll(this.$refs.wrapper, {
        scrollY: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#nav
  width 70px
  height 600px
  float left
  ul
    width 70px
    height 700px

    li
      padding: 15px 0;
      border-bottom: 1px solid #f3f4f5;
      width: 70px;
      height: 50px;
      font-size: 13px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-align center
      &:first-child
        color red
#recommend-list
  width 300px
  height 320px
  float right
  padding-left 10px
  position relative
  overflow hidden
  p
    width 290px
    height 20px
    font-size 12px
    position absolute
    top 30px
  ul
    width 290px
    height 253.31px
    margin-top 50px
    li
      width 86.66px
      height 116.66px
      float left
      text-align center
      margin-right 10px
      margin-bottom 15px
      img
        width 86.66px
        height 86.66px
      span
        display inline-block
        font-size 12px

</style>
