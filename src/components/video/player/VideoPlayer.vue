<template>
    <div id="video-player">
      <div id="video-title">
        <el-tag>番剧</el-tag>
        豪赌之渊第二季 02
        <div id="video-info"><span id="play-volume">播放量:1132k</span><span id="upload-time">2021-01-14 17:55:41</span></div>
      </div>
      <video ref="videoPlayer" class="video-js vjs-big-play-centered vjs-matrix"></video>
      <div id="video-bottom">
        <span class="copyright"><i class="prohibit"></i>禁止转载</span>
        <el-collapse id="collapse" v-model="activeNames" @change="handleChange">
          <el-collapse-item class="collapse-item" title="视频简介" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item class="collapse-item" title="作者信息 ↓↓↓ 点击展开更多" name="2">
            <el-row>
              <el-col :span="2">
                <el-dropdown>
                  <el-avatar id="avatar" :src="customer.avatar">
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-avatar>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <el-avatar :src="customer.avatar">
                        <div slot="error" class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </el-avatar>
                      <div>用户名：<a class="username" href="">{{customer.nickname}}</a></div>
                      <div>个人简介：{{customer.introduction}}</div>
                      <div>粉丝数：{{customer.fans}}</div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
              <el-col :span="22">
                <el-row>用户名：<a class="username" href="">{{customer.nickname}}</a></el-row>
                <el-row>个人简介：{{customer.introduction}}</el-row>
                <el-row>粉丝数：{{customer.fans}}</el-row>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
</template>

<script>
import videoJs from 'video.js'

export default {
  name: 'VideoPlayer',
  methods: {
    handleChange (val) {
    }
  },
  props: {
    options: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  data () {
    return {
      player: null,
      activeNames: ['1'],
      customer: {
        customerId: 1,
        fans: 2,
        introduction: 'Time tick away, dream faded away!',
        nickname: 'KongSama',
        avatar: 'http://oss.norza.cn/imgs/avatar/avatar01.jpg'
      }
    }
  },
  mounted: function () {
    this.player = videoJs(this.$refs.videoPlayer, this.options, function onPlayerReady () {
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

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.box-card {
  z-index: 1;
  width: 300px;
  height: 250px;
  position: absolute;
  display: block;
}

#username {
  text-decoration: none;
}

#collapse {
  border: 0;
  margin-top: 15px;
}

.collapse-item {
  margin: 0;
}

#el-collapse-content-1497 .el-collapse-item__wrap {
  border: 0;
}

#el-collapse-head-1497 .el-collapse-item__header {
  border: 0;
}

.vjs-big-play-button {
  left: 50% !important;
  top: 50% !important;
  margin-left: -2em;
  margin-top: -1.3em;
}

.copyright {
  font-size: 12px;
}

i {
  margin-right: 10px;
  background-position: center center;
  display: inline-block;
  width: 14px;
  height: 14px;
  background-size: 14px 14px;
  background-image: url("http://oss.norza.cn/imgs/prohibit.png");
}

#play-volume {
  margin-right: 10px;
}

#video-info {
  margin-top: 5px;
  font-size: 12px;
}

#video-title {
  font-size: 18px;
  margin-bottom: 15px;
}

#video-bottom {
  margin-top: 25px;
}
</style>
