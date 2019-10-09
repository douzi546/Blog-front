<template>
  <div class="filing">
    <div class="blog-filing">
      <div class="bread">
        <el-breadcrumb class="bread" separator="">
          <el-breadcrumb-item :to="{ path: '/blog' }">
            <a href="javascript:;">Home</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/blog/filing' }">
            <a href="javascript:;">文章归档</a>
          </el-breadcrumb-item>
          <div class="right">
            <span class="separator">/</span>
            <a href="javascript:;" @click="goBackPage" style="color:#337ab7">返回上一页</a>
          </div>
        </el-breadcrumb>
      </div>
      <div class="filingList" v-for="(sortOutByMouth,key) in articleList">
        <h3>{{key}}</h3>
        <ul>
          <li v-for="item in sortOutByMouth">
            <router-link :to="{path:'/blog/article/details',query:{id:item.article_id,username:item.user_name}}">
              <span class="title">{{item.article_title}}</span>
              <span class="dataTime">{{item.article_date | dateFormat}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      articleList: 1
    }
  },
  created() {
    this.getArticleList()
  },
  methods: {
    async getArticleList() {
      const res = await this.$http.get(
        'http://106.54.118.86:8888/articleFiling'
      )
      const { data, meta } = res.data
      if (meta.status === 200) {
        console.log(data)
        this.articleList = this.sortOutByDate(data)
        console.log(this.articleList)
      }
    },
    sortOutByDate(arr) {
      let new_arr = {}
      arr.forEach((item, index) => {
        let mouth_index = item.article_date.lastIndexOf('-')
        let article_date = item.article_date.substr(0, mouth_index)
        console.log(article_date)
        if (article_date.charAt(5) === '0') {
          article_date =
            article_date.slice(0, 4) + '年' + article_date.slice(6) + '月'
        } else {
          article_date =
            article_date.slice(0, 4) + '年' + article_date.slice(5) + '月'
        }
        if (!new_arr[article_date]) {
          new_arr[article_date] = []
          new_arr[article_date].push(item)
        } else {
          new_arr[article_date].push(item)
        }
      })
      return new_arr
    },
    goBackPage() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
.filing {
  margin-top: 40px;
}
.blog-filing {
  .bread {
    background: #f5f5f5;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    font-size: 14px;
    border-radius: 5px;
    margin-bottom: 20px;
    .right {
      float: right;
      .separator {
        margin: 0 9px;
        font-weight: 700;
        color: #c0c4cc;
      }
    }
  }
  .filingList {
    font-size: 14px;
    h3 {
      color: #4c7722;
      font-size: 24px;
    }
    ul {
      width: 100%;
      padding: 10px 20px 10px 0px;
      li {
        margin: 10px 0;
        a {
          display: block;
          span {
            display: inline-block;
          }
          span.title {
            width: 60%;
          }
          span.dataTime {
            width: 40%;
          }
        }
      }
    }
  }
}
</style>
