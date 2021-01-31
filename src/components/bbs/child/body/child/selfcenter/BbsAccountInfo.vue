<template>
  <div class="account-info">
    <el-form
      ref="accountInfo"
      :hide-required-asterisk="true"
      :model="formData"
      :rules="rule">
      <el-form-item label="用户名称：" prop="username">
        <el-col class="account-item" :span="17">
          <el-input
            :maxlength="15"
            :show-word-limit="true"
            v-model="formData.username"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="电子邮箱：" prop="email">
        <el-col class="account-item" :span="17">
          <el-input
            :maxlength="50"
            :show-word-limit="true"
            v-model="formData.email"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="电话号码：" prop="phone">
        <el-col class="account-item" :span="17">
          <el-input
            :maxlength="11"
            :show-word-limit="true"
            v-model="formData.phone"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="个人简介：" prop="profile">
        <el-col class="account-item" :span="17">
          <el-input
            type="textarea"
            :show-word-limit="true"
            :maxlength="50"
            v-model="formData.profile">
          </el-input>
        </el-col>
      </el-form-item>
    </el-form>
    <div class="submit-button">
      <el-button @click="submit" size="mini" type="primary">保存信息</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BbsAccountInfo',
  async created () {
    let {data: res} = await this.$http.get('/bbs/self/basic?userId=' + this.$store.state.var1.data.id)
    this.httpResValue1 = res
    this.formData = res.data
  },
  methods: {
    submit () {
      this.$refs.accountInfo.validate(async (valid) => {
        await this.$http.post('/bbs/updating/account', {
          id: this.$store.state.var1.data.id,
          username: this.formData.username,
          email: this.formData.email,
          phone: this.formData.phone,
          profile: this.formData.profile
        })
      })
    }
  },
  data () {
    return {
      httpResValue1: {
        code: 0,
        data: {
          'id': 0,
          'username': '',
          'email': '',
          'phone': 0,
          'fans': 0,
          'profile': '',
          'level': 0,
          'gold': 0,
          'experience': 0,
          'avatar': '',
          'password': ''
        }
      },
      formData: {
        username: '',
        email: '',
        phone: '',
        profile: ''
      },
      rule: {
        username: [
          {required: true, message: '请输入用户名称', trigger: 'blur'},
          {min: 3, max: 15, message: '用户名称长度在 3 到 15 个字符', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入电子邮箱', trigger: 'blur'},
          {min: 11, max: 50, message: '电子邮箱长度在 11 到 50 个字符', trigger: 'blur'}
        ],
        profile: [
          {min: 11, max: 50, message: '个人简介长度在 11 到 50 个字符', trigger: 'blur'}
        ],
        phone: [
          {min: 11, max: 11, message: '电话号码至少 11 位数', trigger: 'blur'}
        ]
      }
    }
  }
}
</script>

<style scoped>
.submit-button {
  text-align: center;
}
</style>
