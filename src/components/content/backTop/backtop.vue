
<template>
  <div class="backtop">
    <div class="back"></div>
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
.backtop {
  width: 51px;
  height: 51px;
  position: fixed;
  bottom: 70px;
  right: 12px;
  z-index: 10000;
}
.back {
  background: url(../../../assets/img/home/jx-sprite.png) no-repeat;
  display: block;
  background-position: -93px -2px;
  background-size: 150px 55px;
  width: 100%;
  height: 100%;
}
</style>