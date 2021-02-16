<template>
  <div id="merchant-trolley">
    <el-divider>购物车列表</el-divider>
    <el-table :data="this.$store.state.selectedDishes"
              :fit="true" height="420"
              :cell-style="{ textAlign: 'center' }"
              :header-cell-style="{ textAlign: 'center' }"
              style="width: 100%">
      <el-table-column id="dishes-image"
                       prop="cover"
                       label="封面"
                       width="180">
        <template slot-scope="scope">
          <el-image style="width: 100px; height: 100px"
                    :src="scope.row.cover">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="name"
                       label="菜品">
      </el-table-column>
      <el-table-column prop="price"
                       label="单价">
      </el-table-column>
      <el-table-column fixed="right"
                       prop="operation"
                       width="120"
                       label="操作">
        <template slot-scope="scope">
          <el-button class="btn"
                     @click.native.prevent="deleteRow(scope.$index)"
                     size="mini">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-divider>基本信息</el-divider>
    <div class="basic-info">
      <el-row :gutter="10">
        <el-col :xs="8"
                :sm="4"
                :md="4"
                :lg="3">预约日期：
        </el-col>
        <el-col :xs="15"
                :sm="10"
                :md="8"
                :lg="8">
          <el-date-picker v-model="order.appointDate"
                          size="mini"
                          class="trolley-date-picker"
                          type="date"
                          placeholder="请选择预约的日期"
                          :picker-options="pickerOptions">
          </el-date-picker>
        </el-col>
      </el-row>
    </div>
    <div class="basic-info select-time">
      <el-row :gutter="10">
        <el-col :xs="8"
                :sm="4"
                :md="4"
                :lg="3">
          到店时间：
        </el-col>
        <el-col :xs="15"
                :sm="10"
                :md="8"
                :lg="8">
          <el-time-picker class="trolley-date-picker"
                          is-range size="mini"
                          v-model="arrivalTime"
                          range-separator="-"
                          start-placeholder="开始时间"
                          end-placeholder="结束时间">
          </el-time-picker>
        </el-col>
      </el-row>
    </div>
    <div class="basic-info customer-name">
      <el-row :gutter="10">
        <el-col :xs="8"
                :sm="4"
                :md="4"
                :lg="3">
          客户姓名：
        </el-col>
        <el-col :xs="15"
                :sm="10"
                :md="8"
                :lg="8">
          <el-input size="mini"
                    class="trolley-number"
                    placeholder="请提供您的姓名"
                    prefix-icon="el-icon-user"
                    v-model="order.name">
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div class="basic-info telephone">
      <el-row :gutter="10">
        <el-col :xs="8"
                :sm="4"
                :md="4"
                :lg="3">
          联系电话：
        </el-col>
        <el-col :xs="15"
                :sm="10"
                :md="8"
                :lg="8">
          <el-input class="trolley-number"
                    size="mini"
                    placeholder="请提供您的联系电话"
                    prefix-icon="el-icon-phone-outline"
                    v-model="order.phone">
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div class="basic-info guest-num">
      <el-row :gutter="10">
        <el-col :xs="8"
                :sm="4"
                :md="4"
                :lg="3">
          预定人数：
        </el-col>
        <el-col :xs="15"
                :sm="10"
                :md="8"
                :lg="8">
          <el-input-number size="mini"
                           class="trolley-number"
                           v-model="order.num"
                           :min="1"
                           :max="99">
          </el-input-number>
        </el-col>
      </el-row>
    </div>
    <div class="basic-info table">
      <el-row :gutter="10">
        <el-col :xs="8"
                :sm="4"
                :md="4"
                :lg="3">
          选择座位：
        </el-col>
        <el-col :xs="15"
                :sm="10"
                :md="8"
                :lg="8">
          <el-tooltip :enterable="true"
                      class="item"
                      effect="light"
                      content="大桌8人 中桌4人 小桌2人"
                      placement="top">
            <el-cascader ref="cascader"
                         size="mini"
                         class="trolley-number"
                         placeholder="请选择预约的桌号"
                         :options="tableOptions"
                         :props="{ expandTrigger: 'hover' }"
                         @change="getTableOptions">
            </el-cascader>
          </el-tooltip>
        </el-col>
      </el-row>
    </div>
    <div class="basic-info submit">
      <el-row>
        <el-col :xs="8"
                :sm="8"
                :md="8"
                :lg="8">
          原本总价：¥ {{ order.totalPrice }}
        </el-col>
      </el-row>
    </div>
    <div class="basic-info">
      <el-row>
        <el-col :span="8">馋币折扣后：¥ {{ discountPrice }}</el-col>
      </el-row>
    </div>
    <div class="basic-info">
      <el-row>
        <el-button type="primary"
                   class="btn"
                   @click="confirmPayment"
                   size="mini"
                   icon="el-icon-check">
          确认支付
        </el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopTrolley',
  props: ['shopId'],
  methods: {
    deleteRow (index) {
      this.$store.state.selectedDishes.splice(index, 1)
      this.$message({
        type: 'success',
        duration: 2000,
        message: '从购物车中删除成功！'
      })
    },
    getTableOptions () {
      this.order.table = this.$refs.cascader.getCheckedNodes()[0].pathLabels
    },
    confirmPayment () {
      if (this.order.appointDate === '' || this.order.phone === '' || this.order.name === '' ||
      this.arrivalTime === '' || this.order.table === '') {
        this.$message.error('信息不齐全，无法支付！')
      } else if (this.$store.state.user.id === 0) {
        this.$message.error('你还没有登陆，请先登录。')
      } else {
        let start = this.arrivalTime[0].getHours() + ':' + this.arrivalTime[0].getMinutes()
        let end = this.arrivalTime[1].getHours() + ':' + this.arrivalTime[1].getMinutes()
        this.order.arrivalTime = start + '-' + end
        // 如果折扣的价格大于0，说明有折扣，就应该把order中的totalPrice值被赋值为discountPrice
        // 如果没有折扣，依然使用totalPrice原本的值
        if (this.discountPrice > 0) {
          this.order.totalPrice = this.discountPrice
        }
        this.$http.post('/shop/setting/order', this.order, {
          validateStatus: (status) => {
            return status < 500
          },
          timeout: 10000
        }).then((result) => {
          this.$message.success('支付成功！')
        }).catch((err) => {
          if (err.response) {
            this.$message.error('哎呀，服务器开了个小差！！！')
          } else if (err.request) {
            this.$message.error('哎呀，服务器开了个小差！！！')
          } else {
            this.$message.error('哎呀，服务器开了个小差！！！')
          }
        })
      }
    }
  },
  watch: {
    '$store.state.selectedDishes': {
      async handler (newValue, oldValue) {
        this.discountPrice = 0 // 数据更新之前，先清除之前计算的折扣价格
        let accumulateValPrice = 0 // 定义一个用于记录val.price累加之后的值
        newValue.forEach((val) => {
          accumulateValPrice += val.price // 累加val.price
        })
        if (this.order.totalPrice > accumulateValPrice) {
          this.order.totalPrice = 0 // 如果用户移除了一项，那么先清除原本的总价
        }
        this.order.totalPrice = accumulateValPrice // 然后再重新赋值给totalPrice
        this.order.totalPrice = Math.floor(this.order.totalPrice * 100) / 100 // 结果保留2位小数
        // 价格累加完成，进行折扣。如果用户的硬币数量大于0，在有硬币的情况下才进行折扣。规定每一个硬币折扣1%，结果保留2位小数
        if (this.$store.state.user.gold > 0) this.discountPrice = Math.floor((accumulateValPrice - (accumulateValPrice * 0.01)) * 100) / 100
      },
      deep: true
    }
  },
  data () {
    return {
      tableOptions: [
        {
          value: '大厅',
          label: '大厅',
          children: [
            {
              value: '大桌',
              label: '大桌',
              children: [
                {
                  value: '1号',
                  label: '1号'
                },
                {
                  value: '2号',
                  label: '2号'
                },
                {
                  value: '3号',
                  label: '3号'
                }
              ]
            },
            {
              value: '中桌',
              label: '中桌',
              children: [
                {
                  value: '1号',
                  label: '1号'
                },
                {
                  value: '2号',
                  label: '2号'
                },
                {
                  value: '3号',
                  label: '3号'
                },
                {
                  value: '4号',
                  label: '4号'
                }
              ]
            },
            {
              value: '小桌',
              label: '小桌',
              children: [
                {
                  value: '1号',
                  label: '1号'
                },
                {
                  value: '2号',
                  label: '2号'
                },
                {
                  value: '3号',
                  label: '3号'
                },
                {
                  value: '4号',
                  label: '4号'
                },
                {
                  value: '5号',
                  label: '5号'
                }
              ]
            }
          ]
        },
        {
          value: '包间',
          label: '包间',
          children: [
            {
              value: '1号',
              label: '1号'
            },
            {
              value: '2号',
              label: '2号'
            },
            {
              value: '3号',
              label: '3号'
            },
            {
              value: '4号',
              label: '4号'
            },
            {
              value: '5号',
              label: '5号'
            }
          ]
        }
      ],
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now() + 3600 * 1000 * 24 * 7 || time.getTime() < new Date() - 3600 * 1000 * 24
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '明天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '后天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 * 24 * 2)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周后',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      discountPrice: 0,
      order: {
        userId: this.$store.state.user.id,
        shopId: this.shopId,
        appointDate: '',
        phone: '',
        name: '',
        num: 1,
        totalPrice: 0,
        table: [],
        arrivalTime: ''
      },
      arrivalTime: [
        new Date(2021, 2, 9, 0, 0),
        new Date(2021, 2, 9, 1, 0)
      ]
    }
  }
}
</script>

<style scoped>
.basic-info {
  margin-top: 20px;
}

.btn:hover {
  transition: 0.5s;
  color: #0c0d0d;
  background: #ffc107;
}

.btn {
  transition: 0.5s;
  color: white;
  background: #0c0d0d;
}

/*小于730px*/
@media screen and (max-width: 730px) {
  .trolley-number, .trolley-date-picker {
    width: 130px;
  }
}

/*大于730px*/
@media screen and (min-width: 730px) {
  .trolley-number, .trolley-date-picker {
    width: 100%;
  }
}
</style>
