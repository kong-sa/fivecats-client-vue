<template>
  <el-container class="fivecats-container">
    <el-header>
      <fivecats-navigation/>
    </el-header>
    <el-main class="fivecats-main">
      <router-view/>
    </el-main>
    <el-footer class="fivecats-footer">
    </el-footer>
  </el-container>
</template>

<script>
import FivecatsNavigation from './nav/FivecatsNavigation'

export default {
  name: 'FivecatsIndex',
  components: {FivecatsNavigation}
}
</script>

<style scoped>
.fivecats-main {
  padding: 0;
  height: 2000px;
  background: #faf9f9;
}
</style>
