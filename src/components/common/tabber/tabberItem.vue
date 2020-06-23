<template>
    <div class="tab-ber-item" @click="iconChange">
      <div v-if="!isActive" class="Img-icon"><slot name="Img-icon"></slot></div>
      <div v-else class="Img-active-icon"><slot name="item-active-icon"></slot></div>
      <div :style="isActiveColor"><slot name="content"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'tabBerItem',
  props: {
    path: String,
    fontColor: {
        type: String,
        default: 'blue'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf( this.path ) !== -1;
    },
    isActiveColor(){
      return this.isActive?{color: this.fontColor}:{}
    }
  },
  methods: {
    iconChange(){

      this.$router.push(this.path);
    }
  }
}
</script>

<style>
  .tab-ber-item{
    flex : 1;
    text-align:center;
    height:49px;
    cursor: pointer;

  }
   .tab-ber-item .Img-icon img,.tab-ber-item .Img-active-icon img{
     width:25px;
     height:25px;
     margin-top:3px;
     vertical-align: middle;
     margin-bottom:2px;
  }


</style>
