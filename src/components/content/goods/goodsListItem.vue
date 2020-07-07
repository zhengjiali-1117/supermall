<template>
  <div class="goods-item">
    <img :src="showImage" alt="" @load="imgLoad" @click="itemclick">
    <div class="goods-text">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsListItem',
  props: {
    goodsItem : {
      type: Object,
      default() {
        return []
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad() {
      //用事件总线发射一个方法
      this.$bus.$emit( 'imageLoad' );
    },
    itemclick() {
      this.$router.push("/shopdetail/" + this.goodsItem.iid);
      console.log(this.goodsItem.iid);

    }
  }
}
</script>

<style>
  .goods-item{
    width: 48%;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
    height:200px;
  }
  .goods-text{
    margin-bottom: 10px;
    font-size: 14px;
    text-align: center;
  }
  .goods-text p{
    width: 100%;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .goods-text .price{
    font-size: 12px;
    color: red;
  }
  .goods-text .collect::before{
    display:inline-block;
    margin-left: 15px;
    width: 14px;
    height: 14px;
    content: '';
    padding:5px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
