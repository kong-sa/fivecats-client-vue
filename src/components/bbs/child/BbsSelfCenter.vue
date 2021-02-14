<template>
  <div id="self-center">
    <el-card class="box-card">
      <el-container>
        <el-aside style="width: 150px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            text-color="#fff"
            default-active="1"
            @select="selected">
            <el-menu-item index="1">
              <i class="el-icon-info"></i>
              <span slot="title">基本信息</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-picture-outline-round"></i>
              <span slot="title">我的头像</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-user"></i>
              <span slot="title">我的账户</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-document"></i>
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
  height: 550px;
}
</style>
