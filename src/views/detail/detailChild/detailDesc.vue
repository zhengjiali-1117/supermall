<template>
  <div v-if="Object.keys(goods).length !== 0">
    <div class="title">
      <p>{{goods.title }}</p>
    </div>
    <div class="price">
      <span class="first">{{ goods.newPrice }}</span>
      <span class="second">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="third">{{ goods.discount }}</span>
    </div>
    <div class="columns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.service[goods.service.length-1].name }}</span>
    </div>
    <div class="service" >
      <span class="service-item" v-for="index in goods.service.length-1" :key="index">
          <img :src="goods.service[index-1].icon" alt="">
          <span>{{ goods.service[index-1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailDesc',
  props: {
    goods:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  components: {

  },
}
</script>

<style scoped>
  .title p{
    margin: 10px 5px;

  }
  .title p{
    font-size: 16px;
    color:#000;
    line-height: 25px;
  }
  .price{
    position: relative;
    margin: 10px;
  }
  .price .first{
    color: red;
    font-size: 18px;
    margin-right: 10px;
  }
 .price .second{
    color:#333;
    font-size:10px;
    margin-right: 3px;
    text-decoration: line-through;

 }
 .price .third{
    color: #fff;
    background: red;
    position: absolute;
    top: -5px;
    border-radius: 10px;
    font-size: 12px;
    padding: 2px;
 }
 .columns{
    display: flex;
    padding: 10px;
    justify-content: space-between;

 }
 .columns span{
    /* flex: 1; */
    font-size: 12px;
 }
  .service {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
  }

  .service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .service-item span {
    font-size: 13px;
    color: #333;
  }

</style>
