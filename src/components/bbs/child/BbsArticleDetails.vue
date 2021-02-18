<template>
  <div id="details">
    <el-card class="main_card__body">
      <el-row>
        <el-row class="main-card__title">
          <div class="title-info">
            <el-tag style="color: white; background: #ffc107">{{ res1.tag }}</el-tag>
            <span class="title-info__right">{{ res1.title }}</span>
          </div>
        </el-row>
        <el-row class="brief-info">
          <el-col :span="12">发表日期：{{ res1.date }}</el-col>
          <el-col :span="4">点赞数：{{ res1.like }}</el-col>
          <el-col :span="4">回复数：{{ replayNum }}</el-col>
          <el-col :span="4" style="float: right">
            <a @click="edit(res1.id)" v-if="res1.userId === this.$store.state.user.id" style="cursor: pointer">编辑</a>
          </el-col>
        </el-row>
        <el-row class="user-info">
          <el-col :span="2">
            <el-avatar :size="50" v-bind:src="res1.user.avatar"></el-avatar>
          </el-col>
          <el-col :span="3">{{ res1.user.username }}</el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row style="margin-bottom: 20px">
          <div v-html="res1.content" style="margin: 15px 0"></div>
        </el-row>
        <el-row class="modified-date">
          修改于 {{ res1.modifiedDate }}
        </el-row>
        <el-row style="text-align: center; margin: 40px">
          <i @click="like" class="el-icon--left el-icon-third-dianzan like-article-icon">
            {{ res1.like }}</i>
        </el-row>
      </el-row>
    </el-card>
    <el-card style="padding: 20px; margin-top: 20px">
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
        <el-row style="float: right">
          <el-button
            @click="postComment"
            size="small">发送
          </el-button>
        </el-row>
      </el-form>
    </el-card>
    <el-card style="margin: 10px 0; padding: 0">
      <div v-for="item in res2" :key="item.id"
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
                <!--点击面板跳转个人空间-->
                <a class="other-username" @click="lookUser(item.user.id)">
                  <el-dropdown-item>
                    <el-avatar fit="fill" :src="item.user.avatar">
                      <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                      </div>
                    </el-avatar>
                    <div>用户名：{{ item.user.username }}</div>
                    <div>粉丝数：{{ item.user.fans }}</div>
                    <div>个人简介：{{ item.user.profile }}</div>
                  </el-dropdown-item>
                </a>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <!--如果是发帖人，则附上标签-->
          <el-col :span="5" class="comm-row comment-nickname">
            {{ item.user.username }}
            <el-tag v-if="item.user.id === res1.user.id" style="margin-left: 10px; color: white; background: #ffc107" size="small">发帖人</el-tag>
          </el-col>
        </el-row>
        <!--评论的内容-->
        <el-row class="comm-row comment-content">
          <el-col :offset="2">{{ item.content }}</el-col>
        </el-row>
        <el-row class="comm-row comment-info">
          <el-col :offset="2">
            <span>
              <i class="el-icon--left el-icon-third-dianzan"></i>{{ item.like }}
            </span>
            <span class="comm-time">{{ item.date }}</span>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'BbsArticleContent',
  async created () {
    this.articleId = this.$route.params.articleId
    let {data: res1} = await this.$http.get('/bbs/getting/article/by?articleId=' + this.articleId)
    this.res1 = res1
    let {data: res2} = await this.$http.get('/bbs/getting/article/comments/by?articleId=' + this.articleId)
    this.res2 = res2
    let {data: res3} = await this.$http.get('/bbs/getting/article/replay/num?articleId=' + this.articleId)
    this.replayNum = res3
    document.title = res1.user.username + '的帖子 - 馋猫社区'
  },
  methods: {
    lookUser (userId) {
      this.$router.push('/bbs/person/space/' + userId)
    },
    async like () {
      await this.$http.post('/bbs/setting/article/like', this.res1)
      await this.$http.post('/bbs/setting/user/info', {
        userId: this.res1.userId,
        articleId: this.res1.id,
        likeUserId: this.$store.state.user.id
      })
      this.$message.success('点赞成功！')
    },
    postComment () {
      this.$refs.formData.validate((valid) => {
        if (!valid) return false
        this.$http.post('/bbs/setting/article/comment', {
          content: this.formData.textareaValue,
          articleId: this.articleId,
          userId: this.$store.state.user.id
        })
        this.$message.success('发送成功！')
      })
    },
    edit (articleId) {
      this.$router.push('/bbs/edit/article/' + articleId)
    }
  },
  data () {
    return {
      replayNum: 0,
      articleId: 0,
      rules: {
        textareaValue: [
          {required: true, message: '请输入内容再发表评论哦！', trigger: 'blur'},
          {min: 2, max: 255, message: '长度在 2 到 255 个字符', trigger: 'blur'}
        ]
      },
      formData: {
        textareaValue: ''
      },
      // 帖子数据
      res1: {
        'id': 0,
        'userId': 0,
        'content': null,
        'isAnn': 0,
        'date': null,
        'like': 0,
        'type': null,
        'title': null,
        'tag': null,
        'modifiedDate': null,
        'user': {
          'id': 0,
          'username': null,
          'avatar': null,
          'profile': null,
          'date': null,
          'fans': 0
        }
      },
      // 评论数据
      res2: [
        {
          'id': 0,
          'userId': 0,
          'articleId': 0,
          'content': null,
          'like': 0,
          'date': null,
          'user': {
            'id': 0,
            'username': null,
            'avatar': null,
            'profile': null,
            'fans': 0,
            'level': 0
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.comm-row {
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

.modified-date {
  color: #999999;
  text-align: right;
  font-size: 15px;
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

.comm-row {
  margin: 10px 0 10px 0;
}
</style>
