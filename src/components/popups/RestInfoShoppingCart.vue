<template>
  <div id="rest-info-shopping-cart">
    <el-table
      :data="tableData"
      show-summary
      :stripe="true"
      :border="true"
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ textAlign: 'center', background: '#f7f9fc', fontSize: '18px' }"
      style="width: 100%">
      <el-table-column
        prop="img"
        label="预览图"
        width="180">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="点击查看大图" placement="top">
            <el-image style="width: 100px; height: 100px" :src="scope.row.img" :preview-src-list="[scope.row.img]">
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
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="num"
        label="数量">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="element-margin select-time">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          时间段：
        </el-col>
        <el-col :xs="8" :sm="6" :md="8" :lg="15" :xl="1">
          <el-time-picker
            is-range
            v-model="value"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
          </el-time-picker>
        </el-col>
      </el-row>
    </div>
    <div class="element-margin order-name">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          订购人姓名：
        </el-col>
        <el-col :xs="8" :sm="6" :md="8" :lg="15" :xl="1">
          <el-input
            placeholder="请输入您的姓名"
            prefix-icon="el-icon-user"
            v-model="orderName">
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div class="element-margin order-telephone">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          联系电话：
        </el-col>
        <el-col :xs="8" :sm="6" :md="8" :lg="15" :xl="1">
          <el-input
            placeholder="请输入您的联系电话"
            prefix-icon="el-icon-phone-outline"
            v-model="telephone">
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div class="element-margin guest-num">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          人数：
        </el-col>
        <el-col :xs="8" :sm="6" :md="8" :lg="15" :xl="1">
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-col>
      </el-row>
    </div>
    <div class="element-margin submit" style="float: right">
      <span style="margin-right: 20px">总价：{{price}}¥</span>
      <el-button type="primary" round icon="el-icon-check">确认支付</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestInfoShoppingCart.vue',
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    handleChange (value) {
      console.log(value)
    }
  },
  data () {
    return {
      price: 30,
      orderName: '',
      telephone: 18508153489,
      num: 1,
      value: [
        new Date(2016, 9, 10, 8, 40),
        new Date(2016, 9, 10, 9, 40)
      ],
      tableData: [{
        img: 'https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/84917906_p0.png',
        name: '芒果小丸子',
        num: 1,
        price: 12
      }, {
        img: 'https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/86483780_p0.png',
        name: '芋泥班长',
        num: 3,
        price: 13
      }, {
        img: 'https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/83704523_p0.jpg',
        name: '草莓小丸子',
        num: 2,
        price: 12
      }, {
        img: 'https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/82049678_p0.png',
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
