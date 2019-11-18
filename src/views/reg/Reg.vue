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
    <el-form class="form" ref="regForm" :model="regForm" :rules="rules">
      <el-form-item prop="username">
        <el-input
          prefix-icon="el-icon-user-solid
"
          class="input"
          v-model="regForm.username"
          placeholder="用户名"
        ></el-input>
      </el-form-item>

      <el-form-item prop="phone">
        <el-input
          class="input"
          prefix-icon="el-icon-mobile-phone"
          v-model="regForm.phone"
          placeholder="请输入手机号，新用户将自动注册"
        ></el-input>
      </el-form-item>

      <div class="dt">
        <el-input class="yzm" placeholder="请输入校验码"></el-input>
        <el-button type="danger" style="background: #de4b45;">获取验证码</el-button>
      </div>
      <p></p>

      <el-form-item prop="password">
        <el-input
          type="password"
          prefix-icon="el-icon-lock"
          v-model="regForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>

      <el-form-item prop="confirmPassword">
        <el-input
          type="password"
          prefix-icon="el-icon-lock"
          v-model="regForm.confirmPassword"
          placeholder="请再次确认密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="botton" type="danger" @click="submitForm('numberValidateForm')">立即注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/navBar.vue";
import { my } from "../../network";
import { VerifySlider } from "vue-verify-slider";
export default {
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!/^[a-z]/i.test(value)) {
        callback(new Error("用户名必须以字母开头"));
      } else if (!/^[\w-]+$/i.test(value)) {
        callback(new Error("用户名必须为数字、字母、_、-"));
      } else {
        callback();
      }
    };

    var checkPassword = (rule, value, callback) => {
      if (value !== this.regForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      regForm: {
        phone: "",
        username: "",
        password: "",
        confirmPassword: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur"
          },
          { validator: checkUsername, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        confirmPassword: [{ validator: checkPassword, trigger: "blur" }]
      }
    };
  },
  components: {
    NavBar
  },
  methods: {
    open() {
      this.$message.error("该用户已注册");
    },
    back() {
      window.history.go(-1);
    },
    submitForm() {
      this.$refs.regForm.validate(async valid => {
        if (valid) {
          // 校验成功发起ajax请求
          console.log("success");

          let { username, password } = this.regForm;

          //检测是否已注册
          let {
            data: { data: jc }
          } = await my.get("/gdlist", {
            gather: "user",
            condition: "username",
            condition_value: username
          });
          if (jc.length > 0) {
            this.open();
          } else {
            let { data } = await my.post("/reg", {
              username,
              password
            });
            console.log(data);
            if (data.status === 1) {
              this.$router.replace("/login");
            }
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
  // computed:{

  // }
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
  height: 20px;
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