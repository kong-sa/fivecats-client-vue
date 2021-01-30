<template>
  <div id="details">
    <el-card class="main_card__body">
      <el-row>
        <!--     标题     -->
        <el-row class="main-card__title">
          <div class="title-info">
            <el-tag>{{ httpResValue1.tag }}</el-tag>
            <span class="title-info__right">{{ httpResValue1.title }}</span>
          </div>
        </el-row>
        <!--     时间、点赞数、讨论数     -->
        <el-row class="brief-info">
          <el-col :span="12">发表日期：{{ httpResValue1.date }}</el-col>
          <el-col :span="4" :offset="3">点赞数：{{ httpResValue1.likes }}</el-col>
          <el-col :span="4">回复数：{{ httpResValue1.times }}</el-col>
        </el-row>
        <!--     用户信息     -->
        <el-row class="user-info">
          <el-col :span="2">
            <el-avatar :size="50" v-bind:src="httpResValue1.user.avatar"></el-avatar>
          </el-col>
          <el-col :span="3">{{ httpResValue1.user.username }}</el-col>
        </el-row>
        <el-divider></el-divider>
        <!--     帖子具体内容     -->
        <el-row style="margin-bottom: 20px">
          <div v-html="httpResValue1.content" style="margin: 15px 0"></div>
        </el-row>
        <!--     为该文章点赞     -->
        <el-row style="text-align: center; margin: 40px">
          <i @click="like" class="el-icon--left el-icon-third-dianzan like-article-icon">
            {{ httpResValue1.like }}</i>
        </el-row>
      </el-row>
    </el-card>
    <!--评论编辑区-->
    <el-card style="padding: 20px; margin-top: 20px">
      <!--文本域-->
      <el-form :model="formData" :rules="rules" ref="formData">
        <el-form-item prop="textareaValue">
          <el-row>
            <el-input
              placeholder="说说什么吧...^_^"
              v-model="formData.textareaValue"
              maxlength="255"
              minlength="2"
              rows="5"
              show-word-limit
              type="textarea">
            </el-input>
          </el-row>
        </el-form-item>
        <!--发送按钮-->
        <el-row style="float: right">
          <el-button
            @click="pushComment"
            size="small">发送
          </el-button>
        </el-row>
      </el-form>
    </el-card>
    <!--评论区-->
    <el-card style="margin: 10px 0; padding: 0">
      <div v-for="item in httpResValue2" :key="item.id"
           style="border-top: #ebebeb solid 1px; padding: 20px">
        <el-row>
          <el-col :span="2">
            <el-dropdown>
              <el-avatar fit="fill" :src="item.user.avatar">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-avatar>
              <el-dropdown-menu slot="dropdown">
                <a class="other-username" @click="lookUser(item.user.id)">
                <el-dropdown-item>
                  <!--用户头像-->
                  <el-avatar fit="fill" :src="item.user.avatar">
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-avatar>
                  <!--相关信息-->
                  <div>用户名：{{ item.user.username }}</div>
                  <div>粉丝数：{{ item.user.fans }}</div>
                  <div>个人简介：{{ item.user.profile }}</div>
                </el-dropdown-item>
                </a>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="5" class="comment-row comment-nickname">{{ item.user.username }}
            <el-tag v-if="item.user.id === httpResValue1.user.id" style="margin-left: 10px" size="small">发帖人
            </el-tag>
          </el-col>
        </el-row>
        <el-row class="comment-row comment-content">
          <el-col :offset="2">{{ item.content }}</el-col>
        </el-row>
        <el-row class="comment-row comment-info">
          <el-col :offset="2">
            <!--点赞图标-->
            <span><i class="el-icon--left el-icon-third-dianzan"></i>{{ item.like }}</span>
            <!--点赞数-->
            <span class="comment-time">{{ item.date }}</span>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import BbsNavigationBar from '../header/BbsNavigationBar'

export default {
  name: 'BbsArticleContent',
  components: {BbsNavigationBar},
  async created () {
    this.articleId = this.$route.params.articleId
    let {data: res1} = await this.$http.get('/getting/article/content?articleId=' + this.articleId)
    this.httpResValue1 = res1
    let {data: res2} = await this.$http.get('/getting/article/comments?articleId=' + this.articleId)
    this.httpResValue2 = res2
    document.title = res1.user.username + '的帖子 - 馋猫社区'
  },
  methods: {
    lookUser (userId) {
      this.$router.push('/bbs/person/space/' + userId)
    },
    async like () {
      await this.$http.post('/setting/article/like', this.httpResValue1)
      await this.$http.post('/setting/user/info', {
        userId: this.httpResValue1.userId,
        articleId: this.httpResValue1.id,
        likeUserId: this.$store.state.var1.data.id
      })
      this.$message.success('点赞成功！')
    },
    pushComment () {
      this.$refs.formData.validate((valid) => {
        if (!valid) return false
        this.$http.post('setting/article/comment', {
          content: this.formData.textareaValue,
          articleId: this.articleId,
          userId: this.$store.state.var1.data.id
        })
        this.$message.success('发送成功！')
      })
    }
  },
  data () {
    return {
      articleId: 0,
      rules: {
        textareaValue: [
          {required: true, message: '请输入内容在发表评论！', trigger: 'blur'},
          {min: 2, max: 255, message: '长度在 2 到 255 个字符', trigger: 'blur'}
        ]
      },
      formData: {
        textareaValue: ''
      },
      // 帖子数据
      httpResValue1: {
        'id': 0,
        'tag': '',
        'title': '',
        'date': '',
        'type': '',
        'like': 0,
        'content': '',
        'userId': 0,
        'user': {
          'id': 0,
          'username': '',
          'profile': '',
          'avatar': '',
          'fans': 0
        }
      },
      // 评论数据
      httpResValue2: [
        {
          'id': 0,
          'like': 0,
          'date': '',
          'content': '',
          'user': {
            'id': 0,
            'gold': 0,
            'fans': 0,
            'date': '',
            'avatar': '',
            'profile': '',
            'username': ''
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.comment-row {
  margin: 10px 0 10px 0;
}

/deep/ .el-card__body {
  padding: 0;
}

/deep/ .el-divider--horizontal {
  margin: 0;
}

.user-info {
  line-height: 54px;
  margin-top: 20px;
  font-size: 15px;
  color: #525050;
}

.brief-info {
  background: rgb(247, 248, 252);
  color: #999999;
  height: 40px;
  font-size: 15px;
  font-weight: 400;
  line-height: 40px;
  padding: 0 10px;
}

.like-article-icon {
  font-size: 45px;
  cursor: pointer;
}

.main-card__title {
  margin-bottom: 15px;
}

.title-info__right {
  margin-left: 10px;
}

.title-info {
  line-height: 38px;
}

.main_card__body {
  padding: 20px;
}

a:link {
  color: rgb(140, 197, 255);
  text-decoration: none;
}

a:visited {
  color: rgb(140, 197, 255);
  text-decoration: none;
}

a:hover {
  color: rgb(140, 197, 255);
  text-decoration: none;
}

a:active {
  color: rgb(140, 197, 255);
  text-decoration: none;
}

.comment-nickname {
  font-size: 13px;
  font-weight: bold;
}

.comment-info {
  font-size: 13px;
  color: #999999;
}

.comment-row {
  margin: 10px 0 10px 0;
}
</style>
