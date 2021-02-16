<template>
  <div class="find-main">
    <div class="find-carousel">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in findBg" :key="item.id">
          <el-image class="find-bg" :src="item.url"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="find-filter-bar">
      <el-row :gutter="20">
        <el-col :span="4" class="item item-left">
          <a @click="restaurantType = 'stirfry'">
            <div class="item-bg">
              <el-image class="item-image" src="http://oss.norza.cn/imgs/find/bar/stirfry.jpg"></el-image>
            </div>
            <div class="item-desc">炒菜</div>
          </a>
        </el-col>
        <el-col :span="4" class="item">
          <a @click="restaurantType = 'griddle'">
            <div class="item-bg">
              <el-image class="item-image" src="http://oss.norza.cn/imgs/find/bar/griddle.jpg"></el-image>
            </div>
            <div class="item-desc">干锅</div>
          </a>
        </el-col>
        <el-col :span="4" class="item">
          <a @click="restaurantType = 'hotpot'">
            <div class="item-bg">
              <el-image class="item-image" src="http://oss.norza.cn/imgs/find/bar/hotpot.jpg"></el-image>
            </div>
            <div class="item-desc">火锅</div>
          </a>
        </el-col>
        <el-col :span="4" class="item">
          <a @click="restaurantType = 'drink'">
            <div class="item-bg">
              <el-image class="item-image" src="http://oss.norza.cn/imgs/find/bar/drink.jpg"></el-image>
            </div>
            <div class="item-desc">饮品</div>
          </a>
        </el-col>
        <el-col :span="4" class="item">
          <a @click="restaurantType = 'pasta'">
            <div class="item-bg">
              <el-image class="item-image" src="http://oss.norza.cn/imgs/find/bar/pasta.jpg"></el-image>
            </div>
            <div class="item-desc">面食</div>
          </a>
        </el-col>
        <el-col :span="4" class="item">
          <a @click="restaurantType = 'all'">
            <div class="item-bg">
              <el-image class="item-image" src="http://oss.norza.cn/imgs/find/bar/more.jpg"></el-image>
            </div>
            <div class="item-desc">更多</div>
          </a>
        </el-col>
      </el-row>
    </div>
    <div class="find-restaurants">
      <find-restaurants v-bind:restaurant-type="restaurantType"/>
    </div>
  </div>
</template>

<script>
import FindRestaurants from './child/FindRestaurants'

export default {
  name: 'FindMain',
  components: {FindRestaurants},
  data () {
    return {
      findBg: [
        {id: 0, url: 'http://oss.norza.cn/imgs/find/find-bg1.jpg'},
        {id: 1, url: 'http://oss.norza.cn/imgs/find/find-bg2.jpg'}
      ],
      restaurantType: 'all'
    }
  }
}
</script>

<style scoped>
.find-restaurants, .find-filter-bar, .find-carousel {
  padding: 0 10%;
}

.find-main {
  margin: 90px 0;
}

.find-filter-bar, .find-restaurants {
  margin: 65px 0;
}

.item {
  text-align: center;
  border-right: 1px #ccc solid;
}

.item-left {
  border-left: 1px #ccc solid;
}

.item:hover {
  cursor: pointer;
  transition: 0.2s;
  transform: translateY(-5px);
}

.item-desc {
  text-align: center;
}

.item-image {
  width: 70px;
  height: 70px;
  border-radius: 30%;
}

a:link {
  color: black;
  text-decoration: none;
}

a:visited {
  color: black;
  text-decoration: none;
}

a:hover {
  color: black;
  text-decoration: none;
}

a:active {
  color: black;
  text-decoration: none;
}
</style>
