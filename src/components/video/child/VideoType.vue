<template>
  <el-row :gutter="10">
    <el-col :span="6" class="item" v-for="item in res.arrData" :key="item.id">
      <a @click="lookDetail(item.id)">
        <div class="item-body">
          <el-image class="item-bg" :src="item.cover"></el-image>
          <div class="item-desc">
            <div class="item-title">{{ item.title }}</div>
            <div class="item-playnum">播放量:{{ item.playNum }}</div>
          </div>
        </div>
      </a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'VideoType',
  watch: {
    async $route (to, from) {
      let {data: res} = await this.$http.get('/getting/video/by?type=' + to.params.videoType)
      if (res.data === 400) {
        this.$message({
          type: 'error',
          message: '对不起，没有视频，2s后将重新刷新页面',
          duration: 2000
        })
        setInterval(async () => {
          await this.$router.push('/video/all')
        }, 2000)
      } else {
        this.res = res
      }
    }
  },
  methods: {
    lookDetail (videoId) {
      this.$router.push('/video/details/' + videoId)
    }
  },
  data () {
    return {
      videoType: null,
      res: {
        'arrData': [
          {
            'id': 0,
            'userId': 0,
            'date': null,
            'url': null,
            'cover': null,
            'title': null,
            'profile': null,
            'type': null,
            'tag': null,
            'playNum': 0
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.item-title, .item-playnum {
  text-align: center;
}

.item-title {
  font-weight: 600;
  color: #02a388;;
  font-size: 20px;
}

.item-playnum {
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
