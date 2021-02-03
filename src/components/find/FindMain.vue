<template>
  <div class="find-main">
    <!--轮播图-->
    <div class="find-carousel">
      <find-carousel/>
    </div>
    <!--筛选栏-->
    <div class="find-filter-bar">
      <find-filter-bar/>
    </div>
    <!--餐馆列表-->
    <div class="find-restaurants">
      <router-view/>
    </div>
  </div>
</template>

<script>
import FindFilterBar from './child/FindFilterBar'
import Restaurants from './child/FindRestaurants'
import FindCarousel from './child/FindCarousel'

export default {
  name: 'FindMain',
  components: {
    FindCarousel,
    Restaurants,
    FindFilterBar
  }
}
</script>

<style scoped>
.find-restaurants, .find-filter-bar, .find-carousel {
  padding: 0 12%;
}
.find-filter-bar, .find-restaurants {
  margin: 65px 0;
}
</style>
