<template>
  <!-- 用户订单 - 简略列表（弹窗） -->
  <div id="abbr-order">
    <div
      class="abbr-page"
      v-for="orderItem in order"
      :key="orderItem.orderNumber">
      <el-row>
        <el-row>
          <el-col
            :span="6"
            v-for="dishesItem in orderItem.dishes"
            :key="dishesItem.dishesId">
            <el-image
              class="abbr-image"
              :src="dishesItem.imgUrl">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="10" :span="8">排队号：{{orderItem.queueNumber}}</el-col>
          <el-col :xs="10" :span="8">总价：{{orderItem.total}} ¥</el-col>
          <el-col :xs="12" :span="8">
            <router-link to="/detail/order">详细</router-link>
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerOrderAbbPopups',
  mounted () {
    this.order.forEach(function (currentValue, index, arr) {
      let total = 0
      currentValue.dishes.forEach(function (value, index, arr) {
        total += value.price * value.num
      })
      currentValue.total = total
    })
  },
  data () {
    return {
      total: 0,
      order: [
        {
          customerId: 1,
          total: 0,
          dishes: [
            {
              dishesId: 1,
              imgUrl: 'http://oss.norza.cn/imgs/food/food01.jpg',
              price: 30.5,
              num: 1
            },
            {
              dishesId: 2,
              imgUrl: 'http://oss.norza.cn/imgs/food/food02.jpg',
              price: 12,
              num: 1
            },
            {
              dishesId: 3,
              imgUrl: 'http://oss.norza.cn/imgs/food/food03.jpg',
              price: 13,
              num: 1
            },
            {
              dishesId: 4,
              imgUrl: 'http://oss.norza.cn/imgs/food/food04.jpg',
              price: 14,
              num: 1
            }
          ],
          orderNumber: 'EF20210113',
          queueNumber: '10'
        },
        {
          customerId: 1,
          total: 0,
          dishes: [
            {
              dishesId: 2,
              imgUrl: 'http://oss.norza.cn/imgs/food/food02.jpg',
              price: 12,
              num: 1
            },
            {
              dishesId: 3,
              imgUrl: 'http://oss.norza.cn/imgs/food/food03.jpg',
              price: 13,
              num: 1
            },
            {
              dishesId: 4,
              imgUrl: 'http://oss.norza.cn/imgs/food/food04.jpg',
              price: 14,
              num: 1
            }
          ],
          orderNumber: 'EF20210114',
          queueNumber: '21'
        }
      ]
    }
  }
}
</script>

<style scoped>
#abbr-order {
  height: 453px;
  overflow-y: auto
}

.abbr-page {
  margin: 5px;
  padding: 10px;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, .12),
    0 0 6px rgba(0, 0, 0, .04)
}

.abbr-image {
  width: 50px;
  height: 50px;
  border-radius: 6px
}
</style>
