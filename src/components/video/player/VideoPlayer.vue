<template>
    <div id="video-player">
      <video ref="videoPlayer" class="video-js vjs-big-play-centered vjs-matrix"></video>
    </div>
</template>

<script>
import videoJs from 'video.js'
export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      player: null
    }
  },
  mounted () {
    this.player = videoJs(this.$refs.videoPlayer, this.options, function onPlayerReady () {
      console.log('onPlayerReady', this)
    })
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style scoped>
#video-player {
 padding: 0 10%;
}

.vjs-big-play-button {
 left: 50% !important;
 top: 50% !important;
 margin-left: -2em;
 margin-top: -1.3em;
}
</style>
