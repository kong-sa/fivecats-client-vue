<template>
  <div class="message-official">
    <el-row class="title">系统通知</el-row>
    <el-divider/>
    <el-row class="message" v-for="item in httpResValue1" :key="item.id">
      <el-row>
        <el-col :span="2" class="avatar">
          <a style="cursor: pointer" @click="lookDetail(item.user.id)">
            <el-avatar
              :size="40"
              :src="item.user.avatar">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-avatar>
          </a>
        </el-col>
        <el-col :span="22">
          <el-row>
            <span style="font-size: 18px; font-weight: 600">
              <a style="cursor: pointer;" @click="lookDetail(item.user.id)">
                {{ item.user.username }}
              </a>
            </span>
            发布了<a style="cursor: pointer;" @click="lookArticle(item.id)">|{{ item.title }}|</a>
          </el-row>
          <el-row class="like-date">{{ item.date }}</el-row>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BbsMessageOfficial',
  async created () {
    let {data: httpResValue1} = await this.$http.get('/getting/articles/by?type=ann')
    this.httpResValue1 = httpResValue1
  },
  methods: {
    lookDetail (id) {
      this.$router.push('/bbs/person/space/' + id)
    },
    lookArticle (id) {
      this.$router.push('/bbs/article/details/' + id)
    }
  },
  data () {
    return {
      httpResValue1: [
        {
          'id': 0,
          'userId': 0,
          'isAnn': 0,
          'date': '',
          'like': 0,
          'type': '',
          'title': '',
          'tag': '',
          'user': {
            'id': 0,
            'experience': 0,
            'username': '',
            'password': null,
            'avatar': '',
            'date': null,
            'fans': 0,
            'gold': 0,
            'level': 0,
            'phone': null,
            'email': null
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
