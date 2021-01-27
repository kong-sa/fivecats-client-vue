<template>
  <el-container class="bbs-container">
    <el-header class="bbs-header">
      <!--导航栏-->
      <bbs-navigation-bar/>
    </el-header>
    <el-main class="bbs-main">
      <el-row>
        <!-- 轮播图 -->
        <el-col :span="16">
          <bbs-revolving-lantern/>
        </el-col>
        <!-- 发表菜单 -->
        <el-col class="bbs-main__right-menu" :span="7">
          <bbs-posting/>
        </el-col>
      </el-row>
      <!-- 社区主要内容区域 -->
      <el-row class="bbs-main-area">
        <el-col :span="16">
          <router-view/>
        </el-col>
        <el-col :span="7" class="bbs-main__right-menu">
          <bbs-popular-foodmaking-article v-bind:articles="articles"/>
          <bbs-popular-countryside-food class="bbs-main__right-menu-item" v-bind:articles="articles"/>
          <bbs-official-announcement class="bbs-main__right-menu-item" v-bind:articles="articles"/>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="bbs-footer"></el-footer>
  </el-container>
</template>

<script>
import BbsPosting from './child/BbsPosting'
import BbsNavigationBar from './child/BbsNavigationBar'
import BbsRevolvingLantern from './child/BbsRevolvingLantern'
import BbsOfficialAnnouncement from './child/BbsOfficialAnnouncement'
import BbsPopularCountrysideFood from './child/BbsPopularCountrysideFood'
import BbsPopularFoodmakingArticle from './child/BbsPopularFoodmakingArticle'

export default {
  name: 'BBSMain',
  components: {
    BbsPosting,
    BbsNavigationBar,
    BbsRevolvingLantern,
    BbsOfficialAnnouncement,
    BbsPopularCountrysideFood,
    BbsPopularFoodmakingArticle
  },
  async created () {
    let {data: articles} = await this.$http.get('/getting/articles')
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
          'organizerId': 0,
          'organizer':
            {
              'id': 0,
              'fans': 0,
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
