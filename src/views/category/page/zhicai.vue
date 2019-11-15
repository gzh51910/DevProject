<template>
  <div>
    <nav-bar class="head">
      <div slot="left">
        <a class="back" href="#/category"></a>
      </div>
      <div slot="center">
        <h2 class="headTitle">海外直采专场</h2>
      </div>
      <div slot="right">
        <a class="navbar"></a>
      </div>
    </nav-bar>
    <el-row style="margin-top:40px" class="banner">
      <el-col :span="24">
        <a style="display:block;background:#f5f5f5">
          <img src="https://img07.jiuxian.com/bill/2017/0930/7b3f820bcecf48d08de46e70ded3cd46.jpg" />
        </a>
      </el-col>
    </el-row>
    <div class="haibig" :db="db">
      <div class="banner">
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img06.jiuxian.com/bill/2017/0930/2d84b86c09c848d7ac4ca4b80381c180.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in goods1"
          :key="id"
          @click.native="goto(item._id,db)"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img :src="item.goods_thumb" class="image" />
              <p class="names">{{item.goods_name}}</p>
            </div>
            <div class="orice">
              <p class="goodlist">
                <span class="price">￥{{item.price}}</span>
                <del>{{item.shop_price}}</del>
              </p>
              <div style=" position: absolute;bottom:5px ;right:0px">
                <el-button type="danger" size="mini">点击购买</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="banner">
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img08.jiuxian.com/bill/2017/0930/8a0708ae3c5e4d4dad7d16faff7ca1c3.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in goods2"
          :key="id"
          @click.native="goto(item._id,db)"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img :src="item.goods_thumb" class="image" />
              <p class="names">{{item.goods_name}}</p>
            </div>
            <div class="orice">
              <p class="goodlist">
                <span class="price">￥{{item.price}}</span>
                <del>{{item.shop_price}}</del>
              </p>
              <div style=" position: absolute;bottom:5px ;right:0px">
                <el-button type="danger" size="mini">点击购买</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="banner">
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img10.jiuxian.com/bill/2017/0930/c7792ed6259d4eaa841ab77247e9b873.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in goods1"
          :key="id"
          @click.native="goto(item._id,db)"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img :src="item.goods_thumb" class="image" />
              <p class="names">{{item.goods_name}}</p>
            </div>
            <div class="orice">
              <p class="goodlist">
                <span class="price">￥{{item.price}}</span>
                <del>{{item.shop_price}}</del>
              </p>
              <div style=" position: absolute;bottom:5px ;right:0px">
                <el-button type="danger" size="mini">点击购买</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="banner">
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img09.jiuxian.com/bill/2017/0930/0e14c594f8eb45ed87b23f397954b3e8.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in goods2"
          :key="id"
          @click.native="goto(item._id,db)"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img :src="item.goods_thumb" class="image" />
              <p class="names">{{item.goods_name}}</p>
            </div>
            <div class="orice">
              <p class="goodlist">
                <span class="price">￥{{item.price}}</span>
                <del>{{item.shop_price}}</del>
              </p>
              <div style=" position: absolute;bottom:5px ;right:0px">
                <el-button type="danger" size="mini">点击购买</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="bottomBtn">
        <a class="toTop">
          <i></i>
          <span>
            返回
            <br />顶部
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "../../../components/common/navBar/navBar.vue";
import "../../../assets/css/list.css";
import { my } from "../../../network";
export default {
  data() {
    return {
      goods1: [],
      goods2: [],
      goods3: [],
      goods4: [],
      db: "sheet7"
    };
  },

  async created() {
    let db = { gather: "sheet7" };
    let {
      data: { data: goods }
    } = await my.get("/gdlist", db);
    this.goods1 = goods.splice(0, 14);
    this.goods2 = goods.splice(0, 12);
    this.goods3 = goods.splice(0, 6);
    this.goods4 = goods.splice(0, 8);
  },
  components: {
    NavBar
  },
  methods: {
    goto(id, db) {
      this.$router.push({ path: "/goods", params: { id, db } });
    }
  }
};
</script>
<style scoped>
.haibig {
  overflow: auto;
  background-color: #006699;
}
/* .head {
  width: 100%;
  height: 40px;
  background-color: #de4943;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 10;
}
.head .back {
  margin-left: 5px;
  width: 30px;
  height: 40px;
  position: absolute;
  top: 0;
  display: block;
  background: url(../img/headBack.jpg) no-repeat;
}
.head .headTitle {
  width: 220px;
  font-size: 16px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  line-height: 40px;
}
.head .navbar {
  background: url(../img/headIcon.png) no-repeat;
}
.head .navbar {
  background-position: -150px 6px;
  right: 10px;
  width: 30px;
  height: 40px;
  display: block;
  position: absolute;
}
.banner {
  padding-left: 0px;
}
.banner img {
  width: 100%;
  height: auto;
}
.price {
  color: red;
}
.names {
  height: 28px;
  line-height: 14px;
  width: 90%;
  margin: 2% 5%;
  font-size: 12px;
  color: #000;
  text-align: center;
  overflow: hidden;
}
.orice {
  display: inline-block;
  height: 32px;
  width: 160px;
  margin: 5px 5% 0;
  position: relative;
  overflow: hidden;
}
.orice span {
  display: inline-block;
  text-align: left;
  font-weight: bold;
  font-size: 14px;
  width: 48px;
}
.orice del {
  color: #7a7a7a;
  font-size: 12px;
  padding-left: 3px;
}
.goodlist {
  width: 95px;
  height: 32px;
  float: left;
}
.goodlist .goBuy {
  background: #ff0000;
  display: block;
  float: right;
  width: 53px;
  height: 24px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border-radius: 3px;
  margin-top: 4px;
}
.btn {
  background: #ff0000;
  display: block;
  text-align: right;
  width: 64px;
  height: 24px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border-radius: 3px;
  margin-top: 4px;
}
.image {
  width: 140px;
  width: 140px;
  text-align: center;
}
.bottomBtn {
  width: 100%;
  height: 116px;
  padding: 30px 0px;
}
.toTop {
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto;
  border-radius: 50px;
  border: 3px solid #ff2753;
  background-color: #fff;
}
.toTop span {
  width: 100%;
  height: auto;
  display: block;
  text-align: center;
  color: #280130;
  line-height: 15px;
  font-size: 14px;
}
.toTop i {
  width: 14px;
  height: 9px;
  display: block;
  background: url(../img/top.png) no-repeat;
  margin: 5px 19px 2px;
} */
</style>