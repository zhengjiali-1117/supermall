<template>
  <div id="app">
    <main-tabber>
    </main-tabber>
    <router-view></router-view>
  </div>

</template>

<script>
  import mainTabber from'components/content/tabber/mainTabber'

  export default {
    name: 'App',
    components: {
      mainTabber,
    }
  }
</script>

<style>
  @import 'assets/css/base.css';
</style>
