<template>
  <div class="message-like">
    <el-divider>最新消息</el-divider>
    <el-row></el-row>
    <el-divider>以往消息</el-divider>
    <el-row></el-row>
  </div>
</template>

<script>
export default {
  name: 'BbsUserMessageLike',
  async created () {
  },
  data () {
    return {
      httpResValue1: {}
    }
  }
}
</script>

<style scoped>

</style>
