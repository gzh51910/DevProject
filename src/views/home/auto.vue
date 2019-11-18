
<template>
  <div class="auto1">
    <div class="auto">
      <div class="autoitem" v-for="item in gdlist" :key="item._id" @click="ceshi(item._id,db)">
        <img v-lazy="item.proImg" alt />
        <span class="name">{{item.proName}}</span>
        <span class="price">￥{{item.jxPrice}}</span>
        <del class="y-price">￥{{item.proPrice}}</del>
      </div>
    </div>
  </div>
</template>

<script>
import { my } from "../../network";
export default {
  data() {
    return {
      db: "gdlist",
      gdlist: []
    };
  },
  async created() {
    let {
      data: { data: gdlist }
    } = await my.get("/gdlist", {
      gather: "gdlist"
    });
    this.gdlist = gdlist;
  },
  methods: {
    ceshi(id, db) {
      this.$router.push({ name: "homelist", params: { id, db } });
    }
  }
};
</script>
<style scoped>
.auto1 {
  width: 1000px;
}
.auto {
  width: 1100px;

  margin-right: 10px;
  display: flex;
  padding-left: 10px;
}
.autoitem > img {
  width: 100%;
}
.autoitem {
  width: 100px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
.name {
  color: #252525;
  height: 32px;
  line-height: 16px;
  overflow: hidden;
  font-size: 12px;
}
.price {
  color: #fc5a5a;
  font-size: 14px;
  line-height: 14px;
  margin-top: 5px;
}
.y-price {
  display: block;
  color: #999999;
  font-size: 12px;
  line-height: 14px;
}
</style>