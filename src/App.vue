<template>
  <div>
    <router-link to="/main"></router-link>
    <router-link to="/types"></router-link>
    <router-link to="/shopping"></router-link>
    <router-link to="/register"></router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <ele-footer></ele-footer>
  </div>
</template>

<script>
  import footer from './components/footer/footer'
  import axios from 'axios'
export default {
  components:{
    'ele-footer': footer
  },
  mounted () {

    this.$store.dispatch('reqMain');
    this.$store.dispatch('reqTypes');



    // 使用axios发ajax请求mockjs模拟的接口
     /*axios.get('/api2/main')
       .then(response => {
         const result = response.data
         console.log('axios ', result)
       });
       axios.get('/api2/types')
         .then(response => {
           const result = response.data
           console.log('axios ', result)
         })*/
  }
}
</script>

<style>

</style>
