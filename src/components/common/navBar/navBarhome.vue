<!--  -->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  height: 40px;
  /* background-color: rgba(red, green, blue, .5); */
}
.left {
  width: 80px;
}
.right {
  flex: 1;
}
</style>