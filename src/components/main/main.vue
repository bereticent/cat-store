<template>
  <div>
    <swipe></swipe>
    <sprites></sprites>
    <split></split>
    <suprise></suprise>
    <split></split>
    <discount></discount>
    <split></split>
  </div>
</template>

<script>
  import swipe from './swipe'
  import sprites from './sprites'
  import split from './split'
  import suprise from './suprise'
  import discount from './discount'
  export default {
    components:{
      swipe,
      sprites,
      split,
      suprise,
      discount
    }
  }
</script>

<style scoped>

</style>
