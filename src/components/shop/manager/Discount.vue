<template>
  <div class="discount">
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
        prop="discount"
        label="优惠价格">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button class="btn" @click.native.prevent="openModify(scope.$index, scope.row.id)" size="mini">
            修改价格
          </el-button>
          <el-button class="btn" @click.native.prevent="deleteRow(scope.row.id, scope.$index)" size="mini">
            取消优惠
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="修改价格"
      :visible.sync="dialogVisible"
      width="30%">
      <div style="padding: 0 10%">
        <el-input size="mini" v-model="modifyObj.discount"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" class="btn" @click="dialogVisible = false">取 消</el-button>
        <el-button size="mini" class="btn" type="primary" @click="modify">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Discount',
  methods: {
    openModify (index, dishesId) {
      this.dialogVisible = true
      this.modifyObj = {
        discount: this.tableData[index].discount,
        id: dishesId,
        shopId: this.$store.state.shop.id
      }
    },
    modify () {
      this.$http.post('/shop/modify/dishes/discount', this.modifyObj)
      this.dialogVisible = false
    },
    deleteRow (dishesId, index) {
      this.$confirm('此操作会移除该菜品的优惠状态, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
        this.$http.post('/shop/remove/dishes', {shopId: this.$store.state.shop.id, id: dishesId})
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
    }
  },
  data () {
    return {
      dialogVisible: false,
      modifyObj: {
        shopId: 0,
        id: 0,
        discount: 0
      },
      tableData: [
        {
          id: 0,
          cover: '',
          name: '',
          discount: 0,
          isDiscount: 1
        }
      ]
    }
  },
  async created () {
    let {data: res} = await this.$http.post('/shop/getting/dishes/by', {
      type: 'discount',
      shopId: this.$store.state.shop.id
    })
    this.tableData = res
  }
}
</script>

<style scoped>
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
