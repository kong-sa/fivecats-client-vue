<template>
  <div id="video-comment-area" style="padding: 5% 14%">
    <el-row :gutter="10">
      <el-col :span="2">
        <el-avatar :src="customer.avatar"></el-avatar>
      </el-col>
      <el-col :span="20">
        <el-input placeholder="发条友善的评论"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button id="publish">发表</el-button>
      </el-col>
    </el-row>
    <el-divider id="divider"></el-divider>
    <el-row v-for="item in comment" :key="item.customerId">
      <el-col :span="2">
        <el-avatar fit="fill" :src="item.avatar" @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" alt=""/>
        </el-avatar>
      </el-col>
      <el-col :span="22" id="comment-col">
        <el-row class="comment-row" id="comment-nickname">{{item.nickname}}</el-row>
        <el-row class="comment-row" id="comment-content">{{item.content}}</el-row>
        <el-row class="comment-row" id="comment-info">
          <span id="like">
            <i></i>
            <span>{{item.likeNum}}</span>
          </span>
          <span id="comment-time">{{item.date}}</span>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'VideoCommentArea',
  methods: {
    errorHandler () {
      return true
    }
  },
  data () {
    return {
      customer: {
        customerId: 1,
        nickname: 'KongSama',
        avatar: 'http://oss.norza.cn/imgs/avatar/avatar01.jpg'
      },
      comment: [
        {
          customerId: 1,
          videoId: 1,
          nickname: 'KongSama',
          likeNum: 111,
          content: '这是一条友善的评论...',
          date: '2021年1月13日20:26:45',
          avatar: 'http://oss.norza.cn/imgs/avatar/avatar01.jpg'
        },
        {
          customerId: 2,
          videoId: 1,
          nickname: '洛天lee',
          likeNum: 11,
          content: '这是一条友善的评论...',
          date: '2021年1月13日21:06:52',
          avatar: 'http://oss.norza.cn/imgs/avatar/avatar02.jpg'
        },
        {
          customerId: 3,
          videoId: 1,
          nickname: '万衍天堂',
          likeNum: 21,
          content: '这是一条友善的评论...',
          date: '2021年1月13日21:10:57',
          avatar: 'http://oss.norza.cn/imgs/avatar/avatar03.jpg'
        },
        {
          customerId: 4,
          videoId: 1,
          nickname: '间谍过家家',
          likeNum: 1,
          content: '这是一条友善的评论...',
          date: '2021年1月13日21:17:02',
          avatar: 'http://oss.norza.cn/imgs/avatar/avatar04.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
#comment-col {
  margin-bottom: 10px;
}

.comment-row {
  margin: 10px 0 10px 0;
}

#comment-nickname {
  font-size: 13px;
  font-weight: bold;
}

#comment-info {
  font-size: 13px;
}

#like {
  cursor: pointer;
  margin-right: 10px;
}

i {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  background-image: url("http://oss.norza.cn/imgs/thumb.png");
  background-position: center center;
}

#publish {
  background-color: rgb(140, 197, 255);
}

#divider {
  margin-top: 50px;
}
</style>
