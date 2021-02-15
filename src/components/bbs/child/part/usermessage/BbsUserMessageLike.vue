<template>
  <div class="message-like">
    <el-row class="title">获得的赞</el-row>
    <el-row class="message" v-for="item in res" :key="item.id">
      <el-row>
        <el-col :span="2" class="avatar">
          <a style="cursor: pointer" @click="watchPersonSpace(item.user.id)">
            <el-avatar :size="40" :src="item.user.avatar"></el-avatar>
          </a>
        </el-col>
        <el-col :span="22">
          <el-row>
            <span style="font-size: 18px; font-weight: 600">
              <a style="cursor: pointer;" @click="watchPersonSpace(item.user.id)">
                {{ item.user.username }}
              </a>
            </span>
            在你的贴子<a style="cursor: pointer;" @click="watchDetails(item.article.id)">|{{ item.article.title }}|</a>点了个赞
          </el-row>
          <el-row class="like-date">{{ item.date }}</el-row>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BbsUserMessageLike',
  async created () {
    let {data: res} = await this.$http.get('/bbs/getting/user/message?id=' + this.$store.state.user.id)
    this.res = res.arrData
  },
  methods: {
    watchPersonSpace (id) {
      this.$router.push('/bbs/person/space/' + id)
    },
    watchDetails (id) {
      this.$router.push('/bbs/article/details/' + id)
    }
  },
  data () {
    return {
      res: [
        {
          'id': 0,
          'userId': 0,
          'articleId': 0,
          'date': '',
          'likeUserId': 0,
          'isLooked': 0,
          'user': {
            'id': 1,
            'experience': 0,
            'username': '',
            'password': '',
            'avatar': '',
            'profile': '',
            'date': '',
            'fans': 0,
            'gold': 0,
            'level': 0,
            'phone': '',
            'email': ''
          },
          'article': {
            'id': 0,
            'userId': 0,
            'content': '',
            'isAnn': 0,
            'date': '',
            'like': 0,
            'type': '',
            'title': '',
            'tag': '',
            'user': ''
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}

.like-date {
  font-size: 14px;
  color: rgb(153, 162, 170);
}

a:link {
  color: black;
  text-decoration: none;
}

a:visited {
  color: black;
  text-decoration: none;
}

a:hover {
  color: rgb(140, 197, 255);
  text-decoration: none;
}

a:active {
  color: black;
  text-decoration: none;
}

.message {
  padding-top: 5px;
  border-bottom: #ebebeb solid 1px;
  padding-bottom: 10px;
}
</style>
