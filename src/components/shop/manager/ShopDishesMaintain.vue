<template>
  <div id="dishes-maintain">
    <el-row class="dishes-row">
      <el-col :span="6">菜品图片：</el-col>
      <el-col class="dishes-upload" :span="12">
        <el-upload
          :action="action"
          :limit="1"
          :multiple="false"
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
      <el-button type="primary" size="mini" @click="saveDishes">确定添加</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ShopDishesMaintain',
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
  async mounted () {
    let {data: _merchant} = await this.$http.get('getting/merchant?merchantId=1')
    this.merchant = _merchant
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
    async saveDishes () {
      await this.$http.post('/setting/dishes', {merchantId: this.merchant.id, price: this.price, name: this.name})
      this.$message.success('菜品保存成功！')
    },
    checkPicture (file) {
      const imageType = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg'
      const imageLimit = file.size / 1024 / 1024 < 1
      if (!imageType) this.$message.error('上传图片只能是 JPG 或 PNG 格式!')
      if (!imageLimit) this.$message.error('上传图片大小不能超过 1MB!')
      return imageType && imageLimit
    }
  }
}
</script>

<style scoped>
.dishes-upload {
  text-align: center
}

.dishes-row {
  margin-bottom: 20px;
}
</style>
