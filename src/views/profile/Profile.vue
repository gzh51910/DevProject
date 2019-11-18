<!--  -->
<template>
  <div id="profile">
    <nav-bar class="navbar">
      <div class="navLeft" slot="left">
        <i @click="back" class="el-icon-arrow-left"></i>
      </div>
      <div class="navCenter" slot="center">
        <h2>个人中心</h2>
      </div>
      <div class="navRight" slot="right">
        <i @click="back" class="el-icon-s-operation"></i>
      </div>
    </nav-bar>
    <scroll class="contentt">
      <article class="profilecontent">
        <section class="profileHeader">
          <img src="../../assets/img/login/topBg.jpg" alt />
          <div class="Headerpro">
            <img src="../../assets/img/login/userPhoto.png" alt />
            <div class="Proname">
              <div class="prousername">
                <p class="userName">{{user}}</p>
                <p class="ad">立享CLUB会员</p>
              </div>
              <div class="download">下载客户端 美酒随时抢</div>
            </div>
          </div>
          <div class="headerBottom">
            <div class="zc">
              <p class="grade">LV1 酒虫</p>
            </div>
            <div class="order">
              <p class="ordersh">
                <strong>0</strong>
                <span>待收货</span>
              </p>
              <p class="ordersh">
                <strong>0</strong>
                <span>待收货</span>
              </p>
              <p class="ordersh">
                <strong>0</strong>
                <span>待收货</span>
              </p>
              <p class="ordersh">
                <strong>0</strong>
                <span>待收货</span>
              </p>
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
          </div>
        </section>
        <el-row :gutter="20" class="listrow">
          <el-col v-for="goods in list" :key="goods.id" :xs="8" @click="gwc(goods.con)">
            <div class="grid-content">
              <img :src="goods.src" alt />
              <span class="listspan">{{goods.con}}</span>
            </div>
          </el-col>
        </el-row>
        <div class="profilebtn">
          <el-button class="botton" type="danger" @click="logout">退出登录</el-button>
        </div>
      </article>
    </scroll>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/navBar.vue";
import Scroll from "../../components/common/scroll/scroll.vue";
export default {
  data() {
    return {
      list: [
        {
          id: Date.now() + 1,
          src: "https://misc.jiuxian.com/m_user/images/usercenter/order.png",
          con: "全部订单"
        },
        {
          id: Date.now() + 4,
          src: "https://misc.jiuxian.com/m_user/images/usercenter/cart.png",
          con: "购物车"
        },
        {
          id: Date.now() + 5,
          src:
            "https://misc.jiuxian.com/m_user/images/usercenter/unreceived-icon.png",
          con: "待领取"
        },
        {
          id: Date.now() + 6,
          src: "https://misc.jiuxian.com/m_user/images/usercenter/exchange.png",
          con: "去兑换"
        },
        {
          id: Date.now() + 7,
          src: "https://misc.jiuxian.com/m_user/images/usercenter/coupon.png",
          con: "我的优惠券"
        },
        {
          id: Date.now() + 8,
          src: "https://misc.jiuxian.com/m_user/images/usercenter/history.png",
          con: "浏览历史"
        },
        {
          id: Date.now() + 9,
          src: "https://misc.jiuxian.com/m_user/images/usercenter/wallet.png",
          con: "我的钱包"
        },
        {
          id: Date.now() + 10,
          src: "https://misc.jiuxian.com/m_user/images/usercenter/collect.png",
          con: "我的收藏"
        },
        {
          id: Date.now() + 11,
          src: "https://misc.jiuxian.com/m_user/images/usercenter/address.png",
          con: "地址管理"
        },
        {
          id: Date.now() + 12,
          src: "https://misc.jiuxian.com/m_user/images/usercenter/safe.png",
          con: "帐户安全"
        }
      ]
    };
  },
  components: {
    NavBar,
    Scroll
  },
  computed: {
    user() {
      // if (this.$store.state.common.user.Authorization) {
      return this.$store.state.common.user.username;
      // }
    }
  },
  methods: {
    back() {
      window.history.go(-1);
    },
    logout() {
      console.log(111);

      this.$store.commit("logout");

      // 在需要登录权限的页面退出登录
      // 需要跳转到登录页面
      this.$router.replace("/login");
    },
    gwc(con) {
      if (con == "购物车") {
        this.$router.replace("/cart");
      }
    }
  }
};
</script>
<style scoped>
#profile .contentt {
  height: calc(100% - 93px);
  overflow: hidden;
}
#profile {
  height: 100vh;
}
#profile .navLeft {
  line-height: 44px;
  color: #fff;
  margin-left: 10px;
}
#profile .navLeft i {
  font-size: 20px;
}
#profile .navRight i {
  font-size: 20px;
  color: #fff;
  line-height: 44px;
}
#profile .navCenter {
  line-height: 44px;
  color: #fff;
  text-align: center;
}
#profile .navCenter h2 {
  font-size: 16px;
}

.profileHeader {
  position: relative;
  height: 152px;
}
.Headerpro {
  display: flex;
  width: 100%;
  position: absolute;
  top: 12%;
  left: 0;
}
.Headerpro img {
  width: 74px;
  height: 74px;
  margin: 0 15px 0 5%;
}
.Proname {
  display: flex;
  flex-direction: column;

  margin-top: 6%;
}
.prousername {
  display: flex;
}
.prousername .ad {
  background: #25282f;
  color: #f1d08a;
  font-size: 10px;
  height: 16px;
  line-height: 16px;
  border-radius: 3px;
  margin-left: 6px;
}
.headerBottom {
  width: 100%;
  height: 32%;
  position: absolute;
  bottom: 0;
  left: 0;
  color: #171516;
  background: url(../../assets/img/login/transparent.png) repeat;
  display: flex;
  justify-content: space-between;
}
.zc {
  width: 18%;
  height: 82%;
  text-align: center;
  color: #fff;
  margin-left: 7.5%;
  padding-top: 2%;
  float: left;
  background: url(../../assets/img/login/grade.png) no-repeat;
  background-size: 100%;
}
.order {
  display: flex;
  width: 70%;
  height: 100%;
  align-items: center;
  position: relative;
}
.ordersh {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
}
.line {
  background: url(../../assets/img/login/userIcon.png) no-repeat;
  width: 2px;
  height: 32px;
  display: block;
  position: absolute;
  background-position: -10px -6px;
  top: 10%;
}
.line1 {
  left: 25%;
}
.line2 {
  left: 50%;
}
.line3 {
  left: 75%;
}
.userName {
  color: #fa281b;
}
.listrow {
  /* width: 90%; */
  padding-left: 5%;
  padding-right: 5%;
  /* margin: 0 auto; */
  padding-top: 20px;
  background-color: #fff;
}
.grid-content {
  height: auto;
  margin-bottom: 20px;
  padding: 0 5%;
  box-sizing: border-box;
  color: #626365;
  text-align: center;
}
.grid-content img {
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
}
.profilebtn {
  width: 70%;
  margin: 30px auto;
}
.botton {
  width: 100%;
  height: 34px;
  margin: 30px auto;
  background: #de4b45;
}
.navbar {
  position: sticky;
  top: 0px;
  z-index: 1111;
}
</style>