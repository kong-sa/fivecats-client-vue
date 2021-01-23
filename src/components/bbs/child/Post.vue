<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <div id="publish">发布</div>
    </div>
    <div class="publish-content">
      <el-button>
        <i class="el-icon--left  el-icon-edit"></i>发布帖子<i class="el-icon--right el-icon-arrow-right"></i>
      </el-button>
      <p class="explanation">讨论美食、节约食物打卡</p>
    </div>
    <div class="publish-content">
      <el-button>
        <i class="el-icon--left  el-icon-picture-outline"></i>发表图片<i class="el-icon--right el-icon-arrow-right"></i>
      </el-button>
      <p class="explanation">发布美食图片、图片打卡</p>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Post'
}
</script>

<style>
.el-card__body {
  padding: 10px;
}

.el-card__header {
  padding: 10px 10px;
}
</style>

<style scoped>
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
