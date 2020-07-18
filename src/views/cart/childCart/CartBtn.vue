<template>
  <div id="bottm-bar">
    <div class="checked-content">
      <check-button id="allchecked" class="btn-all" @click.native = "ischeckedAll" :is-checked = "checkedAll"></check-button>
      <label for="allchecked">全选</label>
    </div>
    <div class="total-price">
      <span>合计:￥</span>
      <span>{{ totalPrice }}</span>
    </div>
    <div class="calcuted">
      <span>去计算({{length}})</span>
    </div>
  </div>
</template>

<script>
import checkButton from 'components/content/checkButton/checkButton'
  export default {
    name: "CartBtn",
    components: {
      checkButton
    },
    computed: {
      totalPrice() {
        return this.$store.state.cartList.filter( item => {
          return item.checked
        }).reduce(( total , item ) => {
             total += item.LowPrice * item.count;
             return total
        },0).toFixed(2)
      },
      length() {
        return this.$store.state.cartList.filter( item => item.checked).length;
      },
      checkedAll() {
        if(this.$store.state.cartList.length === 0) return false;
        return !this.$store.state.cartList.find( item => !item.checked)
      }
    },
    methods: {
      ischeckedAll() {
        if( this.checkedAll ){ //全部选中
          for( let i = 0 ; i < this.$store.state.cartList.length ; i ++){
            this.$store.state.cartList[i].checked = false;
          }
        }else{
          for( let i = 0 ; i < this.$store.state.cartList.length ; i ++){
            this.$store.state.cartList[i].checked = true;
          }
        }
      }
    }
  }
</script>

<style scoped>
  #bottm-bar{
    width: 100%;
    height: 40px;
    background: #eee;
    position: absolute;
    left: 0;
    bottom: 49px;
    line-height: 40px;
    display: flex;

  }
  .checked-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .btn-all{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;

  }
  .total-price{
    /* display: flex; */
    /* width: 40px; */
    margin-left: 30px;
  }
  .calcuted{
    background-color: red;
    margin-left: 74px;
    width: 100px;
    height: 40px;
    line-height:  40px;
    text-align: center;
    color: #fff;
  }
</style>
