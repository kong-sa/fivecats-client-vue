<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-button type="text" @click="showTrolley = true" style="margin: 15px">寻找美食-购物车</el-button>
      <el-dialog
        v-dialogDrag
        :modal="false"
        title="购物车"
        :visible.sync="showTrolley"
        :width="dialogWidth">
        <filter-trolley-popups/>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
import FilterTrolleyPopups from './trolley/popups/FilterTrolleyPopups'

export default {
  name: 'FilterMain',
  mounted () {
    if (window.screen.width <= 510) this.dialogWidth = '70%'
    if (window.screen.width <= 360) this.dialogWidth = '80%'
    if (window.screen.width <= 325) this.dialogWidth = '90%'
    if (window.screen.width <= 290) this.dialogWidth = '100%'
    if (window.screen.width >= 1380) this.dialogWidth = '40%'
  },
  data () {
    return {
      showTrolley: false,
      dialogWidth: '50%'
    }
  },
  components: {
    FilterTrolleyPopups
  }
}
</script>

<style scoped>
</style>
