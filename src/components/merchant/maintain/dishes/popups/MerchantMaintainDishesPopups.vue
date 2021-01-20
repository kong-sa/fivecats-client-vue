<template>
  <!-- 添加新的菜品（弹窗） -->
  <div id="dishes-maintain">
    <el-row class="dishes-row">
      <el-col :span="6">菜品图片：</el-col>
      <el-col class="dishes-upload" :span="12">
        <el-upload
          :action="action"
          ref="upload"
          :limit="1"
          :multiple="false"
          :before-upload="beforeUpload"
          list-type="picture-card">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
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
    <el-row class="dishes-row">
      <el-col :span="6">菜品名称：</el-col>
      <el-col :span="12">
        <el-input prefix-icon="el-icon-collection-tag" v-model="name" size="mini" placeholder="添加新菜品的名称"></el-input>
      </el-col>
    </el-row>
    <el-row class="dishes-row">
      <el-col :span="6">菜品单价：</el-col>
      <el-col :span="12">
        <el-input prefix-icon="el-icon-coin" v-model="price" size="mini" placeholder="添加菜品的单价"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-button type="primary" size="mini" @click="submitUpload">确定添加</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MerchantMaintainDishesPopups',
  data () {
    return {
      action: 'http://localhost:8001/setting/dishes/img?merchantId=1',
      price: '',
      name: '',
      merchant: {},
      dialogImageUrl: '',
      disabled: false,
      imageUrl: '',
      dialogVisible: false
    }
  },
  // 页面创建之后查询商家信息
  async mounted () {
    let { data: _merchant } = await this.$http.get('getting/merchant?merchantId=1')
    this.merchant = _merchant
  },
  methods: {
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        }).catch(_ => {
        })
    },
    async submitUpload () {
      // 将菜品信息上传到数据库中
      await this.$http.post('/setting/dishes', {
        merchantId: this.merchant.id,
        price: this.price,
        name: this.name
      })
      this.$message.success('菜品保存成功！')
    },
    beforeUpload (file) {
      const imageType = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg'
      const imageLimit = file.size / 1024 / 1024 < 1
      if (!imageType) {
        this.$message.error('上传图片只能是 JPG 或 PNG 格式!')
      }
      if (!imageLimit) {
        this.$message.error('上传图片大小不能超过 1MB!')
      }
      return imageType && imageLimit
    }
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader {
  border: 1px #cccccc solid; border-radius: 4px
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.dishes-upload {
  text-align: center
}

.dishes-row {
  margin-bottom: 20px;
}
</style>
