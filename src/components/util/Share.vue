<template>
  <div class="share">
    <el-card>
      <el-row class="title">
        {{ shareItem.title }}
      </el-row>
      <el-row class="cover">
        <el-image :src="shareItem.coverUrl"></el-image>
      </el-row>
      <el-row v-if="shareItem.type === 'share'" class="desc-body">
        <div class="desc">{{ shareItem.desc }}</div>
      </el-row>
      <el-row class="complaint" v-if="shareItem.type === 'complaint'">
        <el-col style="margin-top: 30px">
          <el-button class="button" size="mini" @click="share('举报')">举报</el-button>
        </el-col>
      </el-row>
      <el-row v-if="shareItem.type === 'share'" class="share-btn" :gutter="20">
        <el-col :span="5">
          分享到：
        </el-col>
        <el-col :span="4">
          <el-button class="button" size="mini" @click="share('QQ')">QQ</el-button>
        </el-col>
        <el-col :span="4">
          <el-button class="button" size="mini" @click="share('微信')">微信</el-button>
        </el-col>
        <el-col :span="4">
          <el-button class="button" size="mini" @click="share('BBS')">馋猫社区</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ['shareItem'],
  name: 'Share',
  methods: {
    share (itemType) {
      if (itemType === 'QQ') {
        this.$message.success('分享到QQ成功！')
      } else if (itemType === '微信') {
        this.$message.success('分享到微信成功！')
      } else if (itemType === '举报') {
        this.$message.success('举报成功！我们会尽快给您答复')
      } else {
        this.$message.success('分享到馋猫社区成功！')
      }
    }
  }
}
</script>

<style scoped>
.title {
  margin: 15px 0;
  font-size: 25px;
  font-weight: 600;
}

.desc {
  font-size: 18px;
  text-align: center;
}

.button:hover {
  transition: 0.5s;
  color: #0c0d0d;
  background: #ffc107;
}

.button {
  transition: 0.5s;
  color: white;
  background: #0c0d0d;
}

.desc-body {
  margin: 15px 0;
}

.complaint {
  text-align: center;
}

.share-btn {
  text-align: center;
}
</style>
