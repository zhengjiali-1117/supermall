<template>
  <div class="cart">
    <!-- //导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <scroll class="scrollcontent">
      <cart-list>
      </cart-list>
    </scroll>

  </div>
</template>

<script>
  import navBar from 'components/common/navbar/navBar'
  import CartList from './childCart/CartList'
  import Scroll from 'components/common/scroll/scrollnew'

  import {mapGetters} from 'vuex'
  export default {
    name:'cart',
    components: {
      navBar,
      CartList,
      Scroll,
    },
    computed: {
      //将getters里的方法转成计算属性
      ...mapGetters({
        length : 'cartLength',
        // cartList : 'cartList'
      })
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background: var(--color-tint);
    color: #fff;
  }
  .scrollcontent{
    height: calc( 100% - 44px - 49px);
    overflow: hidden;
  }
</style>
