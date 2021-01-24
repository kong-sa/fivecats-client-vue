<template>
  <el-container style="background: rgb(245,245,250)">
    <el-header>Header</el-header>
    <el-main style="margin: 0 20%; padding: 0;">
      <el-card>
        <el-form :rules="rules" :model="formData" ref="formData">
          <el-row style="margin-bottom: 10px; font-size: 18px; font-weight: 600; text-align: center">
            发布帖子
          </el-row>
          <el-divider/>
          <!--   输入标题   -->
          <el-row style="margin-bottom: 20px; margin-top: 20px">
            <el-col class="label" :span="3">帖子标题：</el-col>
            <el-col :span="20">
              <el-form-item prop="title">
                <el-input
                  type="text"
                  maxlength="15"
                  show-word-limit
                  placeholder="取一个简短的标题吧\(^o^)/~"
                  v-model="formData.title">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!--   输入内容   -->
          <el-row style="margin-bottom: 20px">
            <el-col class="label" :span="3">帖子内容：</el-col>
            <el-col :span="20">
              <el-form-item prop="textarea">
                <el-input
                  type="textarea"
                  maxlength="1000"
                  show-word-limit
                  placeholder="输入你想要说的话吧(*^▽^*)"
                  v-model="formData.textarea"
                  rows="20">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row style="margin-bottom: 20px">
            <el-col :span="3">上传图片：</el-col>
            <el-col :span="20">
              <el-switch
                v-model="value"
                active-color="rgb(76,195,255)"
                inactive-color="rgb(204,204,204)">
              </el-switch>
              <span style="font-size: 12px; color: #ccc">如果要上传图片打开即可上传，不上传请关闭，谢谢配合</span>
            </el-col>
          </el-row>
          <!--   插入图片   -->
          <el-row style="margin-bottom: 20px" v-if="value === true">
            <el-col class="label" :span="3">插入图片：</el-col>
            <el-col :span="20">
              <el-upload
                ref="upload"
                action="no_action"
                :http-request="upload"
                :limit="3"
                :multiple="true"
                :auto-upload="false"
                :before-upload="checkPicture"
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
            </el-col>
          </el-row>
          <!--   发表按钮   -->
          <el-row style="text-align: center">
            <el-button @click="publish" style="width: 180px"><i class="el-icon--left el-icon-check"></i>发布</el-button>
          </el-row>
        </el-form>
      </el-card>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'PostBbsArticle',
  data () {
    return {
      formData: {
        textarea: '',
        title: ''
      },
      disabled: false,
      value: false,
      dialogImageUrl: '',
      dialogVisible: false,
      rules: {
        title: [
          {required: true, message: '请输入帖子标题', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
        ],
        textarea: [
          {required: true, message: '请输入帖子内容', trigger: 'blur'},
          {min: 20, max: 1000, message: '长度在 20 到 1000 个字符', trigger: 'blur'}
        ]
      }
    }
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
    publish () {
      this.$refs.formData.validate((valid) => {
        if (valid) {
          if (this.value === true) {
            this.$refs.upload.submit()
          }
          this.$http.post('/setting/article', {
            title: this.formData.title,
            content: this.formData.textarea,
            organizerId: 1
          })
        } else {
          return false
        }
      })
    },
    upload (params) {
      const formData = new FormData()
      formData.append('file', params.file)
      this.$http.post('/setting/article/image', formData)
    },
    checkPicture (file) {
      // 图片的类型只能是jpeg或者png或者jpg
      const imageType = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg'
      // 图片的大小不能大于1MB
      const imageLimit = file.size / 1024 / 1024 < 2
      // 如果不满足规则，就在页面中提示对应的错误信息
      if (!imageType) this.$message.error('上传图片只能是 JPG 或 PNG 格式!')
      if (!imageLimit) this.$message.error('上传图片大小不能超过 1MB!')
      return imageType && imageLimit
    }
  }
}
</script>

<style scoped>
.label {
  font-size: 14px;
}
</style>
