<template>
  <div>
    <mt-swipe :auto="4000" class="wrap">
      <mt-swipe-item><img src="../../imgs/1轮播/c01.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../imgs/1轮播/c02.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../imgs/1轮播/c03.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../imgs/1轮播/c04.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../imgs/1轮播/c05.png"></mt-swipe-item>
      <mt-swipe-item><img src="../../imgs/1轮播/c06.jpg"></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';

  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrap
  width 375px
  height 160px
  img
    width 100%
    height 100%
</style>
