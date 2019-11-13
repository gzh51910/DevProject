<!--  -->
<template>
  <div class="content">
    <el-form label-width="80px" class="form">
      <div class="phone">
        <el-input
          prefix-icon="el-icon-user-solid
"
          class="input"
          v-model="input"
          placeholder="用户名/邮箱/手机号"
        ></el-input>
        <p></p>
      </div>
      <div class="yz">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <p></p>
      </div>
      <div class="dt">
        <el-input prefix-icon="el-icon-lock" v-model="input" placeholder="密码"></el-input>
      </div>

      <el-button class="botton" type="danger">立即登录</el-button>
    </el-form>
    <ul class="btn">
      <li @click="zhuce">免费注册</li>
      <li>找回密码</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
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