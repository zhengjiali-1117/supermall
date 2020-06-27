<template>
  <detail-nav-bar/>
  <!-- <detail-swiper>

  </detail-swiper> -->
</template>

<script>
import detailNavBar from './detailChild/detailNavBar'
// import detailSwiper from './detailChild/detailSwiper'

import {getDetailDate} from 'network/detail'

export default {
  name: 'shopDetail',
  components:{
    detailNavBar,
    // detailSwiper

  },
  data() {
    return {
      iid : null,
      topImages: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  },
  created() {
     getDetailDate( this.iid ).then( (res)=> {
      //  this.topImages = res.result.itemInfo.topImages;
      console.log(res);

       console.log( this.topImages );

    } )
  }
}
</script>

<style>

</style>
