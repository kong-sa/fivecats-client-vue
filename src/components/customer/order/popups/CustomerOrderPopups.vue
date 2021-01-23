<template>
  <!-- 简略订单列表（弹窗） -->
  <div id="order-popups">
    <div
      class="abbr-page"
      v-for="orderItem in order"
      :key="orderItem.id">
      <el-row>
        <!-- 第一行 商品图片-->
        <el-row>
          <!-- 第一列 -->
          <el-col
            :span="6"
            v-for="dishesItem in orderItem.orderDishRelations"
            :key="dishesItem.id">
            <el-image
              class="abbr-image"
              :src="dishesItem.dishes.imgUrl">
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
          <el-col :xs="10" :span="8">总价：{{orderItem.tempTotal}} ¥</el-col>
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
  name: 'CustomerOrderPopups',
  /**
   * 遍历该数组，从index为0开始，并计算每一个订单的总价
   * @returns {Promise<void>}
   */
  async created () {
    let { data: value } = await this.$http.get('/getting/abb/order?customerId=1')
    this.order = value
    value.forEach(order => {
      order.orderDishRelations.forEach(calculation => {
        order.tempTotal += calculation.dishes.price * calculation.num
      })
    })
  },
  data () {
    return {
      total: 0,
      order: []
    }
  }
}
</script>

<style scoped>
#order-popups {
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
