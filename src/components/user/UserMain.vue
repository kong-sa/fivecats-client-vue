<template>
  <div class="user-container">
    <center-aside/>
  </div>
</template>

<script>
import CenterAside from './child/CenterAside'

export default {
  name: 'UserMain',
  components: {CenterAside},
  created () {
    if (this.$store.state.user.id === 0) {
      this.$notify({
        title: '用户未登录提示',
        message: '你还没有登录，无法获取数据，请先登录。',
        duration: 10000
      })
    }
    document.title = this.$store.state.user.username + '的用户中心 - 五只馋猫'
  }
}
</script>

<style scoped>
.user-container {
  padding: 0 15%;
  margin-top: 30px;
}
</style>
