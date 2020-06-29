<template>
<<<<<<< HEAD
<div id="detail">
  <detail-nav-bar class="detail-nav"></detail-nav-bar>
  <deswiper :topImages= "topImages"></deswiper>
  <detail-desc :goods = "goods"></detail-desc>
  <detail-shop-info :shop="shop"></detail-shop-info>
  <detail-goods-info :detail-info = 'detailImages'></detail-goods-info>
  <detail-param-info ref="params" :param-info = "paramInfo"></detail-param-info>
  <detail-comment-info ref="comment" :comment-info = "commentInfo"></detail-comment-info>
  <detail-bottom-bar :comment-info = "commentInfo"></detail-bottom-bar>

</div>

=======
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
  
>>>>>>> b8c4b7889a78743a0c4d7c91854c5307e3da8bdd

</template>

<script>
import detailNavBar from './detailChild/detailNavBar'
<<<<<<< HEAD
import deswiper from './detailChild/detailSwiper'
import detailDesc from './detailChild/detailDesc'
import DetailShopInfo from './detailChild/DetailShopInfo'
import DetailGoodsInfo from './detailChild/DetailGoodsInfo'
import DetailParamInfo from './detailChild/DetailParamInfo'
import DetailCommentInfo from './detailChild/DetailCommentInfo'
import DetailBottomBar from './detailChild/DetailBottomBar'

import { getDetailDate,GoodsInfo,Shop,GoodsParam } from 'network/detail'
=======
import deswiper from './detailChild/deswiper'

import {getDetailDate,GoodsInfo} from 'network/detail'
>>>>>>> b8c4b7889a78743a0c4d7c91854c5307e3da8bdd

export default {
  name: 'shopdetail',
  components:{
    detailNavBar,
<<<<<<< HEAD
    deswiper,
    detailDesc,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar
=======
    deswiper
>>>>>>> b8c4b7889a78743a0c4d7c91854c5307e3da8bdd

  },
  data() {
    return {
<<<<<<< HEAD
      iid: null,
      goods: {},
      shop: {},
      detailImages: {},
      paramInfo:{},
      commentInfo:Array,
=======
      iid : null,
      goods:null,
>>>>>>> b8c4b7889a78743a0c4d7c91854c5307e3da8bdd
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
<<<<<<< HEAD
        this.topImages = res.result.itemInfo.topImages;

=======
        const topImages = res.result.itemInfo.topImages;
        this.topImages = topImages;
>>>>>>> b8c4b7889a78743a0c4d7c91854c5307e3da8bdd
        console.log( res );
      //获取描述信息
      this.goods = new GoodsInfo( result.itemInfo, result.columns, result.shopInfo.services );
      console.log(this.goods);
<<<<<<< HEAD

      this.shop = new Shop(result.shopInfo);

      this.detailImages = result.detailInfo;
      //获取详情页参数
      this.paramInfo = new GoodsParam(result.itemParams.info, result.itemParams.rule);
      //获取评论
       if (result.rate.list) {
          this.commentInfo = result.rate.list[0];
        }
    })
  },

  methods: {

=======
      
    })
>>>>>>> b8c4b7889a78743a0c4d7c91854c5307e3da8bdd
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 10;
    background: #fff;
  }
  .detail-nav{
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index:9;
    background: #fff;

  }
</style>
