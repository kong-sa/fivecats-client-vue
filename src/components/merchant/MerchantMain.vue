<template>
  <div id="merchant-main">
    <el-button type="text" @click="showTrolley = true" style="margin: 15px">购物车</el-button>
    <el-dialog
      v-dialogDrag
      :modal="false"
      title="订单列表"
      :visible.sync="showTrolley"
      width="60%">
      <merchant-trolley-popups/>
    </el-dialog>
  </div>
</template>

<script>
import MerchantTrolleyPopups from './trolley/popups/MerchantTrolleyPopups'
export default {
  name: 'MerchantMain',
  components: {
    MerchantTrolleyPopups
  },
  data () {
    return {
      showTrolley: false
    }
  }
}
</script>

<style scoped>

</style>
