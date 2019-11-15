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
          <img src="https://img07.jiuxian.com/bill/2017/1012/dbe13e18484448c4a3af7ae0e5bc75ce.jpg" />
        </a>
      </el-col>
    </el-row>
    <div class="tanbig">
      <div>
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img10.jiuxian.com/bill/2017/1012/04fdc638c8d94bee8024d49b7cbe389d.jpg"
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
                src="https://img09.jiuxian.com/bill/2017/1012/cc6b11847cd149928a412436662b590e.jpg"
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
      <div>
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img10.jiuxian.com/bill/2017/1012/be85fffac1ea4ed1b1e4c9040f436c42.jpg"
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
                src="http://img08.jiuxian.com/2016/0419/02885e966b044a6eb14efb075a7258874.jpg"
                class="image"
              />
              <p class="names">53°茅台生肖酒国博十二生肖纪念酒500ML*12瓶</p>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <div class="bottomBtn">
        <a  class="toTop">
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
.tanbig {
  overflow: auto;
  background-color: #f5f5f5;
}
</style>