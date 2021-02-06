<template>
  <el-container class="fivecats-app">
    <el-header>
      <fivecats-navigation/>
    </el-header>
    <el-main class="fivecats-app__main">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import FivecatsNavigation from './nav/FivecatsNavigation'

export default {
  name: 'Index',
  components: {
    FivecatsNavigation
  }
}
</script>

<style scoped>
.fivecats-app__main {
  padding: 0;
  height: 3000px;
}
</style>
