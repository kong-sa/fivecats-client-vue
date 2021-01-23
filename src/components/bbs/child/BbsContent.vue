<template>
  <el-card id="bbs-content" class="box-card">
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'BbsContent'
}
</script>

<style scoped>

</style>
