<template>
  <div id="component-testing">
    <el-button type="text" @click="showAbbOrder = true" style="margin: 15px">订单简略表</el-button>
    <el-dialog
      v-dialogDrag
      :modal="false"
      title="订单列表"
      :visible.sync="showAbbOrder"
      :width="dialogWidth">
      <customer-order-abb-popups/>
    </el-dialog>
    <router-link style="margin: 15px" to="/customer/main">个人中心</router-link>
    <router-link style="margin: 15px" to="/video/main">视频播放</router-link>
    <router-link style="margin: 15px" to="/merchant/main">商家详情</router-link>
    <router-link style="margin: 15px" to="/filter/main">寻找美食</router-link>
  </div>
</template>

<script>
import CustomerOrderAbbPopups from './customer/order/abb/popups/CustomerOrderAbbPopups'

export default {
  name: 'ComponentTesting',
  components: {
    CustomerOrderAbbPopups
  },
  mounted () {
    let width = window.screen.width
    if (width < 768) {
      this.dialogWidth = '90%'
    }
    if (width < 330) {
      this.dialogWidth = '100%'
    }
  },
  data () {
    return {
      dialogWidth: '30%',
      showAbbOrder: false
    }
  }
}
</script>

<style scoped>
</style>
