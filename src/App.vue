<template>
  <div>
    <ele-header></ele-header>
    <ele-main></ele-main>
    <ele-footer></ele-footer>
  </div>
</template>

<script>
  import header from './components/header/header'
  import main from './components/main/main'
  import footer from './components/footer/footer'

export default {
  components:{
    'ele-header': header,
    'ele-main': main,
    'ele-footer': footer
  }
}
</script>

<style>

</style>
