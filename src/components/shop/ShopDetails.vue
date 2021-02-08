<template>
  <div class="shop-details">
    <el-row class="row-one" :gutter="20">
      <el-col class="row-one-item" :span="12">
        <el-row class="shop-name">
          <el-col class="shop-title" :span="24">
            {{shop.name}}
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col class="star" :span="8">
            <el-card>
              <el-rate
                v-model="shop.star"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
            </el-card>
          </el-col>
          <el-col class="score-like-sale" :span="16">
            <el-card>
              <div>
                点评人数: 111 | 人均消费: ¥{{shop.average}}
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="row-one-item" :span="12">
        <el-row :gutter="20">
          <div style="height: 34px"></div>
          <el-col class="shop-brief-info" :span="16">
            <el-card>
              <div>
                共接: 111单 | 捐给贫困地区: ¥111
              </div>
            </el-card>
          </el-col>
          <el-col class="trolley" :span="4">
            <el-button
              @click="showTrolley"
              class="button trolley-btn"
              size="mini">
              购物车
            </el-button>
          </el-col>
          <el-col class="a-link" :span="4">
            <a class="row-one-item-a-operate" @click="share">分享 |</a>
            <a class="row-one-item-a-operate" @click="complaint">投诉</a>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col class="shop-image-box" :span="12">
        <el-image class="shop-image" :src="shop.cover"></el-image>
      </el-col>
      <el-col class="shop-image-box" :span="12">
        <el-image class="shop-image" :src="shop.cover"></el-image>
      </el-col>
    </el-row>
    <el-row class="shop-info" :gutter="20">
      <el-col class="shop-info-item" :span="12">
        <el-card class="sls_card">
          <div class="shop-info-item-desc location">
            地理位置：{{shop.location}}<br/>
            联系电话：{{shop.phone}}<br/>
            店铺简介：{{shop.profile}}
          </div>
        </el-card>
      </el-col>
      <el-col class="shop-info-item" :span="12">
        <el-card class="sls_card">
          <div class="shop-info-item-desc shop-status">
            营业状态：{{shop.status}}<br/>
            营业时间：{{shop.startTime}} ~ {{shop.endTime}}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="bar">
      <router-link class="link" to="/shop/discount">
        <div :span="3" class="first-bar-item bar-hover">优惠</div>
      </router-link>
      <router-link class="link" to="/shop/all">
        <div :span="3" class="bar-item bar-hover">菜品</div>
      </router-link>
      <router-link class="link" to="/shop/comment">
        <div :span="3" class="bar-item bar-hover">评价</div>
      </router-link>
    </div>
    <el-row>
      <router-view v-bind:shopId="shopId"/>
    </el-row>
    <el-dialog
      title="购物车"
      :visible.sync="dialogVisible"
      width="50%">
      <trolley-popups v-bind:sId="shopId"/>
      <span slot="footer" class="dialog-footer">
        <el-button
          size="mini"
          type="danger"
          @click="dialogVisible = false">
          关 闭
        </el-button>
      </span>
    </el-dialog>
    <sys-msg v-bind:sysMsg="sysMsg"/>
  </div>
</template>

<script>
import TrolleyPopups from './child/TrolleyPopups'
import SysMsg from '../util/SysMsg'

export default {
  name: 'ShopDetails',
  components: {
    SysMsg,
    TrolleyPopups
  },
  methods: {
    share () {
    },
    complaint () {
    },
    showTrolley () {
      this.dialogVisible = true
    }
  },
  async created () {
    this.shopId = this.$route.params.shopId
    let {data: shop} = await this.$http.get('/shop/getting?shopId=' + this.shopId)
    if (shop === null || shop === undefined) {
      this.$message.error('可能你查看的商家不存在，3秒后跳转寻找美食页面。')
      setTimeout(() => {
        this.$router.push('/find')
      }, 3000)
    } else {
      this.shop = shop
    }
  },
  data () {
    return {
      dialogVisible: false,
      shopId: 0,
      sysMsg: {
        titleName: '商家页面提示',
        sysType: 'warning',
        msgContent: '由于Vue Router设置的问题，此页面创建完DOM之后没有菜品信息，需要手动切换。比如先点击 "优惠" 再点击 "菜品" ，这样数据就出现了。',
        duration: 20000
      },
      shop: {
        id: 0,
        userId: 0,
        date: '',
        name: '',
        cover: '',
        phone: '',
        location: '',
        profile: '',
        tableNum: 0,
        saleNum: 0,
        orderNum: 0,
        type: '',
        tag: '',
        status: '',
        star: 0.0,
        startTime: '',
        endTime: '',
        average: 0
      }
    }
  }
}
</script>

<style scoped>
.shop-details {
  margin-top: 25px;
}

.location {
  line-height: 48px;
}

.shop-status {
  line-height: 71px;
}

.bar {
  margin: 25px 0 50px 0;
  width: 100%;
  display: flex;
}

.shop-info {
  margin-top: 25px;
}

.sls_card /deep/ .el-card__body {
  height: 145px;
}

.first-bar-item {
  margin-left: 0;
  margin-right: 10px;
  width: 100px;
  background: #0c0d0d;
  text-align: center;
  height: 100%;
}

.bar-hover:hover {
  cursor: pointer;
  transition: 0.5s;
  background: #ffc107;
}

.bar-hover {
  border-radius: 3px;
}

.bar-item {
  text-align: center;
  width: 100px;
  margin: 0 10px;
  background: #0c0d0d;
  height: 100%;
}

.shop-details {
  padding: 0 12%;
}

.row-one-item-a-operate {
  cursor: pointer;
}

.shop-image-box {
  height: 400px;
}

.shop-image {
  width: 100%;
  height: 100%;
}

.row-one {
  height: 133px;
}

.row-one-item {
  height: 100%;
}

.shop-title {
  font-size: 25px;
}

.trolley {
  padding-top: 17px;
}

.a-link {
  padding-top: 19px;
}

.trolley-btn {
  width: 100%;
}

.button:hover {
  color: black;
  background: #ffc107;
  transition: 0.5s;
}

.button {
  transition: 0.5s;
  color: white;
  background: black;
}

.bar-item {
  text-align: center;
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
  color: black;
  transition: 0.5s;
  text-decoration: none;
}

a:active {
  color: white;
  text-decoration: none;
}
</style>
