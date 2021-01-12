<template>
  <div id="pop-ups-test">
    <el-button type="text" @click="showShoppingCart = true">购物车</el-button>
    <el-button type="text" @click="showDetailedOrder = true">订单详细</el-button>
    <el-dialog
      title="购物车"
      :visible.sync="showShoppingCart"
      width="60%">
      <rest-info-shopping-cart/>
    </el-dialog>
    <el-dialog
      title="订单详细"
      :visible.sync="showDetailedOrder"
      width="60%">
      <detailed-order/>
    </el-dialog>
  </div>
</template>

<script>
import RestInfoShoppingCart from './RestInfoShoppingCart'
import DetailedOrder from './DetailedOrder'

export default {
  name: 'PopUpsTest',
  data () {
    return {
      showShoppingCart: false,
      showDetailedOrder: false
    }
  },
  methods: {
  },
  components: {
    RestInfoShoppingCart,
    DetailedOrder
  }
}
</script>

<style scoped>
</style>
