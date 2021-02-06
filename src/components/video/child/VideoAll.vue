<template>
  <div class="videos">
    <div class="making">
      <div class="video-desc">美食制作</div>
      <video-all-no-type v-bind:videoType="videoType[0].type"/>
    </div>
    <div class="sharing">
      <div class="video-desc">美食分享</div>
      <video-all-no-type v-bind:videoType="videoType[1].type"/>
    </div>
    <div class="countryside">
      <div class="video-desc">农村美食</div>
      <video-all-no-type v-bind:videoType="videoType[2].type"/>
    </div>
    <div class="other">
      <div class="video-desc">其他</div>
      <video-all-no-type v-bind:videoType="videoType[3].type"/>
    </div>
  </div>
</template>

<script>
import VideoAllNoType from './VideoAllNoType'

export default {
  name: 'VideoAll',
  components: {
    VideoAllNoType
  },
  data () {
    return {
      videoType: [
        {id: 0, type: 'making'},
        {id: 1, type: 'sharing'},
        {id: 2, type: 'countryside'},
        {id: 3, type: 'other'}
      ]
    }
  }
}
</script>

<style scoped>
.video-desc {
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 15px;
}

.making, .sharing, .countryside, .other {
  margin-top: 50px;
}
</style>
