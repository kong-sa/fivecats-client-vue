<template>
  <div id="video-comment">
    <!--1行 评论编辑-->
    <el-row>
      <!--1列 头像-->
      <el-col :span="3">
        <el-avatar :src="customer.avatar">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-avatar>
      </el-col>
      <!--2列 评论输入框-->
      <el-col :span="17">
        <el-input v-model="content" placeholder="发条友善的评论"></el-input>
      </el-col>
      <!--3列 发表按钮-->
      <el-col :span="4">
        <el-button @click="publish" style="float: right" id="publish-button">发表</el-button>
      </el-col>
    </el-row>
    <el-divider id="divider"></el-divider>
    <!--2行 评论区-->
    <el-row v-for="CommentItem in comment" :key="CommentItem.id">
      <!--1列 头像-->
      <el-col :xs="3" :span="2">
        <!--下拉框，鼠标悬停显示用户详细信息-->
        <el-dropdown>
          <el-avatar fit="fill" :src="CommentItem.avatar">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-avatar>
          <!--下拉面板-->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <!--用户头像-->
              <el-avatar fit="fill" :src="CommentItem.avatar">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-avatar>
              <!--相关信息-->
              <div>用户名：<a id="nickname" href="">{{CommentItem.username}}</a></div>
              <div>个人简介：{{CommentItem.profile}}</div>
              <div>粉丝数：{{CommentItem.fans}}</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <!--2列 评论-->
      <el-col :xs="21" :span="22" id="comment-col">
        <!--1行 用户名-->
        <el-row class="comment-row" id="comment-nickname">{{CommentItem.username}}</el-row>
        <!--2行 内容-->
        <el-row class="comment-row" id="comment-content">{{CommentItem.content}}</el-row>
        <!--3行 点赞-->
        <el-row class="comment-row" id="comment-info">
          <!--点赞图标-->
          <span id="like">
            <i></i><span>{{CommentItem.likes}}</span>
          </span>
          <!--点赞数-->
          <span id="comment-time">{{CommentItem.createdDate}}</span>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'VideoComment',
  methods: {
    publish () {
      this.$http.post('setting/video/comment', {
        avatar: 'http://oss.norza.cn/imgs/avatar/customer/1/avatar01.jpg',
        username: 'kongsama',
        profile: 'Time tick away, dream faded away!',
        fans: 150,
        videoId: 1,
        content: this.content
      })
      this.$forceUpdate()
    }
  },
  async created () {
    let { data: value } = await this.$http.get('/getting/video/comment?videoId=1')
    this.comment = value
  },
  data () {
    return {
      content: '',
      customer: {
        fans: 150,
        profile: 'Time tick away, dream faded away!',
        username: 'kongsama',
        avatar: 'http://oss.norza.cn/imgs/avatar/customer/1/avatar01.jpg'
      },
      comment: []
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

  #publish-button {
    background-color: rgb(140, 197, 255);
  }

  #divider {
    margin-top: 50px;
  }

  /* 当屏幕宽度小于768px时 */
  @media screen and (max-width: 768px) {
    #video-comment {
      padding: 0;
    }
  }

  /* 当屏幕宽度大于768px时 */
  @media screen and (min-width: 768px) {
    #video-comment {
      padding: 5% 12%;
    }
  }
</style>
