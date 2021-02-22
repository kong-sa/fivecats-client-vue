<template>
  <div class="find-main">
    <div class="find-carousel">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in findBg" :key="item.id">
          <el-image style="width: 100%; height: 100%" class="find-bg" :src="item.url"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="find-filter-bar">
      <el-row>
        <a class="link" @click="restaurantType = 'stirfry'">
          <el-col :span="3" class="bar-item">炒菜</el-col>
        </a>
        <a class="link" @click="restaurantType = 'griddle'">
          <el-col :span="3" :offset="1" class="bar-item">干锅</el-col>
        </a>
        <a class="link" @click="restaurantType = 'hotpot'">
          <el-col :span="3" :offset="1" class="bar-item">火锅</el-col>
        </a>
        <a class="link" @click="restaurantType = 'drink'">
          <el-col :span="3" :offset="1" class="bar-item">饮品</el-col>
        </a>
        <a class="link" @click="restaurantType = 'pasta'">
          <el-col :span="3" :offset="1" class="bar-item">面食</el-col>
        </a>
        <a class="link" @click="restaurantType = 'all'">
          <el-col :span="3" :offset="1" class="bar-item">更多</el-col>
        </a>
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
        {id: 0, url: 'http://oss.norza.cn/imgs/find/cover.jpg'}
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
  margin: 20px 0;
}

.bar-item {
  cursor: pointer;
  color: white;
  background: #0c0d0d;
  transition: 0.6s;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

.bar-item:hover {
  transition: 0.6s;
  background: #ffc107;
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
