<template>
  <div class="user-container">
    <user-center/>
  </div>
</template>

<script>
import UserCenter from './child/UserCenter'

export default {
  name: 'UserMain',
  components: {UserCenter}
}
</script>

<style scoped>
.user-container {
  padding: 0 15%;
  margin-top: 30px;
}
</style>
