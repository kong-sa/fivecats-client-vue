<template>
  <div class="access-login">
    <el-form
      ref="login"
      class="login-form"
      :model="formData"
      :rules="rules">
      <h2 class="title">欢迎回来</h2>
      <el-form-item prop="email">
        <span class="label">邮箱</span>
        <el-input
          class="email"
          size="mini"
          v-model="formData.email"
          type="text"/>
      </el-form-item>
      <el-form-item prop="password">
        <span class="label">密码</span>
        <el-input
          class="password"
          size="mini"
          v-model="formData.password"
          type="password"/>
      </el-form-item>
    </el-form>
    <el-button class="submit" @click="login">登 录</el-button>
    <div class="no-account">
      <router-link to="/access/signin">没有账号？点击注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccessLogin',
  methods: {
    login () {
      this.$refs.login.validate(async valida => {
        if (!valida) {
          this.$message.error('请把信息填写完全！')
        } else {
          let {data: res} = await this.$http.post('/access/login', this.formData)
          if (res.code === 200) {
            this.$message({
              message: '登陆成功！',
              type: 'success',
              duration: 2000
            })
          } else if (res.code === 400) {
            this.$message({
              message: res.data,
              type: 'error',
              duration: 4500
            })
          } else {
            this.$message({
              message: res.data,
              type: 'error',
              duration: 5000
            })
          }
        }
      })
    }
  },
  data () {
    return {
      // 表单数据
      formData: {
        email: '',
        password: ''
      },
      // 表单验证规则
      rules: {
        email: [
          {required: true, message: '请输入邮箱！', trigger: 'blur'},
          {min: 5, max: 50, message: '长度在 5 到 50 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码！', trigger: 'blur'},
          {min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur'}
        ]
      }
    }
  }
}
</script>

<style scoped>
/deep/ .el-input__inner {
  font-size: 15px;
  border-top: none;
  border-radius: 0;
  border-left: none;
  border-right: none;
  text-align: center;
}

.access-login {
  padding: 0 15%;
  box-shadow: 5px 5px 10px #ccc;
  border-radius: 10px;
  border: 1px #ccc solid;
}

.label {
  display: block;
  color: #999999;
  text-align: center;
}

.no-account {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
}

.submit {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  font-size: 15px;
  background: rgb(64, 158, 255);
  color: white;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
}

.title {
  font-size: 26px;
  text-align: center;
}

a:link {
  color: #999;
  text-decoration: none;
}

a:visited {
  color: #999;
  text-decoration: none;
}

a:hover {
  color: rgb(140, 197, 255);
  text-decoration: none;
  transition: 0.5s;
}

a:active {
  color: #999;
  text-decoration: none;
}
</style>
