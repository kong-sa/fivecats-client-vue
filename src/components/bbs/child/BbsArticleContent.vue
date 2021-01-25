<template>
  <el-container style="background: rgb(245,245,250)">
    <el-header>Header</el-header>
    <el-main style="margin: 0 20%; padding: 0;">
      <el-card style="padding: 20px">
        <!--    帖子具体内容展示    -->
        <el-row>
          <!--     标题     -->
          <el-row style="margin-bottom: 15px">
            <div style="line-height: 37.6px;">
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
            <el-col :span="3">粉丝数：{{ articleObj.organizer.fans }}</el-col>
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
          <el-divider></el-divider>
          <el-row style="text-align: center; margin: 40px">
            <i style="font-size: 45px; cursor: pointer" @click="like" class="el-icon--left el-icon-thumb">
              {{ articleObj.likes }}</i>
          </el-row>
        </el-row>
      </el-card>
      <el-card style="margin: 20px 0; padding: 10px">
        <!--1行 用户名-->
        <el-row>
          <el-col :span="2">
            <el-avatar fit="fill" :src="articleObj.organizer.avatar">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-avatar>
          </el-col>
          <el-col :span="5" class="comment-row" id="comment-nickname">{{ articleObj.organizer.username }}</el-col>
        </el-row>
        <!--2行 内容-->
        <el-row class="comment-row" id="comment-content">{{ articleObj.content }}</el-row>
        <!--3行 点赞-->
        <el-row class="comment-row" id="comment-info">
          <!--点赞图标-->
          <span id="like">
            <i class="like"></i><span>{{ articleObj.likes }}</span>
          </span>
          <!--点赞数-->
          <span id="comment-time">{{ articleObj.date }}</span>
        </el-row>
      </el-card>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'BbsArticleContent',
  async created () {
    let articleId = this.$route.params.articleId
    let {data: articleObj} = await this.$http.get('/getting/article/content?articleId=' + articleId)
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
    }
  },
  data () {
    return {
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

#comment-nickname {
  font-size: 13px;
  font-weight: bold;
}

#comment-info {
  font-size: 13px;
}

#like {
  cursor: pointer;
  margin-right: 10px;
}

.like {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  background-image: url("http://oss.norza.cn/imgs/thumb.png");
  background-position: center center;
}

.comment-row {
  margin: 10px 0 10px 0;
}
</style>
