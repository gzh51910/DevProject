
<template style="background: #f3f5f6;">
  <!-- 头-->
  <div>
    <navBar style="background: #f3f5f6;color:#333">
      <div class="left" slot="left">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="center" slot="center">购物车</div>
      <div class="right" slot="right">
        <i class="el-icon-menu" style></i>
      </div>
    </navBar>
    <!--提示说明 -->
    <el-row class="cartTip" style="color: #ff3333;">
      <i class="el-icon-warning" style="float:left;margin-left:6px;margin-top:4px"></i>
      <p style="float:left;margin-left:10px;">自营商品实付满100元免运费，偏远地区满500免运费</p>
    </el-row>

    <el-row
      style="background:#f3f5f6;margin-top:8px;margin-bottom:2px"
      v-for="item in goodslist"
      :key="item.goods_id"
    >
      <!-- 商品店铺 -->
      <el-row class="sName">
        <el-checkbox v-model="checked" :span="4" class="sNameCheckbox"></el-checkbox>
        <span class="sNameText">博酒汇官方旗舰店</span>
      </el-row>
      <!-- 商品信息 -->
      <el-row style="padding:20px 0px 30px 0px;min-height:80px">
        <el-checkbox v-model="checked" class="goodsCheckbox"></el-checkbox>
        <el-col :span="6" style="margin-left:40px">
          <div class="cartPhoto">
            <img :src="item.goods_thumb" alt />
          </div>
        </el-col>
        <el-col :span="14" style="padding-left:10px">
          <p>{{item.goods_name}}</p>
          <em class="cartPrice">{{item.price}}</em>
          <span class="textOri">{{item.proshop2}}</span>
          <span class="textPul">{{item.xx}}</span>
        </el-col>
        <el-input-number v-model="item.qty" :min="1" :max="10" size="small" class="goodsNum"></el-input-number>
        <a href="#" class="removeGoods" @click="removeGoods(item.goods_id)">删除</a>
      </el-row>
    </el-row>
    <!-- 总计 -->
    <el-row class="totalPrice totalBox">
      <el-checkbox v-model="checked" class="totalCheckout"></el-checkbox>
      <p class="cartLeft AllCheckText">全选</p>
      <div class="cartLeft">
        <p>
          合计：
          <span style="color: #ff3333;">￥{{totalPrice.toFixed(2)}}</span>
        </p>
      </div>
      <div class="cartRight goto">去结算({{listLength}})</div>
    </el-row>
  </div>
</template>

<script>
import navBar from "../../components/common/navBar/navBar.vue";
export default {
  data() {
    return {
      checked: true
    };
  },
  computed: {
    goodslist() {
      return this.$store.state.cart.goodslist;
    },
    totalPrice(){
      return this.$store.getters.totalPrice;
    },
    listLength(){
      return this.$store.state.cart.goodslist.length;

    }
  },
  methods: {
    removeGoods(id) {
      this.$store.commit("removeGoods", id);
    }
  },
  components: {
    navBar
  }
};
</script>
<style  lang="css" scoped>
body {
  background: #f3f5f6;
}
em {
  font-style: normal;
}
.cartRight {
  float: right;
}
.cartLeft {
  float: left;
}
.left,
.right,
.center {
  color: #252525;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
}
.cartTip {
  border-top: 1px solid #ffe9c6;
  border-bottom: 1px solid #ffe9c6;
  background-color: #fff4e2;
  padding: 0 0 0 10px;
  font-family: "华文细黑", "黑体", "Microsoft YaHei";
  height: 22px;
  line-height: 22px;
  font-size: 12px;
}
.cartPhoto {
  width: 80px;
  height: 80px;
}
.cartPhoto img {
  width: 100%;
  height: 100%;
}
.sName {
  height: 45px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.sNameCheckbox {
  position: absolute;
  top: 10px;
  left: 10px;
}
.sNameText {
  position: absolute;
  top: 12px;
  left: 40px;
}
.goodsCheckbox {
  width: 14px;
  height: 14px;
  position: absolute;
  top: 50px;
  left: 10px;
}
.cartPrice {
  float: left;
  margin-right: 5px;
  font-size: 12px;
  color: #ff0000;
  padding: 0 0 5px;
  line-height: 18px;
}
.textOri {
  display: block;
  background-color: #ffa855;
  position: relative;
  padding: 0 3px;
  height: 16px;
  color: #ffffff;
  line-height: 16px;
  font-size: 12px;
  border-radius: 2px;
  float: left;
}
.textPul {
  display: block;
  background-color: #8888ff;
  position: relative;
  padding: 0 3px;
  height: 16px;
  color: #ffffff;
  line-height: 16px;
  font-size: 12px;
  border-radius: 2px;
  float: left;
  margin-left: 4px;
}
.goodsNum {
  position: absolute;
  bottom: 10px;
  left: 140px;
  /* width:40px; */
}
.removeGoods {
  border-left: 1px solid #666;
  text-decoration: none;
  font-size: 12px;
  height: 14px;
  line-height: 14px;
  display: block;
  color: #666;
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding-left: 10px;
  z-index: 101;
}
.totalPrice {
  height: 50px;
  background-color: #fff;
  line-height: 50px;
  width: 100%;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  position: relative;
  margin-top: 10px;
}
.totalCheckout {
  position: absolute;
  left: 10px;
}
.AllCheckText {
  margin-left: 30px;
  margin-right: 30px;
}
.goto {
  color: #fff;
  background-color: #fd5a5b;
  height: 50px;
  line-height: 50px;
  width: 98px;
  font-size: 16px;
  text-align: center;
}
</style>