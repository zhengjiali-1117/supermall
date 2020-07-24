<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :menuList = "menuList" @electItem = "electItem"></tab-menu>
      <scroll id="scroll-content">
        <div class="category-item ">
          <sub-category :subCategoryData = "showSubcategory"></sub-category>
          <tab-control ref="contentTab" :titles="['综合', '新品', '销量']"
                       @currentTabclick = "currentTabclick"/>
          <goods-list class="goodslist" :goods="showCategoryDetail"/>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import navBar from 'components/common/navbar/navBar'
  import TabMenu from './childCategory/TabMenu'
  import subCategory from './childCategory/subCategory'
   import scroll from 'components/common/scroll/scrollnew'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/goodsList'



  import {getCategory,getSubCategory,getCategoryDetail} from 'network/category'

  export default {
    name:'category',
    components: {
      navBar,
      TabMenu,
      subCategory,
      scroll,
      TabControl,
      GoodsList
    },
    data() {
      return {
        categoryData: {},
        menuList: {
          type: Array,
          default() {
          return [];
          }
        },
        // subCategoryData: {
        //   type: Array,
        //   default() {
        //   return [];
        //   }
        // },
        currentIndex: -1,
        miniWallkey: -1,
        currentType:'pop'
      }
    },
    created() {
      //获取左侧菜单的数据
      getCategory().then(res=>{
        console.log(res.data.category.list);
        this.menuList = res.data.category.list;

        for(let  i = 0 ; i < this.menuList.length; i ++){
          this.categoryData[i] = {
              subCategoryData: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
        }
        //初始化显示第一个分类
        this.electItem(0);
      })
    },
    computed: {
      showSubcategory() {
        if (this.currentIndex === -1) {
          return []
        }else{
          // console.log(this.currentIndex);
          return this.categoryData[this.currentIndex].subCategoryData
        }
      },
      showCategoryDetail(){
         if (this.currentIndex === -1) return []
           return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods: {
      //获取左侧菜单对应的数据
      electItem(index) {
        getSubCategory(this.menuList[index].maitKey).then(res=>{
          // console.log( res.data.list);
          this.miniWallkey = this.menuList[index].miniWallkey;
          this.currentIndex = index;
          this.categoryData[index].subCategoryData = res.data.list;
          //获取右侧的列表中的导航数据
          this._getCategoryDetail("pop")
          this._getCategoryDetail("new")
          this._getCategoryDetail("sell")
        })
      },
      //获取右侧的列表中的导航数据
      _getCategoryDetail(type){
        getCategoryDetail(this.miniWallkey,type).then(res=>{
        console.log(res);
        // 将获取的数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res;
          this.categoryData = {...this.categoryData};
        })
      },
      currentTabclick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.contentTab.currentIndex = index
      }
    },


  }
</script>

<style scoped>
  #category{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    display: flex;
  }
  #scroll-content{
    height: 100%;
    overflow:hidden;
    flex: 1;
  }
  /* .goodslist{

  } */
</style>

