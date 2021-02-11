<template>
  <el-card class="navigation">
    <el-row>
      <el-col :span="4" class="bbs-title">
        <a @click="$store.commit('setBbsType', 'index')">馋猫社区</a>
      </el-col>
      <el-col :span="12">
        <el-row class="special-area">
          <el-col :span="6">
            <a @click="$store.commit('setBbsType', 'clock')">打卡专区</a>
          </el-col>
          <el-col :span="6">
            <a @click="$store.commit('setBbsType', 'recipe')">食谱专区</a>
          </el-col>
          <el-col :span="6">
            <a @click="$store.commit('setBbsType', 'cooking')">制作专区</a>
          </el-col>
          <el-col :span="6">
            <a @click="$store.commit('setBbsType', 'sharing')">分享专区</a>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" class="navigation-right" v-if="this.$store.state.user === user">
        <el-row class="navigation-right_body">
          <el-col :span="8" class="avatar">
            <el-dropdown @command="clickDropdownItem">
              <el-avatar
                :size="40"
                :src="user.avatar">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-avatar>
              <el-dropdown-menu class="dropdown-menu">
                <el-dropdown-item>
                  <el-row style="font-weight: 600; font-size: 16px">
                    {{ user.username }}
                  </el-row>
                  <el-row>
                    经验值:{{ user.experience }} /
                    <span v-if="user.level === 0">100</span>
                    <span v-else-if="user.level === 1">200</span>
                    <span v-else-if="user.level === 2">400</span>
                    <span v-else-if="user.level === 3">500</span>
                    <span v-else-if="user.level === 4">750</span>
                    <span v-else-if="user.level === 5">1050</span>
                    <span v-else>1050</span>
                  </el-row>
                  <el-row>
                    <el-col :span="12" style="text-align: left"><i class="el-icon--left el-icon-third-dengji1"></i>LV:{{
                        user.level
                      }}</el-col>
                    <el-col :span="12" style="text-align: right"><i
                      class="el-icon--left el-icon-third-jinbi"></i>馋币:{{ user.gold }}
                    </el-col>
                  </el-row>
                </el-dropdown-item>
                <el-dropdown-item command="1"><i class="el-icon--left el-icon-user"></i>个人中心</el-dropdown-item>
                <el-dropdown-item command="2"><i class="el-icon--left el-icon-third-kongjian"></i>个人空间</el-dropdown-item>
                <el-dropdown-item command="3"><i class="el-icon--left el-icon-tickets"></i>我的帖子</el-dropdown-item>
                <el-dropdown-item command="4"><i class="el-icon--left el-icon-third-tuichudenglu"></i>退出登陆</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col class="item" :span="8">
            <a @click="goReplay">
              <el-badge :value="0" :max="99" class="message"><i class="el-icon--left el-icon-chat-round"></i>回复我的
              </el-badge>
            </a>
          </el-col>
          <el-col class="item" :span="8">
            <a @click="goLike">
              <el-badge :value="likeNum" :max="99" class="message"><i class="el-icon--left el-icon-thumb"></i>获得的赞</el-badge>
            </a>
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
        <el-button class="btn" size="mini" type="primary" @click="login">登陆</el-button>
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
        <el-button class="btn" size="mini" type="primary" @click="signin">注册</el-button>
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
      user: {
        id: 0,
        avatar: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        profile: '',
        fans: 0,
        gold: 0,
        experience: 0,
        level: 0,
        location: ''
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
      },
      type: '',
      likeNum: 0
    }
  },
  methods: {
    goReplay () {
      this.$router.push('/bbs/message/replay')
    },
    goLike () {
      this.$router.push('/bbs/message/like')
    },
    clickDropdownItem (command) {
      if (command === '1') {
        this.$router.push('/bbs/self/center')
      } else if (command === '2') {
        this.$router.push('/bbs/person/space/' + this.$store.state.user.id)
      } else if (command === '3') {
        this.$router.push('/bbs/self/center/articles')
      } else if (command === '4') {
        this.$store.commit('setUser', null)
        this.$message.success('退出登陆成功！')
      }
    },
    login () {
      this.$refs.login.validate(async (valida) => {
        if (!valida) {
          this.$message.error('请把信息填写完全！')
        } else {
          let {data: res} = await this.$http.post('/access/login', this.loginData)
          if (res.code === 200) {
            this.$message({
              message: '登陆成功！',
              type: 'success',
              duration: 2000
            })
            this.loginDialog = false
            this.$store.commit('setUser', res.data)
            this.user = res.data
          } else if (res.code === 400) {
            this.$message({
              message: res.data,
              type: 'error',
              duration: 3000
            })
          } else {
            this.$message({
              message: res.data,
              type: 'error',
              duration: 3000
            })
          }
        }
      })
    },
    signin () {
      this.$refs.signin.validate(async (valida) => {
        if (!valida) {
          this.$message.error('请把信息填写完全！')
        } else {
          let {data: res} = await this.$http.post('/access/signin', this.signinData)
          if (res.code === 200) {
            this.$message({
              message: '注册成功！',
              duration: 2000,
              type: 'success'
            })
            this.signinDialog = false
            this.loginDialog = true
          } else if (res.code === 400) {
            this.$message({
              message: res.data,
              duration: 3000,
              type: 'error'
            })
          } else if (res.code === 401) {
            this.$message({
              message: res.data,
              duration: 3000,
              type: 'error'
            })
          } else {
            this.$message({
              message: res.data,
              duration: 3000,
              type: 'error'
            })
          }
        }
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

.btn {
  background: #ffc107;
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
  cursor: pointer;
  color: #ffc107;
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
