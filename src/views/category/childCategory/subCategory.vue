<template>
  <div id="subCategory">
    <div class="list-item" v-for="(item,index) in subCategoryData" :key="index">
      <a :href="item.link">
        <!-- <img :src="item.image" alt="">
        <div class="title">{{item.title}}</div> -->
        <img class="item-img" :src="item.image" alt="">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'subCategory',
  props: {
    subCategoryData:{
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
 #subCategory{
    display: flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
    align-items: flex-start;
 }
 .list-item {
    width: 48%;
    text-align: center;
    font-size: 12px;
    padding: 10px;
  }

  .item-img {
    width: 80%;
  }

  .item-text {
    margin-top: 15px;
  }
</style>
