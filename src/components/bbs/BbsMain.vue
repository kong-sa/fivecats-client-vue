<template>
  <!--BBS社区父组件-->
  <el-container class="bbs-container">
    <el-header class="bbs-header">
      <!--导航栏-->
      <navigation-bar/>
    </el-header>
    <el-main class="bbs-main">
      <el-row>
        <!-- 轮播图 -->
        <el-col :span="16">
          <bbs-carousel/>
        </el-col>
        <!-- 发表菜单 -->
        <el-col class="bbs-main__right-menu" :span="7">
          <bbs-posting/>
        </el-col>
      </el-row>
      <!-- 社区主要内容区域 -->
      <el-row class="bbs-main-area">
        <el-col :span="16">
          <bbs-content v-bind:articles="articles"/>
        </el-col>
        <el-col :span="7" class="bbs-main__right-menu">
          <popular-food-making-article v-bind:articles="articles"/>
          <popular-countryside-food class="bbs-main__right-menu-item" v-bind:articles="articles"/>
          <official-announcement class="bbs-main__right-menu-item" v-bind:articles="articles"/>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="bbs-footer"></el-footer>
  </el-container>
</template>

<script>
import BbsPosting from './child/BbsPosting'
import BbsContent from './child/BbsContent'
import BbsCarousel from './child/BbsCarousel'
import NavigationBar from './navbar/NavigationBar'
import OfficialAnnouncement from './child/OfficialAnnouncement'
import PopularCountrysideFood from './child/PopularCountrysideFood'
import PopularFoodMakingArticle from './child/PopularFoodMakingArticle'

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
          'isAnn': 0,
          'organizer':
            {
              'id': 0,
              'avatar': '',
              'username': '',
              'profile': '',
              'fans': 0
            }
        }
      ]
    }
  },
  components: {
    BbsPosting,
    BbsContent,
    BbsCarousel,
    NavigationBar,
    OfficialAnnouncement,
    PopularCountrysideFood,
    PopularFoodMakingArticle
  },
  async created () {
    let {data: articles} = await this.$http.get('/getting/articles')
    this.articles = articles
  }
}
</script>

<style scoped>
.bbs-container {
  background: rgb(245, 245, 250);
}

.bbs-header {
  padding: 0;
  margin-bottom: 25px;
}

.bbs-main {
  margin: 0 15%;
  padding: 0;
}

.bbs-main__right-menu {
  float: right;
}

.bbs-main__right-menu-item {
  margin-top: 15px;
}
</style>
