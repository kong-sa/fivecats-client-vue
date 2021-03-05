<template>
  <div class="shop-details">
    <el-row class="row-one" :gutter="20">
      <el-col class="row-one-item" :span="12">
        <el-row class="shop-name">
          <el-col class="shop-title" :span="24">
            {{ shop.name }}
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
                点评人数: 111 | 人均消费: ¥{{ shop.average }}
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
                共接: 100 单 | 捐给贫困地区: ¥{{ shop.saleNum }}
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
            <a class="row-one-item-a-operate" @click="shareToOther">分享 |</a>
            <a class="row-one-item-a-operate" @click="communicate">联系</a>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="shop-image-box" :span="24">
        <el-image class="shop-image" :src="shop.cover"></el-image>
      </el-col>
    </el-row>
    <el-row class="shop-info" :gutter="20">
      <el-col class="shop-info-item" :span="12">
        <el-card class="sls_card">
          <div class="shop-info-item-desc location">
            地理位置：{{ shop.location }}<br/>
            联系电话：{{ shop.phone }}<br/>
            店铺简介：{{ shop.profile }}
          </div>
        </el-card>
      </el-col>
      <el-col class="shop-info-item" :span="12">
        <el-card class="sls_card">
          <div class="shop-info-item-desc shop-status">
            营业状态：{{ shop.status }}<br/>
            营业时间：{{ shop.startTime }} ~ {{ shop.endTime }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="bar">
      <a class="link first-bar-item" @click="shopType = 'discount'">
        <div>优惠</div>
      </a>
      <a class="link bar-item" @click="shopType = 'all'">
        <div>菜品</div>
      </a>
    </div>
    <el-row>
      <shop-dishes-list v-bind:shopId="shopId" v-bind:shop-type="shopType"/>
    </el-row>
    <el-dialog
      title="购物车"
      :visible.sync="dialogVisible"
      width="50%">
      <shop-trolley v-bind:shopId="shopId"/>
      <span slot="footer" class="dialog-footer">
        <el-button
          size="mini"
          type="danger"
          @click="dialogVisible = false">
          关 闭
        </el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="联系商家"
      :visible.sync="communicateVisible"
      width="30%">
      <div class="communication">
        <el-row :gutter="20" class="shop">
          <el-col :span="4">
            <el-image class="image-box" :src="shop.cover">
            </el-image>
          </el-col>
          <el-col class="message-box" :span="18">
            您好，请问有什么可以帮到你的吗？
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="19">
            <el-input size="mini" v-model="message"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button class="button" size="mini" @click="error()">发送</el-button>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          size="mini"
          type="danger"
          @click="communicateVisible = false">
          关 闭
        </el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="分享"
      :visible.sync="shareVisible"
      width="30%">
      <div class="share">
        <el-card>
          <el-row class="title">{{ shareItem.title }}</el-row>
          <el-row class="cover">
            <el-image :src="shareItem.coverUrl"></el-image>
          </el-row>
          <el-row v-if="shareItem.type === 'share'" class="desc-body">
            <div class="desc">{{ shareItem.desc }}</div>
          </el-row>
          <el-row class="complaint" v-if="shareItem.type === 'complaint'">
            <el-col style="margin-top: 30px">
              <el-button class="button"
                         size="mini"
                         @click="share('举报')">
                举报
              </el-button>
            </el-col>
          </el-row>
          <el-row v-if="shareItem.type === 'share'"
                  class="share-btn"
                  :gutter="20">
            <el-col :span="5">分享到：</el-col>
            <el-col :span="4">
              <el-button class="button"
                         size="mini"
                         @click="share('QQ')">
                QQ
              </el-button>
            </el-col>
            <el-col :span="4">
              <el-button class="button"
                         size="mini"
                         @click="share('微信')">
                微信
              </el-button>
            </el-col>
            <el-col :span="4">
              <el-button class="button"
                         size="mini"
                         @click="share('BBS')">
                馋猫社区
              </el-button>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          size="mini"
          type="danger"
          @click="shareVisible = false">
          关 闭
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ShopTrolley from './child/ShopTrolley'
import ShopDishesList from './child/ShopDishesList'

export default {
  name: 'ShopMain',
  components: {
    ShopTrolley,
    ShopDishesList
  },
  methods: {
    shareToOther () {
      this.shareVisible = true
      this.shareItem = {
        coverUrl: this.shop.cover,
        desc: this.shop.profile,
        title: this.shop.name,
        type: 'share'
      }
    },
    share (itemType) {
      if (itemType === 'QQ') {
        this.$message.success('分享到QQ成功！')
      } else if (itemType === '微信') {
        this.$message.success('分享到微信成功！')
      } else if (itemType === '举报') {
        this.$message.success('举报成功！我们会尽快给您答复')
      } else {
        this.$message.success('分享到馋猫社区成功！')
      }
    },
    communicate () {
      this.communicateVisible = true
    },
    showTrolley () {
      this.dialogVisible = true
    },
    error () {
      this.$notify({
        title: '功能提示',
        message: '发送消息功能还未完成，无法与商家联系，您可以拨打电话联系商家。',
        duration: 5000
      })
    }
  },
  async created () {
    this.shopId = this.$route.params.shopId
    let {data: shop} = await this.$http.get('/shop/getting?shopId=' + this.shopId)
    this.shop = shop
    document.title = shop.name + '的信息 - 五只馋猫'
  },
  data () {
    return {
      message: '',
      shopType: '',
      communicateVisible: false,
      shareVisible: false,
      dialogVisible: false,
      shareItem: {
        desc: '',
        coverUrl: '',
        title: '',
        type: ''
      },
      shopId: 0,
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
}

.bar-item {
  text-align: center;
  margin: 0 10px;
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

.link {
  width: 100px;
  text-align: center;
  height: 100%;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.5s;
  color: white;
  background: #0c0d0d;
}

.link:hover {
  transition: 0.5s;
  color: #0c0d0d;
  background: #ffc107;
}

.image-box {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.shop {
  margin-bottom: 20px;
}

.title {
  margin: 15px 0;
  font-size: 25px;
  font-weight: 600;
}

.desc {
  font-size: 18px;
  text-align: center;
}

.button:hover {
  transition: 0.5s;
  color: #0c0d0d;
  background: #ffc107;
}

.button {
  transition: 0.5s;
  color: white;
  background: #0c0d0d;
}

.desc-body {
  margin: 15px 0;
}

.complaint {
  text-align: center;
}

.share-btn {
  text-align: center;
}

.message-box {
  box-shadow: 2px 2px 1px #999999;
  border-radius: 6px;
}
</style>
