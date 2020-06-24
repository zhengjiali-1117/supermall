<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="index"
    :class="{active : index===currentIndex}" @click="changeTab(index)">
      <span class="tab-control-text">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
 name: 'TabControl',
 props: {
   titles : {
     type: Array,
     default() {
       return []
     }
   }
 },
 data() {
   return {
     currentIndex : 0
   }
 },
 methods: {
   changeTab(index) {
     this.currentIndex = index;
   }
 }
}
</script>

<style>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height:40px;
    line-height: 40px;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-text{
    padding:4px;
  }
  .active span{
    border-bottom: 2px solid red;
    color: red;
  }
</style>
