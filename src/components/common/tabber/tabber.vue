<template>
  <div class="tab-ber">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name : 'tabBer'
}
</script>

<style>
  .tab-ber {
    display:flex;
    background:#f6f6f6;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    box-shadow: 0 -2px 1px rgba(100,100,100,.2);
    cursor: pointer;
    z-index:9;
  }
</style>
