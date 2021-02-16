<template>
  <div class="container">
    <div class="aside">
      <el-row :gutter="20">
        <el-col :span="4" style="min-height: 550px;">
          <el-aside style="height: 100%; width: 150px;">
            <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff"
                     default-active="1"
                     @select="selected">
              <el-menu-item v-for="(item, i) in aside" :key="i" :index="item.index">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.content }}</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
        </el-col>
        <el-col :span="20">
          <el-card style="min-height: 550px">
            <item-content v-bind:type="type"/>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ItemContent from './child/ItemContent'

export default {
  name: 'UserMain',
  components: {ItemContent},
  created () {
    if (this.$store.state.user.id === 0) {
      this.$notify({
        title: '用户未登录提示',
        message: '你还没有登录，无法获取数据，请先登录。',
        duration: 5000
      })
    }
    document.title = this.$store.state.user.username + '的用户中心 - 五只馋猫'
  },
  methods: {
    selected (key, keyPath) {
      if (key === '1') {
        this.type = 'basic'
      } else if (key === '2') {
        this.type = 'order'
      }
    }
  },
  data () {
    return {
      type: '',
      aside: [
        {
          index: '1',
          icon: 'el-icon-info',
          content: '基本信息'
        },
        {
          index: '2',
          icon: 'el-icon-s-order',
          content: '我的订单'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  padding: 0 15%;
  margin: 90px 0;
}
</style>
