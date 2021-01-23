<template>
  <div id="customer-menu">
    <detail-order/>
  </div>
</template>

<script>
import DetailOrder from './order/DetailOrder'

export default {
  name: 'CustomerMain',
  components: {
    DetailOrder
  }
}
</script>

<style scoped>

</style>
