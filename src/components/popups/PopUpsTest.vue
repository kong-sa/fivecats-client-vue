<template>
  <div id="pop-ups-test">
    <el-button type="text" @click="dialogVisible = true">购物车</el-button>
    <el-dialog
      title="购物车"
      :visible.sync="dialogVisible"
      width="60%">
      <rest-info-shopping-cart/>
    </el-dialog>
  </div>
</template>

<script>
import RestInfoShoppingCart from './RestInfoShoppingCart'

export default {
  name: 'PopUpsTest',
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
  },
  components: {
    RestInfoShoppingCart
  }
}
</script>

<style scoped>
</style>
