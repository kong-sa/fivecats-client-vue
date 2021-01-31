<template>
  <el-card>
    <div slot="header" class="clearfix card-title">
      <span>馋猫社区公告</span>
    </div>
    <el-row class="card-carousel">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in carousel" :key="item.id">
          <el-image :src="item.url" class="carousel-image">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row class="announce-item" v-for="item in articles" :key="item.id" v-if="item.isAnn === 1">
      <a @click="lookDetail(item.id)">
        <el-col class="announce-articles">
          <el-tag class="announce-articles-tag" size="mini">公告</el-tag>
          {{ item.title }}
        </el-col>
      </a>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: ['articles'],
  name: 'OfficialAnnouncement',
  methods: {
    lookDetail (articleId) {
      this.$router.push('/bbs/article/details/' + articleId)
    }
  },
  data () {
    return {
      // 轮播图url地址，从oss服务器拿取
      carousel: [
        {id: 0, url: 'http://oss.norza.cn/imgs/bbs/77493707_p0.png'},
        {id: 1, url: 'http://oss.norza.cn/imgs/bbs/79422437_p0.png'},
        {id: 2, url: 'http://oss.norza.cn/imgs/bbs/86b0-hwsffza7766335.jpg'}
      ]
    }
  }
}
</script>

<style scoped>

.carousel-image {
  height: 100%; width: 100%;
}

.card-carousel {
  width: 270px;
  height: 150px;
}

.card-title {
  text-align: center;
  font-weight: 600;
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

.announce-item {
  margin-top: 15px
}
</style>
