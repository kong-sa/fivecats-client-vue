<template>
  <el-container style="background: rgb(245,245,250)">
    <el-header>Header</el-header>
    <el-main style="margin: 0 20%; padding: 0;">
      <el-card style="padding: 20px">
        <!--    帖子具体内容展示    -->
        <el-row>
          <!--     标题     -->
          <el-row style="margin-bottom: 15px">
            <div style="line-height: 38px;">
              <el-tag>{{ articleObj.type }}</el-tag>
              <span style="margin-left: 10px">{{ articleObj.title }}</span>
            </div>
          </el-row>
          <!--     时间、点赞数、讨论数     -->
          <el-row
            style="background: rgb(247,248,252); color: #999999; height: 40px; font-size: 15px; font-weight: 400; line-height: 40px; padding: 0 10px">
            <el-col :span="12">发表日期：{{ articleObj.date }}</el-col>
            <el-col :span="4" :offset="3">点赞数：{{ articleObj.likes }}</el-col>
            <el-col :span="4">回复数：{{ articleObj.times }}</el-col>
          </el-row>
          <!--     用户信息     -->
          <el-row style="line-height: 54px; margin-top: 20px; font-size: 15px; color: #525050">
            <el-col :span="2">
              <el-avatar :size="50" :src="articleObj.organizer.avatar"></el-avatar>
            </el-col>
            <el-col :span="3">{{ articleObj.organizer.username }}</el-col>
          </el-row>
          <el-divider></el-divider>
          <!--     帖子具体内容     -->
          <el-row style="margin-bottom: 20px">
            <div style="margin: 15px 0">
              {{ articleObj.content }}
            </div>
            <el-image v-if="articleObj.url1" :src="articleObj.url1"></el-image>
            <el-image v-if="articleObj.url2" :src="articleObj.url2"></el-image>
            <el-image v-if="articleObj.url3" :src="articleObj.url3"></el-image>
          </el-row>
          <!--     为该文章点赞     -->
          <el-row style="text-align: center; margin: 40px">
            <i style="font-size: 45px; cursor: pointer" @click="like" class="el-icon--left el-icon-thumb">
              {{ articleObj.likes }}</i>
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
        <div v-for="item in articleCommentsArr" :key="item.id"
             style="border-top: #ebebeb solid 1px; padding: 20px">
          <el-row>
            <el-col :span="2">
              <el-dropdown>
                <el-avatar fit="fill" :src="item.organizer.avatar">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-avatar>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <!--用户头像-->
                    <el-avatar fit="fill" :src="item.organizer.avatar">
                      <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                      </div>
                    </el-avatar>
                    <!--相关信息-->
                    <div>用户名：<a id="nickname" href="">{{ item.organizer.username }}</a></div>
                    <div>粉丝数：{{ item.organizer.fans }}</div>
                    <div>个人简介：{{ item.organizer.profile }}</div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="5" class="comment-row" id="comment-nickname">{{ item.organizer.username }}
              <el-tag v-if="item.organizer.id === articleObj.organizer.id" style="margin-left: 10px" size="small">发帖人</el-tag>
            </el-col>
          </el-row>
          <el-row class="comment-row" id="comment-content">
            <el-col :offset="2">{{ item.content }}</el-col>
          </el-row>
          <el-row class="comment-row" id="comment-info">
            <el-col :offset="2">
              <!--点赞图标-->
              <span id="like">
              <i class="el-icon--left el-icon-thumb"></i><span>{{ item.likes }}</span>
            </span>
              <!--点赞数-->
              <span id="comment-time">{{ item.date }}</span>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'BbsArticleContent',
  async created () {
    this.articleId = this.$route.params.articleId
    let {data: articleObj} = await this.$http.get('/getting/article/content?articleId=' + this.articleId)
    let {data: articleCommentsArr} = await this.$http.get('/getting/article/comments?articleId=' + this.articleId)
    this.articleCommentsArr = articleCommentsArr
    this.articleObj = articleObj
  },
  methods: {
    async like () {
      await this.$http.post('/setting/article/like', {
        id: this.articleObj.id,
        likes: this.articleObj.likes + 1
      })
      this.$message({
        message: '点赞成功！刷新后点赞才 +1 哦~',
        duration: 5000,
        type: 'success'
      })
    },
    pushComment () {
      this.$refs.formData.validate((valid) => {
        if (valid) {
          this.$http.post('setting/article/comment', {
            content: this.formData.textareaValue,
            articleId: this.articleId,
            organizerId: 1
          })
          this.$message.success('发送成功！刷新页面可以看见哦~')
        } else {
          return false
        }
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
      articleCommentsArr: [
        {
          'id': 0,
          'content': '',
          'date': '',
          'likes': 0,
          'organizer': {
            'id': 0,
            'date': '',
            'avatar': '',
            'username': '',
            'profile': '',
            'fans': 100,
            'gold': 0
          }
        }
      ],
      articleObj: {
        'id': 0,
        'organizerId': 0,
        'title': '',
        'content': '',
        'date': '',
        'url1': '',
        'url2': '',
        'url3': '',
        'type': '',
        'likes': 0,
        'times': 0,
        'organizer': {
          'id': 0,
          'avatar': '',
          'username': '',
          'profile': '',
          'fans': 0
        }
      }
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

#comment-nickname {
  font-size: 13px;
  font-weight: bold;
}

#comment-info {
  font-size: 13px;
  color: #999999;
}

#like {
  cursor: pointer;
  margin-right: 10px;
}

.comment-row {
  margin: 10px 0 10px 0;
}
</style>
