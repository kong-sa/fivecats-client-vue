<template>
  <div class="video-details">
    <div class="video">
      <div class="video-title">
        <el-tag style="background: #ffc107; color: #0c0d0d">{{ video.tag }}</el-tag>
        {{ video.title }}
        <div id="abb-info">
          <span id="play-volume">
            播放量:{{ video.playNum }}&nbsp;
          </span>
          <span id="upload-time">  投稿时间:{{ video.date }}</span>
        </div>
      </div>
      <video :src="video.url" controls="controls" style="width: 100%; height: 100%"></video>
      <div class="video-bottom">
        <el-collapse id="collapse">
          <el-collapse-item class="collapse-item" title="视频简介">
            {{ video.profile }}
          </el-collapse-item>
          <el-collapse-item class="collapse-item" title="作者信息">
            <el-row>
              <el-col :xs="3" :span="2">
                <el-avatar id="avatar" :src="video.user.avatar">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-avatar>
              </el-col>
              <el-col :xs="21" :span="22">
                <el-row>用户名：{{ video.user.username }}</el-row>
                <el-row>个人简介：{{ video.user.profile }}</el-row>
                <el-row>粉丝数：{{ video.user.fans }}</el-row>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="video-comm">
      <el-row class="comm-edit">
        <el-col :span="2">
          <el-avatar :src="$store.state.user.avatar">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-avatar>
        </el-col>
        <el-col :span="18">
          <el-input v-model="content" placeholder="发条友善的评论"></el-input>
        </el-col>
        <el-col :span="4" class="comm-edit__btn">
          <el-button @click="publish" style="float: right" class="publish-btn">发表</el-button>
        </el-col>
      </el-row>
      <el-row v-for="item in comm" :key="item.id" class="comm-item">
        <el-col :xs="3" :span="2">
          <el-dropdown>
            <el-avatar fit="fill" :src="item.user.avatar">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <el-avatar fit="fill" :src="item.user.avatar">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-avatar>
                <div>用户名：{{ item.user.username }}</div>
                <div>个人简介：{{ item.user.profile }}</div>
                <div>粉丝数：{{ item.user.fans }}</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :xs="21" :span="22">
          <el-row class="comm-row comm-username">
            {{ item.user.username }}
            <el-tag style="background: #ffc107; color: #0c0d0d" size="mini" v-if="video.userId === item.userId">作者
            </el-tag>
          </el-row>
          <el-row class="comm-row comm-content">{{ item.content }}</el-row>
          <el-row class="comm-row comm-info">
            <a @click="likeComm(item.id)">
              <span>
                <i class="el-icon--left el-icon-third-dianzan"></i>{{ item.like }}
              </span>
            </a>
            <span class="comm-time">{{ item.date }}</span>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  async created () {
    document.scrollingElement.scrollTop = 0
    document.scrollingElement.scrollLeft = 0

    this.videoId = this.$route.params.videoId

    let {data: video} = await this.$http.get('/getting/video?id=' + this.videoId)
    let {data: comm} = await this.$http.get('/getting/video/comm?id=' + this.videoId)

    if (video.code === 400) {
      this.$message({
        type: 'error',
        message: video.data + '3s后跳转视频首页',
        duration: 3000
      })
      setInterval(async () => {
        await this.$router.push('/video/all')
      }, 3000)
    } else if (comm.code === 400) {
      this.$message({
        type: 'error',
        message: comm.data + '，将不会显示评论',
        duration: 3000
      })
    } else {
      this.video = video.data
      this.comm = comm.arrData
      document.title = video.data.title
      await this.$http.post('/adding/video/playNum', {id: video.data.id})
    }
  },
  methods: {
    publish () {
      this.$http.post('setting/video/comm', {
        userId: this.$store.state.user.id,
        videoId: this.videoId,
        content: this.content
      })
    },
    likeComm (viCommId) {
      this.$http.post('/setting/video/comm/likeNum', {id: viCommId})
      this.$message.success('点赞成功！')
      this.comm.arrData[viCommId - 1].like += 1
    }
  },
  data () {
    return {
      content: null,
      videoId: 0,
      video: {
        'id': 0,
        'userId': 0,
        'date': '',
        'url': '',
        'title': '',
        'profile': '',
        'type': '',
        'tag': '',
        'playNum': 0,
        'user': {
          'id': 0,
          'experience': 0,
          'username': '',
          'password': '',
          'avatar': '',
          'profile': '',
          'date': '',
          'fans': 0,
          'gold': 0,
          'level': 0,
          'phone': '',
          'email': ''
        }
      },
      comm: [
        {
          'id': 0,
          'userId': 0,
          'videoId': 0,
          'content': '',
          'like': 0,
          'date': '',
          'user': {
            'id': 0,
            'username': '',
            'avatar': '',
            'profile': '',
            'fans': 0,
            'gold': 0,
            'level': 0
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.comm-edit {
  margin-bottom: 50px;
}

.video-details {
  margin: 90px 0;
}

.comm-edit__btn {
  text-align: center;
}

.comm-item {
  transition: 0.3s;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px #ccc solid;
}

.comm-row {
  margin: 10px 0 10px 0;
}

.comm-username {
  font-size: 14px;
  font-weight: bold;
  color: #666;
}

.comm-info {
  font-size: 13px;
  color: #999999;
}

.comm-info a {
  cursor: pointer;
}

.comm-item:hover {
  transition: 0.3s;
  transform: scaleX(1.015);
}

.publish-btn:hover {
  transition: 0.3s;
  background: #ffc107;
  color: #0c0d0d;
}

.publish-btn {
  transition: 0.3s;
  background: #0c0d0d;
  color: white;
}

/* 当屏幕宽度小于768px时 */
@media screen and (max-width: 768px) {
  .video-comm, .video-details {
    padding: 0;
  }
}

/* 当屏幕宽度大于768px时 */
@media screen and (min-width: 768px) {
  .video-details {
    padding: 0 10%;
  }
}

.video-details {
  margin-top: 30px;
}

#collapse {
  border: 0;
  margin-top: 15px;
}

/deep/ .el-collapse-item__header {
  padding: 0 10px;
}

/deep/ .el-collapse-item__content {
  padding: 0 0 10px 10px;
}

.collapse-item {
  margin: 0;
}

.comm-time {
  margin-left: 10px;
}

#abb-info {
  margin-top: 5px;
  font-size: 12px;
}

.video-title {
  font-size: 18px;
  margin-bottom: 15px;
}

.video-bottom {
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
