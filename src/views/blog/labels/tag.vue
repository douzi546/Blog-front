<template>
  <div class="index">
    <div class="blog-main">
      <el-breadcrumb class="bread" separator="/">
        <el-breadcrumb-item :to="{ path: '/blog/index' }">
          <a href="javascript:;">Home</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item class="cur">{{this.tagName}}</el-breadcrumb-item>
        <div class="right">
          <span class="separator">/</span>
          <router-link :to="{ path: '/blog/index' }">返回上一页</router-link>
        </div>
      </el-breadcrumb>
      <div class="posts" v-for="articleItem,index in articleList" :key="index">
        <section class="post">
          <div class="post-header">
            <h5>
              <router-link :to="{path:'/blog/article/details',query:{id:articleItem.article_id,username:articleItem.user_name}}">{{articleItem.article_title}}</router-link>
            </h5>
            <p>Time: {{articleItem.article_date | dateFormat}}
              <a href="javascript:;" class="category" @click="articleBySortName(articleItem.sort_name)">{{articleItem.sort_name}}</a>
            </p>
            <p>作者:
              <a href="">{{articleItem.user_name}}</a>
            </p>
          </div>
          <div class="post-description">
            <div class="posts-contentTag">
              <div class="testa" v-html="articleItem.article_content"></div>
            </div>
            <router-link :to="{path:'/blog/article/details',query:{id:articleItem.article_id,username:articleItem.user_name}}">阅读全文</router-link>
          </div>
        </section>
      </div>
      <!-- <el-pagination background layout="prev, pager, next" :total="articleTotal" :pageSize="pageSize" class="pagination" @current-change="changePage">
      </el-pagination> -->
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  data() {
    return {
      articleList: 1,
      tagName: 1
    }
  },
  created() {
    this.articleByTagName()
  },
  methods: {
    async articleByTagName() {
      const name = this.$route.params.params
      this.tagName = this.$route.params.params
      const res = await this.$http.get(
        `http://106.54.118.86:8888/articleByTag/${name}`
      )
      const { data, meta } = res.data
      if (meta.status === 200) {
        this.articleList = data
      }
    },
    articleBySortName(name) {
      this.$router.push({ path: `/blog/sorts/category/${name}` })
      this.reload()
    }
  }
}
</script>

<style lang="less" scoped>
.index {
  margin-top: 40px;
  min-height: 700px;
}
.blog-main {
  .bread {
    background: #f5f5f5;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    font-size: 14px;
    border-radius: 5px;
    margin-bottom: 30px;
    .cur {
      span:last-child {
        display: none;
      }
    }
    .right {
      float: right;
      .separator {
        margin: 0 9px;
        font-weight: 700;
        color: #c0c4cc;
      }
    }
  }
  .posts {
    .post {
      border: 1px solid #89bfb4;
      padding: 1em 2em 1em 2em;
      margin-bottom: 2em;
      text-align: left;
      font-size: 14px;
      a {
        font-size: 14px;
        padding: 4px 5px;
      }
      a:hover {
        background: #c0c4cc;
        border-radius: 5px;
        color: #fff;
        text-decoration: underline;
      }
      .post-header {
        h5 {
          margin: 10px 0;
          font-weight: normal;
        }
        p {
          margin: 10px 0;
          color: #438346;
          .category {
            margin-left: 10px;
            color: #ccc;
          }
        }
      }
      .post-description {
        .posts-contentTag {
          padding-bottom: 6px;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 2em;
        }
      }
    }
  }
  .pagination {
    padding-left: 0;
    margin: 20px 0;
  }
}
</style>

