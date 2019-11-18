<template>
  <div class="li">
    <nav-bar class="head">
      <div slot="left">
        <a class="back" @click="$router.back(-1)"></a>
      </div>
      <div slot="center">
        <h2 class="headTitle">一键选酒-礼遇美酒</h2>
      </div>
      <div slot="right">
        <a class="navbar"></a>
      </div>
    </nav-bar>
    <scroll class="content" ref="a" :probe-type="3">
    <el-row style="margin-top:40px" class="banner">
      <el-col :span="24">
        <a style="display:block;background:#f5f5f5">
          <img src="https://img09.jiuxian.com/bill/2017/0515/978c4dabc6d249b0966b2a8dd9f9bee8.jpg" />
        </a>
      </el-col>
    </el-row>
    <div class="libig" :db="db">
      <div class="banner">
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img06.jiuxian.com/bill/2016/1118/25eceab475194d639d933a3b582b31a1.jpg"
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
              <img
                v-lazy="item.goods_thumb"
                class="image"
              />
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
                src="https://img08.jiuxian.com/bill/2016/1118/d439350889a64a04ab2991be42cec1e6.jpg"
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
              <img
                v-lazy="item.goods_thumb"
                class="image"
              />
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
                src="https://img06.jiuxian.com/bill/2016/1118/6e372d4bdf314d4e9ec8d6d81385cf7d.jpg"
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
              <img
                v-lazy="item.goods_thumb"
                class="image"
              />
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
        <a class="toTop" @click="backclick">
          <i></i>
          <span>
            返回
            <br />顶部
          </span>
        </a>
      </div>
    </div>
    </scroll>
  </div>
</template>
<script>
import NavBar from "../../../components/common/navBar/navBar.vue";
import scroll from "../../../components/common/scroll/scroll.vue";
import { my } from "../../../network";
import "../../../assets/css/list.css"
export default {
  data() {
    return {
      goods1: [],
      goods2: [],
      goods3: [],
      db:"sheet12"
    };
  },

  async created() {
    let db = { gather: "sheet12" };
    let {
      data: { data: goods }
    } = await my.get("/gdlist", db);
    this.goods1 = goods.splice(0, 7);
    this.goods2 = goods.splice(0, 8);
    this.goods3 = goods.splice(0, 7);
  },
  components: {
    NavBar,scroll
  },
  methods: {
     goto(id, db) {
      this.$router.push({name: "goods", params: { id, db } });
    },
     backclick() {
      this.$refs.a.scrollTo(0, 0);
    },
  }
};
</script>
<style scoped>
.libig {
  overflow: auto;
  background-color: #e8e8e0;
}
.li{
  height: 100vh;
   margin-top:40px; 
}
.content {
  height: calc(100% - 49px);
  overflow: hidden;
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
} */
</style>