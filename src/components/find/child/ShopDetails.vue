<template>
  <div></div>
</template>

<script>
export default {
  name: 'ShopDetails',
  async created () {
    let id = this.$route.params.shopId
    console.log(id)
  }
}
</script>

<style scoped>

</style>
