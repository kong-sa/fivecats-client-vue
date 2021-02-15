<template>
  <div class="user-container">
    <user-center/>
  </div>
</template>

<script>
import UserCenter from './child/UserCenter'

export default {
  name: 'UserMain',
  components: {UserCenter},
  created () {
    if (this.$store.state.user.id === 0) {
      this.$notify({
        title: '用户未登录提示',
        message: '你还没有登录，无法获取数据，请先登录。',
        duration: 10000
      })
    }
  }
}
</script>

<style scoped>
.user-container {
  padding: 0 15%;
  margin-top: 30px;
}
</style>
