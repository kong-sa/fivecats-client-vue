<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main id="video-main">
      <video-player/>
      <video-comment/>
    </el-main>
  </el-container>
</template>

<script>
import VideoComment from './comment/VideoComment'
import VideoPlayer from './player/VideoPlayer'

export default {
  name: 'VideoMain',
  components: {
    VideoPlayer,
    VideoComment
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
/* 当屏幕小于767px时 */
@media screen and (max-width: 767px) {
  #video-main {
    padding: 0;
  }
}

/* 当屏幕大于于767px时 */
@media screen and (min-width: 768px) {
}
</style>
