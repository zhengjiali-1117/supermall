<template>
  <div class="recommend">
    <div class="rec-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommendView',
  props: {
    recommends :{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .rec-item{
    flex: 1;
  }
  .rec-item img{
    width: 90%;
    margin-bottom: 10px;
  }

</style>
