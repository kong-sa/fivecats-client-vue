<template>
  <!-- 简略订单列表（弹窗） -->
  <div id="abbr-order">
    <div
      class="abbr-page"
      v-for="orderItem in order"
      :key="orderItem.orderNum">
      <el-row>
        <!-- 第一行 商品图片-->
        <el-row>
          <!-- 第一列 -->
          <el-col
            :span="6"
            v-for="dishesItem in orderItem.dishes"
            :key="dishesItem.id">
            <el-image
              class="abbr-image"
              :src="dishesItem.imgUrl">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
        </el-row>
        <!-- 第二行 订单简略信息-->
        <el-row>
          <!-- 第一列 -->
          <el-col :xs="10" :span="8">排队号：{{orderItem.queueNum}}</el-col>
          <!-- 第二列 -->
          <el-col :xs="10" :span="8">总价：{{orderItem.total}} ¥</el-col>
          <!-- 第三列 跳转详细订单页面 -->
          <el-col :xs="12" :span="8">
            <router-link to="/detail/order">查看详细</router-link>
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerOrderAbbPopups',
  // 页面DOM元素挂载完成后，计算每一行简略订单的总价
  mounted () {
    this.order.forEach(function (order, index, arr) {
      let total = 0
      order.dishes.forEach(function (value, index, arr) {
        total += value.price * value.num
      })
      order.total = total
    })
  },
  data () {
    return {
      total: 0,
      order: [
        {
          id: 1,
          customerId: 1,
          total: 0,
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
          ],
          orderNum: 'EF20210113',
          queueNum: '10'
        },
        {
          id: 2,
          customerId: 1,
          total: 0,
          dishes: [
            {
              id: 2,
              imgUrl: 'http://oss.norza.cn/imgs/food/food02.jpg',
              price: 12,
              num: 1
            },
            {
              id: 3,
              imgUrl: 'http://oss.norza.cn/imgs/food/food03.jpg',
              price: 13,
              num: 1
            },
            {
              id: 4,
              imgUrl: 'http://oss.norza.cn/imgs/food/food04.jpg',
              price: 14,
              num: 1
            }
          ],
          orderNum: 'EF20210114',
          queueNum: '21'
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.abbr-image {
  width: 50px;
  height: 50px;
  border-radius: 6px
}
</style>
