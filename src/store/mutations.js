export default {
  //mutations处理数据时 尽量单一 一点
  //商品数量加一
  addCount( state, payLoad) {
    payLoad.count ++;
  },
  addToCarts(state,payLoad) {
    //记录被添加到购物车的商品  默认在购物车中选中
    payLoad.checked = true;
    state.cartList.push(payLoad);
  },
}
