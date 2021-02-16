<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-row :gutter="20">
          <el-col class="explan-box"
                  :span="12"
                  v-for="(item, index) in explan"
                  :key="index">
            <span v-bind:style="item.style"
                  v-bind:class="[explanIcon, item.class]"></span>
            <div>
              <h3 class="explan-title">{{ item.title }}</h3>
              <p class="explan-desc">{{ item.desc }}</p>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row>
          <h3 class="data-explan-title">五只馋猫</h3>
          <p class="explan-desc">
            吃饭不用再排队，直接在平台上预约。 餐馆合理安排订单，减少服务员压力。<br/>
            餐馆可以查看每月每天的收入金额，每月每天完成的订单。餐馆可以为每一个菜品设置每一份捐赠贫困地区多少钱，支持那些偏远的学校等等。<br/>
            大家可以在馋猫社区发表帖子总结自己做菜心得，或者发布打卡晒自己的光盘行动，以此获得点赞赚取金币，金币可以在下次预约订单时进行折扣。
            可以在视频区自由发布视频总结做菜心得，或者晒自己的手艺，鼓励大家发掘做菜的妙趣。<br/>
            总之，解决线下吃饭不等待的问题之外，还让大家节约粮食，支援贫困地区之意。
          </p>
        </el-row>
        <el-row>
          <el-col :span="12"
                  v-for="(item, index) in dataExplan"
                  :key="index">
            <p class="data-explan-title">{{ item.title }}</p>
            <span class="data-explan-num">{{ item.num }}<span class="data-explan-num">+</span></span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="daily">
      <h1 class="daily-tip">每日推荐</h1>
      <el-col :span="8"
              class="daily-item"
              v-for="(item, index) in daily"
              :key="index">
        <a class="details" @click="item.watchDetails(item.shopId)">
          <div style="width: 393px; height: 243px">
            <el-image class="daily-image" :src="item.cover"></el-image>
          </div>
          <div>
            <h3 class="daily-title">{{ item.title }}</h3>
            <div class="daily-desc">{{ item.desc }}</div>
          </div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'FivecatsHome',
  data () {
    return {
      explanIcon: 'explan-icon',
      explan: [
        {
          title: '在线预定',
          desc: '每个商家都接受预定，不用等',
          style: `background-color: #ffd0de70; color: #ff5379 !important;`,
          class: 'el-icon el-icon-third-ic_reserve'
        },
        {
          title: '快捷支付',
          desc: '支持支付宝，微信等各种支付软件',
          style: `background-color: rgb(226 220 241 / 61%); color: rgb(154 107 253) !important;`,
          class: 'el-icon el-icon-third-gouwuche'
        },
        {
          title: '社区交友',
          desc: '分享你的美食生活，一日三餐',
          style: `background-color: rgb(185 255 243 / 49%); color: rgb(0 231 228) !important;`,
          class: 'el-icon el-icon-third-ai64'
        },
        {
          title: '坚持打卡',
          desc: '每日一打卡，节约一大步',
          style: `background-color: rgb(255 223 175 / 53%); color: rgb(254 184 1) !important;`,
          class: 'el-icon el-icon-third-zhaoxiangji'
        }
      ],
      dataExplan: [
        {
          title: '入驻商家',
          num: 350
        },
        {
          title: '日均帖子',
          num: 100
        },
        {
          title: '日均订单',
          num: 120
        },
        {
          title: '日均打卡',
          num: 540
        }
      ],
      daily: [
        {
          cover: 'http://oss.norza.cn/imgs/home/food01.jpg',
          title: '1',
          desc: '1'
        },
        {
          cover: 'http://oss.norza.cn/imgs/home/food02.jpg',
          title: '2',
          desc: '2'
        },
        {
          cover: 'http://oss.norza.cn/imgs/home/food03.jpg',
          title: '3',
          desc: '3'
        },
        {
          cover: 'http://oss.norza.cn/imgs/home/food04.jpg',
          title: '4',
          desc: '4'
        },
        {
          cover: 'http://oss.norza.cn/imgs/home/food05.jpg',
          title: '5',
          desc: '5'
        },
        {
          cover: 'http://oss.norza.cn/imgs/home/food06.jpg',
          title: '6',
          desc: '6'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  padding: 0 10%;
  margin-top: 110px;
}

.details {
  cursor: pointer;
}

.explan-icon {
  height: 70px;
  width: 70px;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  line-height: 70px;
  font-size: 26px;
  margin-bottom: 30px;
}

.data-explan-title {
  color: #9b9ba7;
  font-size: 16px;
  font-weight: 500;
}

.data-explan-num {
  font-size: 38px !important;
  font-weight: 600 !important;
  color: #4d486f !important;
}

.explan-box {
  transition: 0.5s;
  padding: 17px;
}

.explan-box:hover {
  border-radius: 5px;
  transition: 0.5s;
  box-shadow: 0 8px 35px rgb(0 0 0 / 12%);
  background-color: #fff;
}

.explan-title, .data-explan-title {
  color: #4d486f;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 17px;
}

.explan-desc {
  font-size: 16px;
  color: #9b9ba7;
  font-weight: 500;
}

.daily {
  margin-top: 110px;
  margin-bottom: 90px;
}

.daily-item {
  transition: 0.3s;
  margin-bottom: 20px;
}

.daily-item:hover {
  transition: 0.3s;
  transform: translate(-5px, -5px);
}

.daily-title {
  margin: 10px 0;
}

.daily-desc {
  font-size: 14px;
  color: #9b9ba7;
  font-weight: 300;
}

.daily-tip {
  color: #4d486f;
  font-size: 30px;
  text-align: center;
}

.daily-image {
  height: 100%;
  width: 100%;
  border-radius: 5px;
}
</style>
