<template>
  <div class="detail">
    <el-breadcrumb class="bread" separator="">
      <el-breadcrumb-item :to="{ path: '/blog/index' }">
        <a href="javascript:;">Home</a>
      </el-breadcrumb-item>
      <div class="right">
        <span class="separator">/</span>
        <a href="javascript:;" @click="goBackPage">返回上一页</a>
      </div>
    </el-breadcrumb>
    <div class="article">
      <div class="article-header">
        <h5>{{oneArticle.article_title}}</h5>
        <p>Time: {{oneArticle.article_date | dateFormat}}
          <a href="javascript:;" @click="articleBySortName(oneArticle.sort_name)">{{oneArticle.sort_name}}</a>
        </p>
        <p class="article-label">标签
          <span v-for="labelList,index in labelList" :key="index">{{labelList}}</span>
        </p>
        <p>作者:
          <a href="#">{{this.user_name}}</a>
        </p>
      </div>
      <div class="article-body">
        <div class="testa" v-html="oneArticle.article_content" v-highlightB></div>
      </div>

    </div>
    <div class="comment">
      <h3>最新评论</h3>
      <p class="comment-total">
        <a href="#">{{this.commentList.length}}</a>评论
      </p>
      <div class="comment-list">
        <div class="comments" v-for="commentItem in commentList" :key="commentItem.comment_id">
          <div class="avator">
            <img src="../../../../assets/avator/01.jpg" alt=" ">
          </div>
          <div class="comment-left">
            <div class="comment-title">
              <span class="user">{{commentItem.user_name}}</span>
              发表于
              <span>window 10</span>
            </div>
            <div class="comment-content">
              {{commentItem.comment_content}}
            </div>
            <div class="comment-date">
              <span>{{commentItem.Relativetime}}</span>
            </div>
          </div>

        </div>
      </div>

    </div>
    <div class="publish-comment">
      <h3>发表评论</h3>
      <el-row type="flex" class="row-bg">
        <el-col :span="8" class="f">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="内容" prop="desc">
              <el-input type="textarea" v-model="ruleForm.content" rows="7"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="submitCom('ruleForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

    </div>

  </div>
</template>

<script>
export default {
  inject: ['reload'],
  created() {
    if (this.$store.state.userInfo) {
      this.ruleForm.login_id = this.$store.state.userInfo.data.user_id
    }
    let id = this.$route.query.id
    this.user_name = this.$route.query.username
    this.getOneArticleById(id)
  },
  data() {
    return {
      oneArticle: -1,
      user_name: '',
      commentList: 1,
      labelList: 1,
      ruleForm: {
        login_id: '',
        content: '',
        art_id: ''
      },
      rules: {
        content: [
          { required: true, message: '请填写评论内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitCom(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (!this.ruleForm.login_id) {
            this.$message('请先登录再评论')
            return
          }
          const res = await this.$http.post(
            'http://106.54.118.86:8888/submitCom',
            {
              login_id: this.ruleForm.login_id,
              art_id: this.ruleForm.art_id,
              content: this.ruleForm.content,
              date: new Date()
            }
          )
          if (res.data.status === 200) {
            this.$message('评论成功')
            this.reload()
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async getOneArticleById(id) {
      const res = await this.$http.get(
        `http://106.54.118.86:8888/articleOne/${id}`
      )
      const { data, meta } = res.data
      if (meta.status === 200) {
        this.oneArticle = data[0]
        this.ruleForm.art_id = this.oneArticle.article_id
        this.getCommentsByArticleId(this.oneArticle.article_id)
        this.getOneArticleLabelById(this.oneArticle.article_id)
      }
    },
    async getOneArticleLabelById(id) {
      const res = await this.$http.get(
        `http://106.54.118.86:8888/articleLabelOne/${id}`
      )
      const { data, meta } = res.data
      if (meta.status === 200) {
        this.labelList = data
      }
    },
    async getCommentsByArticleId(id) {
      const res = await this.$http.get(
        `http://106.54.118.86:8888/articleComments/${id}`
      )
      const { data, meta } = res.data
      if (meta.status === 200) {
        this.commentList = data
        this.commentRelativeTime()
      }
    },
    commentRelativeTime() {
      var minute = 1000 * 60
      var hour = minute * 60
      var day = hour * 24
      var halfamonth = day * 15
      var month = day * 30

      this.commentList.forEach((item, index) => {
        let now = new Date().getTime()
        let comment_date = new Date(item.comment_date).getTime()
        let dValue = now - comment_date
        if (dValue < 0) {
          return
        }
        let monthC = dValue / month
        let weekC = dValue / (7 * day)
        let dayC = dValue / day
        let hourC = dValue / hour
        let minC = dValue / minute
        let result

        if (monthC >= 1) {
          result = '发表于' + parseInt(monthC) + '个月前'
        } else if (weekC >= 1) {
          result = '发表于' + parseInt(weekC) + '周前'
        } else if (dayC >= 1) {
          result = '发表于' + parseInt(dayC) + '天前'
        } else if (hourC >= 1) {
          result = '发表于' + parseInt(hourC) + '个小时前'
        } else if (minC >= 1) {
          result = '发表于' + parseInt(minC) + '分钟前'
        } else result = '刚刚发表'
        item.Relativetime = result
      })
    },
    goBackPage() {
      this.$router.go(-1)
    },
    articleBySortName(name) {
      this.$router.push({ path: `/blog/sorts/category/${name}` })
      this.reload()
    }
  }
}
</script>

<style lang="less">
.detail {
  margin-top: 40px;
  box-sizing: border-box;
  h3 {
    color: burlywood;
    font-size: 20px;
    margin: 10px 0;
  }
  .bread {
    background: #f5f5f5;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    font-size: 14px;
    border-radius: 5px;
    margin-bottom: 30px;
    .right {
      float: right;
      .separator {
        margin: 0 9px;
        font-weight: 700;
        color: #c0c4cc;
      }
    }
  }
  .article {
    padding: 0 3%;
    margin-bottom: 50px;
    .article-header {
      h5 {
        margin: 10px 0;
        font-size: 20px;
        color: #545652;
      }
      p {
        color: #438346;
        padding: 8px 0;
        font-size: 14px;
      }
      .article-label {
        span {
          display: inline-block;
          background: #c0c4cc;
          border-radius: 5px;
          margin: 0 5px;
          color: #f8f8f8;
          font-weight: 700;
          height: 20px;
          line-height: 20px;
          text-align: center;
          padding: 0 5px;
        }
      }
    }
    .testa {
      p {
        padding: 10px 0;
      }
      .hljs {
        border-radius: 5px;
      }
    }
  }
  .comment {
    .comment-total {
      a {
        font-size: 24px;
      }
    }
    .comments {
      border: 1px solid #ccc;
      height: 130px;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
      .avator {
        float: left;
        width: 60px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
      .comment-left {
        width: 90%;
        float: left;
        font-size: 14px;
        .comment-title {
          height: 20px;
          line-height: 20px;
          .user {
            font-weight: 700;
            margin-right: 10px;
          }
        }
        .comment-content {
          padding: 10px 0;
          width: 100%;
          height: 60px;
          overflow: hidden;
          line-height: 23px;
        }
        .comment-date {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
