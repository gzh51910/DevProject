<template>
  <div>
    <nav-bar class="head">
      <div slot="left">
        <a class="back" href="#/category"></a>
      </div>
      <div slot="center">
        <h2 class="headTitle">一键选酒-畅饮大坛</h2>
      </div>
      <div slot="right">
        <a class="navbar"></a>
      </div>
    </nav-bar>
    <el-row style="margin-top:40px">
      <el-col :span="24">
        <a style="display:block;background:#f5f5f5">
          <img src="https://img10.jiuxian.com/bill/2017/0930/81ced0829afe4bc88496806bcaccd4d4.jpg" />
        </a>
      </el-col>
    </el-row>
    <div class="hongbig">
      <div>
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img10.jiuxian.com/bill/2017/0930/5a05cc575e0741d3b93e9d9748a5a4a6.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in 5"
          :key="id"
          @click.native="goto('/goods')"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0'}">
            <div style="text-align: center;">
              <img
                src="http://img06.jiuxian.com/2019/1106/3f7e5df6f2b0403dba87dc237d1928b34.png"
                class="image"
              />
              <p class="names">53°茅台生肖酒国博十二生肖纪念酒500ML*12瓶</p>
            </div>
            <div class="orice">
              <p class="goodlist">
                <span class="price">￥333</span>
                <del>666</del>
              </p>
              <a href>点击购买</a>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div>
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img10.jiuxian.com/bill/2017/0930/5a05cc575e0741d3b93e9d9748a5a4a6.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in 5"
          :key="id"
          @click.native="goto('/goods')"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0'}">
            <div style="text-align: center;">
              <img
                src="http://img08.jiuxian.com/2016/0526/7127a5cff3334d23b2772f3d935635374.jpg"
                class="image"
              />
              <p class="names">53°茅台生肖酒国博十二生肖纪念酒500ML*12瓶</p>
            </div>
            <div class="orice">
              <p class="goodlist">
                <span class="price">￥333</span>
                <del>666</del>
              </p>
              <a href>点击购买</a>
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
import { Script } from "vm";

export default {
  data() {
    return {};
  },
  components: {
    NavBar
  },
   methods:{
        goto(){
            this.$router.push('/goods')
        }
    }
};
</script>
<style scoped>
.hongbig {
  overflow: auto;
  background-color: #d4b9e4;
}
</style>