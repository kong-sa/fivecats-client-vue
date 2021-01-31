<template>
  <div id="bbs-body">
    <el-row>
      <el-col :span="16">
        <!--轮播图-->
        <bbs-revolving-lantern/>
      </el-col>
      <el-col class="bbs-main__right-menu" :span="7">
        <!--发表面板-->
        <bbs-posting/>
      </el-col>
    </el-row>
    <el-row class="bbs-main-area">
      <el-col :span="16">
        <!--child\partition内的子组件-->
        <router-view/>
      </el-col>
      <!--右侧栏-->
      <el-col :span="7" class="bbs-main__right-menu">
        <bbs-popular-foodmaking-article v-bind:articles="articles"/>
        <bbs-popular-countryside-food class="bbs-main__right-menu-item" v-bind:articles="articles"/>
        <bbs-official-announcement class="bbs-main__right-menu-item" v-bind:articles="articles"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BbsRevolvingLantern from './child/partition/BbsRevolvingLantern'
import BbsPosting from './child/partition/BbsPosting'
import BbsPopularFoodmakingArticle from './child/partition/BbsPopularFoodmakingArticle'
import BbsPopularCountrysideFood from './child/partition/BbsPopularCountrysideFood'
import BbsOfficialAnnouncement from './child/partition/BbsOfficialAnnouncement'

export default {
  name: 'BbsPartition',
  components: {
    BbsPopularCountrysideFood,
    BbsOfficialAnnouncement,
    BbsPosting,
    BbsPopularFoodmakingArticle,
    BbsRevolvingLantern
  },
  async created () {
    let {data: res} = await this.$http.get('/bbs/getting/articles')
    this.articles = res
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
      ]
    }
  }
}
</script>

<style scoped>
.bbs-main__right-menu {
  float: right;
}

.bbs-main__right-menu-item {
  margin-top: 15px;
}
</style>
