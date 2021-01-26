<template>
  <el-container class="special-area">
    <el-header class="special-header">
      <navigation-bar/>
    </el-header>
    <el-main class="special-main">
      <article-content v-bind:articles="articles"/>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import NavigationBar from '../navbar/NavigationBar'
import ArticleContent from './ArticleContent'

export default {
  name: 'SpecialArea',
  components: {ArticleContent, NavigationBar},
  async created () {
    let articleType = this.$route.params.type
    let {data: articles} = await this.$http.get('/getting/articles/by?type=' + articleType)
    this.articles = articles
  },
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
  }
}
</script>

<style scoped>
.special-area {
  min-height: 760px;
  background: rgb(245, 245, 250);
}

.special-main {
  margin: 0 25%;
  padding: 0;
}

.special-header {
  padding: 0;
  margin-bottom: 25px;
}
</style>
