<template>
  <!-- 详细订单页 -->
  <el-container>
    <el-header>Header</el-header>
    <el-main id="order-detail-main">
      <!-- 第一行 商家信息 -->
      <el-row>
        <!-- 第一列 商家图片-->
        <el-col id="merchant-image" :xs="24" :span="6">
          <el-image
            v-if="order"
            :src="order.merchant.avatar"
            style="width: 150px; height: 150px; border-radius: 6px;">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-col>
        <!-- 第二列 商家信息-->
        <el-col :xs="24" :span="12">
          <!-- 第一行 商家地理位置 -->
          <el-row style="margin-bottom: 25px">
              <el-card class="box-card">地理位置：{{order.merchant.location}}</el-card>
          </el-row>
          <!-- 第二行 排队号信息-->
          <el-row>
              <el-card class="box-card">您当前排队号：{{order.queueNum}}</el-card>
          </el-row>
        </el-col>
        <!-- 第三列 其他便利功能-->
        <el-col :xs="24" :span="6">
          <!-- 第一行 地图按钮 -->
          <el-row>
            <el-button class="third-col" @click="openMap" icon="el-icon-location-information">查看地图</el-button>
            <el-dialog
              v-dialogDrag
              title="百度地图"
              :visible.sync="showMap"
              :close-on-click-modal="false"
              :modal="false"
              width="45%">
              <iframe
                width="100%"
                frameborder="0"
                height="500"
                src="https://map.baidu.com/">
              </iframe>
            </el-dialog>
          </el-row>
          <!-- 第二行 订单号信息 -->
          <el-row style="margin-top: 15px">
            <span class="third-col">订单号：{{order.orderNum}}</span>
            <el-popover class="third-col"
              placement="top-start"
              title="订单号？"
              width="200"
              trigger="hover"
              content="您需要凭借此订单号到店给前台，方可就餐；也可以凭借此订单号申请售后服务等。">
              <el-button slot="reference" icon="el-icon-info" circle size="mini"></el-button>
            </el-popover>
          </el-row>
          <!-- 第三行 订单信息折叠面板 -->
          <el-row style="margin-top: 15px">
            <el-collapse class="third-col">
              <el-collapse-item title="订单状态" name="1">
                <el-timeline :reverse="reverse" style="margin-top: 20px">
                  <el-timeline-item
                    v-for="(activity, index) in order.orderStatus"
                    :key="index"
                    :timestamp="activity.timestamp">
                    {{activity.content}}
                  </el-timeline-item>
                </el-timeline>
              </el-collapse-item>
            </el-collapse>
          </el-row>
        </el-col>
      </el-row>
      <!-- 第二行 相关功能 -->
      <el-row :gutter="10" style="margin-top: 20px">
        <el-col :span="1.5">
          <el-button size="mini" icon="el-icon-phone-outline">联系商家</el-button>
        </el-col>
        <el-col :span="1.5">
          <el-button size="mini" icon="el-icon-thumb">催促商家</el-button>
        </el-col>
      </el-row>
      <el-divider>订单列表</el-divider>
      <!-- 第三行 订单表格 -->
      <el-table
        class="table-column"
        :data="order.orderDishes"
        :fit="true"
        :stripe="true"
        :border="true"
        height="420"
        :cell-style="{ textAlign: 'center' }"
        :header-cell-style="{ textAlign: 'center' }"
        style="width: 100%">
        <el-table-column
          fixed
          prop="dishes.imgUrl"
          label="预览图">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="点击查看大图" placement="top">
              <el-image
                style="width: 100px; height: 100px"
                :src="scope.row.dishes.imgUrl"
                :preview-src-list="[scope.row.dishes.imgUrl]">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="dishes.name"
          label="商品名">
        </el-table-column>
        <el-table-column
          prop="dishes.price"
          width="120"
          label="单价">
        </el-table-column>
        <el-table-column
          prop="num"
          label="数量">
          <template slot-scope="scope">
            <el-input-number
              size="mini"
              :disabled="true"
              style="width: 130px"
              v-model="scope.row.num"
              @change="getDishesNum"
              :min="1"
              :max="99">
            </el-input-number>
          </template>
        </el-table-column>
      </el-table>
      <el-divider>预约信息</el-divider>
      <!-- 预约信息 -->
      <div class="appointment-information">
        <el-row :gutter="10">
          <el-col style="margin: 10px" :span="7">预约日期：{{order.appointmentDate}}</el-col>
          <el-col style="margin: 10px" :span="7">到店时间：{{order.appointmentDate}}</el-col>
          <el-col style="margin: 10px" :span="7">客户姓名：{{order.customer.name}}</el-col>
          <el-col style="margin: 10px" :span="7">联系电话：{{order.customer.phone}}</el-col>
          <el-col style="margin: 10px" :span="7">约定人数：{{order.appointmentNum}}</el-col>
        </el-row>
      </div>
      <!-- 订单操作 -->
      <div class="basic-info submit">
        <div class="footer" style="margin-top: 40px">
          <span style="margin-right: 20px">总价：{{total}} ¥</span>
          <el-popconfirm
            confirm-button-text='是的'
            cancel-button-text='不用了'
            icon="el-icon-info"
            icon-color="red"
            title="确定要取消订单吗？">
            <el-button
              :disabled="order.isHandle = 0 ? true : false"
              type="primary"
              slot="reference"
              size="mini">取消订单</el-button>
          </el-popconfirm>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'CustomerOrderDetail',
  methods: {
    getDishesNum (value) {
    },
    openMap () {
      this.showMap = true
    }
  },
  async created () {
    let { data: _order } = await this.$http.get('/getting/detail/order?customerId=1&id=1&merchantId=1')
    this.order = _order
    console.log(_order)
    let total = 0
    _order.orderDishes.forEach(value => {
      total += value.num * value.dishes.price
    })
    this.total = total
  },
  data () {
    return {
      showMap: false,
      reverse: true,
      total: 0,
      dishes: [],
      order: {},
      time: [
        new Date(2016, 9, 10, 8, 40),
        new Date(2016, 9, 10, 9, 40)
      ]
    }
  }
}
</script>

<style scoped>
  /* 当屏幕 < 768px */
  @media screen and (max-width: 768px) {
    #order-detail-main {
      padding: 0;
    }
    #merchant-image {
      text-align: center;
    }
  }
  /* 当屏幕 > 768px */
  @media screen and (min-width: 768px) {
    #order-detail-main {
      padding: 0 10%;
    }
    .third-col {
      float: right;
    }
  }
</style>
