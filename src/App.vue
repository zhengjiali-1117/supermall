<template>
  <div id="app">
<<<<<<< HEAD
    <main-tabber>
    </main-tabber>
=======
>>>>>>> b8c4b7889a78743a0c4d7c91854c5307e3da8bdd
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
