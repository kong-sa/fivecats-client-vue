<template>
  <div id="customer-menu">
    <customer-order-list/>
  </div>
</template>

<script>
import CustomerOrderList from './order/CustomerOrderList'

export default {
  name: 'CustomerMain',
  components: {
    CustomerOrderList
  }
}
</script>

<style scoped>

</style>
