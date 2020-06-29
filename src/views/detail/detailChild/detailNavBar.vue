<template>
    <nav-bar>
      <div slot="left" @click="btnBack">
        <img src="~assets/img/common/back.svg" ait="">
      </div>

      <div class="item" slot="center" >
        <div class="item-text" v-for="(item,index) in title" :key="index"
                               @click="changeItem(index)">
          <span :class="{color: currentIndex == index}" @click="paramPage(index)">{{item}}</span>
        </div>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/navBar'

export default {
  name: "detailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      iid : null,
      title: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  created() {
    this.iid = this.$route.params.iid;

  },
  methods: {
    changeItem(index) {
      this.currentIndex = index;
    },
    btnBack() {
      this.$router.go(-1);
    },
    paramPage(index) {
      this.$emit("paramPage",index)
    }
  }
}
</script>

<style scoped>

  img{
    width: 40%;
    vertical-align: middle;
  }
  .item{
    display: flex;
  }
  .item .item-text{
    flex: 1;
  }
  .color{
    color:red;
  }

</style>
