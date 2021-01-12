<template>
  <div id="pop-ups-test">
    <el-button type="text" @click="showShoppingCart = true">购物车</el-button>
    <el-button type="text" @click="showDetailedOrder = true">订单详细</el-button>
    <el-button type="text" @click="showRestPutMenu = true">添加菜品</el-button>
    <el-dialog
      title="购物车"
      :visible.sync="showShoppingCart"
      width="60%">
      <rest-shopping-cart/>
    </el-dialog>
    <el-dialog
      title="订单详细"
      :visible.sync="showDetailedOrder"
      width="60%">
      <rest-detailed-order/>
    </el-dialog>
    <el-dialog
      title="添加菜品"
      :visible.sync="showRestPutMenu"
      width="45%">
      <rest-put-menu/>
    </el-dialog>
  </div>
</template>

<script>
import RestShoppingCart from './rest/RestShoppingCart'
import RestDetailedOrder from './rest/RestDetailedOrder'
import RestPutMenu from './rest/RestPutMenu'

export default {
  name: 'PopupsTesting',
  data () {
    return {
      showShoppingCart: false,
      showDetailedOrder: false,
      showRestPutMenu: false
    }
  },
  methods: {
  },
  components: {
    RestShoppingCart,
    RestDetailedOrder,
    RestPutMenu
  }
}
</script>

<style scoped>
</style>
