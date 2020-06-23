<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center">购物车</slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style>
  .nav-bar{
    display:flex;
    text-align: center;
    height:44px;
    line-height: 44px;
    box-shadow: 0px 1px 1px rgba(100,100,100,0.5);
  }
  .nav-bar .left{
    width:60px;
  }
  .center{
    flex:1;
  }
  .nav-bar .right{
    width:60px;
  }
</style>
