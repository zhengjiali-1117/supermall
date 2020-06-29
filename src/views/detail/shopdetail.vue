<template>
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


</template>

<script>
import detailNavBar from './detailChild/detailNavBar'
import deswiper from './detailChild/detailSwiper'
import detailDesc from './detailChild/detailDesc'
import DetailShopInfo from './detailChild/DetailShopInfo'
import DetailGoodsInfo from './detailChild/DetailGoodsInfo'
import DetailParamInfo from './detailChild/DetailParamInfo'
import DetailCommentInfo from './detailChild/DetailCommentInfo'
import DetailBottomBar from './detailChild/DetailBottomBar'

import { getDetailDate,GoodsInfo,Shop,GoodsParam } from 'network/detail'

export default {
  name: 'shopdetail',
  components:{
    detailNavBar,
    deswiper,
    detailDesc,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar

  },
  data() {
    return {
      iid: null,
      goods: {},
      shop: {},
      detailImages: {},
      paramInfo:{},
      commentInfo:Array,
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
        this.topImages = res.result.itemInfo.topImages;

        console.log( res );
      //获取描述信息
      this.goods = new GoodsInfo( result.itemInfo, result.columns, result.shopInfo.services );
      console.log(this.goods);

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
