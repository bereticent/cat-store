<template>
<div id="wrap">
  <div class="split"></div>
  <div class="" v-for="name in types.brands">
    <div class="title">
      <p>——{{name.title}}——</p>
    </div>
    <div class="list">
      <ul>
        <li v-for="brand in name.list">
          <img :src="brand.logo" >
          <p>{{brand.name}}</p>
          <p>{{brand.address}}</p>
        </li>
      </ul>
    </div>
    <split></split>
  </div>


</div>
</template>

<script>
  import split from '../main/split'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
      }
    },

    computed:{
      ...mapState(['types'])
    },
    components:{
      split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
#wrap
  box-sizing border-box
  .split
    width: 100%
    height: 5px
    border-top: 1px solid rgba(7, 17, 27, 0.1)
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    background: #f3f4f5
  .title
    width 375px
    height 40px
    position relative
    p
      font-size 12px
      text-align center
      color #999
      position absolute
      bottom 0
      left 140px
  .list
    width 365px
    overflow hidden
    padding-bottom 20px
    ul
      width 100%
      height 100%
      clearFix()
      li
        width 121.64px
        height 107px
        float left
        padding-top 30px
        text-align center
        margin-bottom 15px
        img
          width 65%
          margin-left 12px
        :nth-child(2)
          font-size 13px
          color #333
          margin-top 18px
          margin-left 10px
        :nth-child(3)
          font-size 12px
          color #999
          margin-top 6px
          margin-left 10px

</style>
