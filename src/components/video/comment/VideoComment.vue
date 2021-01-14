<template>
  <div id="video-comment">
    <!-- 编辑评论 -->
    <el-row>
      <el-col :span="3">
        <el-avatar :src="customer.avatar">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-avatar>
      </el-col>
      <el-col :span="17">
        <el-input placeholder="发条友善的评论"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button style="float: right" id="publish">发表</el-button>
      </el-col>
    </el-row>
    <el-divider id="divider"></el-divider>
    <!-- 评论区 -->
    <el-row v-for="CommentItem in comment" :key="CommentItem.customerId">
      <el-col :xs="3" :span="2">
        <el-dropdown>
          <el-avatar fit="fill" :src="CommentItem.avatar">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-avatar fit="fill" :src="CommentItem.avatar">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-avatar>
              <div>用户名：<a id="username" href="">{{CommentItem.nickname}}</a></div>
              <div>个人简介：{{CommentItem.introduction}}</div>
              <div>粉丝数：{{CommentItem.fans}}</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :xs="21" :span="22" id="comment-col">
        <el-row class="comment-row" id="comment-nickname">{{CommentItem.nickname}}</el-row>
        <el-row class="comment-row" id="comment-content">{{CommentItem.content}}</el-row>
        <el-row class="comment-row" id="comment-info">
          <span id="like">
            <i></i>
            <span>{{CommentItem.likeNum}}</span>
          </span>
          <span id="comment-time">{{CommentItem.date}}</span>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'VideoComment',
  methods: {
  },
  data () {
    return {
      customer: {
        customerId: 1,
        introduction: 'Time tick away, dream faded away!',
        nickname: 'KongSama',
        avatar: 'http://oss.norza.cn/imgs/avatar/avatar01.jpg'
      },
      comment: [
        {
          customerId: 1,
          introduction: 'Time tick away, dream faded away!1',
          videoId: 1,
          nickname: 'KongSama',
          likeNum: 111,
          fans: 3100,
          content: '这是一条友善的评论...',
          date: '2021年1月13日20:26:45',
          avatar: 'http://oss.norza.cn/imgs/avatar/avatar01.jpg'
        },
        {
          customerId: 2,
          introduction: 'Time tick away, dream faded away!2',
          videoId: 1,
          nickname: '洛天lee',
          likeNum: 11,
          fans: 111,
          content: '这是一条友善的评论...',
          date: '2021年1月13日21:06:52',
          avatar: 'http://oss.norza.cn/imgs/avatar/avatar02.jpg'
        },
        {
          customerId: 3,
          introduction: 'Time tick away, dream faded away!3',
          videoId: 1,
          nickname: '万衍天堂',
          likeNum: 21,
          fans: 11,
          content: '这是一条友善的评论...',
          date: '2021年1月13日21:10:57',
          avatar: 'http://oss.norza.cn/imgs/avatar/avatar03.jpg'
        },
        {
          customerId: 4,
          introduction: 'Time tick away, dream faded away!4',
          videoId: 1,
          nickname: '间谍过家家',
          likeNum: 1,
          fans: 5,
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

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
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

/* 当屏幕小于767px时 */
@media screen and (max-width: 767px) {
  #video-comment {
    padding: 0;
  }
}
/* 当屏幕大于于767px时 */
@media screen and (min-width: 768px) {
  #video-comment {
    padding: 5% 12%;
  }
}
</style>
