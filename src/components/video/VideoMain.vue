<template>
  <div class="video-all">
    <div class="video-carousel">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in findBg" :key="item.id">
          <el-image style="width: 100%; height: 100%" class="find-bg" :src="item.url"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="video-bar">
      <el-row>
        <a class="link" @click="videoType = 'making'">
          <el-col :span="4" class="bar-item">美食制作</el-col>
        </a>
        <a class="link" @click="videoType = 'sharing'">
          <el-col :span="4" :offset="1" class="bar-item">美食分享</el-col>
        </a>
        <a class="link" @click="videoType = 'countryside'">
          <el-col :span="4" :offset="1" class="bar-item">农村美食</el-col>
        </a>
        <a class="link" @click="videoType = 'other'">
          <el-col :span="4" :offset="1" class="bar-item">其他</el-col>
        </a>
        <a class="link" @click="videoType = 'all'">
          <el-col :span="4" :offset="1" class="bar-item">全部</el-col>
        </a>
      </el-row>
    </div>
    <div class="video-differ-type">
      <videos v-bind:video-type="videoType"/>
    </div>
  </div>
</template>

<script>
import Videos from './child/Videos'

export default {
  name: 'VideoMain',
  components: {Videos},
  data () {
    return {
      findBg: [
        {id: 0, url: 'http://oss.norza.cn/imgs/video/cover.jpg'}
      ],
      videoType: 'all'
    }
  }
}
</script>

<style scoped>
.video-carousel, .video-bar, .video-differ-type {
  padding: 0 10%;
}

.video-bar {
  margin-top: 20px;
  margin-bottom: 20px;
}

.video-all {
  margin: 90px 0;
}

.link {
  width: 100px;
  text-align: center;
  height: 100%;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.5s;
  color: white;
  background: #0c0d0d;
}

.link:hover {
  transition: 0.5s;
  color: #0c0d0d;
  background: #ffc107;
}

.find-bg {
  width: 100%;
}

.bar-item {
  cursor: pointer;
  color: white;
  background: #0c0d0d;
  transition: 0.6s;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

.bar-item:hover {
  transition: 0.6s;
  background: #ffc107;
}

a:link {
  color: white;
  text-decoration: none;
}

a:visited {
  color: white;
  text-decoration: none;
}

a:hover {
  color: white;
  text-decoration: none;
}

a:active {
  color: white;
  text-decoration: none;
}
</style>
