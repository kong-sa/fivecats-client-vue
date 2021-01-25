<template>
  <el-card>
    <div slot="header" class="clearfix" style="text-align: center; font-weight: 600">
      <span>热门的美食心得帖子</span>
    </div>
    <el-row v-for="(item) in articles" :key="item.id" v-if="item.type === '制作美食心得' && item.likes >= 50">
      <a @click="lookDetail(item.id)">
        <el-col class="popular-articles">
          <el-tag class="popular-articles-tag" size="mini">热门</el-tag>
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
      this.$router.push('/bbs/article/content/' + articleId)
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

.popular-articles {
  width: 289px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  display: block;
  cursor: pointer;
}

.popular-articles-tag {
  margin-right: 10px;
}
</style>
