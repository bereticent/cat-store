<template>
  <div class="tab-item">
    <div class="header">
      <div class="left">
        <router-link to="/types/goods">
          <span id="classify" :class="activeRed" @click="isActive(1)" ref="listOne">分类</span>
        </router-link>
      </div>
      <div class="right">
        <router-link to="/types/brands">
          <span id="brand" @click="isActive(2)" ref="listTwo">品牌</span>
        </router-link>
        <img src="../../imgs/search.png">
      </div>
      <span :class="{smallLeft:goodsShow,smallRight:brandsShow}" ref="listThree"></span>
      <div class="border-1px"></div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeRed: 'activeRed',
        goodsShow: true,
        brandsShow: false
      }
    },
    methods: {
      //控制tab颜色
      isActive(xxx){

        if (xxx===1){
          this.goodsShow = false
          this.brandsShow = true
          this.$refs.listOne.className="activeRed";
          this.$refs.listTwo.className=" ";
          this.goodsShow = !this.goodsShow;
          this.brandsShow = !this.brandsShow

        }else if (xxx===2){
          this.goodsShow = true
          this.brandsShow = false
          this.$refs.listOne.className=" ";
          this.$refs.listTwo.className="activeRed";
          this.goodsShow = !this.goodsShow;
          this.brandsShow = !this.brandsShow
        }

      }
    },
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .header
    width 375px
    height 40px
    border-1px rgba(7, 17, 27, 0.1)
    background: #ffffff;
    z-index 10
    position fixed
    .smallLeft
      position: absolute;
      left 135px
      bottom .2rem
      width 35px
      height 2px
      background: #ed4044
    .smallRight
      position: absolute;
      left 207px
      bottom .2rem
      width 35px
      height 2px
      background: #ed4044

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
        &#classify.activeRed
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
        &#brand.activeRed
          color red
      img
        width 14px
        height  14px
        position absolute
        top 14px
        right 14px






</style>
