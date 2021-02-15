<template>
  <div class="user-center">
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
</template>

<script>
import ItemContent from './ItemContent'

export default {
  name: 'CenterAside',
  components: {ItemContent},
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

</style>
