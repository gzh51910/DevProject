<template>
  <div class="putao">
    <nav-bar class="head">
      <div slot="left">
        <a class="back" @click="$router.back(-1)"></a>
      </div>
      <div slot="center">
        <div style="line-height:40px">
          <el-input
            prefix-icon="el-icon-search"
            style="width:92%"
            size="mini"
            v-model="input"
            placeholder="硬核返场购 津贴每满299减20"
          ></el-input>
        </div>
      </div>
      <div slot="right">
        <a class="navbar"></a>
      </div>
    </nav-bar>
    <scroll class="content" ref="a" :probe-type="3">
      <div class="baibig" :db="db">
        <div style="height:80px;text-align:center;line-height:40px;margin:40px 0 10px;">
          <el-row :gutter="20">
            <el-col :span="6" v-for="(item) in text" :key="item.id" @click.native="change">{{item}}</el-col>
          </el-row>
          <div class="flil">
            <a>酒仙配送</a>
            <a>CLUB会员价</a>
          </div>
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
                <img v-lazy="item.goods_thumb" class="image" />
                <p class="names">{{item.goods_name}}</p>
              </div>
              <div class="orice">
                <p class="goodlist">
                  <span class="price">{{item.price}}</span>
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
import "../../../assets/css/list.css";
export default {
  data() {
    return {
      input: "",
      goods1: [],

      db: "sheet2",
      text: ["综合", "销量", "价格", "筛选"]
    };
  },
  async created() {
    let db = { gather: "sheet2" };
    let {
      data: { data: goods }
    } = await my.get("/gdlist", db);
    this.goods1 = goods;

    this.goods1.forEach(item => {
      item.price = item.price.slice(1);
    });
  },
  components: {
    NavBar,
    scroll
  },
  methods: {
    goto(id, db) {
      this.$router.push({ name: "goods", params: { id, db } });
    },
    backclick() {
      this.$refs.a.scrollTo(0, 0);
    },
    change() {
      let seft = this;
      seft.sorts = !seft.sorts;
      console.log(this.sorts);

      function compare(price) {
        return function(object1, object2) {
          var val1 = object1[price];
          var val2 = object2[price];
          if (seft.sorts == true) {
            return val1 - val2;
          } else if (seft.sorts == false) {
            return val2 - val1;
          } else {
            return 0;
          }
        };
      }

      this.goods1 = this.goods1.sort(compare("price"));
      console.log(this.goods1);
    }
  }
};
</script>
<style scoped>
.putao {
  height: 100vh;
  margin-top: 40px;
}
.baibig {
  background-color: #fff;
  /* overflow: auto; */
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

.sIcon {
  background: url(../img/searchIcon.png) no-repeat;
  background-size: 120px 40px;
  cursor: pointer;
}
.bai-input {
  width: 288px;
  height: 28px;
  background-color: #e4e4e4;
  margin-top: 6px;
}
.input-em {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-position: -41px -18px;
  position: absolute;
  left: 36px;
  top: 14px;
}
.flil {
  height: 42px;
  padding: 3px 15px 0;
  background-color: #fff;
  text-align: left;
  border-bottom:1px solid #ccc;
}
.flil a {
  display: inline-block;
  height: 26px;
  line-height: 26px;
  color: #333;
  font-size: 12px;
  background-color: #f6f6f6;
  border-radius: 13px;
  margin-right: 10px;
  padding: 0 15px;
}
.price{
  color: red;
} */
</style>