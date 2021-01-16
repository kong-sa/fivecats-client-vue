<template>
  <!-- 商家主页 - 购物车（弹窗） -->
  <div id="merchant-trolley">
    <el-divider>购物车列表</el-divider>
    <el-table
      :data="dishes"
      :fit="true"
      height="420"
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ textAlign: 'center' }"
      style="width: 100%">
      <el-table-column
        id="dishes-image"
        prop="imgUrl"
        label="预览图"
        width="180">
        <template slot-scope="scope">
          <el-tooltip
            class="item"
            effect="dark"
            content="点击查看大图"
            placement="top">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.imgUrl"
              :preview-src-list="[scope.row.imgUrl]">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="商品名"
        :width="dishesNameColWidth">
      </el-table-column>
      <el-table-column
        prop="price"
        :width="dishesPriceColWidth"
        label="单价">
      </el-table-column>
      <el-table-column
        fixed="right"
        :width="dishesNumColWidth"
        prop="num"
        label="数量">
        <template slot-scope="scope">
          <el-input-number
            size="mini"
            :style="dishesNumWidth"
            v-model="scope.row.num"
            @change="getDishesNum"
            :min="1"
            :max="99"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="operation"
        width="120"
        label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, dishes)"
            size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-divider>基本信息</el-divider>
    <div class="basic-info">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="4" :md="4" :lg="3">预约日期：</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-date-picker
            v-model="date"
            size="mini"
            class="trolley-date-picker"
            align="right"
            type="date"
            placeholder="选择日期"
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
            v-model="time"
            range-separator="-"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
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
            placeholder="提供您的姓名"
            prefix-icon="el-icon-user"
            v-model="customerName"></el-input>
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
            placeholder="提供您的联系电话"
            prefix-icon="el-icon-phone-outline"
            v-model="telephone"></el-input>
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
            v-model="customerNum"
            @change="getCustomerNum"
            :min="1"
            :max="99"></el-input-number>
        </el-col>
      </el-row>
    </div>
    <div class="basic-info submit">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="4" :md="4" :lg="3">总价：{{price}}¥</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-check">确认支付</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MerchantTrolleyPopups',
  mounted () {
    let screenWidth = window.screen.width
    if (screenWidth > 1380) this.dishesNumColWidth = 160
    if (screenWidth <= 1380) this.dishesNumWidth = 'width: 100px'
    if (screenWidth <= 1330) this.dishesNameColWidth = 170
    if (screenWidth <= 1330) this.dishesNameColWidth = 150
    if (screenWidth <= 1250) {
      this.dishesPriceColWidth = 80
      this.dishesNameColWidth = 100
    }
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    getDishesNum (value) {
    },
    getCustomerNum (value) {
    }
  },
  data () {
    return {
      dishesNumWidth: 'width: 130px',
      dishesNumColWidth: 110,
      dishesNameColWidth: 200,
      dishesPriceColWidth: 120,
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
      date: '',
      price: 30,
      telephone: '',
      customerNum: 1,
      customerName: '',
      time: [
        new Date(2016, 9, 10, 8, 40),
        new Date(2016, 9, 10, 9, 40)
      ],
      dishes: [
        {
          id: 1,
          name: '炸鸡腿',
          imgUrl: 'http://oss.norza.cn/imgs/food/food01.jpg',
          price: 30.5,
          num: 1
        },
        {
          id: 2,
          name: '奥利奥鲜奶茶',
          imgUrl: 'http://oss.norza.cn/imgs/food/food02.jpg',
          price: 12,
          num: 1
        },
        {
          id: 3,
          name: '炸鸡块',
          imgUrl: 'http://oss.norza.cn/imgs/food/food03.jpg',
          price: 13,
          num: 1
        },
        {
          id: 4,
          name: '日本拉面',
          imgUrl: 'http://oss.norza.cn/imgs/food/food04.jpg',
          price: 14,
          num: 1
        }
      ]
    }
  }
}
</script>

<style scoped>
  .basic-info {
    margin-top: 20px;
  }

  @media screen and (min-width: 730px) {
    .trolley-number, .trolley-date-picker {
      width: 220px;
    }
  }

  @media screen and (max-width: 730px) {
    .trolley-date-picker, .trolley-number {
      width: 130px;
    }
  }

  @media screen and (min-width: 750px) {
    .trolley-number, .trolley-date-picker {
      width: 100%;
    }
  }
</style>
