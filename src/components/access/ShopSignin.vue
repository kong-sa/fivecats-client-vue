<template>
  <div class="shop-signin">
    <el-form
      ref="signin"
      class="signin-form"
      :model="formData"
      :rules="rules">
      <h2 class="title">快速注册商家</h2>
      <el-form-item prop="username">
        <span class="label">用户名</span>
        <el-input
          class="username"
          size="mini"
          v-model="formData.username"
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
      <el-form-item prop="email">
        <span class="label">店铺名称</span>
        <el-input
          class="name"
          size="mini"
          v-model="formData.name"
          type="text"/>
      </el-form-item>
      <el-form-item prop="profile">
        <span class="label">店铺简介</span>
        <el-input
          class="profile"
          size="mini"
          v-model="formData.profile"
          type="text"/>
      </el-form-item>
      <el-form-item prop="location">
        <span class="label">店铺地址</span>
        <el-input
          class="location"
          size="mini"
          v-model="formData.location"
          type="text"/>
      </el-form-item>
    </el-form>
    <el-button @click="signin" class="submit">注 册</el-button>
    <div class="have-account">
      <router-link to="/shop/login">已有商家账号？点击登陆</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopSignin',
  methods: {
    signin () {
      this.$refs.signin.validate(async valida => {
        if (!valida) {
          this.$message.error('请把信息填写完全！')
        } else {
          let {data: res} = await this.$http.post('/access/shop/signin', this.formData)
          if (res.code === 200) {
            this.$message({
              message: '注册成功',
              duration: 3000,
              type: 'success'
            })
          } else {
            this.$message({
              message: res.data,
              duration: 3000,
              type: 'error'
            })
          }
        }
      })
    }
  },
  data () {
    return {
      formData: {
        name: '',
        password: '',
        username: '',
        phone: '',
        location: '',
        profile: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入店铺名称！', trigger: 'blur'},
          {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码！', trigger: 'blur'},
          {min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur'}
        ],
        username: [
          {required: true, message: '请输入用户名！', trigger: 'blur'},
          {min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '请输入联系电话！', trigger: 'blur'},
          {min: 11, max: 11, message: '联系电话必须是11位数', trigger: 'blur'}
        ],
        profile: [
          {required: true, message: '请输入商铺简介！', trigger: 'blur'},
          {min: 10, max: 100, message: '长度在 10 到 100个字符', trigger: 'blur'}
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

.shop-signin {
  margin: 5% 35% 0 35%;
  padding: 0 5%;
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
