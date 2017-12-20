<template>
  <div id="wrap">
    <ul class="row">
        <li v-for="img in main.datas[1].menus">
          <a href="javascript:;">
            <img :src="img.image">
          </a>
        </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState(['main'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
#wrap
  overflow hidden
  ul li
    float left
    width 75px
    height 95.59px
    img
      width 75px
      height 95.59px

</style>
