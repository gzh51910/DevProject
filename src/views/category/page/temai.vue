<template>
  <div class="temai">
    <nav-bar class="head">
      <div slot="left">
        <a class="back" @click="$router.back(-1)"></a>
      </div>
      <div slot="center">
        <h2 class="headTitle">清仓狂甩 一瓶不留</h2>
      </div>
      <div slot="right">
        <a class="navbar"></a>
      </div>
    </nav-bar>
    <scroll class="content" ref="a" :probe-type="3">
    <el-row style="margin-top:40px" class="banner">
      <el-col :span="24">
        <a style="display:block;background:#f5f5f5">
          <img src="https://img09.jiuxian.com/bill/2017/0919/0d7969b9cf7c4492aa084abd1671d2e5.jpg" />
        </a>
      </el-col>
    </el-row>
    <div class="tebig" :db="db">
      <div class="banner">
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img07.jiuxian.com/bill/2016/1105/26f2339484254907adfdafd313c0e676.jpg"
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
                src="https://img10.jiuxian.com/bill/2016/1105/ee06313d3a504cd6a4fde6442992f6cf.jpg"
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
                src="https://img10.jiuxian.com/bill/2016/1105/57898458dcf74f649ce71d861e07169c.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in goods3"
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
      goods4: [],
      db:"sheet6"
    };
  },

  async created() {
    let db = { gather: "sheet6" };
    let {
      data: { data: goods }
    } = await my.get("/gdlist", db);
    this.goods1 = goods.splice(0, 12);
    this.goods2 = goods.splice(0, 16);
    this.goods3 = goods.splice(0, 20);
  },
  components: {
    NavBar,
    scroll
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
.tebig {
  overflow: auto;
  background-color: #f5f5f5;
}
.temai{
  height: 100vh;
   margin-top:40px; 
}
.content {
  height: calc(100% - 49px);
  overflow: hidden;
}
</style>