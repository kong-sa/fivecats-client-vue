<template>
  <div id="detailed-order-menu">
    <el-divider>商家信息</el-divider>
    <!-- 第一行 -->
    <el-row :gutter="10">
      <!-- 第一列，商家的图片 -->
      <el-col :span="6" style="text-align: center">
        <el-image
          style="width: 150px; height: 150px; border-radius: 6px;"
          src="http://oss.norza.cn/imgs/84917906_p0.png">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </el-col>
      <!-- 第二列，地理位置，排队号 -->
      <el-col :span="12">
        <el-row style="margin-bottom: 25px">
          <el-col>
            <el-card class="box-card">地理位置：{{merchant.location}}</el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-card class="box-card">您当前排队号：{{order.queueNumber}}</el-card>
          </el-col>
        </el-row>
      </el-col>
      <!-- 第三列，地图，订单状态 -->
      <el-col :span="6">
        <el-row>
          <el-button @click="openMap" icon="el-icon-location-information">地图</el-button>
          <el-dialog
            v-dialogDrag
            title="百度地图"
            :visible.sync="showMap"
            :close-on-click-modal="false"
            :modal="false"
            width="45%">
            <iframe
              id="baidu-map"
              width="100%"
              frameborder="0"
              height="500"
              src="https://map.baidu.com/">
            </iframe>
          </el-dialog>
        </el-row>
        <el-row style="margin-top: 15px">
          <span>订单号：{{order.orderNumber}}</span>
          <el-popover
            placement="top-start"
            title="订单号？"
            width="200"
            trigger="hover"
            content="您需要凭借此订单号到店给前台，方可就餐；也可以凭借此订单号申请售后服务等。">
            <el-button slot="reference" icon="el-icon-info" circle size="mini"></el-button>
          </el-popover>
        </el-row>
        <el-row style="margin-top: 15px">
          <el-collapse>
            <el-collapse-item :title="order.status" name="1">
              <el-timeline :reverse="reverse" style="margin-top: 20px">
                <el-timeline-item
                  v-for="(activity, index) in activities"
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
    <!-- 第二行 -->
    <el-row :gutter="10">
      <el-col :span="1.5">
        <el-button size="mini" icon="el-icon-phone-outline">联系商家</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button size="mini" icon="el-icon-thumb">催促商家</el-button>
      </el-col>
    </el-row>
    <el-divider>订单列表</el-divider>
    <!-- 第三行 -->
    <el-table
      :data="dishes"
      :fit="true"
      :stripe="true"
      :border="true"
      height="420"
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ textAlign: 'center' }"
      style="width: 100%">
      <!-- 预览图 -->
      <el-table-column
        fixed
        prop="imgUrl"
        label="预览图"
        width="180">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="点击查看大图" placement="top">
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
      <!-- 商品名 -->
      <el-table-column
        prop="name"
        label="商品名"
        width="200">
      </el-table-column>
      <!-- 单价 -->
      <el-table-column
        prop="price"
        width="120"
        label="单价">
      </el-table-column>
      <!-- 数量 -->
      <el-table-column
        prop="num"
        label="数量">
        <template slot-scope="scope">
          <el-input-number
            size="mini"
            :disabled="true"
            style="width: 130px"
            v-model="scope.row.num"
            @change="getGoodsNum"
            :min="1"
            :max="99">
          </el-input-number>
        </template>
      </el-table-column>
    </el-table>
    <el-divider>预约信息</el-divider>
    <div class="appointment-information">
      <el-row :gutter="10">
        <el-col style="margin: 10px" :span="7">预约日期：{{order.date}}</el-col>
        <el-col style="margin: 10px" :span="7">到店时间：{{order.time}}</el-col>
        <el-col style="margin: 10px" :span="7">客户姓名：{{customer.name}}</el-col>
        <el-col style="margin: 10px" :span="7">联系电话：{{customer.telephone}}</el-col>
        <el-col style="margin: 10px" :span="7">约定人数：{{order.num}}</el-col>
      </el-row>
    </div>
    <div class="element-margin submit">
      <!-- 第四行，操作 -->
      <div class="footer" style="margin-top: 40px">
        <span style="margin-right: 20px">总价：{{total}} ¥</span>
        <el-popconfirm
          confirm-button-text='是的'
          cancel-button-text='不用了'
          icon="el-icon-info"
          icon-color="red"
          title="确定要取消订单吗？">
          <el-button :disabled="order.notCancelable" type="primary" slot="reference" size="mini">取消订单</el-button>
        </el-popconfirm>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailedOrderMenu',
  methods: {
    getGoodsNum (value) {
      console.log('the goods num :' + value)
    },
    getGuestNum (value) {
      console.log('the guest num :' + value)
    },
    openMap () {
      this.showMap = true
    }
  },
  mounted () {
    let total = 0
    this.dishes.forEach(function (currentValue, index, arr) {
      let currentTotal = currentValue.price * currentValue.num
      total += currentTotal
    })
    this.total = total
  },
  data () {
    return {
      showMap: false,
      reverse: true,
      total: 0,
      merchant: {
        merchantId: 1,
        telephone: '18508153489',
        location: '四川省绵阳市涪城区万达广场2号门2楼'
      },
      customer: {
        customerId: 1,
        name: '小明',
        telephone: '18508153489'
      },
      order: {
        customerId: 1,
        orderNumber: 'EF20210113',
        status: '订单状态：订单已完成',
        notCancelable: true,
        date: '2020-01-13',
        time: '12:30:00-1:30:00',
        queueNumber: '10',
        num: 2
      },
      dishes: [
        {
          dishesId: 1,
          imgUrl: 'http://oss.norza.cn/imgs/food/food01.jpg',
          name: '炸鸡腿',
          num: 1,
          price: 12
        },
        {
          dishesId: 2,
          imgUrl: 'http://oss.norza.cn/imgs/food/food02.jpg',
          name: '原味奶茶',
          num: 1,
          price: 12
        },
        {
          dishesId: 3,
          imgUrl: 'http://oss.norza.cn/imgs/food/food03.jpg',
          name: '炸鸡块',
          num: 1,
          price: 13
        }
      ],
      time: [
        new Date(2016, 9, 10, 8, 40),
        new Date(2016, 9, 10, 9, 40)
      ],
      activities: [
        {
          content: '订单已完成',
          timestamp: '2021-1-13 22:56:00'
        },
        {
          content: '正在使用中',
          timestamp: '2021-1-13 22:01:00'
        },
        {
          content: '订单排队中',
          timestamp: '2021-1-13 21:40:00'
        },
        {
          content: '商家已接单',
          timestamp: '2021-1-13 21:38:00'
        },
        {
          content: '订单创建成功',
          timestamp: '2021-1-13 21:36:00'
        }
      ]
    }
  }
}
</script>

<style scoped>
.el-card {
  box-shadow: 0 1px 1px rgb(0, 0, 0, 0.15) !important;
}
</style>
