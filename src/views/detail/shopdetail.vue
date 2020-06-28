<template>
<div>
  <detail-nav-bar></detail-nav-bar>
  <deswiper :topImages= "topImages"></deswiper>
  <ul>
    <li>scadsfcsdvsdvd</li>
    <li>scadsfcsdvsdvd</li>
    <li>scadsfcsdvsdvd</li>
    <li>scadsfcsdvsdvd</li>
    <li>scadsfcsdvsdvd</li>
    <li>scadsfcsdvsdvd</li>
    <li>scadsfcsdvsdvd</li>
    <li>scadsfcsdvsdvd</li>
    <li>scadsfcsdvsdvd</li>
    <li>scadsfcsdvsdvd</li>
  </ul>
</div>
  

</template>

<script>
import detailNavBar from './detailChild/detailNavBar'
import deswiper from './detailChild/deswiper'

import {getDetailDate,GoodsInfo} from 'network/detail'

export default {
  name: 'shopdetail',
  components:{
    detailNavBar,
    deswiper

  },
  data() {
    return {
      iid : null,
      goods:null,
      topImages: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  },
  created() {
    this.iid = this.$route.params.iid;
      getDetailDate( this.iid ).then( res => {
        const result  = res.result;
        const topImages = res.result.itemInfo.topImages;
        this.topImages = topImages;
        console.log( res );
      //获取描述信息
      this.goods = new GoodsInfo( result.itemInfo, result.columns, result.shopInfo.services );
      console.log(this.goods);
      
    })
  }
}
</script>

<style>

</style>
