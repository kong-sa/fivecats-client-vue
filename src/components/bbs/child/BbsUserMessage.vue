<template>
  <div id="bbs-user-message">
    <el-card>
      <el-container>
        <el-aside style="width: 150px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            text-color="#fff"
            default-active="1"
            @select="selected">
            <el-menu-item index="1">
              <i class="el-icon-third-dianzan"></i>
              <span slot="title">获得的赞</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-third-huifu1"></i>
              <span slot="title">回复我的</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-third-xitongxiaoxi"></i>
              <span slot="title">系统通知</span>
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
  name: 'BbsUserMessage',
  methods: {
    selected (key, keyPath) {
      if (key === '1') {
        this.$router.push('/message/like')
      } else if (key === '2') {
        this.$router.push('/message/replay')
      } else if (key === '3') {
        this.$router.push('/message/official')
      }
    }
  }
}
</script>

<style scoped>

</style>
