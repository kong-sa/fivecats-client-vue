<template>
  <div id="customer-menu">
    <customer-order-detail/>
  </div>
</template>

<script>
import CustomerOrderDetail from './order/detail/CustomerOrderDetail'

export default {
  name: 'CustomerMenu',
  components: {
    CustomerOrderDetail
  }
}
</script>

<style scoped>

</style>
