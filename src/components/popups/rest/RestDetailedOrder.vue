<template>
  <div id="rest-detailed-order">
    <div id="detailed-order-top">
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
              <el-card class="box-card">
                地理位置
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-card class="box-card">
                您当前排队号：10
              </el-card>
            </el-col>
          </el-row>
        </el-col>
        <!-- 第三列，地图，订单状态 -->
        <el-col :span="6">
          <el-row>
            <el-button @click="showMap = true" round icon="el-icon-location-information">地图</el-button>
            <el-dialog
              title="百度地图"
              :visible.sync="showMap"
              :modal="false"
              width="45%">
              <iframe id="baiduMap" width="100%" frameborder="0" height="500" src="https://map.baidu.com/"></iframe>
            </el-dialog>
          </el-row>
          <el-row style="margin-top: 48px">
            <el-collapse>
              <el-collapse-item title="订单状态" name="1">
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
        <el-col :span="1.5"><el-button size="mini" type="primary" round icon="el-icon-phone-outline">联系商家</el-button></el-col>
        <el-col :span="1.5"><el-button size="mini" type="danger" round icon="el-icon-thumb">催促商家</el-button></el-col>
      </el-row>
      <el-divider>订单列表</el-divider>
      <!-- 第三行 -->
      <div style="overflow-x: hidden; overflow-y: auto; height: 350px">
        <el-row :gutter="10" style="text-align: center; display: flex; margin-bottom: 10px">
          <!-- 第一列，图片 -->
          <el-col :span="6">
            <el-tooltip class="item" effect="dark" content="点击查看大图" placement="top">
              <el-image
                style="width: 100px; height: 100px; border-radius: 6px;"
                src="http://oss.norza.cn/imgs/food/food01.jpg"
                :preview-src-list="['http://oss.norza.cn/imgs/food/food01.jpg']">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </el-tooltip>
          </el-col>
          <!-- 第二列，单价 -->
          <el-col :span="6" style="align-self: center">
            <el-card style="text-align: left">
              单价：00.00 ¥
            </el-card>
          </el-col>
          <!-- 第二列，数量 -->
          <el-col :span="6" style="align-self: center">
            <el-card style="text-align: left">
              数量：1
            </el-card>
          </el-col>
        </el-row>
      </div>
      <!-- 第四行，操作 -->
      <div class="footer" style="margin-top: 40px">
        <span style="margin-right: 20px">总价：00.00 ¥</span>
        <el-popconfirm
          confirm-button-text='是的'
          cancel-button-text='不用了'
          icon="el-icon-info"
          icon-color="red"
          title="确定要取消订单吗？">
          <el-button slot="reference" type="danger" round>取消订单</el-button>
        </el-popconfirm>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestDetailedOrder',
  data () {
    return {
      showMap: false,
      reverse: true,
      activities: [{
        content: '订单排队中',
        timestamp: '2021-1-13 21:40:00'
      }, {
        content: '商家已接单',
        timestamp: '2021-1-13 21:38:00'
      }, {
        content: '订单创建成功',
        timestamp: '2021-1-13 21:36:00'
      }]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .el-card {
    box-shadow: 0 1px 1px rgb(0, 0, 0, 0.15) !important;
  }
</style>
