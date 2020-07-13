<template>
  <div class="checkButton">
    <img src="~assets/img/cart/tick.svg" alt="" :class="{check:isChecked}">
  </div>

</template>

<script>
export default {
  name: "checkButton",
  props: {
    isChecked: {
      type: Boolean,
      default(){
        return false
      }
    }
  }
}
</script>

<style scoped>
  .checkButton{
    border-radius: 50%;
    border: 2px solid #aaa;
  }
  .check{
    background-color: var(--color-tint);
    border-color: var(--color-tint);
  }
</style>
