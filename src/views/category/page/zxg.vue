<template>
  <div>
    <nav-bar class="head">
      <div slot="left">
        <a class="back" href="#/category"></a>
      </div>
      <div slot="center">
        <h2 class="headTitle">整箱购</h2>
      </div>
      <div slot="right">
        <a class="navbar"></a>
      </div>
    </nav-bar>
    <div class="big">
      <el-row class="banner">
        <el-col :span="24">
          <a>
            <img
              src="https://img09.jiuxian.com/bill/2017/1124/f7ef42a58bcb432f9fdde9f50340a3d5.jpg"
            />
          </a>
        </el-col>
      </el-row>
      <div class="kong">
        <ul></ul>
      </div>
      <div class="banner">
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img06.jiuxian.com/bill/2017/1219/6e9f330c82594e19a87ddf8899c4cdd2.jpg"
              />
            </a>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <a href>
              <img
                src="https://img07.jiuxian.com/bill/2018/0227/908ccf1dfd7c4d54b7e3544201f7e619.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in 6"
          :key="id"
          @click.native="goto('/goods')"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0'}"  @click="goto">
            <div style="text-align: center;">
              <img
                src="http://img06.jiuxian.com/2017/1117/81dd4b2df63e41faac94f6e9fcb8e6734.jpg"
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
      <div class="banner">
        <el-row>
          <el-col>
            <a href>
              <img
                src="https://img08.jiuxian.com/bill/2018/0226/2f68ee2e81404b6394289e452bb0f3b7.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="5" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in 4"
          :key="id"
          @click.native="goto('/goods')"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                src="http://img10.jiuxian.com/2019/0926/4a3ab3a9f67f495ba7c880e9178251914.jpg"
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
      <div class="banner">
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img07.jiuxian.com/bill/2017/0930/5527dc8588e64c35a34fcd85382ad94b.jpg"
              />
            </a>
          </el-col>
          <el-col>
            <a href>
              <img
                src="https://img06.jiuxian.com/bill/2018/0315/dbd6570350e64cc39410f7d34a2befc7.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="5" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in 4"
          :key="id"
          @click.native="goto('/goods')"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0px',height:'248px'}">
            <div style="text-align: center;">
              <img
                src="http://img10.jiuxian.com/2017/0707/7b2fc91d759f43799bffd1ba0cc2209c4.jpg"
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
      <div class="banner">
        <el-row>
          <el-col>
            <a href>
              <img
                src="https://img09.jiuxian.com/bill/2018/0226/8aec5e35f5eb4ea5b58d456d094d1c9c.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="5" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in 4"
          :key="id"
          @click.native="goto('/goods')"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                src="http://img08.jiuxian.com/2019/0311/832899553f0e453dab9008205aa0c5a64.jpg"
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
      <div class="banner">
        <el-row>
          <el-col>
            <a href>
              <img
                src="https://img08.jiuxian.com/bill/2018/0226/1a97b11ec1a5408b860df9da55a0d480.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="5" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in 4"
          :key="id"
          @click.native="goto('/goods')"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                src="http://img07.jiuxian.com/2019/1107/ac83abf71ef44c7a9a4c346d2ef1fcbe4.jpg"
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
      <div class="banner">
        <el-row>
          <el-col :span="24">
            <a href>
              <img
                src="https://img08.jiuxian.com/bill/2017/0930/755d40a915e343bdb91efa4740fa2e30.jpg"
              />
            </a>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <a href>
              <img
                src="https://img06.jiuxian.com/bill/2018/0226/2a0a71714fbb41a68f665009236288a5.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="5" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in 6"
          :key="id"
          @click.native="goto('/goods')"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                src="http://img10.jiuxian.com/2019/1107/761b68cbd06a442fbf7d9015c82de08c4.jpg"
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
      <div class="banner">
        <el-row>
          <el-col>
            <a href>
              <img
                src="https://img09.jiuxian.com/bill/2017/1026/241298626e0748188b56d88fe7df9d9b.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="5" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in 4"
          :key="id"
          @click.native="goto('/goods')"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                src="http://img09.jiuxian.com/2014/0630/7eb77227ad39494dba6cde86246cd6034.jpg"
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
      <div class="banner">
        <el-row>
          <el-col>
            <a href>
              <img
                src="https://img10.jiuxian.com/bill/2017/0915/52082d77ecc44f298ef5efa1af037421.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="5" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in 5"
          :key="id"
          @click.native="goto('/goods')"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                src="http://img10.jiuxian.com/2017/0503/f1b75021f2a44fe5b0ac61391c24247b4.jpg"
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
      <el-row :gutter="5" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in 2"
          :key="id"
          @click.native="goto('/goods')"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                src="http://img10.jiuxian.com/2016/0509/f4e0df8ca8194e4fb3412972af9dee6d4.jpg"
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
        <a href class="toTop">
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
// import request from '../../../network/'
export default {
    data(){
        return{
            // list=[]
        }
    },
    components: {
        NavBar
    },
    methods:{
        goto(){
            this.$router.push('/goods')
        }
    }
}
</script>
<style  scoped>
.big {
  padding-top: 40px;
  overflow: auto;
  background-color: #f5f5f5;
}
.banner {
  padding-left: 10px;
}
.banner img {
  width: 100%;
  height: auto;
}
.kong ul {
  padding-bottom: 5px;
  margin: 0 auto;
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
  width: 95px;
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
}
</style>