<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="scrollcontent" ref="scroll"  :probe-type="3"
                                                :pull-up-load="true"
                                                @scroll = "scroll"
                                                @pullUpLoad = "pullUpLoad">

      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control" :titles="['流行','新款','精选']"
                                        @currentTabclick = "currentTabclick"/>
      <goods-list :goods="goods[this.currentTab].list">
      </goods-list>
    </scroll>
    <back-top  @click.native="backTop" :class="{active:isChange}"></back-top>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar'
import homeSwiper from './homechild/homeSwiper'
import recommendView from './homechild/recommendView'
import featureView from './homechild/featureView'

import TabControl from 'components/content/tabcontrol/TabControl'
import goodsList from 'components/content/goods/goodsList'


import {getHomeData,getHomeGoods} from 'network/home'

import Scroll from 'components/common/scroll/scrollnew'
import backTop from 'components/content/backTop/backTop'

export default {
  name:'home',
  data(){
    return {
      isChange: true,
      banners : [],
      recommends: [],
      currentTab:'pop',
      goods: {
        'pop': { page: 0 , list : [] },
        'new':{ page: 0 , list : [] },
        'sell':{ page: 0 , list : [] }
      }
    }
  },
  components: {
    navBar,
    homeSwiper,
    recommendView,
    featureView,
    goodsList,
    backTop,
    TabControl,
    Scroll
  },
  created(){
    //路由被创建之后立刻发送请求获取数据
    this.getHomeData();

    //商品信息
    this.getHomeGoods( 'pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  methods: {
    getHomeData(){
      getHomeData().then( res=>{
      // console.log( res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
     })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1 ;
      getHomeGoods(type,page).then( res=>{
        this.goods[type].list.push(...res.data.list);
        console.log(res);
        this.goods[type].page =+ 1;

        this.$refs.scroll.finishPullUp();
      })
    },
    currentTabclick( currentTab ){
      console.log(currentTab);
      if( currentTab == 0 ){
        this.currentTab = 'pop';
      }else if( currentTab == 1 ){
        this.currentTab = 'new';
      }else if( currentTab == 2 ){
        this.currentTab = 'sell';
      }
    },
    backTop() {
      this.$refs.scroll.scrollTo(0,0,500);
    },
    scroll(position){
      // console.log(position);
      if(position.y > -1000){
        this.isChange = true;
      }else if(position.y < -1000){
        this.isChange = false;
      }
    },
    pullUpLoad(){
      this.getHomeGoods(this.currentTab);
    }
  }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background: var(--color-tint);
    color: #fff;

    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:9;
  }
  .tab-control{
    position: sticky;  /*/在top值没有达到44时 是sticky定位   达到时会变为fixed定位 */
    top:44px;
    z-index: 9;
    background: #fff;

  }
  .scrollcontent{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right:0;

    /* height: cale(100% - 93px);
    overflow: hidden;
    margin-top:44px; */
  }

  .active{
    display: none;
  }
</style>
