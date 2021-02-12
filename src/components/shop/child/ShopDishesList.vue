<template>
  <div class="differ-area">
    <el-row :gutter="20">
      <el-col class="dishes-container" v-for="(item, index) in dishes" :key="item.id" :span="6">
        <div class="dishes">
          <div class="dishes-body">
            <div class="dishes-image">
              <el-image :src="item.cover">
              </el-image>
            </div>
            <div class="dishes-desc">
              <h5 class="dishes-title">{{ item.name }}</h5>
              <div class="dishes-info">
                <el-rate v-model="item.star" disabled show-score text-color="#ff9900"></el-rate>
              </div>
            </div>
            <div class="dishes-operate">
              <div class="dishes-price">
                <span v-if="item.isDiscount === 1">¥{{ item.discount }}</span>
                <span>¥{{ item.price }}</span>
              </div>
              <el-button class="button" @click="setDishes(index)">加入购物车</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ShopDishesList',
  props: ['shopId', 'shopType'],
  methods: {
    setDishes (index) {
      this.$store.commit('setDishes', this.dishes[index])
      this.$message({
        type: 'success',
        message: '添加到购物车成功！',
        duration: 2500
      })
    }
  },
  watch: {
    shopType: async function (newVal, oldVal) {
      let {data: dishes} = await this.$http.post('/shop/getting/dishes/by', {shopId: this.shopId, type: newVal})
      this.dishes = dishes
    }
  },
  async created () {
    let {data: dishes} = await this.$http.post('/shop/getting/dishes/by', {shopId: this.shopId, type: 'all'})
    this.dishes = dishes
  },
  data () {
    return {
      dishes: [
        {
          id: 0,
          shopId: 0,
          cover: '',
          star: 0,
          price: 0,
          name: '',
          discount: 0,
          isDiscount: 0
        }
      ]
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

.dishes-container:hover {
  transition: 0.5s;
  transform: translateY(-10px);
}

.dishes-container {
  transition: 0.5s;
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

.button:hover {
  background: #ffc107;
  color: black;
  transition: 0.5s;
  transform: translateY(-5px);
}

.button {
  transition: 0.5s;
  color: white;
  background: black;
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
