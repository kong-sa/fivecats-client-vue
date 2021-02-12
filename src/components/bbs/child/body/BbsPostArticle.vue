<template>
  <div id="post-article">
    <el-card class="main-card">
      <el-form :rules="rules" :model="formData" ref="formData">
        <el-row class="main-card__header">发布帖子</el-row>
        <el-divider/>
        <!--帖子的标题-->
        <el-row style="margin-top: 20px">
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
        <!--帖子的类型-->
        <el-row class="input-area">
          <el-col class="label" :span="3">帖子类型：</el-col>
          <el-col :span="20">
            <el-select v-model="optionValue" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <!--帖子的内容-->
        <el-row class="input-area">
          <el-col class="label" :span="3">帖子内容：</el-col>
          <el-col :span="20">
            <vue-tinymce
              v-model="content"
              :setting="setting"/>
          </el-col>
        </el-row>
        <!--发表帖子按钮-->
        <el-row class="main-card__footer">
          <el-button @click="deliver" class="deliver-button">
            <i class="el-icon--left el-icon-check"></i>发布
          </el-button>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import BbsNavigationBar from '../header/BbsNavigationBar'

export default {
  name: 'PostBbsArticle',
  components: {BbsNavigationBar},
  data () {
    return {
      // 表单绑定的数据
      formData: {
        // 帖子标题
        title: ''
      },
      // 帖子内容
      content: '',
      // 富文本参数设置
      setting: {
        menubar: false,
        toolbar: 'undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |',
        toolbar_drawer: 'sliding',
        quickbars_selection_toolbar: 'removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor',
        plugins: 'link image media table lists fullscreen quickbars',
        language: 'zh_CN',
        height: 350
      },
      // 下拉框默认值
      optionValue: '请选择帖子类型',
      disabled: false,
      // 下拉框选项值
      options: [
        {
          value: '节约粮食打卡',
          label: '节约粮食打卡'
        },
        {
          value: '制作美食心得',
          label: '制作美食心得'
        },
        {
          value: '农村美食分享',
          label: '农村美食分享'
        },
        {
          value: '食谱分享',
          label: '食谱分享'
        },
        {
          value: '其他',
          label: '其他'
        }
      ],
      // 表单验证规则
      rules: {
        title: [
          {required: true, message: '请输入帖子标题', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
        ]
      },
      // 发表奖励
      rewordType: {
        gold: 0,
        experience: 0
      }
    }
  },
  methods: {
    // 判断属于哪一种文章，并给予对应的奖励
    determineReword (value) {
      switch (value) {
        case '节约粮食打卡':
          this.rewordType.gold = 6
          this.rewordType.experience = 5
          break
        case '制作美食心得':
          this.rewordType.gold = 4
          this.rewordType.experience = 4
          break
        case '农村美食分享':
          this.rewordType.gold = 3
          this.rewordType.experience = 3
          break
        case '食谱分享':
          this.rewordType.gold = 3
          this.rewordType.experience = 3
          break
        case '其他':
          this.rewordType.gold = 1
          this.rewordType.experience = 2
          break
      }
    },
    // 发表帖子
    deliver () {
      // 验证表单数据是否错误
      this.$refs.formData.validate((valida) => {
        if (!valida) return false
        // 判断帖子内容是否大于20个字符
        if (this.content.length >= 20) {
          // 发起异步请求，存储文章
          this.$http.post('/bbs/setting/article', {
            title: this.formData.title,
            tag: this.optionValue,
            content: this.content,
            userId: this.$store.state.var1.data.id
          })
          // 决定哪一种类型
          this.determineReword(this.optionValue)
          // 根据帖子类型弹出提示
          this.$message({
            message: '金币 +' + this.rewordType.gold + '，经验 +' + this.rewordType.experience,
            duration: 5000,
            shopType: 'success'
          })
        } else {
          this.$message({
            message: '你至少要输入20个字符的内容',
            duration: 5000,
            shopType: 'error'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.label {
  font-size: 14px;
}

.main-card {
  padding: 15px;
}

.main-card__header {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

.main-card__footer {
  text-align: center;
}

.input-area {
  margin-bottom: 20px;
}

.deliver-button {
  width: 180px;
}
</style>
