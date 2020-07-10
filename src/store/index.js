import Vue from 'vue'
import Vuex from 'vuex'
//1.安装vuex插件
Vue.use(Vuex)
//2.创建store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state,payLoad){
      //新添加的商品  重复的不再加入
      //1.
      let oldProduct = state.cartList.find( item => item.iid === payLoad.iid)
      //2.
      // let oldProduct = null;
      // for(let item of state.cartList){
      //   if( item.iid === payLoad.iid){
      //     oldProduct = item;
      //   }
      // }
      if( oldProduct ){
        oldProduct.count +=1;
      }else{
        payLoad.count = 1;
        state.cartList.push(payLoad);
      }
    }
  }
})
//3.挂在vue实例上
export default store
