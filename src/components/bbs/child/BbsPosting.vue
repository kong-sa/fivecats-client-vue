<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <div id="publish">发表</div>
    </div>
    <div class="publish-content">
      <el-button @click="postArticle">
        <i class="el-icon--left  el-icon-edit"></i>发表帖子<i class="el-icon--right el-icon-arrow-right"></i>
      </el-button>
      <p class="explanation">讨论美食、制作心得</p>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'BbsPosting',
  methods: {
    postArticle () {
      this.$router.replace('/bbs/post/article')
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

#publish {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.publish-content {
  text-align: center;
}

.explanation {
  font-size: 12px;
  margin-top: 10px;
  color: #999;
}
</style>
