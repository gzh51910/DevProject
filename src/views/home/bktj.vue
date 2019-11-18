<!--  -->
<template>
  <div class="bktj">
    <h4 style="width:100%;height:65px;line-height:33px;text-align: center;color: #666666;font-size: 12px;">爆款推荐</h4>
    <el-row :gutter="0" class="b-list">
      <el-col v-for="item in list" :key="item._id" :span="12">
        <div class="b-list1" @click="goto(item._id,db)">
          <span class="xsqg" :style="{'background':item.promo[0].backColor}">{{item.promo[0].name}}</span>
          <img v-lazy="item.commonProductInfo.imgPath" alt />
          <span class="name">{{item.commonProductInfo.pname}}</span>
          <div class="b-price">
            <span class="price">￥{{item.commonProductInfo.jxPrice}}</span>
            <del class="y-price">￥{{item.commonProductInfo.actPrice}}</del>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { my } from "../../network";

export default {
  data() {
    return {
      db: "list",
      list: []
    };
  },
  async created() {
    let {
      data: { data: list }
    } = await my.get("/gdlist", {
      gather: "list"
    });
    this.list = list;
  },
  methods: {
    goto(id, db) {
      this.$router.push({ name: "hdetail", params: { id, db } });
      console.log(id, db);
    }
  }
};
</script>
<style scoped>
.b-list {
  width: 100%;
  background: #f3f5f6;
}
.b-list1 {
  padding: 20px 10px 5px;
  height: 244px;
  margin: 0 1% 1% 0;
  background: #fff;
  position: relative;
}
.b-list1 > img {
  width: 100%;
}
.name {
  font-size: 12px;
  line-height: 16px;
  vertical-align: top;
  color: #252525;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.price {
  font-size: 14px;
  color: #fc5a5a;
  font-weight: normal;
}
.y-price {
  color: #999;
  display: inline-block;
  font-size: 12px;
  margin-left: 5px;
}
.xsqg {
  display: block;
  width: 59px;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  position: absolute;
  top: 3px;
  left: 5px;
  color: #fff;
  border-radius: 3px;
  text-align: center;
}
</style>