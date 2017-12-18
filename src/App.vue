<template>
  <div>
    <router-link to="/main"></router-link>
    <router-link to="/types"></router-link>
    <router-link to="/shopping"></router-link>
    <router-link to="/pets"></router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <ele-footer></ele-footer>
  </div>
</template>

<script>
  import footer from './components/footer/footer'

export default {
  components:{
    'ele-footer': footer
  }
}
</script>

<style>

</style>
