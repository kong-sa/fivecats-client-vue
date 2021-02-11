<template>
  <el-container class="bbs-container">
    <el-header class="bbs-header">
      <bbs-navigation-bar/>
    </el-header>
    <el-main class="bbs-main">
      <bbs-partition/>
    </el-main>
    <el-footer class="bbs-footer"></el-footer>
  </el-container>
</template>

<script>
import BbsPartition from './child/body/BbsPartition'
import BbsNavigationBar from './child/header/BbsNavigationBar'

export default {
  name: 'BBSMain',
  components: {BbsPartition, BbsNavigationBar}
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
