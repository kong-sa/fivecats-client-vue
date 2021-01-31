<template>
  <div class="basic-info">
    <!--个人信息-->
    <el-row class="brief-info">
      <el-col :span="5" class="avatar">
        <el-avatar
          :size="120"
          :src="httpResValue1.data.avatar">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-avatar>
      </el-col>
      <el-col :span="19" class="user-info">
        <el-row>{{ httpResValue1.data.username }}</el-row>
        <el-row class="two-item">
          <el-col :span="3">
            <i class="el-icon--left el-icon-coin"></i>馋币：{{ httpResValue1.data.gold }}
          </el-col>
          <el-col :span="5">
            <i class="el-icon--left el-icon-pie-chart"></i>经验：{{ httpResValue1.data.experience }} /
            <span v-if="httpResValue1.data.level === 0">100</span>
            <span v-else-if="httpResValue1.data.level === 1">200</span>
            <span v-else-if="httpResValue1.data.level === 2">400</span>
            <span v-else-if="httpResValue1.data.level === 3">500</span>
            <span v-else-if="httpResValue1.data.level === 4">750</span>
            <span v-else-if="httpResValue1.data.level === 5">950</span>
            <span v-else>1050</span>
          </el-col>
          <el-col :span="3">
            <i></i>等级：{{ httpResValue1.data.level }}
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!--达成的成就-->
    <el-row class="daily-mission">
      <el-col :span="6" class="mission-item">
        <span class="mission-title">每日登陆</span>
        <div class="icon"><i class="el-icon el-icon-s-check"></i></div>
        <el-divider></el-divider>
        <span class="mission-desc">经验 +2</span>
        <div><i class="el-icon el-icon-check"></i></div>
      </el-col>
      <el-col :span="6" class="mission-item">
        <span class="mission-title">每日点赞</span>
        <div class="icon"><i class="el-icon el-icon-thumb"></i></div>
        <el-divider></el-divider>
        <span class="mission-desc">经验 +1</span>
        <div><i class="el-icon el-icon-check"></i></div>
      </el-col>
      <el-col :span="6" class="mission-item">
        <span class="mission-title">每日回复</span>
        <div class="icon"><i class="el-icon el-icon-chat-round"></i></div>
        <el-divider></el-divider>
        <span class="mission-desc">经验 +1</span>
        <div><i class="el-icon el-icon-check"></i></div>
      </el-col>
      <el-col :span="6">
        <span class="mission-title">每日投币</span>
        <div class="icon"><i class="el-icon el-icon-coin"></i></div>
        <el-divider></el-divider>
        <span class="mission-desc">经验 +3</span>
        <div><i class="el-icon el-icon-check"></i></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BbsBasicInfo',
  async created () {
    let {data: res} = await this.$http.get('/bbs/self/basic?userId=' + this.$store.state.var1.data.id)
    this.httpResValue1 = res
  },
  data () {
    return {
      httpResValue1: {
        code: 0,
        data: {
          'id': 0,
          'username': '',
          'email': '',
          'phone': 0,
          'fans': 0,
          'profile': '',
          'level': 0,
          'gold': 0,
          'experience': 0,
          'avatar': '',
          'password': ''
        }
      }
    }
  }
}
</script>

<style scoped>
.two-item {
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
  font-weight: 400;
}

.user-info {
  font-size: 20px;
  font-weight: 600;
  line-height: 62px;
}

.brief-info {
  height: 126px;
}

.mission-item {
  border-right: #ebebeb solid 1px;
}

.mission-desc {
  font-size: 14px;
}

.mission-title {
  font-size: 18px;
  display: block;
  margin-bottom: 10px;
}

.daily-mission {
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
  border-top: #ebebeb solid 1px;
}

.icon {
  font-size: 55px;
}

/deep/ .el-avatar {
  border: 5px #666 solid;
}

.avatar {
  text-align: center;
}
</style>
