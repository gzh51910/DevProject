<!--  -->
<template>
  <div id="profile">
    <nav-bar>
      <div class="navLeft" slot="left">
        <i @click="back" class="el-icon-arrow-left"></i>
      </div>
      <div class="navCenter" slot="center">
        <h2>用户注册</h2>
      </div>
    </nav-bar>
    <el-form label-width="80px" class="form">
      <div class="phone">
        <el-input
          class="input"
          prefix-icon="el-icon-mobile-phone"
          v-model="input"
          placeholder="请输入手机号，新用户将自动注册"
        ></el-input>
        <p></p>
      </div>
      <div class="yz">
        <el-input suffix-icon v-model="input" placeholder="请输入内容"></el-input>
        <p></p>
      </div>
      <div class="dt">
        <el-input class="yzm" v-model="input" placeholder="请输入校验码"></el-input>
        <el-button type="danger">获取验证码</el-button>
      </div>
      <p></p>
      <div class="yz">
        <el-input prefix-icon="el-icon-lock" v-model="input" placeholder="请输入密码"></el-input>
        <p></p>
      </div>
      <div class="dt">
        <el-input prefix-icon="el-icon-lock" v-model="input" placeholder="请再次确认密码"></el-input>
        <p></p>
      </div>
      <el-button class="botton" type="danger">立即注册</el-button>
    </el-form>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/navBar.vue";
export default {
  data() {
    return {
      input: ""
    };
  },
  components: {
    NavBar
  },
  methods: {
    back() {
      this.$router.replace("/home");
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
.form {
  width: 84%;
  margin: 20px auto;
}

.input {
  height: 40px;
}
.yzm {
  width: 40%;
}
p {
  height: 40px;
}
.content {
  margin-top: 20px;
}
.dt {
  display: flex;
  justify-content: space-between;
}

.botton {
  width: 100%;
  height: 34px;
  margin: 30px auto;
}
.btn {
  display: flex;
  width: 84%;
  margin: 0 auto;
  justify-content: space-between;
}
.btn li {
  border-bottom: 1px solid #626365;
}
</style>