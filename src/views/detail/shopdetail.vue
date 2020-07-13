<template>
  <div>
    <div id="detail">
      <detail-nav-bar class="detail-nav" ref="detailNavBar" @changeItem = "changeItem"></detail-nav-bar>
      <scroll class="scrollcontent" ref="scroll"
                                    @scroll = "scroll"
                                    :probe-type="3"
                                    :pull-up-load="true">
        <deswiper :topImages= "topImages"></deswiper>
        <detail-desc :goods = "goods"></detail-desc>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info = 'detailImages' @imageLoad = "imageLoad"></detail-goods-info>
        <detail-param-info ref="params" :param-info = "paramInfo"></detail-param-info>
        <detail-comment-info ref="comment" :comment-info = "commentInfo"></detail-comment-info>
        <goods-list ref="recommend" :goods = "recommends"></goods-list>
      </scroll>
      <detail-bottom-bar  @addToCart = "addToCart"></detail-bottom-bar>
      <back-top  @click.native = "backTop" :class = "{active:isChange}"></back-top>


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
import { backTopMixin } from 'common/mixin'
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
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      goods: {},
      shop: {},
      detailImages: {},
      paramInfo:{},
      commentInfo:{},
      recommends: {},
      itemImgListener: null,
      themeTopY: [], //记录导航标题的top值
      getThemeTopY:null,
      currentIndex:0,//记录当前的导航标题的下标
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
    console.log(this.iid);

    //获取详情页数据
    getDetailDate( this.iid ).then( res => {
      const result  = res.result;
      this.topImages = res.result.itemInfo.topImages;
      const topImages = res.result.itemInfo.topImages;
      this.topImages = topImages;
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
      // //等前面的内容渲染完成后 执行 保证this.$refs.params.$el.offsetTop有值
      // 值不对   原因：图片没有加载完成
      // this.$nextTick(()=>{
        // this.themeTopY = [];
        // //获取导航标题的offsetTop值
        // this.themeTopY.push(0);
        // this.themeTopY.push(this.$refs.params.$el.offsetTop);
        // this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        // this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        // console.log(this.themeTopY);
      // })
      //防抖
      this.getThemeTopY = debounce(()=>{
        this.themeTopY = [];
        //获取导航标题的offsetTop值
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.params.$el.offsetTop);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.themeTopY);
      },100)
    }),
    //获取推荐数据
    getRecommends().then((res) => {
    this.recommends = res.data.list;
    console.log(this.recommends);
   })
  },
  mounted() {
    const refresh = debounce( this.$refs.scroll.refresh,200);
    this.itemImgListener = () => {
      refresh();
    }
    this.$bus.$on('imageLoad', this.itemImgListener);
  },
  destroyed() {
    this.$bus.$off('imageLoad', this.itemImgListener);
  },
  methods: {
    //导航切换
    changeItem( index ){
      console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopY[index] ,200);
    },
    //图片加载
    imageLoad(){
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    scroll(position){
      let length = this.themeTopY.length;
      // let positionY = -position.y;
      console.log(position.y);
      for(let i = 0 ; i < this.themeTopY.length; i ++){
        if( this.currentIndex !== i  && (( i < length-1 && -position.y >= this.themeTopY[i] && -position.y < this.themeTopY[i+1] )
        || ( i === length-1 && -position.y >= this.themeTopY[i]))){
          this.currentIndex = i;
          this.$refs.detailNavBar.currentIndex = this.currentIndex;
        }
      }
       //回到顶部
      if(position.y > -1000){
        this.isChange = true;
      }else if(position.y < -1000){
        this.isChange = false;
      }
    },
    addToCart() {
      //获取购物车所要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.iid = this.iid;
      product.LowPrice = this.goods.realPrice;
      product.desc = this.goods.desc;
      //将商品信息添加到购物车  通过store添加数据要通过mutations
      // this.$store.commit('addCart',product);
      //将商品信息添加到购物车  通过store添加数据要通过actions
      // console.log('通过store添加数据要通过actions');
      this.$store.dispatch('addCart',product);
    }
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
  }
  .detail-nav{
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index:9;
    background: #fff;

  }
  .active{
    display: none;
  }
</style>
