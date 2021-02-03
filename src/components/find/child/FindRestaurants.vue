<template>
  <div class="restaurant-body">
    <el-row :gutter="20">
      <!--每一列-->
      <el-col
        :span="8"
        class="res-item">
        <!--身体部分-->
        <div class="res-item-body">
          <!--图片部分-->
          <el-image class="item-bg" src="http://oss.norza.cn/imgs/find/c3.jpg">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="item-desc">
            <h3>Xx餐馆</h3>
            <p>人均消费：50¥</p>
            <p>地理位置：绵阳市涪城区万达广场</p>
          </div>
        </div>
      </el-col>
      <el-col
        :span="8"
        class="res-item">
        <!--身体部分-->
        <div class="res-item-body">
          <!--图片部分-->
          <el-image class="item-bg" src="http://oss.norza.cn/imgs/find/c3.jpg">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="item-desc">
            <h3>Xx餐馆</h3>
            <p>人均消费：50¥</p>
            <p>地理位置：绵阳市涪城区万达广场</p>
          </div>
        </div>
      </el-col>
      <el-col
        :span="8"
        class="res-item">
        <!--身体部分-->
        <div class="res-item-body">
          <!--图片部分-->
          <el-image class="item-bg" src="http://oss.norza.cn/imgs/find/c3.jpg">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="item-desc">
            <h3>Xx餐馆</h3>
            <p>人均消费：50¥</p>
            <p>地理位置：绵阳市涪城区万达广场</p>
          </div>
        </div>
      </el-col>
      <el-col
        :span="8"
        class="res-item">
        <!--身体部分-->
        <div class="res-item-body">
          <!--图片部分-->
          <el-image class="item-bg" src="http://oss.norza.cn/imgs/find/c3.jpg">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="item-desc">
            <h3>Xx餐馆</h3>
            <p>人均消费：50¥</p>
            <p>地理位置：绵阳市涪城区万达广场</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'FindRestaurants',
  watch: {
    async $route (to, from) {
    }
  },
  async created () {
  },
  methods: {
  },
  data () {
    return {
      hover: false,
      restaurants: []
    }
  }
}
</script>

<style scoped>
.res-item {
  height: 233px;
  transition: 0.5s;
  margin-bottom: 100px;
}

.res-item:hover {
  transition: 0.5s;
  transform: translateY(-10px);
}

.res-item-body {
  position: relative;
}

.item-desc {
  position: absolute;
  top: 138px;
  padding: 15px;
  left: 4%;
  right: 4%;
  border-radius: 3px;
  background: #f7f7f7;
  opacity: 0.8;
}

.item-desc p {
  margin: 10px 0;
}

.item-desc h4 {
  margin: 15px 0;
}
</style>
