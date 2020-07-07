<template>
  <div id="app">
    <main-tabber>
    </main-tabber>
    <keep-alive exclude="shopdetail">
     <router-view></router-view>
    </keep-alive>
    <main-tabber>
    </main-tabber>
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
