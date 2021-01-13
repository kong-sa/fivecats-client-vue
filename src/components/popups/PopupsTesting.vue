<template>
  <div id="pop-ups-test">
    <el-button type="text" @click="showMerchantTrolley = true">购物车</el-button>
    <el-button type="text" @click="showDetailedOrderMenu = true">订单详细</el-button>
    <el-button type="text" @click="showMerchantNewDishes = true">添加菜品</el-button>
    <el-button type="text" @click="showAbbreviatedOrderMenu = true">订单列表</el-button>
    <el-dialog
      title="购物车"
      :visible.sync="showMerchantTrolley"
      width="60%">
      <merchant-trolley style="margin: 15px"/>
    </el-dialog>
    <el-dialog
      title="订单详细"
      :visible.sync="showDetailedOrderMenu"
      width="60%">
      <detailed-order-menu style="margin: 15px"/>
    </el-dialog>
    <el-dialog
      title="添加菜品"
      :visible.sync="showMerchantNewDishes"
      width="45%">
      <merchant-new-dishes style="margin: 15px"/>
    </el-dialog>
    <el-dialog
      title="订单列表"
      :visible.sync="showAbbreviatedOrderMenu"
      width="30%">
      <abbreviated-order-menu style="margin: 15px"/>
    </el-dialog>
    <router-link style="margin: 15px" to="/video/preview">视频播放页</router-link>
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
      showMerchantTrolley: false,
      showDetailedOrderMenu: false,
      showMerchantNewDishes: false,
      showAbbreviatedOrderMenu: false
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
