<template>
  <div class="avatar-info">
    <el-row class="avatar">
      <el-avatar
        :size="200"
        :src="httpResValue1.data.avatar">
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-avatar>
    </el-row>
    <el-row class="avatar-upload">
      <el-upload
        accept=".jpg, .png, .jpeg"
        :multiple="false"
        ref="upload"
        action="no_action"
        :http-request="upload"
        :auto-upload="false"
        :before-upload="checkImageFormat"
        list-type="picture-card">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt="">
          <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)">
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)">
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)">
          <i class="el-icon-delete"></i>
        </span>
      </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <div class="avatar-upload-desc">只能上传JPG、PNG、JPEG格式的图片，且大小不超过2MB</div>
    </el-row>
    <el-row class="submit-button">
      <el-button size="mini" type="primary" @click="submit">确认上传</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BbsAvatarInfo',
  async created () {
    let {data: res} = await this.$http.get('/bbs/self/basic?userId=' + this.$store.state.var1.data.id)
    this.httpResValue1 = res
  },
  methods: {
    handleRemove (file) {
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
    },
    // 点击按钮上传头像
    submit () {
      this.$refs.upload.submit()
    },
    // 设置头像参数，封装成formData格式的数据
    upload (file) {
      const formData = new FormData()
      formData.append('file', file.file)
      formData.append('userId', this.$store.state.var1.data.id)
      this.$http.post('/upload/avatar', formData)
    },
    // 检查头像的格式
    checkImageFormat (file) {
      const limitImageFormat = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png'
      const limitImageSize = file.size / 1024 / 1024 < 2

      if (!limitImageFormat) {
        this.$message.error('请检查图片格式！')
      }
      if (!limitImageSize) {
        this.$message.error('头像大小不能超过2MB！')
      }
      return limitImageFormat && limitImageSize
    }
  },
  data () {
    return {
      httpResValue1: {
        code: 0,
        data: {
          'id': 0,
          'username': '',
          'email': '',
          'phone': 0,
          'fans': 0,
          'profile': '',
          'level': 0,
          'gold': 0,
          'experience': 0,
          'avatar': '',
          'password': ''
        }
      },
      // 头像上传的url地址
      action: 'http://fivecats.norza.cn:8001/bbs/upload/avatar',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  }
}
</script>

<style scoped>
.avatar, .avatar-upload {
  text-align: center;
}

.submit-button {
  text-align: center;
  margin-top: 20px;
}

/deep/ .el-avatar {
  border: 5px #666 solid;
}

.avatar-upload {
  padding-top: 20px;
  border-top: #ebebeb solid 1px;
  margin-top: 20px;
}

.avatar-upload-desc {
  font-size: 14px;
  color: #999;
  margin-top: 20px;
}
</style>
