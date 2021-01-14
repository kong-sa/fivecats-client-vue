<template>
  <div id="video-preview">
    <video-player :options="videoOptions"/>
    <video-comment/>
  </div>
</template>

<script>
import VideoPlayer from './player/VideoPlayer'
import VideoComment from './comment/VideoComment'
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
        width: '1080px',
        height: '720px',
        playbackRates: [0.5, 1, 1.5, 2]
      }
    }
  }
}
</script>

<style scoped>
#video-preview {

}
</style>
