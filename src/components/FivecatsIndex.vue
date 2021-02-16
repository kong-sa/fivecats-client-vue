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
        <el-col class="normal-user" :span="7">
          <el-row :gutter="20" class="normal-user-container">
            <el-col :span="5" class="avatar-container">
              <el-dropdown>
                <a href="#">
                  <el-avatar class="avatar"
                             :size="55"
                             src="http://oss.norza.cn/imgs/user/avatar/1/avatar04.jpg">
                  </el-avatar>
                </a>
                <el-dropdown-menu>
                  <el-dropdown-item>1</el-dropdown-item>
                  <el-dropdown-item>2</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="6" class="item-container">
              <el-dropdown>
                <a class="router" style="color: white">我的订单</a>
                <el-dropdown-menu>
                  <el-dropdown-item>1</el-dropdown-item>
                  <el-dropdown-item>2</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="6" class="item-container">
              <el-dropdown>
                <a class="router" style="color: white">我的消息</a>
                <el-dropdown-menu>
                  <el-dropdown-item>1</el-dropdown-item>
                  <el-dropdown-item>2</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-col>
        <el-col class="shop-user" :span="6" v-if="false"></el-col>
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
  },
  methods: {
    scrollUp () {
      document.scrollingElement.scrollTop = 0
      document.scrollingElement.scrollLeft = 0
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

.routing, .normal-user-container {
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
</style>
