<template>
  <div id="person-space">
    <el-card>
      <!--背景图-->
      <el-row class="space-background">
        <!--头像-->
        <el-col :span="2">
          <el-avatar class="avatar" :size="70" :src="httpResValue1.data.avatar">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-avatar>
        </el-col>
        <!--用户信息-->
        <el-col :span="20" class="info">
          <el-row class="info-one">
            <el-col :span="4">
              {{ httpResValue1.data.username }}
            </el-col>
            <el-col class="cid" :span="3">
              CID:{{ httpResValue1.data.id }}
            </el-col>
          </el-row>
          <el-row class="info-two">
            <el-col :span="2" class="level two-item">
              等级：{{ httpResValue1.data.level }}
            </el-col>
            <el-col :span="3" class="fans two-item">
              粉丝：{{ httpResValue1.data.fans }}
            </el-col>
          </el-row>
          <el-row class="profile">
            {{ httpResValue1.data.profile }}
          </el-row>
        </el-col>
      </el-row>
      <!--主页内容展示区域-->
      <el-row class="tabs">
        <!--帖子-->
        <el-tabs type="border-card">
          <el-tab-pane label="帖子">
            <div class="article-management">
              <div class="management-main" v-for="item in httpResValue2" :key="item.id">
                <!--标题-->
                <el-row style="margin: 10px 0">
                  <div style="line-height: 32px">
                    <el-tag>{{ item.tag }}</el-tag>
                    <span class="post-title">{{ item.title }}</span>
                  </div>
                </el-row>
                <!--简略内容-->
                <el-row>
                  <div v-html="item.content" class="post-brief-content">
                  </div>
                </el-row>
                <!--其他菜单按钮-->
                <el-row style="margin-top: 10px; margin-right: 10px; margin-bottom: 10px; font-size: 13px; color: #666">
                  <span style="margin-right: 10px">
                    <i class="el-icon--left el-icon-chat-line-round"></i>{{ item.times }}
                  </span>
                  <span style="margin-right: 10px">
                    <i class="el-icon--left el-icon-third-dianzan"></i>{{item.like }}
                  </span>
                  <a class="look-article" @click="lookDetail(item.id)">
                    <span>查看帖子</span>
                  </a>
                  <a class="edit-article" @click="edit(item.id)">
                    <span>编辑</span>
                  </a>
                </el-row>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'BbsPersonSpace',
  async created () {
    this.userId = this.$route.params.userId
    // 获取此用户的信息
    let {data: res1} = await this.$http.get('/bbs/getting/user?id=' + this.userId)
    this.httpResValue1 = res1
    // 获取此用户的帖子
    let {data: res2} = await this.$http.get('/bbs/my/articles?id=' + this.userId)
    this.httpResValue2 = res2
    // 设置页面标题
    document.title = res1.data.username + '的空间 - 馋猫社区'
  },
  methods: {
    // 编辑评论
    edit (articleId) {
      this.$router.push('/bbs/edit/article/' + articleId)
    },
    // 获取url参数
    lookDetail (articleId) {
      this.$router.push('/bbs/article/details/' + articleId)
    }
  },
  data () {
    return {
      userId: 0,
      // 用户数据
      httpResValue1: {
        code: 0,
        data: {
          'id': 0,
          'experience': 0,
          'username': '',
          'avatar': '',
          'profile': '',
          'date': '',
          'fans': 0,
          'gold': 0,
          'level': 0
        }
      },
      // 帖子数据
      httpResValue2: [
        {
          'id': 0,
          'userId': 0,
          'content': '',
          'isAnn': 0,
          'date': '',
          'like': 0,
          'type': '',
          'title': '',
          'tag': '',
          'user': {
            'id': 0,
            'experience': 0,
            'username': '',
            'password': null,
            'avatar': '',
            'profile': '',
            'date': null,
            'fans': 0,
            'gold': 0,
            'level': 0,
            'phone': null,
            'email': null
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.space-background {
  background-image: url("http://oss.norza.cn/imgs/bbs/79422437_p0.png");
  background-position: 0 27%;
  width: 100%;
  padding: 150px 20px 10px 20px;
}

.tabs {
  margin-top: 20px;
}

/deep/ .el-tabs__item {
  margin-left: 30px;
}

.info-one {
  line-height: 11px;
  margin-bottom: 10px;
}

.profile {
  font-size: 13px;
}

.cid {
  font-size: 12px;
}

.two-item {
  font-size: 14px;
}

.info-two {
  line-height: 15px;
  margin-bottom: 8px;
}

.info {
  color: rgb(45, 47, 51);
  font-size: 16px;
}

.avatar {
  border: 3px solid hsla(0, 0%, 100%, .4);
}

.post-title {
  font-size: 17px;
  color: #333;
  margin: 5px 0;
}

.edit-article {
  cursor: pointer;
}

.look-article {
  cursor: pointer;
  margin-right: 10px;
}

.management-main {
  padding: 20px;
  border-bottom: #ebebeb solid 1px;
}

.post-brief-content {
  color: #999;
  font-size: 14px;
  width: 957px;
  max-height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  cursor: pointer;
}
</style>
