<template>
  <div>
    <div class="articles" v-for="item in articles" :key="item.id">
      <el-row>
        <el-col :span="2" class="avatar">
          <el-avatar :size="35" :src="item.user.avatar"></el-avatar>
        </el-col>
        <el-col :span="22">
          <p>
            <span class="username">{{ item.user.username }}</span>
            <span class="timestamp">{{ item.date }}</span>
          </p>
        </el-col>
      </el-row>
      <el-row style="margin: 10px 0">
        <div style="line-height: 32px">
          <el-tag style="color: white; background: #ffc107">{{ item.tag }}</el-tag>
          <span class="title">{{ item.title }}</span>
        </div>
      </el-row>
      <el-row>
        <div v-html="item.content" class="brief"></div>
      </el-row>
      <el-row style="margin-top: 10px; margin-right: 10px; margin-bottom: 10px; font-size: 13px; color: #666">
      <span style="margin-right: 10px">
        <i class="el-icon--left el-icon-chat-line-round"></i>{{ item.times }}
      </span>
        <span style="margin-right: 10px">
        <i class="el-icon--left el-icon-third-dianzan"></i>{{ item.like }}
      </span>
        <a class="look-article" @click="watchDetails(item.id)">
        <span>
          查看帖子<i class="el-icon-right el-icon-caret-right"></i>
        </span>
        </a>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BbsArticles',
  props: ['type'],
  methods: {
    watchDetails (articleId) {
      this.$router.push('/bbs/article/details/' + articleId)
    }
  },
  watch: {
    type: async function (newVal, oldVal) {
      let {data: articles} = await this.$http.get('/bbs/getting/articles/by?type=' + newVal)
      this.articles = articles
    }
  },
  async created () {
    let {data: articles} = await this.$http.get('/bbs/getting/articles/by?type=index')
    this.articles = articles
  },
  data () {
    return {
      articles: [
        {
          'id': 0,
          'tag': '',
          'title': '',
          'date': '',
          'like': 0,
          'type': '',
          'times': 0,
          'isAnn': 0,
          'content': '',
          'userId': 0,
          'user':
            {
              'username': '',
              'avatar': '',
              'profile': '',
              'fans': 0,
              'id': 0
            }
        }
      ]
    }
  }
}
</script>

<style scoped>
.look-article {
  cursor: pointer;
}

.avatar {
  height: 54px;
  padding: 10px 0 10px 0;
}

.articles {
  padding: 20px;
  border-bottom: #ebebeb solid 1px;
}

.timestamp {
  color: #ccc;
  font-size: 12px;
}

.username {
  font-size: 14px;
  color: #666;
}

.brief {
  color: #999;
  font-size: 14px;
  width: 670px;
  max-height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  cursor: pointer;
}

.title {
  font-size: 17px;
  color: #333;
  margin: 5px 0;
}
</style>
