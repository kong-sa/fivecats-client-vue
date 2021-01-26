<template>
  <el-card class="box-card">
    <div class="bbs-content" v-for="item in articles" :key="item.id">
      <!--   头像、用户名、发表时间   -->
      <el-row>
        <el-col :span="2" class="article-organizer">
          <el-avatar :size="35" :src="item.organizer.avatar" @error="errorHandler">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" alt=""/>
          </el-avatar>
        </el-col>
        <el-col :span="22">
          <p>
            <span class="username">{{ item.organizer.username }}</span>
            <span class="publish-timestamp">{{ item.date }}</span>
          </p>
        </el-col>
      </el-row>
      <!--   标题   -->
      <el-row style="margin: 10px 0">
        <div style="line-height: 32px">
          <el-tag>{{ item.type }}</el-tag>
          <span class="post-title">{{ item.title }}</span>
        </div>
      </el-row>
      <!--   简略内容   -->
      <el-row>
        <div v-html="item.content" class="post-brief-content">
        </div>
      </el-row>
      <!--   帖子封面   -->
      <el-row :gutter="10" class="image-preview-box">
        <el-col :span="8" class="image-preview" v-if="item.url1">
          <el-image style="width: 100%; height: 100%" :src="item.url1">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-col>
        <el-col :span="8" class="image-preview" v-if="item.url2">
          <el-image style="width: 100%; height: 100%" :src="item.url2">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-col>
        <el-col :span="8" class="image-preview" v-if="item.url3">
          <el-image style="width: 100%; height: 100%" :src="item.url3">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-col>
      </el-row>
      <!--   赞数、讨论数   -->
      <el-row style="margin-top: 10px; margin-right: 10px; margin-bottom: 10px; font-size: 13px; color: #666">
         <span style="margin-right: 10px">
          <i class="el-icon--left el-icon-chat-line-round"></i>{{ item.times }}
        </span>
        <span style="margin-right: 10px">
          <i class="el-icon--left el-icon-thumb"></i>{{ item.likes }}
        </span>
        <a @click="lookDetail(item.id)">
          <span>查看帖子<i class="el-icon-right el-icon-caret-right"></i></span>
        </a>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ['articles'],
  name: 'ArticleContent',
  methods: {
    errorHandler () {
      return true
    },
    lookDetail (articleId) {
      this.$router.push('/bbs/article/content/' + articleId)
    }
  }
}
</script>

<style scoped>
/deep/ .el-card__body {
  padding: 0;
}

/deep/ .el-divider--horizontal {
  margin: 0;
}

.article-organizer {
  height: 54px;
  padding: 10px 0 10px 0;
}

.bbs-content {
  padding: 20px;
  border-bottom: #ebebeb solid 1px;;
}

.publish-timestamp {
  color: #ccc;
  font-size: 12px;
}

.image-preview {
  width: 223px;
  height: 151px;
}

.image-preview-box {
  margin-top: 10px;
}

.username {
  font-size: 14px;
  color: #666;
}

.post-brief-content {
  color: #999;
  font-size: 14px;
  width: 670px;
  max-height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  cursor: pointer;
}

.post-title {
  font-size: 17px;
  color: #333;
  margin: 5px 0;
}
</style>
