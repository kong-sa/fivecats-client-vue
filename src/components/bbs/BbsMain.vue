<template>
  <el-container style="background: rgb(245,245,250)">
    <el-header>Header</el-header>
    <el-main style="margin: 0 15%; padding: 0;">
      <el-row>
        <!-- 轮播图 -->
        <el-col :span="16">
          <bbs-carousel/>
        </el-col>
        <!-- 发表帖子 -->
        <el-col style="float: right" :span="7">
          <bbs-posting/>
        </el-col>
      </el-row>
      <!-- bbs内容区域 -->
      <el-row style="margin-top: 50px">
        <el-col :span="16">
          <bbs-content v-bind:articles="articles"/>
        </el-col>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import BbsPosting from './child/BbsPosting'
import BbsContent from './child/BbsContent'
import BbsCarousel from './child/BbsCarousel'

export default {
  name: 'BBSMain',
  data () {
    return {
      articles: [
        {
          'id': 0,
          'organizerId': 0,
          'title': '',
          'content': '',
          'date': '',
          'likes': 0,
          'url1': '',
          'url2': '',
          'url3': '',
          'type': '',
          'times': 0,
          'organizer': {
            'id': 0,
            'avatar': '',
            'username': '',
            'fans': 0
          }
        }
      ]
    }
  },
  components: {
    BbsPosting,
    BbsContent,
    BbsCarousel
  },
  async created () {
    let {data: articles} = await this.$http.get('/getting/articles')
    this.articles = articles
  }
}
</script>

<style scoped>
</style>
