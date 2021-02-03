<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in findBg" :key="item.id">
      <el-image class="find-bg" :src="item.url"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'VideoCarousel',
  data () {
    return {
      findBg: [
        {id: 0, url: 'http://oss.norza.cn/imgs/find/find-bg1.jpg'},
        {id: 1, url: 'http://oss.norza.cn/imgs/find/find-bg2.jpg'}
      ]
    }
  }
}
</script>

<style scoped>
.find-bg {
  width: 100%;
}
</style>
