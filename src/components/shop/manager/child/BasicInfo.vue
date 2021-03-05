<template>
  <div class="basic-info">
    <el-form ref="shopInfo" :model="formData" :rules="rules">
      <el-form-item prop="name">
        <el-row :gutter="20">
          <el-col class="label" :span="2">店铺名称</el-col>
          <el-col :span="10">
            <el-input v-model="formData.name"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item prop="location">
        <el-row :gutter="20">
          <el-col class="label" :span="2">地理位置</el-col>
          <el-col :span="10">
            <el-input v-model="formData.location"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-row :gutter="20">
          <el-col class="label" :span="2">营业时间</el-col>
          <el-col :span="10">
            <el-time-picker
              is-range
              v-model="time"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围">
            </el-time-picker>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item prop="phone">
        <el-row :gutter="20">
          <el-col class="label" :span="2">联系电话</el-col>
          <el-col :span="10">
            <el-input v-model="formData.phone"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item prop="profile">
        <el-row :gutter="20">
          <el-col class="label" :span="2">店铺简介</el-col>
          <el-col :span="10">
            <el-input type="textarea" maxlength="50" show-word-limit v-model="formData.profile"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <el-form>
      <el-col :span="10" :offset="2" class="save">
        <el-button class="btn" size="mini" @click="save()">保存</el-button>
      </el-col>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'BasicInfo',
  data () {
    return {
      rules: {
        name: [
          {required: true, message: '请输入店铺名称', trigger: 'blur'},
          {min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur'}
        ],
        location: [
          {required: true, message: '请输入地理位置', trigger: 'blur'},
          {min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '请输入联系电话', trigger: 'blur'},
          {min: 11, max: 11, message: '联系电话必须是11位数', trigger: 'blur'}
        ],
        profile: [
          {required: true, message: '请输入店铺简介', trigger: 'blur'},
          {min: 5, max: 100, message: '长度在 5 到 100 个字符', trigger: 'blur'}
        ]
      },
      formData: {
        id: this.$store.state.shop.id,
        name: '',
        location: '',
        phone: '',
        profile: '',
        startTime: '',
        endTime: ''
      },
      time: [
        new Date(2021, 9, 10, 8, 40),
        new Date(2021, 9, 10, 9, 40)
      ]
    }
  },
  methods: {
    async save () {
      this.$refs.shopInfo.validate(async valida => {
        if (valida) {
          let startTime = this.time[0].getHours() + ':' + this.time[0].getMinutes()
          let endTime = this.time[1].getHours() + ':' + this.time[1].getMinutes()
          this.formData.startTime = startTime
          this.formData.endTime = endTime
          await this.$http.post('/shop/maintain', this.formData)
        }
      })
    }
  },
  async created () {
    let {data: res} = await this.$http.get('/shop/getting?shopId=' + this.$store.state.shop.id)
    this.formData = res
  }
}
</script>

<style scoped>
.label, .save {
  text-align: center;
}

/deep/ .el-date-editor {
  width: 100%;
}

.btn {
  transition: 0.5s;
  background: #0c0d0d;
  color: white;
}

.btn:hover {
  transition: 0.5s;
  background: #ffc107;
  color: #0c0d0d;
}
</style>
