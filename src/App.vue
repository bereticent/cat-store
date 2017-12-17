<template>
  <div>
    <ele-header></ele-header>
    <ele-main></ele-main>

  </div>
</template>

<script>
  import header from './components/header/header'
  import main from './components/main/main'

export default {
  components:{
    'ele-header': header,
    'ele-main':main
  }
}
</script>

<style>

</style>
