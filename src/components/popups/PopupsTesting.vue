<template>
  <div id="pop-ups-test">
    <el-button type="text" @click="showShoppingCart = true">购物车</el-button>
    <el-button type="text" @click="showDetailedOrder = true">订单详细</el-button>
    <el-button type="text" @click="showRestPutMenu = true">添加菜品</el-button>
    <el-button type="text" @click="showAbbreviatedOrderList = true">订单列表</el-button>
    <el-dialog
      title="购物车"
      :visible.sync="showShoppingCart"
      width="60%">
      <merchant-trolley style="margin: 15px"/>
    </el-dialog>
    <el-dialog
      title="订单详细"
      :visible.sync="showDetailedOrder"
      width="60%">
      <detailed-order-menu style="margin: 15px"/>
    </el-dialog>
    <el-dialog
      title="添加菜品"
      :visible.sync="showRestPutMenu"
      width="45%">
      <merchant-new-dishes style="margin: 15px"/>
    </el-dialog>
    <el-dialog
      title="订单列表"
      :visible.sync="showAbbreviatedOrderList"
      width="30%">
      <abbreviated-order-menu style="margin: 15px"/>
    </el-dialog>
    <router-link to="/video/preview">登陆</router-link>
  </div>
</template>

<script>
import MerchantTrolley from './merchant/MerchantTrolley'
import DetailedOrderMenu from './navigation/DetailedOrderMenu'
import MerchantNewDishes from './merchant/MerchantNewDishes'
import AbbreviatedOrderMenu from './navigation/AbbreviatedOrderMenu'

export default {
  name: 'PopupsTesting',
  data () {
    return {
      showShoppingCart: false,
      showDetailedOrder: false,
      showRestPutMenu: false,
      showAbbreviatedOrderList: false
    }
  },
  components: {
    MerchantTrolley,
    MerchantNewDishes,
    DetailedOrderMenu,
    AbbreviatedOrderMenu
  }
}
</script>

<style scoped>
</style>
