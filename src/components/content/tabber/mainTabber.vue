<template>
    <tab-ber>
      <tab-ber-item path="/home" fontColor="red">
        <img slot="Img-icon" src="~assets/img/tabber/home.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabber/home_active.svg" alt="">
        <span slot="content">首页</span>
      </tab-ber-item>
      <tab-ber-item path="/category" fontColor="red">
        <img slot="Img-icon" src="~assets/img/tabber/category.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabber/category_active.svg" alt="">
        <div slot="content">分类</div>
      </tab-ber-item>
      <tab-ber-item path="/cart" fontColor="red">
        <img slot="Img-icon" src="~assets/img/tabber/shopcart.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabber/shopcart_active.svg" alt="">
        <div slot="content">购物车</div>
      </tab-ber-item>
      <tab-ber-item path="/profile" fontColor="red">
        <img slot="Img-icon" src="~assets/img/tabber/profile.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabber/profile_active.svg" alt="">
        <div slot="content">我的</div>
      </tab-ber-item>
    </tab-ber>
</template>

<script>
import tabBer from 'components/common/tabber/tabber'
import tabBerItem from 'components/common/tabber/tabberItem'

export default {
  name : "mainTabber",
  components:{
    tabBer,
    tabBerItem
  }
}
</script>

<style>

</style>
