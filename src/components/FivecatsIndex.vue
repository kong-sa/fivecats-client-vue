<template>
  <el-container>
    <el-header style="padding: 0">
      <el-row class="nav">
        <el-col :span="3" class="logo-container">
          <router-link class="router" to="/">
            <el-image class="logo" src="http://oss.norza.cn/imgs/logo.png"></el-image>
          </router-link>
        </el-col>
        <el-col :span="14" class="routing-container">
          <el-row :gutter="20" class="routing">
            <el-col :span="6">
              <router-link class="router" to="/find">寻找美食</router-link>
            </el-col>
            <el-col :span="6">
              <router-link class="router" to="/video">美食视频</router-link>
            </el-col>
            <el-col :span="6">
              <router-link class="router" to="/">每日推荐</router-link>
            </el-col>
            <el-col :span="6">
              <router-link class="router" to="/bbs">馋猫社区</router-link>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="7" v-if="$store.state.user.id === 0 && $store.state.shop.id === 0">
          <el-row :gutter="20">
            <el-col :span="12" class="options routing">
              <i class="nouser-icon el-icon--left el-icon-third-denglu"></i>
              <router-link class="router nouser" to="/login">普通用户登陆</router-link>
            </el-col>
            <el-col :span="12" class="options routing">
              <i class="nouser-icon el-icon--left el-icon-third-denglu"></i>
              <router-link class="router nouser" to="/shop/login">商家用户登录</router-link>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="7" class="normal-user" v-if="$store.state.user.id !== 0">
          <el-row :gutter="20" class="user-container">
            <el-col :span="5" class="avatar-container">
              <el-dropdown @command="clickDropdownItem">
                <a href="#">
                  <el-avatar class="avatar"
                             :size="50"
                             :src="$store.state.user.avatar">
                  </el-avatar>
                </a>
                <el-dropdown-menu class="dropdown-menu">
                  <el-dropdown-item>
                    <el-row class="username">{{ $store.state.user.username }}</el-row>
                    <el-row>
                      经验值:{{ $store.state.user.experience }} /
                      <span v-if="$store.state.user.level === 0">100</span>
                      <span v-else-if="$store.state.user.level === 1">200</span>
                      <span v-else-if="$store.state.user.level === 2">400</span>
                      <span v-else-if="$store.state.user.level === 3">500</span>
                      <span v-else-if="$store.state.user.level === 4">750</span>
                      <span v-else-if="$store.state.user.level === 5">1050</span>
                      <span v-else>1050</span>
                    </el-row>
                    <el-row>
                      <el-col class="level" :span="12">
                        <i class="el-icon--left el-icon-third-dengji1"></i>
                        LV:{{ $store.state.user.level }}
                      </el-col>
                      <el-col class="coin" :span="12">
                        <i class="el-icon--left el-icon-third-jinbi"></i>
                        馋币:{{ $store.state.user.gold }}
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
            <el-col :span="6" class="item-container">
              <router-link class="router" to="/self/center/order">我的订单</router-link>
            </el-col>
            <el-col :span="6" class="item-container">
              <router-link class="router" to="/message">我的消息</router-link>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6" class="shop-user" v-if="$store.state.shop.id !== 0">
          <el-row :gutter="20" class="user-container">
            <el-col :span="5" class="avatar-container">
              <el-dropdown @command="clickShopDropdownItem">
                <a href="#">
                  <el-avatar class="avatar"
                             :size="50"
                             :src="$store.state.shop.cover">
                  </el-avatar>
                </a>
                <el-dropdown-menu class="dropdown-menu">
                  <el-dropdown-item command="1">
                    <i class="el-icon--left el-icon-user"></i>我的店铺
                  </el-dropdown-item>
                  <el-dropdown-item command="2">
                    <i class="el-icon--left el-icon-tickets"></i>维护店铺
                  </el-dropdown-item>
                  <el-dropdown-item command="3">
                    <i class="el-icon--left el-icon-third-tuichudenglu"></i>退出登陆
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
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
export default {
  name: 'FivecatsIndex',
  created () {
    this.$notify({
      title: '系统提示',
      message: '如果出现页面元素溢出问题，请调整浏览器显示百分比。',
      duration: 3500
    })
    if (this.$store.state.user.id === 0 && this.$store.state.shop.id === 0) {
      setTimeout(() => {
        this.$notify({
          title: '未登录提示',
          message: '你还没有登陆哟，会影响你的正常使用！',
          duration: 3500
        })
      }, 3600)
    }
  },
  methods: {
    scrollUp () {
      document.scrollingElement.scrollTop = 0
      document.scrollingElement.scrollLeft = 0
    },
    clickDropdownItem (command) {
      if (command === '1') {
        this.$router.push('/self/center')
      } else if (command === '2') {
        this.$router.push('/person/space/' + this.$store.state.user.id)
      } else if (command === '3') {
        this.$router.push('/self/center/articles')
      } else if (command === '4') {
        this.$store.commit('deleteUser')
        this.$message.success('退出登陆成功！')
      }
    },
    clickShopDropdownItem (command) {
      if (command === '1') {
        this.$router.push('/shop/' + this.$store.state.shop.id)
      } else if (command === '2') {
        this.$router.push('/maintain')
      } else if (command === '3') {
        this.$store.commit('deleteShop')
      }
    }
  },
  data () {
    return {
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
  }
}
</script>

<style scoped>
.main {
  padding: 0;
  min-height: 1000px;
  background: #faf9f9;
}

a:link {
  color: white;
  text-decoration: none;
}

a:visited {
  color: white;
  text-decoration: none;
}

.routing, .user-container {
  line-height: 60px;
}

a:hover {
  color: #ffc107;
  text-decoration: none;
  transition: 0.5s;
}

a:active {
  color: white;
  text-decoration: none;
}

a {
  cursor: pointer;
  font-weight: 600;
}

.nav {
  background-color: #0c0d0d;
  height: 100%;
  padding: 0 10%;
}

.router {
  font-size: 16px;
}

.logo {
  width: 60%;
  height: 60px;
}

.avatar {
  border-radius: 100%;
}

.routing {
  text-align: center;
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

/deep/ .el-dropdown, .avatar-container {
  height: 60px;
}

/deep/ .el-dropdown {
  padding-top: 5px;
}

.avatar-container {
  text-align: center;
}

.nouser, .nouser-icon {
  color: white;
}

.dropdown-menu {
  width: 190px;
  text-align: center;
}

/deep/ .el-dialog__body {
  padding: 25px 25px 5px;
}
</style>
