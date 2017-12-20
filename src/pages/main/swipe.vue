<template>
  <div>
    <mt-swipe :auto="4000" class="wrap">
      <mt-swipe-item v-for="img in main.datas[0].value">
        <img :src=img.image>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
      }
    },
    computed:{
      ...mapState(['main'])
    }

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
