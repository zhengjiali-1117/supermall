<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props: {
    probeType:{
      type: Number,
      default: 0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,//监听滚动数据x，y
        pullUpLoad: this.pullUpLoad //下拉加载
        })

        //监听滚动时间
        if( this.probeType === 2 || this.probeType === 3 ){
          this.scroll.on('scroll',(position)=>{
             this.$emit('scroll', position);
          })
        }

        //监听下拉加载事件
        if( this.pullUpLoad ){
          this.scroll.on("pullingUp",()=>{
            console.log('下拉加载更多');
            this.$emit('pullUpLoad');
          })
        }
  },
  computed: {
    scrollY(){
      return this.scroll.y;
    }
  },
  methods: {
    scrollTo(x,y,time){
      this.scroll && this.scroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    },
    refresh() {
      console.log('------');

      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll.y ? this.scroll.y : 0;
    }
  }
}
</script>

<style scoped>

</style>
