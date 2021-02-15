<template>
  <div class="order">
    <el-row class="order-item" :gutter="20" v-for="(item, index) in order" :key="index">
      <el-col :span="24" style="padding: 10px 20px">
        <el-row style="font-size: 25px; font-weight: 600">
          订单 {{ index + 1 }}
        </el-row>
        <el-row>
          <span class="label">订单号:</span> {{ item.queueNum }}
        </el-row>
        <el-row>
          <span class="label">桌子号:</span> {{ item.table }}
        </el-row>
        <el-row>
          <span class="label">客户姓名:</span> {{ item.name }}
        </el-row>
        <el-row>
          <span class="label">手机号:</span> {{ item.phone }}
        </el-row>
        <el-row>
          <span class="label">到达时间:</span> {{ item.arrivalTime }}
        </el-row>
        <el-row>
          <span class="label">总价格:</span> {{ item.totalPrice }}
        </el-row>
        <el-row>
          <span class="label">商家是否接单: </span>
          <span v-if="item.isHandle === 0">未接单</span>
          <span v-else>已接单</span>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Order',
  async created () {
    let {data: res} = await this.$http.get('/shop/getting/order?id=' + this.$store.state.shop.id)
    this.order = res
  },
  data () {
    return {
      order: [
        {
          id: 0,
          userId: 0,
          shopId: 0,
          phone: '',
          name: '',
          num: '',
          table: '',
          appointDate: '',
          arrivalTime: '',
          totalPrice: 0,
          isHandle: 0,
          queueNum: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.label {
  font-size: 18px;
  font-weight: 600;
}

a:link {
  color: #999;
  text-decoration: none;
}

a:visited {
  color: #999;
  text-decoration: none;
}

a:hover {
  color: #ffc107;
  text-decoration: none;
  transition: 0.5s;
}

.order-item {
  border-bottom: 1px solid #ccc;
  transition: 0.3s;
}

.order-item:hover {
  box-shadow: 10px 10px 5px #888888;
  transition: 0.3s;
  border-radius: 6px;
  cursor: pointer;
  transform: translate(-5px, -5px);
}

a:active {
  color: #999;
  text-decoration: none;
}
</style>
