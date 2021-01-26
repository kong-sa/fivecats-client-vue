<template>
  <el-card class="navigation">
    <el-row>
      <el-col :span="4" class="bbs-title">
        <router-link to="/bbs/main">馋猫社区</router-link>
      </el-col>
      <el-col :span="12">
        <el-row class="special-area">
          <el-col :span="6"><a @click="goClock">打卡专区</a></el-col>
          <el-col :span="6"><a @click="goRecipe">食谱专区</a></el-col>
          <el-col :span="6"><a @click="goCooking">制作专区</a></el-col>
          <el-col :span="6"><a @click="goSharing">分享专区</a></el-col>
        </el-row>
      </el-col>
      <el-col :span="8" class="navigation-right">
        <el-row class="navigation-right_body">
          <el-col :span="8" class="avatar">
            <el-dropdown>
              <el-avatar
                size="55"
                :src="value.avatar">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-avatar>
              <el-dropdown-menu class="dropdown-menu">
                <el-dropdown-item>
                  <el-row style="font-weight: 600; font-size: 16px">
                    {{ value.username }}
                  </el-row>
                  <el-row>
                    经验值:{{ value.experience }} /
                    <span v-if="value.level === 0">100</span>
                    <span v-else-if="value.level === 1">200</span>
                    <span v-else-if="value.level === 2">400</span>
                    <span v-else-if="value.level === 3">500</span>
                    <span v-else-if="value.level === 4">750</span>
                    <span v-else-if="value.level === 5">1050</span>
                    <span v-else>1050</span>
                  </el-row>
                  <el-row>
                    <el-col :span="12" style="text-align: left"><i class="level"></i>LV:{{ value.level }}</el-col>
                    <el-col :span="12" style="text-align: right"><i
                      class="el-icon--left el-icon-coin"></i>馋币:{{ value.gold }}
                    </el-col>
                  </el-row>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-row><i class="fans"></i>粉丝: {{ value.fans }}</el-row>
                </el-dropdown-item>
                <el-dropdown-item><i class="el-icon--left el-icon-user"></i>个人中心</el-dropdown-item>
                <el-dropdown-item><i class="el-icon--left el-icon-folder"></i>投稿管理</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col class="item" :span="8">
            <el-badge :value="1" :max="99" class="message"><i class="el-icon--left el-icon-chat-round"></i>回复我的
            </el-badge>
          </el-col>
          <el-col class="item" :span="8">
            <el-badge :value="1" :max="99" class="message"><i class="el-icon--left el-icon-thumb"></i>获得的赞</el-badge>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: ['userObj'],
  name: 'NavigationBar',
  methods: {
    goClock () {
      this.$router.push('/bbs/clock')
      this.$router.go(0)
    },
    goSharing () {
      this.$router.push('/bbs/sharing')
      this.$router.go(0)
    },
    goCooking () {
      this.$router.push('/bbs/cooking')
      this.$router.go(0)
    },
    goRecipe () {
      this.$router.push('/bbs/recipe')
      this.$router.go(0)
    }
  },
  data () {
    return {
      value: {
        'username': '',
        'fans': 0,
        'profile': '',
        'level': 0,
        'gold': 0,
        'experience': 0,
        'avatar': ''
      }
    }
  },
  async created () {
    let {data: value} = await this.$http.get('/getting/bbs/user?id=' + 1)
    this.value = value
  }
}
</script>

<style scoped>
/deep/ .el-card__body {
  padding: 0;
}

.bbs-title {
  font-size: 40px;
  line-height: 67px;
}

.message {
  font-size: 15px;
}

.navigation-right, .navigation-right_body, .avatar, .item {
  height: 67px;
}

.avatar, .item {
  cursor: pointer;
  text-align: center;
}

.level, .fans {
  display: inline-block;
  background-position: center center;
}

.level {
  width: 16px;
  height: 16px;
  background-size: 16px 16px;
  background-image: url("../../../assets/icon/level-icon.png");
}

.fans {
  width: 12px;
  height: 12px;
  background-size: 12px 12px;
  background-image: url("../../../assets/icon/fans-icon.png");
}

.avatar {
  padding: 3% 0;
}

.dropdown-menu {
  width: 190px;
  text-align: center;
}

.item {
  padding: 5% 0;
}

.navigation {
  height: 65px;
  color: white;
  padding: 0 10%;
  background: rgb(45, 47, 51);
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
  color: rgb(140, 197, 255);
  text-decoration: none;
}

a:active {
  color: white;
  text-decoration: none;
}

.special-area {
  cursor: pointer;
  line-height: 65px;
  text-align: center;
  font-size: 18px;
}
</style>
