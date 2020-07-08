<template>
  <div>
    <div id="detail">
      <detail-nav-bar class="detail-nav"></detail-nav-bar>
      <scroll class="scrollcontent" ref="scroll"  :probe-type="3" :pull-up-load="true">
        <deswiper :topImages= "topImages"></deswiper>
        <detail-desc :goods = "goods"></detail-desc>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info = 'detailImages'></detail-goods-info>
        <detail-param-info ref="params" :param-info = "paramInfo"></detail-param-info>
        <detail-comment-info ref="comment" :comment-info = "commentInfo"></detail-comment-info>
        <goods-list :goods = "recommends"></goods-list>
      </scroll>
      <detail-bottom-bar :comment-info = "commentInfo"></detail-bottom-bar>

    </div>

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
import goodsList from 'components/content/goods/goodsList'
import Scroll from 'components/common/scroll/scrollnew'


import { debounce } from 'common/utils'
import { getDetailDate,GoodsInfo,Shop,GoodsParam,getRecommends } from 'network/detail'


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
    DetailBottomBar,
    goodsList,
    Scroll

  },
  data() {
    return {

      iid: null,
      goods: {},
      shop: {},
      detailImages: {},
      paramInfo:{},
      commentInfo:Array,
      recommends: Array,
      itemImgListener: null,
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
    //获取详情页数据
    getDetailDate( this.iid ).then( res => {
      const result  = res.result;
      this.topImages = res.result.itemInfo.topImages;
      const topImages = res.result.itemInfo.topImages;
      this.topImages = topImages;
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
    }),
    //获取推荐数据
    getRecommends().then((res) => {
    this.recommends = res.data.list;
    console.log(this.recommends);
   })
  },
  mounted() {
    const refresh = debounce( this.$refs.scroll.refresh,200);
    console.log(this.$refs.scroll.refresh );

    this.itemImgListener = () => {
      refresh();
    }
    this.$bus.$on('imageLoad', this.itemImgListener);
  },
  deactivated() {
    this.$bus.$off('imageLoad', this.itemImgListener);
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 10;
    background: #fff;
    height: 100vh;
  }
  .scrollcontent{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right:0;
    margin-bottom: 10px;
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
