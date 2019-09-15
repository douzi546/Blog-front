<template>
  <div class="index">
    <div class="blog-main">
      <el-breadcrumb class="bread" separator="">
        <el-breadcrumb-item :to="{ path: '/' }">
          <a href="javascript:;">Home</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }" class="right">
          <span class="separator">/</span>
          <a href="javascript:;" style="color:#337ab7">返回上一页</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="posts">
        <section class="post">
          <div class="post-header">
            <h5>
              <a href="javascript:;">网站建设13天－服务器部署</a>
            </h5>
            <p>Time: 2019-08-23 16:12:13
              <a href="javascript:;" class="category">网站建设日记</a>
            </p>
            <p>作者:
              <a href="">stack</a>
            </p>
          </div>
          <div class="post-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic eveniet sit ullam aspernatur. Perferendis temporibus commodi dolor vel consequuntur, ad nemo est quia mollitia illum molestiae debitis libero aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic eveniet sit ullam aspernatur. Perferendis temporibus commodi dolor vel consequuntur, ad nemo est quia mollitia illum molestiae debitis libero aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic eveniet sit ullam aspernatur. Perferendis temporibus commodi dolor vel consequuntur, ad nemo est quia mollitia illum molestiae debitis libero aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic eveniet sit ullam aspernatur. Perferendis temporibus commodi dolor vel consequuntur, ad nemo est quia mollitia illum molestiae debitis libero aut!
            </p>
            <a href="">阅读全文 </a>
            <a href="">浏览数 304 </a>
          </div>
        </section>
        <section class="post">
          <div class="post-header">
            <h5>
              <a href="javascript:;">网站建设13天－服务器部署</a>
            </h5>
            <p>Time: 2019-08-23 16:12:13
              <a href="javascript:;" class="category">网站建设日记</a>
            </p>
            <p>作者:
              <a href="">stack</a>
            </p>
          </div>
          <div class="post-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic eveniet sit ullam aspernatur. Perferendis temporibus commodi dolor vel consequuntur, ad nemo est quia mollitia illum molestiae debitis libero aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic eveniet sit ullam aspernatur. Perferendis temporibus commodi dolor vel consequuntur, ad nemo est quia mollitia illum molestiae debitis libero aut Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic eveniet sit ullam aspernatur. Perferendis temporibus commodi dolor vel consequuntur, ad nemo est quia mollitia illum molestiae debitis libero aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic eveniet sit ullam aspernatur. Perferendis temporibus commodi dolor vel consequuntur, ad nemo est quia mollitia illum molestiae debitis libero aut!!</p>
            <a href="">阅读全文 </a>
            <a href="">浏览数 304 </a>
          </div>
        </section>
        <section class="post">
          <div class="post-header">
            <h5>
              <a href="javascript:;">网站建设13天－服务器部署</a>
            </h5>
            <p>Time: 2019-08-23 16:12:13
              <a href="javascript:;" class="category">网站建设日记</a>
            </p>
            <p>作者:
              <a href="">stack</a>
            </p>
          </div>
          <div class="post-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic eveniet sit ullam aspernatur. Perferendis temporibus commodi dolor vel consequuntur, ad nemo est quia mollitia illum molestiae debitis libero aut!</p>
            <a href="">阅读全文 </a>
            <a href="">浏览数 304 </a>
          </div>
        </section>
        <section class="post">
          <div class="post-header">
            <h5>
              <a href="javascript:;">网站建设13天－服务器部署</a>
            </h5>
            <p>Time: 2019-08-23 16:12:13
              <a href="javascript:;" class="category">网站建设日记</a>
            </p>
            <p>作者:
              <a href="">stack</a>
            </p>
          </div>
          <div class="post-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic eveniet sit ullam aspernatur. Perferendis temporibus commodi dolor vel consequuntur, ad nemo est quia mollitia illum molestiae debitis libero aut!</p>
            <a href="">阅读全文 </a>
            <a href="">浏览数 304 </a>
          </div>
        </section>
      </div>
      <el-pagination background layout="prev, pager, next" :total="100" class="pagination">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.index {
  margin-top: 40px;
}
.blog-main {
  margin-left: 200px;
  margin-right: 200px;
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
  .posts {
    .post {
      border: 1px solid #89bfb4;
      padding: 1em 2em 1em 2em;
      margin-bottom: 3em;
      text-align: left;
      font-size: 14px;
      a {
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
          }
        }
      }
      .post-description {
        p {
          padding-bottom: 8px;
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
