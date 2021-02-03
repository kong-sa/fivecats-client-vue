<template>
  <el-row>
    <router-link to="/video/making">
      <el-col :span="4" class="bar-item">
        美食制作
      </el-col>
    </router-link>
    <router-link to="/video/sharing">
      <el-col :span="4" :offset="1" class="bar-item">
        美食分享
      </el-col>
    </router-link>
    <router-link to="/video/countryside">
      <el-col :span="4" :offset="1" class="bar-item">
        农村美食
      </el-col>
    </router-link>
    <router-link to="/video/other">
      <el-col :span="4" :offset="1" class="bar-item">
        其他
      </el-col>
    </router-link>
    <router-link to="/video/all">
      <el-col :span="4" :offset="1" class="bar-item">
        全部
      </el-col>
    </router-link>
  </el-row>
</template>

<script>
export default {
  name: 'VideoFilterBar'
}
</script>

<style scoped>
.bar-item {
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
  color: white;
  text-decoration: none;
}

a:visited {
  color: white;
  text-decoration: none;
}

a:hover {
  color: white;
  text-decoration: none;
}

a:active {
  color: white;
  text-decoration: none;
}
</style>
