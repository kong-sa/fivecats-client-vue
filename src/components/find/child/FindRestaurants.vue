<template>
  <div class="restaurant-body">
    <el-row :gutter="20">
      <el-col
        v-if="restaurants !== null"
        v-for="item in restaurants"
        :key="item.id"
        :span="8"
        class="res-item">
        <a class="detail" @click="lookDetail(item.id)">
          <div class="res-item-body">
            <el-image class="item-bg" :src="item.cover">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <div class="item-desc">
              <h3>{{ item.name }}</h3>
              <p>人均消费：50¥</p>
              <p>地理位置：{{ item.location }}</p>
            </div>
          </div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'FindRestaurants',
  watch: {
    async $route (to, from) {
      let params = to.params.findType
      let {data: res} = await this.$http.get('/find/by?type=' + params)
      this.restaurants = res
    }
  },
  methods: {
    lookDetail (id) {
      this.$router.push('/find/shop/details/' + id)
    }
  },
  async created () {
    let {data: res} = await this.$http.get('/find/getting/shops')
    this.restaurants = res
  },
  data () {
    return {
      restaurants: [
        {
          avatar: null,
          date: '',
          id: 0,
          cover: '',
          location: '',
          name: '',
          phone: '',
          profile: '',
          saleNum: 0,
          tableNum: 0,
          tag: '',
          type: '',
          user: null,
          userId: 0
        }
      ]
    }
  }
}
</script>

<style scoped>
.res-item {
  height: 233px;
  transition: 0.5s;
  margin-bottom: 100px;
}

.res-item:hover {
  transition: 0.5s;
  transform: translateY(-10px);
}

.res-item-body {
  position: relative;
}

.item-desc {
  position: absolute;
  top: 138px;
  padding: 15px;
  left: 4%;
  right: 4%;
  border-radius: 3px;
  background: #f7f7f7;
  opacity: 0.8;
}

.detail {
  cursor: pointer;
}

.item-desc p {
  margin: 10px 0;
}

.item-desc h4 {
  margin: 15px 0;
}
</style>
