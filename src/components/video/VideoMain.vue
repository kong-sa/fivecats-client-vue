<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main id="video-main">
      <video-player :options="videoOptions"/>
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
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: 'http://oss.norza.cn/videos/%E8%B1%AA%E8%B5%8C%E4%B9%8B%E6%B8%8AXX%2002.mp4',
            type: 'video/mp4'
          }
        ],
        fluid: true,
        aspectRatio: '16:9',
        playbackRates: [0.5, 1, 1.5, 2]
      }
    }
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
