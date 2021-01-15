<template>
    <div id="filter-trolley-popups">
      <!-- 第一行 商家信息 -->
      <el-row :gutter="10" id="filter-trolley-merchant-info">
        <!-- 第一列 -->
        <el-col :xs="24" :sm="24" :md="5" id="merchant-image" class="filter-trolley-merchant-col">
          <el-image style="width: 100px; height: 100px; border-radius: 6px;" :src="merchant.imgUrl">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-col>
        <!-- 第二列 -->
        <el-col :xs="24" :sm="24" :md="6" class="filter-trolley-merchant-col">
          <el-card>店名：{{merchant.name}}</el-card>
        </el-col>
        <!-- 第三列 -->
        <el-col :xs="24" :sm="24" :md="12" class="filter-trolley-merchant-col">
          <el-card>地理位置：{{merchant.location}}</el-card>
        </el-col>
        <!-- 第四列 -->
        <el-col :xs="24" :sm="24" :md="4" id="map-button" class="filter-trolley-merchant-col">
          <el-button @click="showMap = true" icon="el-icon-location-information">地图</el-button>
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
        </el-col>
      </el-row>
      <el-divider>订单信息</el-divider>
      <!-- 第二行 订单信息 -->
      <el-row id="filter-trolley-dishes-info">
        <!-- 第一列 菜品图片 -->
        <el-col class="filter-trolley-dishes-col">
          <el-image style="width: 60px; height: 60px; border-radius: 6px;" :src="dishes.imgUrl">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-col>
        <!-- 第二列 菜品名字 -->
        <el-col class="filter-trolley-dishes-col">{{dishes.name}}</el-col>
        <!-- 第三列 菜品价格 -->
        <el-col class="filter-trolley-dishes-col">{{dishes.price}} ¥</el-col>
      </el-row>
      <!-- 第三行 客户信息 -->
      <el-row class="filter-trolley-dishes-info">
        <el-col :xs="8" :span="8">选择数量：</el-col>
        <el-col :xs="16" :span="16">
          <el-input-number
            class="trolley-number"
            v-model="order.num"
            :min="1"
            :max="99"
            size="mini"/>
        </el-col>
      </el-row>
      <el-row class="filter-trolley-dishes-info">
        <el-col :xs="8" :span="8">选择日期：</el-col>
        <el-col :xs="16" :span="16">
          <el-date-picker
            v-model="order.date"
            size="mini"
            class="trolley-date-picker"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"></el-date-picker>
        </el-col>
      </el-row>
      <el-row class="filter-trolley-dishes-info">
        <el-col :xs="8" :span="8">选择时间：</el-col>
        <el-col :xs="16" :span="16">
          <el-time-picker
            class="trolley-date-picker"
            is-range
            size="mini"
            v-model="order.time"
            range-separator="-"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
          </el-time-picker>
        </el-col>
      </el-row>
      <el-row class="filter-trolley-customer-info">
        <el-col :xs="8" :span="8">客户姓名：</el-col>
        <el-col :xs="16" :span="16">
          <el-input
            class="trolley-customer-input"
            size="mini"
            placeholder="提供您的姓名"
            prefix-icon="el-icon-user"
            v-model="customer.name"></el-input>
        </el-col>
      </el-row>
      <el-row class="filter-trolley-customer-info">
        <el-col :xs="8" :span="8">联系电话：</el-col>
        <el-col :xs="16" :span="16">
          <el-input
            class="trolley-customer-input"
            size="mini"
            placeholder="提供您的联系电话"
            prefix-icon="el-icon-phone-outline"
            v-model="customer.telephone"></el-input>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'FilterTrolleyPopups',
  data () {
    return {
      showMap: false,
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
      customer: {
        id: 1,
        name: '小明',
        telephone: '18508153489'
      },
      merchant: {
        id: 1,
        dishesId: 1,
        imgUrl: 'http://oss.norza.cn/imgs/84917906_p0.png',
        name: '书亦烧仙草',
        location: '四川省绵阳市涪城区万达广场'
      },
      dishes: {
        id: 1,
        name: '芋圆奶茶（大杯）',
        price: 12,
        imgUrl: 'http://oss.norza.cn/imgs/food/food02.jpg'
      },
      order: {
        id: 'EF20210115',
        num: 1,
        date: '',
        time: '',
        customerName: '小明',
        totalPrice: 12
      }
    }
  }
}
</script>

<style scoped>
  .filter-trolley-dishes-col {
    text-align: center;
  }

  @media screen and (min-width: 730px) {
    .trolley-number, .trolley-date-picker {
      width: 220px;
    }
  }

  @media screen and (max-width: 730px) {
    .trolley-date-picker, .trolley-customer-input {
      width: 130px;
    }
  }

  @media screen and (min-width: 750px) {
    .trolley-number, .trolley-date-picker {
      width: 100%;
    }
  }

  @media screen and (max-width: 992px) {
    #merchant-image {
      text-align: center;
    }
    #map-button {
      text-align: center;
    }
  }
</style>
