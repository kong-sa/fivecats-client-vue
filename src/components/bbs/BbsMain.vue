<template>
  <div class="main">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'BBSMain'
}
</script>

<style scoped>
.main {
  margin: 2.5% 10% 5% 10%;
  padding: 0;
  min-height: 1000px;
}

a:link {
  color: #0c0d0d;
  text-decoration: none;
}

a:visited {
  color: #0c0d0d;
  text-decoration: none;
}

a:hover {
  cursor: pointer;
  color: #ffc107;
  text-decoration: none;
}

a:active {
  color: #0c0d0d;
  text-decoration: none;
}
</style>
