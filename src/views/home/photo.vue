<!--  -->
<template>
  <div class="photo">
    <div class="photo1" v-for="item in nav" :key="item.id">
      <img v-lazy="item.src" alt />
    </div>
  </div>
</template>

<script>
import { my } from "../../network";
export default {
  data() {
    return {
      nav: []
    };
  },
  async created() {
    let {
      data: { data: nav }
    } = await my.get("/gdlist", {
      gather: "nav"
    });
    this.nav = nav;
  }
};
</script>
<style scoped>
.photo1 {
  width: 100%;
}
.photo1 img {
  width: 100%;
}
</style>