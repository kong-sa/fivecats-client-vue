<template>
  <div class="access-signin">
    <el-form
      ref="signin"
      class="signin-form"
      :model="formData"
      :rules="rules">
      <h2 class="title">快速注册</h2>
      <el-form-item prop="username">
        <span class="label">昵称</span>
        <el-input
          class="username"
          size="mini"
          v-model="formData.username"
          type="text"/>
      </el-form-item>
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
    <el-button @click="signin" class="submit">注 册</el-button>
    <div class="have-account">
      <router-link to="/access/login">已有账号？点击登陆</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccessSignin',
  methods: {
    signin () {
      this.$refs.signin.validate(async valida => {
        if (!valida) {
          this.$message.error('请把信息填写完全！')
        } else {
          let {data: res} = await this.$http.post('/access/signin', this.formData)
          if (res.code === 200) {
            this.$message({
              message: '注册成功，5秒后跳转登陆页面。',
              duration: 5000,
              type: 'success'
            })
            // 5s后跳转登陆页面
            setInterval(async () => {
              await this.$router.push('/access/login')
            }, 5000)
          } else if (res.code === 400) {
            this.$message({
              message: res.data,
              duration: 3000,
              type: 'error'
            })
          } else if (res.code === 401) {
            this.$message({
              message: res.data,
              duration: 3000,
              type: 'error'
            })
          } else {
            this.$message({
              message: res.data,
              duration: 4000,
              type: 'error'
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
        password: '',
        username: ''
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
        ],
        username: [
          {required: true, message: '请输入昵称！', trigger: 'blur'},
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

.access-signin {
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

.have-account {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
}

.submit {
  transition: 0.5s;
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  font-size: 15px;
  background: #ffc107;
  color: white;
}

.submit:hover {
  color: #0c0d0d;
  transition: 0.5s;
  transform: translateY(-5px);
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
  color: #ffc107;
  text-decoration: none;
  transition: 0.5s;
}

a:active {
  color: #999;
  text-decoration: none;
}
</style>
