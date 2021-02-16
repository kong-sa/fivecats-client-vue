<template>
  <el-container class="container">
    <el-header class="header">
      <div class="navigation">
        <el-row>
          <el-col :span="16" class="title">
            <a @click="goIndex">馋猫社区</a>
          </el-col>
          <el-col :span="8" class="navigation-right" v-if="$store.state.user === user">
            <el-row class="navigation-right_body">
              <el-col :span="8" class="avatar">
                <el-dropdown @command="clickDropdownItem">
                  <el-avatar :size="40" :src="user.avatar"></el-avatar>
                  <el-dropdown-menu class="dropdown-menu">
                    <el-dropdown-item>
                      <el-row class="username">{{ user.username }}</el-row>
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
                        <el-col class="level" :span="12">
                          <i class="el-icon--left el-icon-third-dengji1"></i>
                          LV:{{ user.level }}
                        </el-col>
                        <el-col class="coin" :span="12">
                          <i class="el-icon--left el-icon-third-jinbi"></i>
                          馋币:{{ user.gold }}
                        </el-col>
                      </el-row>
                    </el-dropdown-item>
                    <el-dropdown-item command="1">
                      <i class="el-icon--left el-icon-user"></i>个人中心
                    </el-dropdown-item>
                    <el-dropdown-item command="2">
                      <i class="el-icon--left el-icon-third-kongjian"></i>个人空间
                    </el-dropdown-item>
                    <el-dropdown-item command="3">
                      <i class="el-icon--left el-icon-tickets"></i>我的帖子
                    </el-dropdown-item>
                    <el-dropdown-item command="4">
                      <i class="el-icon--left el-icon-third-tuichudenglu"></i>退出登陆
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
              <el-col class="options" :span="8">
                <a @click="goReplay">
                  <i class="el-icon--left el-icon-chat-round"></i>回复我的
                </a>
              </el-col>
              <el-col class="options" :span="8">
                <a @click="goPraised">
                  <i class="el-icon--left el-icon-thumb"></i>获得的赞
                </a>
              </el-col>
            </el-row>
          </el-col>
          <el-col class="navigation-right" :span="8" v-else>
            <el-row :gutter="20">
              <el-col :span="8" class="options"><i class="el-icon--left el-icon-third-denglu"></i><a
                @click="loginDialog = true">登陆</a></el-col>
              <el-col :span="8" class="options"><i class="el-icon--left el-icon-third-zhuce"></i><a
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
          <div>
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
            <el-button size="mini" type="danger" @click="loginDialog = false">取消</el-button>
            <el-button class="btn" size="mini" type="primary" @click="login">登陆</el-button>
          </span>
        </el-dialog>
        <el-dialog
          title="注册界面"
          :visible.sync="signinDialog"
          width="25%"
          :destroy-on-close="true"
          center>
          <div>
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
            <el-button size="mini" type="danger" @click="signinDialog = false">取消</el-button>
            <el-button class="btn" size="mini" type="primary" @click="signin">注册</el-button>
          </span>
        </el-dialog>
      </div>
    </el-header>
    <el-main class="main">
      <router-view/>
      <a ref="scroll" @click="scrollUp" class="scroll-up el-icon el-icon-top"></a>
    </el-main>
    <el-footer class="footer" style="height: 350px">
      <el-row :gutter="20">
        <el-col :span="6" class="footer-about">
          <span class="footer-about-title">五只馋猫</span>
          <div>
            <p>联系电话：11111111111</p>
          </div>
        </el-col>
        <el-col :span="6"
                v-for="(item, index) in footerItem"
                :key="index">
          <span class="footer-title">{{ item.title }}</span>
          <ul class="footer-ul">
            <li class="footer-li"
                v-for="(option, i) in item.options"
                :key="i">
              <router-link class="footer-router" :to="option.router">
                {{ option.li }}
              </router-link>
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
import BbsPartition from './child/BbsPartition'

export default {
  name: 'BBSMain',
  components: {BbsPartition},
  created () {
    if (this.$store.state.user.id === 0) {
      this.$notify({
        title: '社区未登录提示',
        message: '你还没有登录，这将影响你的用户体验，请先登录。',
        duration: 10000
      })
    }
  },
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
      footerItem: [
        {
          title: '顾客',
          options: [
            {
              li: '排队点餐',
              router: '/'
            },
            {
              li: '社区活动',
              router: '/bbs'
            },
            {
              li: '每日打卡',
              router: '/bbs'
            },
            {
              li: '美食分享',
              router: '/bbs'
            }
          ]
        },
        {
          title: '商家',
          options: [
            {
              li: '接受预定',
              router: '/'
            },
            {
              li: '宣传店铺',
              router: '/shop'
            },
            {
              li: '联系电话',
              router: '/'
            },
            {
              li: '社区活动',
              router: '/bbs'
            }
          ]
        },
        {
          title: '社区',
          options: [
            {
              li: '美食分享',
              router: '/bbs'
            },
            {
              li: '每日打卡',
              router: '/bbs'
            },
            {
              li: '菜谱教程',
              router: '/video'
            },
            {
              li: '更多',
              router: '/bbs'
            }
          ]
        }
      ]
    }
  },
  methods: {
    scrollUp () {
      document.scrollingElement.scrollTop = 0
      document.scrollingElement.scrollLeft = 0
    },
    goIndex () {
      this.$router.push('/bbs/index')
    },
    goReplay () {
      this.$router.push('/bbs/message/replay')
    },
    goPraised () {
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
              duration: 3000
            })
            this.loginDialog = false
            this.user = res.data
            this.$store.commit('setUser', res.data)
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
              duration: 3000,
              type: 'success'
            })
            this.signinDialog = false
            this.loginDialog = true
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
.container {
  background: rgb(250, 249, 249);
}

.header {
  padding: 0;
  margin-bottom: 25px;
}

.main {
  margin: 1% 10% 5% 10%;
  padding: 0;
  min-height: 1000px;
}

/deep/ .el-form-item__label,
/deep/ .el-dialog__title {
  color: white;
}

/deep/ .el-dialog--center {
  border-radius: 15px;
  background: rgb(80, 80, 81);
}

.title {
  font-size: 40px;
  line-height: 67px;
}

.btn {
  transition: 0.5s;
  background: #0c0d0d;
  color: white;
}

.btn:hover {
  background: #ffc107;
  color: #0c0d0d;
  transition: 0.5s;
}

.level {
  text-align: left;
}

.coin {
  text-align: right;
}

.username {
  font-weight: 600;
  font-size: 16px;
}

.navigation-right,
.navigation-right_body,
.avatar,
.options {
  height: 67px;
}

.avatar, .options {
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

.options {
  padding: 5% 0;
}

.navigation {
  height: 65px;
  color: white;
  padding: 0 10%;
  background-color: #0c0d0d;
}

.footer {
  padding: 80px 10%;
  background-color: #1b1927;
}

.footer-title {
  color: #fff;
  display: block;
  margin-bottom: 27px;
  font-size: 17px;
}

.footer-about {
  color: rgb(255 255 255 / 97%);
  font-size: 18px;
}

.footer-about-title {
  font-size: 26px;
  display: block;
  margin-bottom: 15px;
  font-weight: 700;
}

/deep/ .footer-router {
  color: #f3f1fdc9 !important;
  transition: 0.5s;
  font-weight: 400 !important;
  font-size: 15px !important;
  text-decoration: none !important;
}

/deep/ .footer-router:hover {
  color: #ffc107 !important;
  transition: 0.5s;
}

.footer-ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.footer-li {
  color: #fff;
  margin-bottom: 5px;
  font-size: 15px;
}

a:link {
  color: #0c0d0d;
  text-decoration: none;
}

a:visited {
  color: #0c0d0d;
  text-decoration: none;
}

a:hover {
  cursor: pointer;
  color: #ffc107;
  text-decoration: none;
}

a:active {
  color: #0c0d0d;
  text-decoration: none;
}

.scroll-up {
  position: fixed;
  z-index: 2147483647;
  bottom: 30px;
  color: #ffffff;
  height: 50px;
  font-size: 22px;
  right: 30px;
  line-height: 50px;
  text-decoration: none;
  text-align: center;
  width: 50px;
  border-radius: 0;
  background-color: #4d486f;
}
</style>
