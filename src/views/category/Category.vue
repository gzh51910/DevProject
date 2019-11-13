
<template>
  <div>
     <nav-bar class="head">
      <div slot="left"><a class="back"></a></div>
      <div slot="center"><h2 class="headTitle">选酒</h2></div>
      <div slot="right"><a class="navbar"></a></div>
    </nav-bar>
    <div style="background:#fff;padding:5px 15px;background-color:#ececec">
      <el-input placeholder="请输入内容" v-model="input" >
        <template slot="prepend">搜索</template>
      </el-input>
    </div>
    <el-row>
      <el-col 
      class="list"
      :span="8" 
      v-for="(item,id) in goodslist" 
      :key="id"
      >
      <div  @click="goto"><i :class="item.class" ></i>{{item.text}}</div></el-col>
    </el-row>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/navBar.vue";
export default {
  data() {
    return {
      goodslist:[
        {
          text:"白酒",
          path:"/goodslist",
          class:"f1"
        },
        {
          text:"葡萄酒",
          path:"/goodslist",
          class:"f2"
        },
        {
          text:"洋酒",
          path:"/goodslist",
          class:"f3"
        },
        {
          text:"整箱酒",
          path:"/goodslist",
          class:"f4"
        },
        {
          text:"老酒",
          path:"/goodslist",
          class:"f5"
        },
        {
          text:"清仓特卖",
          path:"/goodslist",
          class:"f6"
        },
        {
          text:"海外直采",
          path:"/goodslist",
          class:"f7"
        },
        {
          text:"精美大坛",
          path:"/goodslist",
          class:"f8"
        },
        {
          text:"红酒整箱",
          path:"/goodslist",
          class:"f9"
        },
        {
          text:"值得买",
          path:"/goodslist",
          class:"f10"
        },
        {
          text:"销量排行",
          path:"/goodslist",
          class:"f11"
        },
         {
          text:"礼尚往来",
          path:"/goodslist",
          class:"f12"
        },
      ],
    };
  },
   components: {
    NavBar
  },
  methods: {
    goto(){
      this.$router.push('/goodlist');
      console.log(666);
      
    }
  },
  watch: {
    $route:{

    }
  },
};
</script>
<style>
.head {
    height: 40px;
    background-color: #de4943;
    color: #fff;
}
.head .back {
    margin-left: 5px;
    width: 30px;
    height: 40px;
    position: absolute;
    top: 0;
    display: block;
    background: url(./img/headBack.jpg) no-repeat;
}
.head .headTitle {
    width: 220px;
    font-size: 16px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
}
.head .navbar {
    background: url(./img/headIcon.png) no-repeat;
}
.head .navbar {
    background-position: -150px 6px;
    right: 10px;
    width: 30px;
    height: 40px;
    display: block;
    position: absolute;
}
.nav {
    height: 45px;
    background-color: #efefef;
    color: #848d96;
    top: 40px;
    border-bottom: 1px solid #ccc;
    /* display: none; */
}

.el-col span {
    width: auto;
    height: 18px;
    line-height: 18px;
    display: block;
    text-align: center;
    font-size: 14px;
}
.list{
  width: 33%;
  height: 80px;
  display: inline-block;
  border-left: 1px solid #f6f6f6;
  border-bottom: 1px solid #f6f6f6;
  text-align: center;
  font-size: 14px;
}
.list i{
  width: 36px;
    height: 36px;
    display: block;
    margin: 10px auto;
    background-image: url("./img/list.png")
}
.list  .f2{
  background-position: -84px 0px;
}
.list .f3{
  background-position: -165px 1px;
}
.list .f4{
  background-position: 0 -70px;
}
.list .f5{
  background-position: -84px -70px;
}
.list .f6{
  background-position: -165px -70px;
}
.list .f7{
  background-position: 0 -141px;
}
.list .f8{
      background-position: -84px -141px;
}
.list .f9{
  background-position: -165px -141px;
}
.list .f10{
  background-position: 0 -217px;
}
.list .f11{
  background-position: -84px -218px;
}
.list .f12{
  background-position: -165px -217px;
}

.price{
  color: red;
}
</style>