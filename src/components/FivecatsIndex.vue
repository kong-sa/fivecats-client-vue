<template>
  <el-container class="fivecats-app">
    <el-header>header</el-header>
    <el-main class="fivecats-app__main">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
.fivecats-app__main {
  padding: 0;
  height: 3000px;
}
</style>
