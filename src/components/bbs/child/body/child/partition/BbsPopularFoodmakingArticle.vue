<template>
  <el-card>
    <div slot="header" class="clearfix card-title">
      <span>热门的美食心得帖子</span>
    </div>
    <el-row class="popular-article-item" v-for="item in articles" :key="item.id"
            v-if="item.tag === '制作美食心得' && item.like >= 50">
      <a @click="lookDetail(item.id)">
        <el-col class="announce-articles">
          <el-tag class="announce-articles-tag" size="mini">热门</el-tag>
          {{ item.title }}
        </el-col>
      </a>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: ['articles'],
  name: 'PopularFoodMakingArticle',
  methods: {
    lookDetail (articleId) {
      this.$router.push('/bbs/article/details/' + articleId)
    }
  }
}
</script>

<style scoped>
.card-title {
  text-align: center;
  font-weight: 600;
}

/deep/ .el-card__body {
  padding: 10px;
}

/deep/ .el-card__header {
  padding: 10px 10px;
}

.announce-articles {
  width: 289px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  display: block;
  cursor: pointer;
}

.announce-articles-tag {
  margin-top: 10px;
  margin-right: 10px;
}
</style>
