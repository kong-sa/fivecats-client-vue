<template>
  <div class="video-all">
    <div class="video-carousel">
      <video-carousel/>
    </div>
    <div class="video-bar">
      <video-filter-bar/>
    </div>
    <div class="video-differ-type">
      <router-view/>
    </div>
  </div>
</template>

<script>
import VideoCarousel from './child/VideoCarousel'
import VideoFilterBar from './child/VideoFilterBar'

export default {
  name: 'VideoMain',
  components: {
    VideoFilterBar,
    VideoCarousel
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.video-carousel, .video-bar, .video-differ-type {
  padding: 0 12%;
}
.video-differ-type {
  margin-top: 50px;
}
</style>
