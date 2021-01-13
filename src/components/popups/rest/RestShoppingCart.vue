<template>
  <div id="rest-shopping-cart">
    <el-divider>购物车列表</el-divider>
    <el-table
      :data="tableData"
      :fit="true"
      :stripe="true"
      :border="true"
      height="420"
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ textAlign: 'center' }"
      style="width: 100%">
      <el-table-column
        fixed
        prop="img"
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
              :src="scope.row.img"
              :preview-src-list="[scope.row.img]">
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
        width="200">
      </el-table-column>
      <el-table-column
        prop="price"
        width="120"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="num"
        label="数量">
        <template slot-scope="scope">
          <el-input-number
            size="mini"
            style="width: 130px"
            v-model="scope.row.num"
            @change="getGoodsNum"
            :min="1"
            :max="99">
          </el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        prop="operation"
        width="120"
        label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-divider>基本信息</el-divider>
    <div class="element-margin">
      <el-row>
        <el-col :xs="8" :sm="4" :md="4" :lg="3">预约日期：</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-date-picker
            v-model="date"
            size="mini"
            style="width: 210px"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </el-col>
      </el-row>
    </div>
    <div class="element-margin select-time">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="4" :md="4" :lg="3">到店时间：</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-time-picker
            style="width: 210px"
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
    <div class="element-margin customer-name">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="4" :md="4" :lg="3">客户姓名：</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-input
            size="mini"
            placeholder="提供您的姓名"
            prefix-icon="el-icon-user"
            v-model="customerName">
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div class="element-margin telephone">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="4" :md="4" :lg="3">联系电话：</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-input
            size="mini"
            placeholder="提供您的联系电话"
            prefix-icon="el-icon-phone-outline"
            v-model="telephone">
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div class="element-margin guest-num">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="4" :md="4" :lg="3">预定人数：</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-input-number
            size="mini"
            style="width: 210px"
            v-model="customerNum"
            @change="getGuestNum"
            :min="1"
            :max="99">
          </el-input-number>
        </el-col>
      </el-row>
    </div>
    <div class="element-margin submit">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="4" :md="4" :lg="3">总价：{{price}}¥</el-col>
        <el-col :xs="15" :sm="10" :md="8" :lg="8">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-check">
            确认支付
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RestInfoShoppingCart',
    methods: {
      deleteRow (index, rows) {
        rows.splice(index, 1)
      },
      getGoodsNum (value) {
        console.log('the goods num :' + value)
      },
      getGuestNum (value) {
        console.log('the guest num :' + value)
      }
    },
    data () {
      return {
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
        tableData: [{
          img: 'http://oss.norza.cn/imgs/84917906_p0.png',
          name: '芒果小丸子',
          num: 1,
          price: 12
        }, {
          img: 'http://oss.norza.cn/imgs/86483780_p0.png',
          name: '芋泥班长',
          num: 3,
          price: 13
        }, {
          img: 'http://oss.norza.cn/imgs/83704523_p0.jpg',
          name: '草莓小丸子',
          num: 2,
          price: 12
        }, {
          img: 'http://oss.norza.cn/imgs/82049678_p0.png',
          name: '芋圆醉好喝',
          num: 1,
          price: 10
        }]
      }
    }
  }
</script>

<style scoped>
  .element-margin {
    margin-top: 20px;
  }
</style>
