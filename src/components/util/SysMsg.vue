<template>
  <div class="sys-msg"></div>
</template>

<script>
export default {
  props: ['sysMsg'],
  name: 'SysMsg',
  created () {
    this.showSysMsg()
  },
  methods: {
    showSysMsg () {
      this.$notify({
        title: this.sysMsg.titleName,
        type: this.sysMsg.sysType,
        message: this.sysMsg.msgContent,
        duration: this.sysMsg.duration
      })
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
