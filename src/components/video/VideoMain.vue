<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main id="video-main">
      <video-player :video="video"/>
      <video-comment :comment="comment" :video="video"/>
    </el-main>
  </el-container>
</template>

<script>
import VideoComment from './comment/VideoComment'
import VideoPlayer from './player/VideoPlayer'

export default {
  name: 'VideoMain',
  async created () {
    let {data: video} = await this.$http.get('/getting/video?id=3')
    let {data: comment} = await this.$http.get('/getting/video/comment?id=3')
    this.video = video
    this.comment = comment
  },
  components: {
    VideoPlayer,
    VideoComment
  },
  data () {
    return {
      video: {
        'id': 0,
        'organizerId': 0,
        'date': '',
        'url': '',
        'title': '',
        'profile': '',
        'type': '',
        'playNum': 0,
        'videoComment': null,
        'organizer': {
          'id': 0,
          'date': null,
          'avatar': '',
          'username': '',
          'password': null,
          'profile': '',
          'fans': 0
        }
      },
      comment: [
        {
          'id': 0,
          'organizerId': 0,
          'videoId': 0,
          'content': '',
          'likes': 0,
          'date': '',
          'organizer': {
            'id': 0,
            'date': null,
            'avatar': '',
            'username': '',
            'password': null,
            'profile': '',
            'fans': 0
          },
          'video': null
        }
      ]
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
