<template>
  <scroll class="scroll-content">
    <div class="list">
      <div class="item" v-for="(item,index) in menuList" :key="index"
                        :class = "{ active : index === currentindex }"
                        @click = "changeIndex(index)">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
 import scroll from 'components/common/scroll/scrollnew'
  export default {
    name:'TabMenu',
    props: {
      menuList:{
        type: Array
      }
    },
    components: {
      scroll
    },
    data() {
      return {
        currentindex: 0
      }
    },
    methods: {
      changeIndex(index) {
        this.currentindex = index;
        //发射给父组件  当前要显示的分类
        this.$emit('electItem', index);
      }
    }
  }
</script>

<style scoped>
  .scroll-content{
    height:100%;
    background-color: #f6f6f6;
    width: 100px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .item{
    width:100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .active{
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
</style>
