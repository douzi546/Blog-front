<template>
  <div class="Blog">
    <div class="container">
      <div class="header">
        <div class="nav">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545652" text-color="#ccc" active-text-color="#fff" router>
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/blog/index">博客</el-menu-item>
            <el-menu-item index="/blog/filing">文章归档</el-menu-item>
            <el-menu-item index="/blog/practice">小练习</el-menu-item>
            <el-submenu index="/blog/articleManage/articleAdd" v-if="isLogin">
              <template slot="title">后台管理</template>
              <el-menu-item index="/blog/articleAdd">发布文章</el-menu-item>
              <el-menu-item index="/blog/articleManage">文章管理</el-menu-item>
            </el-submenu>
            <!-- <el-menu-item index="/blog/aboutMe">关于我</el-menu-item> -->
            <el-menu-item index="/blog/login" class="right" v-if="!isLogin">登录</el-menu-item>
            <el-menu-item index="/blog/signup" class="right" v-if="!isLogin">注册</el-menu-item>
            <el-menu-item index="/blog/signup" class="right" v-if="isLogin" @click="logOut">退出</el-menu-item>
            <span class="right username" v-if="isLogin">{{this.userInfo.data.user_name}}，欢迎你</span>
          </el-menu>
        </div>
      </div>
      <div class="show">
        <p>豆子的个人小站</p>
        <h5>继续码起来</h5>
      </div>
      <div class="main">
        <router-view></router-view>
        <router-view name="asideLeft"></router-view>
        <router-view name="asideRight"></router-view>
      </div>
      <router-view name="vfooter"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.userInfo = this.$store.state.userInfo
    this.verify()
  },
  data() {
    return {
      activeIndex: this.$route.path,
      isLogin: false,
      userInfo: null
    }
  },
  watch: {
    $route: 'getPath'
  },
  methods: {
    getPath() {
      this.activeIndex = this.$route.path
    },
    logOut() {
      this.isLogin = false
      this.$store.commit('userInfo', null)
      sessionStorage.removeItem('userInfo')
      this.$router.push({ path: `/` })
    },
    async verify() {
      if (!this.userInfo) {
        return
      }
      const res = await this.$http.post('http://106.54.118.86:8888/token', {
        token: this.userInfo.token
      })
      if (res.data.status === 1) {
        this.isLogin = true
      }
    }
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
    position: absolute;
    width: 100%;
    .el-menu-demo {
      padding-left: 30%;
      padding-right: 10%;
      .right {
        float: right;
      }
      .username {
        padding-right: 20px;
        color: #fff;
        font-size: 14px;
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
    padding-top: 80px;
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
    padding: 0 12%;
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
}
</style>


