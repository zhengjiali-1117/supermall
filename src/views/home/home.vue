<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>

    <tab-control class="tab-control" :titles="['流行','新款','精选']" />
    <goods-list :goods="goods['sell'].list">
    </goods-list>
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

export default {
  name:'home',
  data(){
    return {
      banners : [],
      recommends: [],
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

    TabControl
  },
  created(){
    //路由被创建之后立刻发送请求获取数据
    this.getHomeData();

    //商品信息
    this.getHomeGoods('pop');
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
        // console.log(this.goods[type].list);
        this.goods[type].page =+ 1;
      })
    }
  }
}
</script>

<style>
  #home{
    padding-top: 44px;
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
  }
</style>
