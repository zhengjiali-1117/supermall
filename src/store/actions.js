export default {
  //有多步操作时 尽量不要用mutations
  addCart(context,payLoad){
    //新添加的商品  重复的不再加入只将其数量加1    不重复的加入购物车其数量设为1
    //1.find方法
    console.log('通过store添加数据要通过actions');

    let oldProduct = context.state.cartList.find( item => item.iid === payLoad.iid);

    //2.通过循环判断
    // let oldProduct = null;
    // for(let item of context.state.cartList){
    //   if( item.iid === payLoad.iid){
    //     oldProduct = item;
    //     console.log(item.idd+'------'+payLoad.iid);

    //   }
    // }
    if( oldProduct ){
      context.commit('addCount',oldProduct);
    }else{
      payLoad.count = 1;
      context.commit('addToCarts',payLoad);
    }
  }
}
