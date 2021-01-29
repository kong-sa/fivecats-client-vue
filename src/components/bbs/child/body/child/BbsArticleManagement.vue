<template>
  <div class="article-management">
    <div class="management-main" v-for="item in arr" :key="item.id">
      <!--   标题   -->
      <el-row style="margin: 10px 0">
        <div style="line-height: 32px">
          <el-tag>{{ item.tag }}</el-tag>
          <span class="post-title">{{ item.title }}</span>
        </div>
      </el-row>
      <!--   简略内容   -->
      <el-row>
        <div v-html="item.content" class="post-brief-content">
        </div>
      </el-row>
      <!--   赞数、讨论数   -->
      <el-row style="margin-top: 10px; margin-right: 10px; margin-bottom: 10px; font-size: 13px; color: #666">
        <span style="margin-right: 10px"><i class="el-icon--left el-icon-chat-line-round"></i>{{ item.times }}</span>
        <span style="margin-right: 10px"><i class="el-icon--left el-icon-third-dianzan"></i>{{ item.like }}</span>
        <a @click="lookDetail(item.id)">
          <span>查看帖子<i class="el-icon-right el-icon-caret-right"></i></span>
        </a>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BbsArticleManagement',
  async created () {
    let {data: res} = await this.$http.get('/bbs/my/articles?id=' + this.$store.state.var1.data.id)
    this.arr = res
  },
  methods: {
    lookDetail (articleId) {
      this.$router.push('/bbs/article/details/' + articleId)
    }
  },
  data () {
    return {
      arr: [
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
.post-title {
  font-size: 17px;
  color: #333;
  margin: 5px 0;
}

.management-main {
  padding: 20px;
  border-bottom: #ebebeb solid 1px;
}

.post-brief-content {
  color: #999;
  font-size: 14px;
  width: 809px;
  max-height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  cursor: pointer;
}
</style>
