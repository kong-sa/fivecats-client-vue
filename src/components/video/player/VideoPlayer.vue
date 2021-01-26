<template>
  <div id="video-player">
    <div id="video-title">
      <el-tag>{{ video.type }}</el-tag>
      {{ video.title }}
      <div id="abb-info">
        <span id="play-volume">播放量:{{ video.playNum }}</span><span id="upload-time">  投稿时间:{{ video.date }}</span>
      </div>
    </div>
    <video :src="video.url" controls="controls" style="width: 100%; height: 100%"></video>
    <div id="video-bottom">
      <span class="copyright"><i class="prohibit"></i>禁止转载</span>
      <el-collapse id="collapse" v-model="activeNames" @change="handleChange">
        <el-collapse-item class="collapse-item" title="视频简介" name="1">
          {{ video.profile }}
        </el-collapse-item>
        <el-collapse-item class="collapse-item" title="作者信息 ↓↓↓ 点击展开更多" name="2">
          <el-row>
            <el-col :xs="3" :span="2">
              <el-avatar id="avatar" :src="video.organizer.avatar">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-avatar>
            </el-col>
            <el-col :xs="21" :span="22">
              <el-row>用户名：<a href="">{{ video.organizer.username }}</a></el-row>
              <el-row>个人简介：{{ video.organizer.profile }}</el-row>
              <el-row>粉丝数：{{ video.organizer.fans }}</el-row>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: ['video'],
  methods: {
    handleChange (val) {
    }
  },
  data () {
    return {
      activeNames: ['1']
    }
  }
}
</script>

<style scoped>
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
  background-image: url("../../../assets/icon/prohibit-icon.png");
}

#abb-info {
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

/* 当屏幕小于767px时 */
@media screen and (max-width: 767px) {
  #video-player {
    padding: 0;
  }
}

/* 当屏幕大于于767px时 */
@media screen and (min-width: 768px) {
  #video-player {
    padding: 0 10%;
  }
}
</style>
