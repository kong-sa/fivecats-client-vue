<template>
  <div class="user-center-content">
    <div v-if="type === 'basic' || type === ''" class="basic userinfo">
      <bbs-basic-info/>
      <el-row style="margin-top: 50px; text-align: center">
        <el-col v-if="user.location === null || user.location === undefined || user.location === ''">
          <div v-if="updateLocation.locationSwitch === false">
            地址: <a style="cursor: pointer" @click="updateLocation.locationSwitch = true">未设置(点击设置)</a>
          </div>
        </el-col>
        <el-col v-else>
          <div v-if="updateLocation.locationSwitch === false">
            地址: {{ user.location }} |
            <a style="cursor: pointer" @click="updateLocation.locationSwitch = true">修改(点击修改)</a>
          </div>
        </el-col>
        <el-col>
          <div v-if="updateLocation.locationSwitch === true">
            <el-form :rules="rules" :model="formData" ref="formData">
              <el-form-item prop="location">
                <el-input size="mini" style="width: 150px" v-model="formData.location"></el-input>
                <el-button @click="save" size="mini" style="background: #0c0d0d; color: #ffc107">保存</el-button>
                <el-button @click="updateLocation.locationSwitch = false" size="mini" type="danger">取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
    <div v-if="type === 'order'" class="order userinfo">
      <el-row class="order-item" :gutter="20" v-for="(item, index) in order" :key="index">
        <el-col :span="24" style="padding: 10px 20px">
          <el-row style="font-size: 25px; font-weight: 600">
            订单 {{ index + 1 }}
          </el-row>
          <el-row>
            <span class="label">订单号:</span> {{ item.queueNum }}
          </el-row>
          <el-row>
            <span class="label">桌子号:</span> {{ item.table }}
          </el-row>
          <el-row>
            <span class="label">客户姓名:</span> {{ item.name }}
          </el-row>
          <el-row>
            <span class="label">手机号:</span> {{ item.phone }}
          </el-row>
          <el-row>
            <span class="label">到达时间:</span> {{ item.arrivalTime }}
          </el-row>
          <el-row>
            <span class="label">总价格:</span> {{ item.totalPrice }}
          </el-row>
          <el-row>
            <span class="label">商家是否接单: </span>
            <span v-if="item.isHandle === 0">未接单</span>
            <span v-else>已接单</span>
          </el-row>
          <el-row>
            <a style="cursor: pointer" @click="deleteOrder(item.id)">删除订单</a>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import BbsBasicInfo from '../../bbs/child/body/child/selfcenter/BbsBasicInfo'

export default {
  name: 'UserCenterContent',
  components: {BbsBasicInfo},
  props: ['type'],
  data () {
    return {
      updateLocation: {
        location: '',
        locationSwitch: false
      },
      user: {
        id: 0,
        date: '',
        avatar: '',
        username: '',
        email: '',
        phone: '',
        profile: '',
        fans: '',
        gold: '',
        experience: 0,
        level: 0,
        location: ''
      },
      order: [
        {
          id: 0,
          userId: 0,
          shopId: 0,
          phone: '',
          name: '',
          num: '',
          table: '',
          appointDate: '',
          arrivalTime: '',
          totalPrice: 0,
          isHandle: 0,
          queueNum: ''
        }
      ],
      formData: {
        location: ''
      },
      rules: {
        location: [
          {required: true, message: '请输入地址信息再保存！', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    async save () {
      this.$refs.formData.validate((valida) => {
        if (valida) {
          this.$http.post('/user/setting/location', {id: this.$store.state.user.id, location: this.formData.location})
          this.updateLocation.locationSwitch = false
          this.$forceUpdate()
        } else {
          this.$message.error('你还没有填入地址信息哦！不能保存')
        }
      })
    },
    async deleteOrder (orderId) {
      await this.$http.get('/user/delete/order?id=' + orderId)
    }
  },
  async created () {
    let {data: user} = await this.$http.get('/user/getting?id=' + this.$store.state.user.id)
    this.user = user
  },
  watch: {
    type: async function (newVal, oldVal) {
      if (newVal === 'basic') {
        let {data: user} = await this.$http.get('/user/getting?id=' + this.$store.state.user.id)
        this.user = user
      } else if (newVal === 'order') {
        let {data: order} = await this.$http.get('/user/getting/order?id=' + this.$store.state.user.id)
        this.order = order
      }
    }
  }
}
</script>

<style scoped>
.user-avatar {
  text-align: center;
}

.label {
  font-size: 18px;
  font-weight: 600;
}

.user-center-content {
  padding: 0 50px;
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

.order-item {
  border-bottom: 1px solid #ccc;
  transition: 0.3s;
}

.order-item:hover {
  box-shadow: 10px 10px 5px #888888;
  transition: 0.3s;
  border-radius: 6px;
  cursor: pointer;
  transform: translate(-5px, -5px);
}

a:active {
  color: #999;
  text-decoration: none;
}
</style>
