<template>
  <div id="component-testing">
    <el-button type="text" @click="showAbbOrder = true" style="margin: 15px">订单简略表</el-button>
    <el-dialog
      v-dialogDrag
      :modal="false"
      title="订单列表"
      :visible.sync="showAbbOrder"
      width="40%">
      <customer-order-abb-popups/>
    </el-dialog>
    <router-link style="margin: 15px" to="/customer/main">个人中心</router-link>
    <router-link style="margin: 15px" to="/video/main">视频播放</router-link>
    <router-link style="margin: 15px" to="/merchant/main">商家详情</router-link>
  </div>
</template>

<script>
import CustomerOrderAbbPopups from './customer/order/abb/popups/CustomerOrderAbbPopups'

export default {
  name: 'ComponentTesting',
  components: {
    CustomerOrderAbbPopups
  },
  data () {
    return {
      showAbbOrder: false
    }
  }
}
</script>

<style scoped>
</style>
