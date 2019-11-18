<!--  -->
<template>
  <div class="content">
    <el-form class="form" ref="loginForm" :rules="rules" :model="loginForm">
      <el-form-item prop="username" :error="errorMsg">
        <el-input
          prefix-icon="el-icon-user-solid
"
          class="input"
          v-model="loginForm.username"
          placeholder="用户名/邮箱/手机号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" :error="errorMsg">
        <el-input
          type="password"
          prefix-icon="el-icon-lock"
          v-model="loginForm.password"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <div class="yz">
        <VerifySlider :success="handle"></VerifySlider>
        <p>{{mes}}</p>
      </div>

      <el-button class="botton" type="danger" @click="submitForm('numberValidateForm')">立即登录</el-button>
    </el-form>
    <ul class="btn1">
      <li @click="zhuce">免费注册</li>
      <li>找回密码</li>
    </ul>
  </div>
</template>

<script>
import { my } from "../../network";
import { VerifySlider } from "vue-verify-slider";

export default {
  data() {
    return {
      errorMsg: "",
      mes: "",
      loginForm: {
        input: "",
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    VerifySlider
  },
  methods: {
    zhuce() {
      this.$router.replace("/reg");
    },
    submitForm() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          // 校验成功发起ajax请求
          // console.log("success");

          let { username, password } = this.loginForm;

          let result = await my.get("/login", {
            username,
            password
          });
          // console.log("result:", result);
          let { data, headers } = result;
          if (data.status === 0) {
            // console.log('不行')
            this.errorMsg = "用户名或密码错误";
          } else {
            let user = data.data[0];
            // 从响应头中获取Authorization
            user.Authorization = headers.authorization;
            this.$store.commit("login", user);
            let redirectUrl = this.$route.query.redirectUrl || "/profile";
            // console.log("redirectUrl:", redirectUrl);
            this.$router.push(redirectUrl);
          }
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    handle() {
      this.mes = "验证通过";
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
.btn1 li {
  border-bottom: 1px solid #626365;
}
</style>