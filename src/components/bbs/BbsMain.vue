<template>
  <el-container class="bbs-container">
    <el-header class="bbs-header">
      <bbs-navigation-bar/>
    </el-header>
    <el-main class="bbs-main">
      <router-view/>
    </el-main>
    <el-footer class="bbs-footer"></el-footer>
  </el-container>
</template>

<script>
import BbsPartition from './child/body/BbsPartition'
import BbsNavigationBar from './child/header/BbsNavigationBar'

export default {
  name: 'BBSMain',
  components: {BbsPartition, BbsNavigationBar},
  created () {
    if (this.$store.state.user.id === 0) {
      this.$notify({
        title: '社区未登录提示',
        message: '你还没有登录，这将影响你的用户体验，请先登录。',
        duration: 10000
      })
    }
  }
}
</script>

<style scoped>
.bbs-container {
  background: rgb(245, 245, 250);
}

.bbs-header {
  padding: 0;
  margin-bottom: 25px;
}

.bbs-main {
  margin: 0 15%;
  padding: 0;
  min-height: 1000px;
}
</style>
