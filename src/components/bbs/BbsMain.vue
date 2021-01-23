<template>
  <el-container style="background: rgb(240,241,245)">
    <el-header>Header</el-header>
    <el-main style="margin: 0 15%; padding: 0;">
      <el-row>
        <!-- 轮播图 -->
        <el-col :span="16">
          <carousel/>
        </el-col>
        <!-- 发表帖子 -->
        <el-col style="float: right" :span="7">
          <post/>
        </el-col>
      </el-row>
      <!-- bbs内容区域 -->
      <el-row style="margin-top: 50px">
        <el-col :span="16">
          <bbs-content/>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Post from './child/Post'
import Carousel from './child/Carousel'
import BbsContent from './child/BbsContent'

export default {
  name: 'BBSMain',
  components: {
    Post,
    Carousel,
    BbsContent
  }
}
</script>

<style scoped>
</style>
