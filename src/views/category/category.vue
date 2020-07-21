<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :menuList = "menuList"></tab-menu>
    </div>
  </div>
</template>

<script>
  import navBar from 'components/common/navbar/navBar'
  import TabMenu from './childCategory/TabMenu'
  import {getCategory} from 'network/category'

  export default {
    name:'category',
    components: {
      navBar,
      TabMenu
    },
    data() {
      return {
        menuList: {
          type: Array,
          default() {
          return [];
          }
        }
      }
    },
    created() {
      //获取左侧菜单的数据
      getCategory().then(res=>{
        console.log(res.data.category.list);
        this.menuList = res.data.category.list;
      })
    }

  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>

