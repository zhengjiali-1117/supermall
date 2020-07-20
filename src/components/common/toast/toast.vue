<template>
  <div id="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    showToast(message="",time=1500) {
      this.message = message;
      this.isShow = true;

      setTimeout(()=>{
        this.isShow = false;
        this.message = '';
      },time)
    }
  }
}
</script>

<style scoped>
  #toast{
    position: fixed;
    left: 50%;
    top: 50%;
    border-radius: 5px;
    transform: translate(-50%,-50%);
    padding: 10px 8px;
    background-color: rgba(0,0,0,.7);
    text-align: center;
    color: #fff;
    z-index: 99;
  }
</style>
