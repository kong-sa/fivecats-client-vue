<template>
  <div class="partition">
    <el-row>
      <el-col :span="16">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in carousel" :key="item.id">
            <el-image :src="item.url">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="7" style="float: right">
        <el-card>
          <div slot="header" class="clearfix push">发表</div>
          <div class="push-card-body">
            <el-button @click="goArticlePage()">
              <i class="el-icon--left  el-icon-edit"></i>
              发表帖子
              <i class="el-icon--right el-icon-arrow-right"></i>
            </el-button>
            <p class="explanation">讨论美食、制作心得</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-top: 2.5%">
      <el-col :span="16">
        <el-row>
          <el-card class="router-card">
            <el-row :gutter="20" style="text-align: center">
              <a class="router" @click="type = 'clock'">
                <el-col class="link" :span="6">打卡专区</el-col>
              </a>
              <a class="router" @click="type = 'recipe'">
                <el-col class="link" :span="6">食谱专区</el-col>
              </a>
              <a class="router" @click="type = 'cooking'">
                <el-col class="link" :span="6">制作专区</el-col>
              </a>
              <a class="router" @click="type = 'sharing'">
                <el-col class="link" :span="6">分享专区</el-col>
              </a>
            </el-row>
          </el-card>
        </el-row>
        <el-row>
          <el-card>
            <bbs-articles v-bind:type="type"/>
          </el-card>
        </el-row>
      </el-col>
      <el-col :span="7" style="float: right">
        <div class="rank">
          <el-card>
            <div slot="header" class="clearfix card-header">热门的美食心得帖子</div>
            <div class="articles" v-for="item in articles" :key="item.id"
                 v-if="item.tag === '制作美食心得' && item.like >= 50">
              <a @click="watchDetails(item.id)">
                <el-tag class="tag" size="mini">热门</el-tag>
                {{ item.title }}
              </a>
            </div>
          </el-card>
        </div>
        <div class="rank">
          <el-card>
            <div slot="header" class="clearfix card-header">热门的农村美食分享</div>
            <div class="articles" v-for="item in articles" :key="item.id"
                 v-if="item.tag === '农村美食分享' && item.like >= 50">
              <a @click="watchDetails(item.id)">
                <el-tag class="tag" size="mini">热门</el-tag>
                {{ item.title }}
              </a>
            </div>
          </el-card>
        </div>
        <div class="rank">
          <el-card>
            <div slot="header" class="clearfix card-header">馋猫社区公告</div>
            <el-carousel height="150px">
              <el-carousel-item v-for="item in official" :key="item.id">
                <el-image :src="item.url" class="carousel-image">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </el-carousel-item>
            </el-carousel>
            <div class="articles" v-for="item in articles" :key="item.id" v-if="item.isAnn === 1">
              <a @click="watchDetails(item.id)">
                <el-tag class="tag" size="mini">公告</el-tag>
                {{ item.title }}
              </a>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BbsArticles from './BbsArticles'

export default {
  name: 'BbsPartition',
  components: {BbsArticles},
  methods: {
    goArticlePage () {
      this.$router.push('/bbs/article/posting')
    },
    watchDetails (articleId) {
      this.$router.push('/bbs/article/details/' + articleId)
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
          'type': '',
          'date': '',
          'likes': 0,
          'isAnn': 0,
          'content': '',
          'userId': 0,
          'user':
            {
              'id': 0,
              'fans': 0,
              'avatar': '',
              'profile': '',
              'username': ''
            }
        }
      ],
      type: 'index',
      carousel: [
        {id: 0, url: 'http://oss.norza.cn/imgs/bbs/food01.jpg'},
        {id: 1, url: 'http://oss.norza.cn/imgs/bbs/food02.jpg'},
        {id: 2, url: 'http://oss.norza.cn/imgs/bbs/food03.jpg'}
      ],
      official: [
        {id: 0, url: 'http://oss.norza.cn/imgs/bbs/food04.jpg'},
        {id: 1, url: 'http://oss.norza.cn/imgs/bbs/food05.jpg'},
        {id: 2, url: 'http://oss.norza.cn/imgs/bbs/food06.jpg'}
      ]
    }
  }
}
</script>

<style scoped>
/deep/ .el-card__body {
  padding: 10px;
}

/deep/ .el-card__header {
  padding: 10px 10px;
}

.router {
  cursor: pointer;
}

.push {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.push-card-body {
  text-align: center;
}

.explanation {
  font-size: 12px;
  margin-top: 10px;
  color: #999;
}

.carousel-image {
  height: 100%;
  width: 100%;
}

.card-header {
  text-align: center;
  font-weight: 600;
}

.articles {
  width: 289px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  display: block;
  cursor: pointer;
}

.tag {
  background: #ffc107;
  color: white;
  margin-top: 10px;
  margin-right: 10px;
}

.router-card {
  border-bottom: 1px solid #ebebeb;
}

.rank {
  margin-bottom: 10px;
}
</style>
