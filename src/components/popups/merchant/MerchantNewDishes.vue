<template>
  <div id="merchant-new-dishes">
    <el-row class="dishes-row">
      <el-col :span="6">菜品图片：</el-col>
      <el-col class="dishes-upload" :span="12">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" alt="">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-col>
    </el-row>
    <el-row class="dishes-row">
      <el-col :span="6">菜品名称：</el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="添加新菜品的名称"></el-input>
      </el-col>
    </el-row>
    <el-row class="dishes-row">
      <el-col :span="6">菜品单价：</el-col>
      <el-col :span="12">
        <el-input size="mini" placeholder="添加菜品的单价"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-button
        type="primary"
        size="mini"
        @click="dialogVisible = true">
        确定添加
      </el-button>
    </el-row>
    <el-dialog
      title="提示"
      :modal="false"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>确认添加一个菜品？</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
        <el-button size="mini" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'MerchantNewDishes',
  data () {
    return {
      imageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {
        })
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
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
