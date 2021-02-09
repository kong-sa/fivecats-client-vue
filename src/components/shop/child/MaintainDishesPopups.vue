<template>
  <!-- 添加新的菜品（弹窗） -->
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
  name: 'MaintainDishesPopups',
  data () {
    return {
      // 图片请求的URL
      action: 'http://localhost:8001/setting/dishes/img?merchantId=1',
      // 要添加的菜品价格
      price: '',
      // 要添加的菜品名字
      name: '',
      // 商家信息
      merchant: {},
      dialogImageUrl: '',
      disabled: false,
      imageUrl: '',
      dialogVisible: false
    }
  },
  async mounted () {
    let { data: _merchant } = await this.$http.get('getting/merchant?merchantId=1')
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
    /**
     * 该方法会保存编辑完成的菜品信息到数据库中
     * @returns {Promise<void>}
     */
    async saveDishes () {
      await this.$http.post('/setting/dishes', { merchantId: this.merchant.id, price: this.price, name: this.name })
      this.$message.success('菜品保存成功！')
    },
    /**
     * 检测商家上传的图片类型以及图片大小是否满足要求
     * @param file 要上传oss服务器中的图片信息
     * @returns {boolean|boolean} 若满足规则，则返回true，否则返回false
     */
    checkPicture (file) {
      // 图片的类型只能是jpeg或者png或者jpg
      const imageType = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg'
      // 图片的大小不能大于1MB
      const imageLimit = file.size / 1024 / 1024 < 1
      // 如果不满足规则，就在页面中提示对应的错误信息
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
