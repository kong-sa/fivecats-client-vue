<template>
  <el-card class="navigation">
    <el-row>
      <el-col :span="4" class="bbs-title">
        <router-link to="/bbs">馋猫社区</router-link>
      </el-col>
      <el-col :span="12">
        <el-row class="special-area">
          <el-col :span="6">
            <router-link to="/bbs/clock">打卡专区</router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="/bbs/recipe">食谱专区</router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="/bbs/cooking">制作专区</router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="/bbs/sharing">分享专区</router-link>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" class="navigation-right" v-if="this.$store.state.var1 === var1">
        <el-row class="navigation-right_body">
          <el-col :span="8" class="avatar">
            <el-dropdown @command="clickDropdownItem">
              <el-avatar
                :size="40"
                :src="var1.data.avatar">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-avatar>
              <el-dropdown-menu class="dropdown-menu">
                <el-dropdown-item>
                  <el-row style="font-weight: 600; font-size: 16px">
                    {{ var1.data.username }}
                  </el-row>
                  <el-row>
                    经验值:{{ var1.data.experience }} /
                    <span v-if="var1.data.level === 0">100</span>
                    <span v-else-if="var1.data.level === 1">200</span>
                    <span v-else-if="var1.data.level === 2">400</span>
                    <span v-else-if="var1.data.level === 3">500</span>
                    <span v-else-if="var1.data.level === 4">750</span>
                    <span v-else-if="var1.data.level === 5">1050</span>
                    <span v-else>1050</span>
                  </el-row>
                  <el-row>
                    <el-col :span="12" style="text-align: left"><i class="level"></i>LV:{{ var1.data.level }}</el-col>
                    <el-col :span="12" style="text-align: right"><i
                      class="el-icon--left el-icon-coin"></i>馋币:{{ var1.data.gold }}
                    </el-col>
                  </el-row>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-row><i class="fans"></i>粉丝: {{ var1.data.fans }}</el-row>
                </el-dropdown-item>
                <el-dropdown-item command="1"><i class="el-icon--left el-icon-user"></i>个人中心</el-dropdown-item>
                <el-dropdown-item command="2"><i class="el-icon--left el-icon-folder"></i>我的帖子</el-dropdown-item>
                <el-dropdown-item command="3"><i class="el-icon--left el-icon-third-tuichudenglu"></i>退出登陆</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col class="item" :span="8">
            <el-badge :value="1" :max="99" class="message"><i class="el-icon--left el-icon-chat-round"></i>回复我的
            </el-badge>
          </el-col>
          <el-col class="item" :span="8">
            <el-badge :value="1" :max="99" class="message"><i class="el-icon--left el-icon-thumb"></i>获得的赞</el-badge>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="navigation-right" :span="8" v-else>
        <el-row>
          <el-col :span="8" class="item login"><i class="el-icon--left el-icon-third-denglu"></i><a
            @click="loginDialog = true">登陆</a></el-col>
          <el-col :span="1" class="item">|</el-col>
          <el-col :span="8" class="item signin"><i class="el-icon--left el-icon-third-zhuce"></i><a
            @click="signinDialog = true">注册</a></el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog
      title="登陆界面"
      :visible.sync="loginDialog"
      width="25%"
      :destroy-on-close="true"
      center>
      <div class="access-body">
        <el-form ref="login" :model="loginData" :rules="loginRules" :hide-required-asterisk="true">
          <el-form-item label="邮箱：" prop="email">
            <el-col :span="17">
              <el-input v-model="loginData.email"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-col :span="17">
              <el-input type="password" v-model="loginData.password"></el-input>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="loginDialog = false">取消</el-button>
        <el-button size="mini" type="primary" @click="login">登陆</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="注册界面"
      :visible.sync="signinDialog"
      width="25%"
      :destroy-on-close="true"
      center>
      <div class="access-body">
        <el-form ref="signin" :model="signinData" :rules="signRules" :hide-required-asterisk="true">
          <el-form-item label="邮箱：" prop="email">
            <el-col :span="17">
              <el-input v-model="signinData.email"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-col :span="17">
              <el-input type="password" v-model="signinData.password"></el-input>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="signinDialog = false">取消</el-button>
        <el-button size="mini" type="primary" @click="signin">注册</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      loginDialog: false,
      signinDialog: false,
      var1: {
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
          'avatar': ''
        }
      },
      loginData: {
        email: '',
        password: ''
      },
      signinData: {
        email: '',
        password: ''
      },
      signRules: {
        email: [
          {required: true, message: '请设置您的邮箱', trigger: 'blur'},
          {min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请设置您的密码', trigger: 'blur'},
          {min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur'}
        ]
      },
      loginRules: {
        email: [
          {required: true, message: '请输入您的邮箱', trigger: 'blur'},
          {min: 3, max: 30, message: '长度在 3 到 15 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入您的密码', trigger: 'blur'},
          {min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    clickDropdownItem (command) {
      if (command === '1') {
        this.$router.push('/bbs/self/center')
      } else if (command === '2') {
        this.$router.push('/bbs/self/center/articles')
      } else if (command === '3') {
        this.$store.commit('setVar1', null)
        this.$message.success('退出登陆成功！')
      }
    },
    login () {
      this.$refs.login.validate(async (valida) => {
        if (!valida) return false
        let {data: var1} = await this.$http.post('/bbs/login', this.loginData)
        if (var1.code === 200) {
          this.var1 = var1
          this.loginDialog = false
          this.$store.commit('setVar1', var1)
          this.$message.success('登陆成功！')
        } else {
          this.$message.error('登陆失败！')
        }
      })
    },
    signin () {
      this.$refs.signin.validate(async (valida) => {
        if (!valida) return false
        await this.$http.post('/bbs/signin', this.signinData)
      })
    }
  }
}
</script>

<style scoped>
/deep/ .el-card__body {
  padding: 0;
}

/deep/ .el-form-item__label, /deep/ .el-dialog__title {
  color: white;
}

/deep/ .el-dialog--center {
  border-radius: 15px;
  background: rgb(80, 80, 81);
}

.bbs-title {
  font-size: 40px;
  line-height: 67px;
}

.message {
  font-size: 15px;
}

.navigation-right, .navigation-right_body, .avatar, .item {
  height: 67px;
}

.avatar, .item {
  cursor: pointer;
  text-align: center;
}

.level, .fans {
  display: inline-block;
  background-position: center center;
}

.level {
  width: 16px;
  height: 16px;
  background-size: 16px 16px;
  background-image: url("../../../../assets/icon/level-icon.png");
}

.fans {
  width: 12px;
  height: 12px;
  background-size: 12px 12px;
  background-image: url("../../../../assets/icon/fans-icon.png");
}

.avatar {
  padding: 3% 0;
}

.dropdown-menu {
  width: 190px;
  text-align: center;
}

.item {
  padding: 5% 0;
}

.navigation {
  height: 65px;
  color: white;
  padding: 0 10%;
  background: rgb(45, 47, 51);
}

a:link {
  color: white;
  text-decoration: none;
}

a:visited {
  color: white;
  text-decoration: none;
}

a:hover {
  color: rgb(140, 197, 255);
  text-decoration: none;
}

a:active {
  color: white;
  text-decoration: none;
}

.special-area {
  cursor: pointer;
  line-height: 65px;
  text-align: center;
  font-size: 18px;
}

.login {
  text-align: right;
}

.signin {
  text-align: left;
}
</style>
