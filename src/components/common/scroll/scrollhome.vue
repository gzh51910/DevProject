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
      // startX: 0,
      srcollX: true,
      scrollY: false,
      eventPassthrough: "vertical",
      click: true,

      stopPropagation: true, //用法在于这一行
      probeType: 2,
      slide: {
        loop: true,
        threshold: 100
      },
      momentum: false,
      bounce: { left: false, right: false }
    });

    // });
  }
};
</script>
<style scoped>
</style>