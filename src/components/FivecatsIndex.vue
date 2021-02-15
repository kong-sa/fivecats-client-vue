<template>
  <el-container>
    <el-header>
      <fivecats-navigation/>
    </el-header>
    <el-main class="fivecats-main">
      <router-view/>
    </el-main>
    <el-footer>
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
  min-height: 1000px;
  background: #faf9f9;
}
</style>
