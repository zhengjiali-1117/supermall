<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>

<script>
import goodsListItem from 'components/content/goods/goodsListItem'
export default {
  name: 'goodsList',
  props: {
    goods : {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    goodsListItem,
  }
}
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
  }
</style>
