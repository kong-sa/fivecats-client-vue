<template>
  <div id="bbs-carousel">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in carousel" :key="item.id">
        <el-image :src="item.url">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      carousel: [
        {id: 0, url: 'http://oss.norza.cn/imgs/bbs/carousel/79117240_p0.png'},
        {id: 1, url: 'http://oss.norza.cn/imgs/bbs/carousel/79044784_p0.png'},
        {id: 2, url: 'http://oss.norza.cn/imgs/bbs/carousel/73355269_p0.png'}
      ]
    }
  }
}
</script>

<style scoped>
</style>
