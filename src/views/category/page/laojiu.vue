<template>
  <div>
    <nav-bar class="head">
      <div slot="left">
        <a class="back" href="#/category"></a>
      </div>
      <div slot="center">
        <h2 class="headTitle">老酒馆 增值收藏佳品</h2>
      </div>
      <div slot="right">
        <a class="navbar"></a>
      </div>
    </nav-bar>
    <el-row style="margin-top:40px">
      <el-col :span="24">
        <a style="display:block;background:#bab6aa">
          <img src="https://img07.jiuxian.com/bill/2019/0527/d80c72fe759f44d8a8e253d4e05103eb.jpg" />
        </a>
      </el-col>
    </el-row>
    <div class="laobig">
      <div>
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img10.jiuxian.com/bill/2017/1012/4eae25d3575a4b40bc25357291501c00.jpg"
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
                src="http://img09.jiuxian.com/2013/1002/7bc45e5c405341a1872be2b64ee4fb174.jpg"
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
            <a href></a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in 4"
          :key="id"
          @click.native="goto('/goods')"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0'}">
            <div style="text-align: center;">
              <img
                src="http://img07.jiuxian.com/2016/0510/67b8eb12492e497eb4eb30211d9a7d074.jpg"
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
                src="https://img08.jiuxian.com/bill/2017/1012/b4ef4c58b25d4aeeb5934c85784a9bca.jpg"
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
                src="http://img09.jiuxian.com/2013/1002/7bc45e5c405341a1872be2b64ee4fb174.jpg"
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
                src="https://img10.jiuxian.com/bill/2017/1012/23e802fecd7c45c69925967678afe194.jpg"
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
                src="http://img10.jiuxian.com/2014/0426/8f837e20b47c49f798fd7414a8e9287f4.jpg"
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
                src="https://img06.jiuxian.com/bill/2017/1012/9c67102b1b1b47898aab716ab0ca1bc0.jpg"
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
                src="http://img08.jiuxian.com/2018/0302/600a7f60e6834c1587dd1a250326080d4.jpg"
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
<style lang="css" scoped>
.laobig {
  overflow: auto;
  background-color: #bab6aa;
}
</style>
