<template>
  <el-card class="box-card">
    <el-row :gutter="20" class="special-area">
      <a @click="$store.commit('setBbsType', 'clock')">
        <el-col class="link" :span="6">
          打卡专区
        </el-col>
      </a>
      <a @click="$store.commit('setBbsType', 'recipe')">
        <el-col class="link" :span="6">
          食谱专区
        </el-col>
      </a>
      <a @click="$store.commit('setBbsType', 'cooking')">
        <el-col class="link" :span="6">
          制作专区
        </el-col>
      </a>
      <a @click="$store.commit('setBbsType', 'sharing')">
        <el-col class="link" :span="6">
          分享专区
        </el-col>
      </a>
    </el-row>
    <div class="bbs-content" v-for="item in res" :key="item.id">
      <el-row>
        <el-col :span="2" class="article-organizer">
          <el-avatar :size="35" :src="item.user.avatar" @error="errorHandler">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" alt=""/>
          </el-avatar>
        </el-col>
        <el-col :span="22">
          <p>
            <span class="email">{{ item.user.username }}</span>
            <span class="publish-timestamp">{{ item.date }}</span>
          </p>
        </el-col>
      </el-row>
      <!--   标题   -->
      <el-row style="margin: 10px 0">
        <div style="line-height: 32px">
          <el-tag style="color: white; background: #ffc107">{{ item.tag }}</el-tag>
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
        <a class="look-article" @click="lookDetail(item.id)">
          <span>查看帖子<i class="el-icon-right el-icon-caret-right"></i></span>
        </a>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'BbsContent',
  watch: {
    '$store.state.bbsType': async function (newVal, oldVal) {
      let {data: res} = await this.$http.get('/bbs/getting/articles/by?type=' + newVal)
      this.res = res
    }
  },
  async created () {
    let {data: res} = await this.$http.get('/bbs/getting/articles/by?type=index')
    this.res = res
  },
  methods: {
    errorHandler () {
      return true
    },
    // 查看帖子详细
    lookDetail (articleId) {
      this.$router.push('/bbs/article/details/' + articleId)
    }
  },
  data () {
    return {
      // 帖子数据
      res: [
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
/deep/ .el-card__body {
  padding: 0;
}

/deep/ .el-divider--horizontal {
  margin: 0;
}

.look-article {
  cursor: pointer;
}

.article-organizer {
  height: 54px;
  padding: 10px 0 10px 0;
}

.bbs-content {
  padding: 20px;
  border-bottom: #ebebeb solid 1px;
}

.publish-timestamp {
  color: #ccc;
  font-size: 12px;
}

.email {
  font-size: 14px;
  color: #666;
}

.link:hover {
  transform: translate(-3px, -3px);
  cursor: pointer;
  transition: 0.3s;
}

.link {
  transition: 0.3s;
  text-align: center;
  padding: 20px 0;
}

.post-brief-content {
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

.post-title {
  font-size: 17px;
  color: #333;
  margin: 5px 0;
}
</style>
