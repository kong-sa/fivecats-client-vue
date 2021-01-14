<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @font-face {
    font-family:
      "Helvetica Neue",
      Helvetica,
      "PingFang SC",
      "Hiragino Sans GB",
      "Microsoft YaHei",
      "微软雅黑",
      Arial,
      sans-serif;
  }
  * {
    font-family:
      "Helvetica Neue",
      Helvetica,
      "PingFang SC",
      "Hiragino Sans GB",
      "Microsoft YaHei",
      "微软雅黑",
      Arial,
      sans-serif;
  }
  a:link {
    color: rgb(140, 197, 255);
  }
  a:visited {
    color: rgb(140, 197, 255);
    text-decoration:none;
  }
  a:hover {
    color: rgb(140, 197, 255);
  }
  a:active {
    color: rgb(140, 197, 255);
  }
</style>
