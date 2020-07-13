<template>
  <div class="cart-list">
       <cart-list-item  v-for="(item,index) in cartList" :key="index"
                        :cart-item = "item" >{{item}}
        </cart-list-item>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import cartListItem from './cartListItem'

  export default {
    name: "CartList",
    components: {
      cartListItem
    },
    computed: {
        //将getters里的方法转成计算属性
        ...mapGetters({
          cartList : 'cartsList'
        })
      }
  }
</script>

<style>

</style>
