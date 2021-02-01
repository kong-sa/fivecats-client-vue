<template>
  <div class="access-body">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Access'
}
</script>

<style scoped>
.access-body {
  padding: 0 36%;
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
  color: rgb(140, 197, 255);
  text-decoration: none;
}

a:active {
  color: #999;
  text-decoration: none;
}
</style>
