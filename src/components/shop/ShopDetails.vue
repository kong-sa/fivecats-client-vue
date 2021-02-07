<template>
  <div class="shop-details">
    <el-row class="row-one" :gutter="20">
      <el-col class="row-one-item" :span="12">
        <el-row>
          <el-col class="shop-title" :span="24">
            香咖冒菜
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col class="star" :span="8">
            <el-card>
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
            </el-card>
          </el-col>
          <el-col class="score-like-sale" :span="16">
            <el-card>
              点评人数: 111 | 人均消费: 50¥
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="row-one-item" :span="12">
        <el-row :gutter="20">
          <div style="height: 34px"></div>
          <el-col class="shop-brief-info" :span="16">
            <el-card>
              <div>共接: 111单 | 捐给贫困地区: 111¥</div>
            </el-card>
          </el-col>
          <el-col class="trolley" :span="4">
            <el-button class="button trolley-btn" size="mini">购物车</el-button>
          </el-col>
          <el-col :span="4">
            <a class="row-one-item-a-operate" @click="share">分享 |</a>
            <a class="row-one-item-a-operate" @click="complaint">投诉</a>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col class="shop-image-box" :span="12">
        <el-image class="shop-image" src="http://oss.norza.cn/imgs/find/c3.jpg"></el-image>
      </el-col>
      <el-col class="shop-image-box" :span="12">
        <el-image class="shop-image" src="http://oss.norza.cn/imgs/find/c3.jpg"></el-image>
      </el-col>
    </el-row>
    <el-row class="shop-info" :gutter="20">
      <el-col class="shop-info-item" :span="12">
        <el-card>
          <div class="shop-info-item-desc">地理位置：四川省绵阳市涪城区</div>
        </el-card>
      </el-col>
      <el-col class="shop-info-item" :span="12">
        <el-card>
          <div class="shop-info-item-desc">营业状态：营业中</div>
          <div class="shop-info-item-desc">营业时间：8:00 ~ 23:00</div>
        </el-card>
      </el-col>
    </el-row>
    <div class="bar">
      <div :span="3" class="first-bar-item bar-hover">
        <router-link class="link" to="/shop/discount">优惠</router-link>
      </div>
      <div :span="3" class="bar-item bar-hover">
        <router-link class="link" to="/shop/all">菜品</router-link>
      </div>
      <div :span="3" class="bar-item bar-hover">
        <router-link class="link" to="/shop/comment">评价</router-link>
      </div>
    </div>
    <el-row>
      <router-view/>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ShopDetails',
  methods: {
    share () {
    },
    complaint () {
    }
  },
  data () {
    return {
      value: 5
    }
  }
}
</script>

<style scoped>
.bar {
  margin: 25px 0 50px 0;
  width: 100%;
  display: flex;
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

.trolley-btn {
  width: 100%;
}

.button {
  background: #ffc107;
}

.bar-item {
  text-align: center;
}

a:link {
  color: #999;
  text-decoration: none;
}

a:visited {
  color: #999;
  text-decoration: none;
}

a:hover {
  color: #ffc107;
  transition: 0.5s;
  text-decoration: none;
}

a:active {
  color: #999;
  text-decoration: none;
}
</style>
