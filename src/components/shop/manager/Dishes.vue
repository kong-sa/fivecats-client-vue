<template>
  <div class="dishes">
    <div style="margin: 0 0 2% 0; float: right">
      <el-button class="btn" size="mini" @click="dialogVisible = true">添加新菜品</el-button>
    </div>
    <el-table
      :data="tableData"
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ textAlign: 'center' }"
      style="width: 100%">
      <el-table-column
        prop="cover"
        label="封面"
        width="180">
        <template slot-scope="scope">
          <el-image
            style="width: 100px; height: 100px" :src="scope.row.cover">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="菜品"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button class="btn" @click.native.prevent="setDiscount(scope.row.id, scope.$index)" size="mini">
            设为优惠
          </el-button>
          <el-button class="btn" @click.native.prevent="deleteRow(scope.row.id, scope.$index)" size="mini">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="添加新的菜品"
      :visible.sync="dialogVisible"
      width="50%">
      <el-row class="dishes-row">
        <el-col :span="6">菜品封面：</el-col>
        <el-col :span="12" style="text-align: center">
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
            </div>
          </el-upload>
        </el-col>
      </el-row>
      <el-row class="dishes-row">
        <el-col :span="6">菜品名称：</el-col>
        <el-col :span="12">
          <el-input prefix-icon="el-icon-collection-tag" v-model="dishes.name" size="mini"
                    placeholder="添加新菜品的名称"></el-input>
        </el-col>
      </el-row>
      <el-row class="dishes-row">
        <el-col :span="6">菜品单价：</el-col>
        <el-col :span="12">
          <el-input prefix-icon="el-icon-coin" v-model="dishes.price" size="mini" placeholder="添加菜品的单价"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" :offset="6" style="text-align: center">
          <el-button size="mini" class="btn" @click="save">保存</el-button>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dishes',
  methods: {
    deleteRow (dishesId, index) {
      this.$confirm('此操作会移除该菜品的信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
        this.$http.post('/shop/remove/dishes/info', {id: dishesId})
        this.$message({
          type: 'success',
          message: '成功取消优惠'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消了操作'
        })
      })
    },
    setDiscount (dishesId, index) {
      this.$confirm('此操作会将该菜品设置为优惠状态, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
        this.$http.post('/shop/setting/discount', {shopId: this.$store.state.shop.id, id: dishesId})
        this.$message({
          type: 'success',
          message: '成功设置为优惠菜品'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消了操作'
        })
      })
    },
    save () {
      this.$message({
        type: 'error',
        message: '添加新菜品的功能正在改造中...请谅解，请联系客服加快修复！！！',
        duration: 5000
      })
    },
    checkImageFormat (file) {
      const imageType = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg'
      const imageLimit = file.size / 1024 / 1024 < 1
      if (!imageType) this.$message.error('上传图片只能是 JPG 或 PNG 格式!')
      if (!imageLimit) this.$message.error('上传图片大小不能超过 1MB!')
      return imageType && imageLimit
    }
  },
  data () {
    return {
      dialogVisible: false,
      dishes: {
        id: 0,
        cover: '',
        name: '',
        price: 0
      },
      tableData: [
        {
          id: 0,
          cover: '',
          name: '',
          price: 0
        }
      ]
    }
  },
  async created () {
    let {data: res} = await this.$http.post('/shop/getting/dishes/by', {
      type: 'all',
      shopId: this.$store.state.shop.id
    })
    this.tableData = res
  }
}
</script>

<style scoped>
.dishes-row {
  margin-bottom: 20px;
}

.btn {
  transition: 0.5s;
  background: #0c0d0d;
  color: white;
}

.btn:hover {
  transition: 0.5s;
  background: #ffc107;
  color: #0c0d0d;
}
</style>
