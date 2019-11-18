
<template>
  <div class="jxpd">
    <img src="../../assets/img/home/jx.jpg" alt />
    <div class="jx1">
      <img src="../../assets/img/home/jx1.jpg" alt />
      <img src="../../assets/img/home/jx2.jpg" alt />
    </div>
    <div class="jx2">
      <img src="../../assets/img/home/jx3.jpg" alt />
      <img src="../../assets/img/home/jx4.jpg" alt />
      <img src="../../assets/img/home/jx5.jpg" alt />
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
.jxpd {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.jxpd > img {
  height: 100%;
  width: 100%;
}
.jx1 {
  width: 100%;
  display: flex;
}
.jx1 > img {
  width: 50%;
}
.jx2 {
  width: 100%;
  display: flex;
}
.jx2 > img {
  width: 33.3%;
}
</style>