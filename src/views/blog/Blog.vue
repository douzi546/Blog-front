<template>
  <div class="Blog">
    <div class="container">
      <div class="header">
        <div class="nav">
          <el-menu class="el-menu-demo" mode="horizontal" background-color="#545652" text-color="#ccc" active-text-color="#fff" router>
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/blog/index">博客</el-menu-item>
            <el-menu-item index="/blog/filing">文章归档</el-menu-item>
            <el-menu-item index="/blog/practice">小练习</el-menu-item>
            <el-menu-item index="/blog/aboutMe">关于我</el-menu-item>
            <el-menu-item index="/blog/login" class="right">登录</el-menu-item>
            <el-menu-item index="/blog/signup" class="right">注册</el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="show">
        <p>豆子的个人小站</p>
        <h5>继续码起来</h5>
      </div>
      <div class="main">
        <router-view></router-view>
        <div class="aside-left">
          <div class="autorweibo">
            <h3>关于作者</h3>
            <div>
              <p>
                <a href="javascript:;"><img src="../../assets/weibo.png"> 北极熊硬糖</a>
              </p>
              <p>北京海淀区</p>
            </div>
          </div>
          <div class="github">
            项目地址
            <span>
              <a class="address" href="javascript:;">Github:https://github.com/yemaobumei/mysite </a>
            </span>
            <img src="../../assets/logo.png" alt="">
          </div>

        </div>
        <div class="aside-right">
          <div class="sortList">
            <header class=" header sortTitle">
              分类列表
            </header>
            <div class=" body sortBody">
              <ul>
                <li>
                  <a href="javascipt:;"> 刷剧不能耽搁(1)</a>
                </li>
                <li>
                  <a href="javascipt:;"> js学习(7)</a>
                </li>
                <li>
                  <a href="javascipt:;"> Python编程(5)</a>
                </li>
                <li>
                  <a href="javascipt:;">Django使人愉悦(1)</a>
                </li>
                <li>
                  <a href="javascipt:;"> LaTeX 小技巧(1)</a>
                </li>
                <li>
                  <a href="javascipt:;"> web前端工具(2)</a>
                </li>
                <li>
                  <a href="javascipt:;"> LOL 英雄联盟(1)</a>
                </li>
                <li>
                  <a href="javascipt:;"> web基础知识(3)</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="labelList">
            <header class=" header sortTitle">
              标签列表
            </header>
            <div class=" body sortBody">
              <ul>
                <li>
                  <a href="javascipt:;"> 刷剧不能耽搁(1)</a>
                </li>
                <li>
                  <a href="javascipt:;"> js学习(7)</a>
                </li>
                <li>
                  <a href="javascipt:;"> Python编程(5)</a>
                </li>
                <li>
                  <a href="javascipt:;">Django使人愉悦(1)</a>
                </li>
                <li>
                  <a href="javascipt:;"> LaTeX 小技巧(1)</a>
                </li>
                <li>
                  <a href="javascipt:;"> web前端工具(2)</a>
                </li>
                <li>
                  <a href="javascipt:;"> LOL 英雄联盟(1)</a>
                </li>
                <li>
                  <a href="javascipt:;"> web基础知识(3)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <vfooter></vfooter>
      </div>
    </div>
  </div>
</template>
<script>
import vfooter from '../../components/publicModule/vfooter'
export default {
  components: {
    vfooter
  }
}
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style-type: none;
}
.Blog {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  .header {
    background-color: #545652;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
    .el-menu-demo {
      padding-left: 30%;
      padding-right: 10%;
      .right {
        float: right;
      }
    }
    // .el-menu-item {
    //   border-bottom: none;
    // }
    // .el-menu-item.is-active {
    //   border-bottom: none;
    // }
  }
  .show {
    background: #edf4ed;
    text-align: center;
    height: 60px;
    padding: 10px 0;
    p {
      font-size: 24px;
      color: #4c7722;
    }
    h5 {
      color: #4c7722;
      position: absolute;
      left: 51%;
    }
  }
  .main {
    position: relative;
    background-color: #fff;
    color: #333;
    text-align: left;
    padding: 0;
    a {
      color: #337ab7;
      text-decoration: none;
    }
  }
  a {
    padding: 4px 5px;
  }
  a:hover {
    background: #c0c4cc;
    border-radius: 5px;
    color: #fff;
    text-decoration: underline;
  }
  .aside-left {
    width: 180px;
    position: absolute;
    left: 0;
    top: 0;
    padding: 1.8em 1em 1.8em 1.5em;
    box-sizing: border-box;
    // border-right: 1px solid #dddddd;
    margin-left: 10px;
    color: #4c7722;
    font-size: 14px;
    .autorweibo {
      padding: 1em;
      padding-bottom: 2em;
      border-bottom: 1px solid #dddddd;
      margin-bottom: 30px;
      h3 {
        margin: 10px 0;
      }
      img {
        width: 20px;
        height: 20px;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .github {
      .address {
        word-wrap: break-word;
        display: block;
      }
      img {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
  .aside-right {
    width: 150px;
    position: absolute;
    right: 20px;
    top: 0;
    border: 1px solid #dddddd;
    border-radius: 5px;
    margin-right: 5px;
    .header {
      text-align: center;
      color: #000;
      background: #f5f5f5;
      font-size: 14px;
    }
    .body {
      padding: 1em;
      li {
        margin: 1em 0;
      }
      a {
        font-size: 14px;
      }
    }
  }
}
</style>


