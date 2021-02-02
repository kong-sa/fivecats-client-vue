<template>
  <div class="filter-bar-body">
    <el-row :gutter="20">
      <el-col :span="4" class="item item-left">
        <router-link to="/find/stirfry">
          <div class="item-bg">
            <el-image class="item-image" src="http://oss.norza.cn/imgs/find/gg.jpg"></el-image>
          </div>
          <div class="item-desc">炒菜</div>
        </router-link>
      </el-col>
      <el-col :span="4" class="item">
        <router-link to="/find/griddle">
          <div class="item-bg">
            <el-image class="item-image" src="http://oss.norza.cn/imgs/find/gg.jpg"></el-image>
          </div>
          <div class="item-desc">干锅</div>
        </router-link>
      </el-col>
      <el-col :span="4" class="item">
        <router-link to="/find/hotpot">
          <div class="item-bg">
            <el-image class="item-image" src="http://oss.norza.cn/imgs/find/gg.jpg"></el-image>
          </div>
          <div class="item-desc">火锅</div>
        </router-link>
      </el-col>
      <el-col :span="4" class="item">
        <router-link to="/find/drink">
          <div class="item-bg">
            <el-image class="item-image" src="http://oss.norza.cn/imgs/find/gg.jpg"></el-image>
          </div>
          <div class="item-desc">饮品</div>
        </router-link>
      </el-col>
      <el-col :span="4" class="item">
        <router-link to="/find/pasta">
          <div class="item-bg">
            <el-image class="item-image" src="http://oss.norza.cn/imgs/find/gg.jpg"></el-image>
          </div>
          <div class="item-desc">面食</div>
        </router-link>
      </el-col>
      <el-col :span="4" class="item">
        <router-link to="/find/more">
          <div class="item-bg">
            <el-image class="item-image" src="http://oss.norza.cn/imgs/find/gg.jpg"></el-image>
          </div>
          <div class="item-desc">更多</div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'FilterBar'
}
</script>

<style scoped>

.item {
  text-align: center;
  border-right: 1px #ccc solid;
}

.item-left {
  border-left: 1px #ccc solid;
}

.item:hover {
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
