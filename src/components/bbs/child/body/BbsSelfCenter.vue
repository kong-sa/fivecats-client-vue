<template>
  <div id="self-center">
    <el-card class="box-card">
      <el-container>
        <el-aside style="width: 160px">
          <el-menu
            default-active="1"
            @select="selected"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">基本信息</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span slot="title">我的头像</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">我的账户</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">我的帖子</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'BbsSelfCenter',
  methods: {
    selected (key, keyPath) {
      if (key === '1') {
        this.$router.push('/bbs/self/center/basic/')
      } else if (key === '2') {
        this.$router.push('/bbs/self/center/avatar')
      } else if (key === '3') {
        this.$router.push('/bbs/self/center/account')
      } else if (key === '4') {
        this.$router.push('/bbs/self/center/articles')
      }
    }
  }
}
</script>

<style scoped>
/deep/ .el-card__body {
  padding: 10px;
}

/deep/ .el-aside {
  background: rgb(84,92,100);
  height: 550px;
}
</style>
