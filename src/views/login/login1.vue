<!--  -->
<template>
  <div class="content">
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
        <VerifySlider></VerifySlider>

        <p></p>
      </div>
      <div class="dt">
        <el-input class="yzm" v-model="input" placeholder="请输入校验码"></el-input>
        <el-button type="danger" style="background: #de4b45;">获取验证码</el-button>
      </div>
      <p></p>
      <el-button class="botton" type="danger">立即登录</el-button>
    </el-form>
    <ul class="btn1">
      <li @click="zhuce">免费注册</li>
      <li>找回密码</li>
    </ul>
  </div>
</template>

<script>
import { VerifySlider } from "vue-verify-slider";
export default {
  data() {
    return {
      input: ""
    };
  },
  components: {
    VerifySlider
  },
  methods: {
    zhuce() {
      this.$router.replace("/reg");
    }
  }
};
</script>
<style scoped>
.form {
  width: 84%;
  margin: 0 auto;
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
  background: #de4b45;
}
.btn1 {
  display: flex;
  width: 84%;
  margin: 0 auto;
  justify-content: space-between;
}
.btn li {
  border-bottom: 1px solid #626365;
}
</style>