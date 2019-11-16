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
    <div class="big" :db="db">
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
      <el-row :gutter="5" class="banner">
        <el-col
          :span="11"
          v-for="(item) in goods1"
          :key="item._id"
          @click.native="goto(item._id,db)"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0'}">
            <div style="text-align: center;">
              <img
                :src="item.goods_thumb"
                class="image"
              />
              <p class="names">{{item.goods_name}}</p>
            </div>
            <div class="orice">
              <p class="goodlist">
                <span class="price">￥{{item.price}}</span>
                <del>{{item.shop_price}}</del>
              </p>
              <div 
                style=" position: absolute;bottom:5px ;right:0px"> 
                <el-button type="danger" size="mini">点击购买</el-button>
              </div>
             
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
          v-for="(item,id) in goods2"
          :key="id"
          @click.native="goto(item._id,db)"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                :src="item.goods_thumb"
                class="image"
              />
              <p class="names">{{item.goods_name}}</p>
            </div>
            <div class="orice">
              <p class="goodlist">
                <span class="price">￥{{item.price}}</span>
                <del>{{item.shop_price}}</del>
              </p>
              <div 
                style=" position: absolute;bottom:5px ;right:0px"> 
                <el-button type="danger" size="mini">点击购买</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="banner">
        <el-row>
          <el-col>
            <a href>
              <img
                src="https://img10.jiuxian.com/bill/2018/0117/4429e09b09c74cd7a90e280a4f6d5c6f.jpg"
              />
            </a>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="5" class="banner">
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
                :src="item.goods_thumb"
                class="image"
              />
              <p class="names">{{item.goods_name}}</p>
            </div>
            <div class="orice">
              <p class="goodlist">
                <span class="price">￥{{item.price}}</span>
                <del>{{item.shop_price}}</del>
              </p>
               <div 
                style=" position: absolute;bottom:5px ;right:0px"> 
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
          v-for="(item,id) in goods4"
          :key="id"
          @click.native="goto(item._id,db)"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
           <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                :src="item.goods_thumb"
                class="image"
              />
              <p class="names">{{item.goods_name}}</p>
            </div>
            <div class="orice">
              <p class="goodlist">
                <span class="price">￥{{item.price}}</span>
                <del>{{item.shop_price}}</del>
              </p>
               <div 
                style=" position: absolute;bottom:5px ;right:0px"> 
                <el-button type="danger" size="mini">点击购买</el-button>
              </div>
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
          v-for="(item,id) in goods1"
          :key="id"
          @click.native="goto(item._id,db)"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
          <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                :src="item.goods_thumb"
                class="image"
              />
              <p class="names">{{item.goods_name}}</p>
            </div>
            <div class="orice">
              <p class="goodlist">
                <span class="price">￥{{item.price}}</span>
                <del>{{item.shop_price}}</del>
              </p>
               <div 
                style=" position: absolute;bottom:5px ;right:0px"> 
                <el-button type="danger" size="mini">点击购买</el-button>
              </div>
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
          v-for="(item,id) in goods2"
          :key="id"
          @click.native="goto(item._id,db)"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
           <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                :src="item.goods_thumb"
                class="image"
              />
              <p class="names">{{item.goods_name}}</p>
            </div>
            <div class="orice">
              <p class="goodlist">
                <span class="price">￥{{item.price}}</span>
                <del>{{item.shop_price}}</del>
              </p>
               <div 
                style=" position: absolute;bottom:5px ;right:0px"> 
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
          v-for="(item,id) in goods3"
          :key="id"
          @click.native="goto(item._id,db)"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
           <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                :src="item.goods_thumb"
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
          v-for="(item,id) in goods4"
          :key="id"
          @click.native="goto(item._id,db)"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
           <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                :src="item.goods_thumb"
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
          v-for="(item,id) in goods1"
          :key="id"
          @click.native="goto(item._id,db)"
          style="height:'248px'; width:'176px';background:#fff;margin:5px"
        >
           <el-card :body-style="{padding: '0',height:'248px'}">
            <div style="text-align: center;">
              <img
                :src="item.goods_thumb"
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
      <el-row :gutter="5" class="banner">
        <el-col
          :span="11"
          v-for="(item,id) in 2"
          :key="id"
          @click.native="goto(item._id,db)"
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
              <div style=" position: absolute;bottom:5px ;right:0px"> 
                <el-button type="danger" size="mini">点击购买</el-button>
              </div>
             
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
import {my} from '../../../network'
import "../../../assets/css/list.css"
export default {
    data(){
        return{
          goods1 : [],
          goods2 : [],
          goods3 : [],
          goods4 : [],
          db :"sheet4"
        }
    },
   
  async created(){
     let db = {gather:"sheet4"}
    let {data:{data:goods}}= await my.get("/gdlist",db)
    this.goods1=goods.splice(0,6);
    this.goods2=goods.splice(0,4);
    this.goods3=goods.splice(0,6);
    this.goods4=goods.splice(0,7);
  },
    components: {
        NavBar
    },
    methods:{
        goto(id,db){
            this.$router.push({name:'goods',params:{id,db}});
            // console.log(this.$route)
            console.log(id,db);
            
        }
    }
}
</script>
<style scoped>
.big {
  overflow: auto;
  margin-top: 40px;
  background-color: #f5f5f5;
  
}
/* .price{
  color: red;
}
.head {
 
    width: 100%;
    height: 40px;
    background-color: #de4943;
    color: #fff;
    position: fixed;
    top:0;
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
    line-height: 40px
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