<template>
  <div id="abbreviated-order-menu" style="height: 453px; overflow-y: auto">
    <div style="margin: 5px; padding: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
      <el-row>
        <el-row>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">排队号：{{order.queueNumber}}</el-col>
          <el-col :span="6">总价：{{total}}</el-col>
          <el-col :span="6">
            <el-button size="mini" icon="el-icon-more-outline">详细</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" size="mini" icon="el-icon-circle-close">取消</el-button>
          </el-col>
        </el-row>
      </el-row>
    </div>
    <div style="margin: 5px; padding: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
      <el-row>
        <el-row>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">排队号：{{order.queueNumber}}</el-col>
          <el-col :span="6">总价：{{total}}</el-col>
          <el-col :span="6">
            <el-button size="mini" icon="el-icon-more-outline">详细</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" size="mini" icon="el-icon-circle-close">取消</el-button>
          </el-col>
        </el-row>
      </el-row>
    </div>
    <div style="margin: 5px; padding: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
      <el-row>
        <el-row>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">排队号：{{order.queueNumber}}</el-col>
          <el-col :span="6">总价：{{total}}</el-col>
          <el-col :span="6">
            <el-button size="mini" icon="el-icon-more-outline">详细</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" size="mini" icon="el-icon-circle-close">取消</el-button>
          </el-col>
        </el-row>
      </el-row>
    </div>
    <div style="margin: 5px; padding: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
      <el-row>
        <el-row>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">排队号：{{order.queueNumber}}</el-col>
          <el-col :span="6">总价：{{total}}</el-col>
          <el-col :span="6">
            <el-button size="mini" icon="el-icon-more-outline">详细</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" size="mini" icon="el-icon-circle-close">取消</el-button>
          </el-col>
        </el-row>
      </el-row>
    </div>
    <div style="margin: 5px; padding: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
      <el-row>
        <el-row>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">排队号：{{order.queueNumber}}</el-col>
          <el-col :span="6">总价：{{total}}</el-col>
          <el-col :span="6">
            <el-button size="mini" icon="el-icon-more-outline">详细</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" size="mini" icon="el-icon-circle-close">取消</el-button>
          </el-col>
        </el-row>
      </el-row>
    </div>
    <div style="margin: 5px; padding: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
      <el-row>
        <el-row>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 6px"
              src="http://oss.norza.cn/imgs/84917906_p0.png"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">排队号：{{order.queueNumber}}</el-col>
          <el-col :span="6">总价：{{total}}</el-col>
          <el-col :span="6">
            <el-button size="mini" icon="el-icon-more-outline">详细</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" size="mini" icon="el-icon-circle-close">取消</el-button>
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AbbreviatedOrderList',
    data () {
      return {
        total: 0,
        order: {
          customerId: 1,
          orderNumber: 'EF20210113',
          status: '订单状态：订单已完成',
          notCancelable: true,
          date: '2020-01-13',
          time: '12:30:00-1:30:00',
          queueNumber: '10',
          num: 2
        },
      }
    }
  }
</script>

<style scoped>

</style>
