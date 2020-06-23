<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar'
import {getHomeData} from 'network/home'

export default {
  name:'home',
  components: {
    navBar,
  },
  created(){
    //路由被创建之后立刻发送请求
    getHomeData().then( res=>{
     console.log( res);

    })
  }
}
</script>

<style>
  .home-nav{
    background: var(--color-tint);
    color: #fff;
  }
</style>
