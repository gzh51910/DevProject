<template>
  <div class="itemFlex">
    <img src="../../assets/img/home/1.jpg" alt />
    <div class="pba2">
      <img src="../../assets/img/home/2.jpg" alt />
      <img src="../../assets/img/home/3.jpg" alt />
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
.itemFlex {
  width: 100%;
  display: flex;
  height: 220px;
}
.itemFlex > img {
  width: 50%;
}
.pba2 {
  display: flex;
  flex-direction: column;
}
.pba2 img {
  width: 100%;
  height: 50%;
}
</style>