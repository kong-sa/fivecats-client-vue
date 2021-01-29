<template>
  <el-card>
    <div class="clearfix card-title">
      <span>热门的农村美食分享</span>
    </div>
    <el-row class="popular-article-item" v-for="item in articles" :key="item.id"
            v-if="item.tag === '农村美食分享' && item.like >= 50">
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
  name: 'PopularCountrysideFood',
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
  margin-right: 10px;
}

.announce-articles-tag {
  margin-top: 10px;
}
</style>
