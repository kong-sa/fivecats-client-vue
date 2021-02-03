<template>
  <el-row>
    <el-col :span="4" class="bar-item">
      <router-link to="/video/making">
        美食制作
      </router-link>
    </el-col>
    <el-col :span="4" :offset="1" class="bar-item">
      <router-link to="/video/sharing">
        美食分享
      </router-link>
    </el-col>
    <el-col :span="4" :offset="1" class="bar-item">
      <router-link to="/video/countryside">
        农村美食
      </router-link>
    </el-col>
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
