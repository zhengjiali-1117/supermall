<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control  class="tab-control" ref="tabControl1" :titles="['流行','新款','精选']"
                                     @currentTabclick = "currentTabclick"
                                     v-show="isTabChange"/>
    <scroll class="scrollcontent" ref="scroll"  :probe-type="3"
                                                :pull-up-load="true"
                                                @scroll = "scroll"
                                                @pullUpLoad = "pullUpLoad">

      <home-swiper :banners = "banners"  @imageFinishLoad = "imageFinishLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control  ref="tabControl2" :titles="['流行','新款','精选']"
                                     @currentTabclick = "currentTabclick"/>
      <goods-list :goods = "goods[this.currentTab].list">
      </goods-list>
    </scroll>
    <back-top  @click.native = "backTop" :class = "{active:isChange}"></back-top>
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
import { debounce } from 'common/utils'

export default {
  name:'home',
  data(){
    return {
      isChange: true,
      isTabChange: false,
      banners : [],
      recommends: [],
      currentTab:'pop',
      taboffsetTop: 0,
      saveY: 0,
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
    Scroll,
  },
  created(){
    //路由被创建之后立刻发送请求获取数据
    this.getHomeData();

    //商品信息
    this.getHomeGoods( 'pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');


  },
  mounted() {
    //非父子组件之间的通信 可以用事件总线$bus  要现在mainjs中把$bus设置成vue原型属性
    //监听image图片加载  事件总线   要现在mainjs中把$bus设置成vue原型属性
    const refresh = debounce( this.$refs.scroll.refresh,200);
    this.$bus.$on('imageLoad',() => {
      refresh();
    })

  },
  activated() {
    //离开页面后   在进入回到之前的位置
    this.$refs.scroll.scrollTo( 0 , this.saveY ,0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //记录离开页面时的位置
    this.saveY = this.$refs.scroll.getScrollY();

  },
  methods: {


    //导航吸顶效果
    imageFinishLoad() {
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    //货物banner部分数据
    getHomeData(){
      getHomeData().then( res=>{
      // console.log( res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
     })
    },
    //获取商品信息
    getHomeGoods(type){
      const page = this.goods[type].page + 1 ;
      getHomeGoods(type,page).then( res=>{
        this.goods[type].list.push(...res.data.list);
        console.log(res);
        this.goods[type].page =+ 1;
        //下拉加载第一次后不再加载  要调用finish函数才会再次加载
        this.$refs.scroll.finishPullUp();
        // //重刷新及时计算刷新的高度
        // this.$refs.scroll.scroll.refresh();
      })
    },

    // 切换导航
    currentTabclick( currentTab ){
      console.log(currentTab);
      if( currentTab == 0 ){
        this.currentTab = 'pop';
      }else if( currentTab == 1 ){
        this.currentTab = 'new';
      }else if( currentTab == 2 ){
        this.currentTab = 'sell';
      }
      this.$refs.tabControl1.currentIndex = currentTab;
      this.$refs.tabControl2.currentIndex = currentTab;

    },

    // 回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0,0,500);
    },

    // 回到顶部 监测滚动高度
    scroll(position){
      //吸顶效果
      this.isTabChange = this.taboffsetTop < (-position.y);

      //回到顶部
      if(position.y > -1000){
        this.isChange = true;
      }else if(position.y < -1000){
        this.isChange = false;
      }
    },
    //下拉加载更多
    pullUpLoad(){
      this.getHomeGoods(this.currentTab);
    }
  }
}
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background: var(--color-tint);
    color: #fff;

    /* position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:9; */
  }
  /* .tab-control{
    position: sticky;  /*在top值没有达到44时 是sticky定位   达到时会变为fixed定位 */
    /* top:44px;
    z-index: 9;
    background: #fff;

  } */
  .tab-control{
    position: relative;
    background: #fff;
    z-index: 9;
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
