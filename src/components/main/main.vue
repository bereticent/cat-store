<template>
  <div id="total">
    <swipe></swipe>
    <sprites></sprites>
    <split></split>
    <suprise></suprise>
    <split></split>
    <discount></discount>
    <split></split>
    <toy></toy>
    <other></other>
  </div>
</template>

<script>
  import swipe from './swipe'
  import sprites from './sprites'
  import split from './split'
  import suprise from './suprise'
  import discount from './discount'
  import toy from './toy'
  import other from './other'
  export default {
    components:{
      swipe,
      sprites,
      split,
      suprise,
      discount,
      toy,
      other
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #total
    padding-top 87px
</style>
