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
        <bbs-content/>
      </el-col>
      <!--右侧栏-->
      <el-col :span="7" class="bbs-main__right-menu">
        <bbs-popular-foodmaking-article v-bind:articles="res"/>
        <bbs-popular-countryside-food class="bbs-main__right-menu-item" v-bind:articles="res"/>
        <bbs-official-announcement class="bbs-main__right-menu-item" v-bind:articles="res"/>
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
import BbsContent from './child/partition/BbsContent'

export default {
  name: 'BbsPartition',
  components: {
    BbsContent,
    BbsPopularCountrysideFood,
    BbsOfficialAnnouncement,
    BbsPosting,
    BbsPopularFoodmakingArticle,
    BbsRevolvingLantern
  },
  async created () {
    let {data: res} = await this.$http.get('/bbs/getting/articles/by?type=index')
    this.res = res
  },
  data () {
    return {
      res: [
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
