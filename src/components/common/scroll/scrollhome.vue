<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    };
  },

  mounted() {
    // this.$nextTick(() => {
    this.scroll = new BScroll(this.$refs.wrapper, {
      startX: 0,
      srcollX: true,
      scrollY: false,
      eventPassthrough: "vertical",
      click: true
    });
    // });
  }
};
</script>
<style scoped>
</style>