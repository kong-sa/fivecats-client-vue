<template>
  <div id="bbs-user-message">
    <el-card>
      <el-container>
        <el-aside style="width: 150px">
          <el-menu
            default-active="1"
            @select="selected">
            <el-menu-item index="1">
              <i class="el-icon-info"></i>
              <span slot="title">获得的赞</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-picture-outline-round"></i>
              <span slot="title">回复我的</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-user"></i>
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
        this.$router.push('/bbs/message/like')
      } else if (key === '2') {
        this.$router.push('/bbs/message/replay')
      } else if (key === '3') {
        this.$router.push('/bbs/message/official')
      }
    }
  }
}
</script>

<style scoped>

</style>
