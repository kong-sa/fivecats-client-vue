<template>
  <el-card>
    <div slot="header" class="clearfix" style="text-align: center; font-weight: 600">
      <span>馋猫社区公告</span>
    </div>
    <el-row style="width: 270px; height: 150px">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in announce" :key="item.id">
          <el-image :src="item.url" style="height: 100%; width: 100%">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row style="margin-top: 15px" v-for="(item) in articles" :key="item.id" v-if="item.isAnn === 1">
      <a @click="lookDetail(item.id)">
        <el-col class="popular-articles">
          <el-tag class="popular-articles-tag" size="mini">公告</el-tag>
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
  async created () {
    let {data: announce} = await this.$http.get('/getting/bbs/announce/carousel/urls')
    this.announce = announce
  },
  data () {
    return {
      announce: [
        {
          'id': 0,
          'url': ''
        }
      ]
    }
  },
  methods: {
    lookDetail (articleId) {
      this.$router.push('/bbs/article/content/' + articleId)
    }
  }
}
</script>

<style scoped>
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
