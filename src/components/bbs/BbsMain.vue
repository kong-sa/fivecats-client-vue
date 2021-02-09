<template>
  <el-container class="bbs-container">
    <el-header class="bbs-header">
      <bbs-navigation-bar/>
    </el-header>
    <el-main class="bbs-main">
      <router-view/>
      <sys-msg v-bind:sysMsg="sysMsg"></sys-msg>
    </el-main>
    <el-footer class="bbs-footer"></el-footer>
  </el-container>
</template>

<script>
import BbsPartition from './child/body/BbsPartition'
import BbsNavigationBar from './child/header/BbsNavigationBar'
import SysMsg from '../util/SysMsg'

export default {
  name: 'BBSMain',
  components: {SysMsg, BbsPartition, BbsNavigationBar},
  data () {
    return {
      sysMsg: {
        titleName: '馋猫社区页面提示',
        sysType: 'warning',
        msgContent: '由于Vue Router设置的问题，此页面创建完DOM之后没有菜品信息，需要手动切换。比如先点击 "打卡专区" 再点击 "食谱专区" ，这样数据就出现了。',
        duration: 20000
      }
    }
  }
}
</script>

<style scoped>
.bbs-container {
  background: rgb(245, 245, 250);
}

.bbs-header {
  padding: 0;
  margin-bottom: 25px;
}

.bbs-main {
  margin: 0 15%;
  padding: 0;
  min-height: 1000px;
}
</style>
