<!--  -->
<template>
  <div id="login">
    <nav-bar>
      <div class="navLeft" slot="left">
        <i @click="back" class="el-icon-arrow-left"></i>
      </div>
      <div class="navCenter" slot="center">
        <h2>用户登录</h2>
      </div>
    </nav-bar>
    <tabcontrol :titles="['手机动态密码登录','账号登录']" @tabclick="tabclick" />
    <login1 v-if="index==0" />
    <login2 v-if="index==1" />
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/navBar.vue";
import tabcontrol from "../../components/content/tancontrol/tabcontrol.vue";
import login1 from "./login1.vue";
import login2 from "./login2.vue";
export default {
  data() {
    return {
      index: 1
    };
  },
  components: {
    NavBar,
    tabcontrol,
    login1,
    login2
  },
  methods: {
    tabclick(index) {
      this.index = index;
    },

    back() {
      window.history.go(-1);
    }
  }
};
</script>
<style scoped>
.navLeft {
  line-height: 44px;
  color: #fff;
  margin-left: 10px;
}
.navCenter {
  line-height: 44px;
  color: #fff;
  text-align: center;
}
.navCenter h2 {
  font-size: 16px;
}
.tab {
  margin-bottom: 20px;
}
</style>