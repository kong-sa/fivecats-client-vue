<template>
  <div class="differ-area">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="dishes">
          <div class="dishes-body">
            <div class="dishes-image">
              <a @click="showDishes()">
                <el-image src="http://oss.norza.cn/imgs/food/1/food01.jpg">
                </el-image>
              </a>
            </div>
            <div class="dishes-desc">
              <h5 class="dishes-title">
                菜品名称
              </h5>
              <div class="dishes-info">
                <el-rate
                  v-model="starVal"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
                <span>110人评价</span>
              </div>
            </div>
            <div class="dishes-operate">
              <div class="dishes-price">
                <span>¥20</span>
                <span>¥30</span>
              </div>
              <el-button class="button">加入购物车</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ShopDetailsDifferArea',
  methods: {
    showDishes (val) {
      console.log(val)
    }
  },
  data () {
    return {
      starVal: 3.5
    }
  }
}
</script>

<style scoped>
.dishes-body {
  position: relative;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  box-shadow: 0 3px 24px rgba(0, 0, 0, .04);
  border-radius: 0;
  margin-bottom: 30px;
}

.dishes-body .metro_badge-featured i {
  display: inline-block;
}

.dishes-body .dishes-image {
  margin: 0 0 20px;
  overflow: hidden;
}

.dishes-body .dishes-image img {
  transition: .3s;
}

img {
  max-width: 100%;
  height: auto;
}

.dishes-body .metro_product-body h5 {
  font-size: 20px;
  margin: 0 0 15px;
  word-break: break-word;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0 0 20px;
  font-weight: 700;
  line-height: 1.2;
  color: #222;
}

h5 {
  font-size: 24px;
  line-height: 1.5;
}

.dishes-body .dishes-operate {
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button {
  background: #ffc107;
}

.dishes-price span + span {
  font-size: 14px;
  font-family: "Noto Serif", sans-serif;
  color: #ff0005;
  font-weight: 700;
  text-decoration: line-through;
}

.dishes-price span:first-child {
  font-size: 18px;
  line-height: 1.2;
  font-family: "Noto Serif", sans-serif;
  color: #222;
  font-weight: 700;
}

.dishes-price span {
  display: block;
}
</style>
