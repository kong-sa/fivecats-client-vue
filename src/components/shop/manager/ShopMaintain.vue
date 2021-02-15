<template>
  <div class="maintain">
    <el-row class="maintain-top-menu">
      <el-menu :default-active="menuItem[0].index"
               mode="horizontal"
               @select="handleSelect"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-menu-item v-for="(item, index) in menuItem"
                      :key="index"
                      :index="item.index">
          {{ item.title }}
        </el-menu-item>
      </el-menu>
    </el-row>
    <el-row class="maintain-body">
      <el-card style="padding: 2% 0">
        <div v-if="index === '1'">
          <basic-info/>
        </div>
        <div v-if="index === '2'">
          <discount/>
        </div>
        <div v-if="index === '3'">
          <income/>
        </div>
        <div v-if="index === '4'">
          <order/>
        </div>
        <div v-if="index === '5'">
          <dishes/>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import BasicInfo from './child/BasicInfo'
import Discount from './child/Discount'
import Income from './child/Income'
import Dishes from './child/Dishes'
import Order from './child/Order'

export default {
  name: 'ShopMaintainMain',
  components: {
    BasicInfo,
    Discount,
    Income,
    Dishes,
    Order
  },
  data () {
    return {
      index: '1',
      menuItem: [
        {
          index: '1',
          title: '基本信息'
        },
        {
          index: '2',
          title: '我的优惠'
        },
        {
          index: '3',
          title: '收入信息'
        },
        {
          index: '4',
          title: '订单信息'
        },
        {
          index: '5',
          title: '我的菜品'
        }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.menuItem.forEach(value => {
        if (value.index === key) {
          this.index = value.index
        }
      })
    }
  },
  created () {
    if (this.$store.state.shop.id === 0) {
      this.$notify({
        title: '商家未登录提示',
        message: '你没有登录，无法查询数据。',
        duration: 10000
      })
    }
    document.title = this.$store.state.shop.name + '的维护中心 - 五只馋猫'
  }
}
</script>

<style scoped>
/deep/ .el-menu.el-menu--horizontal {
  padding: 0 2%;
}

.maintain {
  margin: 3% 12% 0 12%;
}
</style>
