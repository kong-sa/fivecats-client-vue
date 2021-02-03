<template>
  <div class="video-details">
    <div class="video">
      <div class="video-title">
        <el-tag>{{ res1.data.tag }}</el-tag>
        {{ res1.data.title }}
        <div id="abb-info">
          <span id="play-volume">
            播放量:{{ res1.data.playNum }}&nbsp;
          </span>
          <span id="upload-time">  投稿时间:{{ res1.data.date }}</span>
        </div>
      </div>
      <video :src="res1.data.url" controls="controls" style="width: 100%; height: 100%"></video>
      <div class="video-bottom">
        <el-collapse id="collapse">
          <el-collapse-item class="collapse-item" title="视频简介">
            {{ res1.data.profile }}
          </el-collapse-item>
          <el-collapse-item class="collapse-item" title="作者信息">
            <el-row>
              <el-col :xs="3" :span="2">
                <el-avatar id="avatar" :src="res1.data.user.avatar">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-avatar>
              </el-col>
              <el-col :xs="21" :span="22">
                <el-row>用户名：<a href="">{{ res1.data.user.username }}</a></el-row>
                <el-row>个人简介：{{ res1.data.user.profile }}</el-row>
                <el-row>粉丝数：{{ res1.data.user.fans }}</el-row>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="video-comm">
      <!--1行 评论编辑-->
      <el-row class="comm-edit">
        <!--1列 头像-->
        <el-col :span="2">
          <el-avatar :src="this.$store.state.var1.data.avatar">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-avatar>
        </el-col>
        <!--2列 评论输入框-->
        <el-col :span="18">
          <el-input v-model="content" placeholder="发条友善的评论"></el-input>
        </el-col>
        <!--3列 发表按钮-->
        <el-col :span="4" class="comm-edit__btn">
          <el-button @click="publish" style="float: right" class="publish-btn">发表</el-button>
        </el-col>
      </el-row>
      <!--2行 评论区-->
      <el-row v-for="item in res2.arrData" :key="item.id" class="comm-item">
        <!--1列 头像-->
        <el-col :xs="3" :span="2">
          <!--下拉框，鼠标悬停显示用户详细信息-->
          <el-dropdown>
            <el-avatar fit="fill" :src="item.user.avatar">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-avatar>
            <!--下拉面板-->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <!--用户头像-->
                <el-avatar fit="fill" :src="item.user.avatar">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-avatar>
                <!--相关信息-->
                <div>用户名：<a id="nickname" href="">{{ item.user.username }}</a></div>
                <div>个人简介：{{ item.user.profile }}</div>
                <div>粉丝数：{{ item.user.fans }}</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <!--2列 评论-->
        <el-col :xs="21" :span="22">
          <!--1行 用户名-->
          <el-row class="comm-row comm-username">
            {{ item.user.username }}
            <el-tag size="mini" v-if="res1.data.userId === item.userId">作者</el-tag>
          </el-row>
          <!--2行 内容-->
          <el-row class="comm-row comm-content">{{ item.content }}</el-row>
          <!--3行 点赞-->
          <el-row class="comm-row comm-info">
            <a @click="likeComm(item.id)">
              <span>
                <i class="el-icon--left el-icon-third-dianzan"></i>{{ item.like }}
              </span>
            </a>
            <!--点赞数-->
            <span class="comm-time">{{ item.date }}</span>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoDetails',
  async created () {
    this.videoId = this.$route.params.videoId
    let {data: res1} = await this.$http.get('/getting/video?id=' + this.videoId)
    let {data: res2} = await this.$http.get('/getting/video/comm?id=' + this.videoId)
    if (res1.code === 400) {
      this.$message({
        type: 'error',
        message: res1.data + '3s后跳转视频首页',
        duration: 3000
      })
      setInterval(async () => {
        await this.$router.push('/video/all')
      }, 3000)
    } else if (res2.code === 400) {
      this.$message({
        type: 'error',
        message: res2.data + '，将不会显示评论',
        duration: 3000
      })
    } else {
      this.res1 = res1
      this.res2 = res2
      await this.$http.post('/adding/video/playNum', {id: res1.data.id})
    }
  },
  methods: {
    publish () {
      this.$http.post('setting/video/comment', {
        // 发送者ID
        userId: 1,
        // 视频ID
        videoId: this.videoId,
        // 评论内容
        content: this.content
      })
    },
    likeComm (viCommId) {
      this.$http.post('/setting/video/comm/likeNum', {id: viCommId})
      this.$message.success('点赞成功！')
      this.res2.arrData[viCommId - 1].like += 1
    }
  },
  data () {
    return {
      content: null,
      videoId: 0,
      res1: {
        'data': {
          'id': 0,
          'userId': 0,
          'date': null,
          'url': null,
          'title': null,
          'profile': null,
          'type': null,
          'tag': null,
          'playNum': 0,
          'user': {
            'id': 0,
            'experience': 0,
            'username': null,
            'password': null,
            'avatar': 'http://oss.norza.cn/imgs/avatar/user/1/avatar01.jpg',
            'profile': 'time tick away, dream faded away!',
            'date': null,
            'fans': 0,
            'gold': 0,
            'level': 0,
            'phone': null,
            'email': null
          }
        }
      },
      res2: {
        'arrData': [
          {
            'id': 0,
            'userId': 0,
            'videoId': 0,
            'content': null,
            'like': 0,
            'date': null,
            'user': {
              'id': 0,
              'username': null,
              'avatar': null,
              'profile': null,
              'fans': 0,
              'gold': 0,
              'level': 0
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.comm-edit {
  margin-bottom: 50px;
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

.publish-btn {
  background-color: rgb(140, 197, 255);
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

#collapse {
  border: 0;
  margin-top: 15px;
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
