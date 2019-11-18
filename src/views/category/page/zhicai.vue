<template>
  <div class="zhicai">
    <nav-bar class="head">
      <div slot="left">
        <a class="back" @click="$router.back(-1)"></a>
      </div>
      <div slot="center">
        <h2 class="headTitle">海外直采专场</h2>
      </div>
      <div slot="right">
        <a class="navbar"></a>
      </div>
    </nav-bar>
    <scroll class="content" ref="a" :probe-type="3">
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
              <img v-lazy="item.goods_thumb" class="image" />
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
              <img v-lazy="item.goods_thumb" class="image" />
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
              <img v-lazy="item.goods_thumb" class="image" />
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
              <img v-lazy="item.goods_thumb" class="image" />
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
        <a class="toTop" @click="backclick" >
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
.haibig {
  overflow: auto;
  background-color: #006699;
}
.zhicai{
  height: 100vh;
   margin-top:40px; 
}
.content {
  height: calc(100% - 49px);
  overflow: hidden;
}

</style>