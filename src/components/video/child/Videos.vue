<template>
  <div class="videos">
    <el-row :gutter="10">
      <el-col :span="6" class="item" v-for="item in videos" :key="item.id">
        <a @click="playVideo(item.id)">
          <div class="item-body">
            <el-image class="item-bg" style="object-fit: fill; height: 199px" :src="item.cover"></el-image>
            <div class="item-desc">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-play-num">播放量:{{ item.playNum }}</div>
            </div>
          </div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Videos',
  props: ['videoType'],
  watch: {
    videoType: async function (newVal, oldVal) {
      let {data: res} = await this.$http.get('/getting/video/by?type=' + newVal)
      if (res.code === 200) {
        this.videos = res.arrData
      } else {
        this.$message.error(res.data)
      }
    }
  },
  async created () {
    let {data: res} = await this.$http.get('/getting/video/by?type=all')
    if (res.code === 200) {
      this.videos = res.arrData
    } else {
      this.$message.error(res.data)
    }
  },
  methods: {
    playVideo (videoId) {
      this.$router.push('/player/' + videoId)
    }
  },
  data () {
    return {
      videos: [
        {
          'id': 0,
          'userId': 0,
          'date': '',
          'url': '',
          'cover': '',
          'title': '',
          'profile': '',
          'type': '',
          'tag': '',
          'playNum': 0
        }
      ]
    }
  }
}
</script>

<style scoped>
.item-title, .item-play-num {
  text-align: center;
}

.item-title {
  font-weight: 600;
  color: white;;
  font-size: 20px;
}

.item-play-num {
  color: #9ea2a2;
  font-size: 14px;
}

.item-desc {
  transition: 0.5s;
  background: #0c0d0d;
  color: white;
}

.item-desc:hover {
  transition: 0.5s;
  background: #ffc107;
}

.item {
  cursor: pointer;
  transition: 0.4s;
}

.item:hover {
  transition: 0.5s;
  transform: translateY(-10px);
}
</style>
