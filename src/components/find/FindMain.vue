<template>
  <div class="find-main">
    <!--筛选栏-->
    <div class="filter-bar">
      <filter-bar/>
    </div>
    <!--餐馆列表-->
    <div class="restaurants">
      <router-view/>
    </div>
  </div>
</template>

<script>
import FilterBar from './child/FilterBar'
import Restaurants from './child/Restaurants'

export default {
  name: 'FindMain',
  components: {
    Restaurants,
    FilterBar
  }
}
</script>

<style scoped>
.restaurants, .filter-bar {
  padding: 0 12%;
}
.filter-bar, .restaurants {
  margin: 65px 0;
}
</style>
