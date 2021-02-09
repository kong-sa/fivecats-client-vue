<template>
  <div id="merchant-trolley">
    <el-divider>购物车列表</el-divider>
    <el-table
      :data="this.$store.state.selectedDishes"
      :fit="true"
      height="420"
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ textAlign: 'center' }"
      style="width: 100%">
      <el-table-column
        id="dishes-image"
        prop="cover"
        label="封面"
        width="180">
        <template slot-scope="scope">
          <!--<el-tooltip-->
          <!--  class="item"-->
          <!--  :enterable="true"-->
          <!--  effect="light"-->
          <!--  content="点击查看大图"-->
          <!--  placement="top">-->
          <el-image
            style="width: 100px; height: 100px"
            :src="scope.row.cover">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <!--</el-tooltip>-->
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="菜品">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="operation"
        width="120"
        label="操作">
        <template slot-scope="scope">
          <el-button
            class="btn"
            @click.native.prevent="deleteRow(scope.$index)"
            size="mini">移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-divider>基本信息</el-divider>
    <div class="basic-info">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="4" :md="4" :lg="3">预约日期：</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-date-picker
            v-model="order.appointDate"
            size="mini"
            class="trolley-date-picker"
            type="date"
            placeholder="请选择预约的日期"
            :picker-options="pickerOptions"></el-date-picker>
        </el-col>
      </el-row>
    </div>
    <div class="basic-info select-time">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="4" :md="4" :lg="3">到店时间：</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-time-picker
            class="trolley-date-picker"
            is-range
            size="mini"
            v-model="order.arrivalTime"
            range-separator="-"
            start-placeholder="开始时间"
            end-placeholder="结束时间">
          </el-time-picker>
        </el-col>
      </el-row>
    </div>
    <div class="basic-info customer-name">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="4" :md="4" :lg="3">客户姓名：</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-input
            size="mini"
            class="trolley-number"
            placeholder="请提供您的姓名"
            prefix-icon="el-icon-user"
            v-model="order.name"></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="basic-info telephone">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="4" :md="4" :lg="3">联系电话：</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-input
            class="trolley-number"
            size="mini"
            placeholder="请提供您的联系电话"
            prefix-icon="el-icon-phone-outline"
            v-model="order.phone"></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="basic-info guest-num">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="4" :md="4" :lg="3">预定人数：</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-input-number
            size="mini"
            class="trolley-number"
            v-model="order.num"
            :min="1"
            :max="99"></el-input-number>
        </el-col>
      </el-row>
    </div>
    <div class="basic-info table">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="4" :md="4" :lg="3">选择座位：</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-tooltip
            :enterable="true"
            class="item"
            effect="light"
            content="大桌8人 中桌4人 小桌2人"
            placement="top">
            <el-cascader
              ref="cascader"
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
        <el-col :xs="8" :sm="8" :md="8" :lg="8">总价：¥ {{ order.totalPrice }}</el-col>
      </el-row>
    </div>
    <div class="basic-info">
      <el-row>
        <el-col :span="8">馋币折扣之后：¥ {{ discountPrice }}</el-col>
      </el-row>
    </div>
    <div class="basic-info">
      <el-row>
        <el-button
          type="primary"
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
  name: 'TrolleyPopups',
  props: ['shopId'],
  methods: {
    deleteRow (index) {
      // 删除vuex保存的值
      this.$store.state.selectedDishes.splice(index, 1)
      this.$message({
        type: 'success',
        duration: 2500,
        message: '从购物车中删除成功！'
      })
    },
    // 获得节点数组
    getTableOptions () {
      this.order.table = this.$refs.cascader.getCheckedNodes()[0].pathLabels
    },
    // 确认支付，发起异步请求
    async confirmPayment () {
      await this.$http.post('/shop/setting/order', this.order)
      this.$message('支付成功！')
    }
  },
  watch: {
    /**
     * calculatedTotal用于记录加入购物车的总价
     * 如果用户再加一个，那么calculatedTotal的值必定小于所有val.price累加之后的值；
     * 如果用户移除一个，那么calculatedTotal的值必定大于所有val.price累加之后的值。
     */
    '$store.state.selectedDishes': {
      async handler (newValue, oldValue) {
        let accumulateValPrice = 0
        newValue.forEach((val) => {
          accumulateValPrice += val.price
        })
        if (this.order.totalPrice > accumulateValPrice) {
          // 如果用户移除了一项，那么先清除原本的总价
          this.order.totalPrice = 0
          // 然后再重新赋值给afterCalculatedTotal
          this.order.totalPrice = accumulateValPrice
          // 结果保留2位小数
          this.order.totalPrice = Math.floor(this.order.totalPrice * 100) / 100
          let {data: res} = await this.$http.get('/shop/getting/coin')
          if (res > 0) {

          }
        } else {
          // 如果用户继续添加，就直接累加afterCalculatedTotal
          this.order.totalPrice += accumulateValPrice
          // 结果保留2位小数
          this.order.totalPrice = Math.floor(this.order.totalPrice * 100) / 100
        }
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
        userId: 1,
        shopId: this.shopId,
        appointDate: '',
        phone: '',
        name: '',
        num: 1,
        totalPrice: 0,
        arrivalTime: [
          new Date(2021, 2, 9, 0, 0),
          new Date(2021, 2, 9, 1, 0)
        ],
        table: []
      }
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
