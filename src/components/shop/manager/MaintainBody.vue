<template>
  <el-card class="body">
    <div v-if="index === '1'">
      <basic-info/>
    </div>
    <div v-if="index === '2'">
      <discount/>
    </div>
    <div v-if="index === '3'">
      <income/>
    </div>
    <div v-if="index === '4'">
      <order/>
    </div>
    <div v-if="index === '5'">
      <dishes/>
    </div>
  </el-card>
</template>

<script>
import BasicInfo from './BasicInfo'
import Discount from './Discount'
import Dishes from './Dishes'
import Order from './Order'
import Income from './Income'

export default {
  name: 'MaintainBody',
  components: {Income, Dishes, Discount, BasicInfo, Order},
  props: ['index']
}
</script>

<style scoped>
.body {
  padding: 2% 0;
}
</style>
