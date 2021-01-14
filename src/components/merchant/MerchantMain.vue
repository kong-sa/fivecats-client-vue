<template>
  <div id="merchant-main">
    <el-button type="text" @click="showTrolley = true" style="margin: 15px">购物车</el-button>
    <el-dialog
      v-dialogDrag
      :modal="false"
      title="购物车"
      :visible.sync="showTrolley"
      width="60%">
      <merchant-trolley-popups/>
    </el-dialog>
    <el-button type="text" @click="showDishes = true" style="margin: 15px">添加菜品</el-button>
    <el-dialog
      v-dialogDrag
      :modal="false"
      title="添加菜品"
      :visible.sync="showDishes"
      width="50%">
      <merchant-maintain-dishes-popups/>
    </el-dialog>
  </div>
</template>

<script>
import MerchantTrolleyPopups from './trolley/popups/MerchantTrolleyPopups'
import MerchantMaintainDishesPopups from './maintain/dishes/popups/MerchantMaintainDishesPopups'

export default {
  name: 'MerchantMain',
  components: {
    MerchantTrolleyPopups,
    MerchantMaintainDishesPopups
  },
  data () {
    return {
      showTrolley: false,
      showDishes: false
    }
  }
}
</script>

<style scoped>

</style>
