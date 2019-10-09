<template>
  <div class="container">
    <div class="slide">
      <!-- html结构 -->
      <el-carousel indicator-position="outside" :height="height + 'px'">
        <el-carousel-item v-for="(item,index) in BannerImg" :key="index">
          <img :src="item.src">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="index-content">
      <!-- html结构 -->
      <transition name="fade">
        <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
          <swiper-slide class="swiper-slide1">
            <div class="page one">
              <div class="banner">
                <div class="title">
                  <div class="hr"></div>
                  <h1 class="blogName">小站</h1>
                  <div class="hr"></div>
                  <p>永远努力在你的生活之上保留一片天空</p>
                </div>
                <div class="wrap">
                  <el-button class="myBlog btn" size="small" @click="MyBlog">My Blog</el-button>
                  <el-button class="myWork btn" size="small" @click="MyWork">My work</el-button>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide2">
            <div class="page two">
              <div class="lead-overlay">
                <div class="blog item">
                  <img src="../assets/swiper1.jpg" alt="">
                  <div class="trait">
                    <div class="title">博客特点</div>
                    <ul>
                      <li>- 用户：用户可以注册和登录，发表文章和评论。</li>
                      <li>- 评论：用户登录后可以对文章进行修改和删除。</li>
                      <li>- 分类：文章可以进行分类和归档。</li>
                      <li>- 标签：添加和删除标签，给文章设置标签。</li>
                    </ul>
                  </div>
                </div>
                <div class="practice item">
                  <div class="my-practice">
                    <div>
                      <div class="title">小练习</div>
                      <ul>
                        <li>- html+css+js仿写移动端京东首页</li>
                        <li>- html+css仿写马蜂窝首页</li>
                        <li>- 原生js呼吸轮播图</li>
                        <li>- jq+ajax调用图灵机器人接口</li>
                      </ul>
                    </div>
                  </div>
                  <img src="../assets/swiper2.jpg" alt="">
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide3">
            <div class="page three">
              <div class="lead-overlay">
                <div class="skill">
                  <p>技能</p>
                  <div class="tag">
                    <span>Vue</span>
                    <span>Jquery</span>
                  </div>
                  <div class="tag">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </div>
                  <div class="tag">
                    <span>MYSQL</span>
                    <span>Git</span>
                  </div>
                  <div class="tag">
                    <span>---</span>
                    <span>---</span>
                    <span>---</span>
                    <span>---</span>
                    <span>---</span>
                  </div>
                </div>
                <div class="footer">
                  <dl class="footer-msg">
                    <dt>豆子的个人小站</dt>
                    <dt>©All rights reserved</dt>
                    <dt>Powered by yemaobumei</dt>
                    <dt>访问量:13690</dt>
                    <dd>
                      <a href="#" class="weibo icon"></a>
                      <a href="#" class="none icon"></a>
                      <a href="#" class="space icon"></a>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </transition>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Index',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      BannerImg: [
        {
          src: require('../assets/swiper1.jpg')
        },
        {
          src: require('../assets/swiper2.jpg')
        },
        {
          src: require('../assets/swiper3.jpg')
        }
      ],
      height: window.innerHeight,
      swiperOption: {
        autoplay: true,
        delay: 5000,
        notNextTick: true, //组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: 'vertical', //垂直方向移动
        slidesPerView: 1,
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight, // 高度设置，占满设备高度
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        observer: true
      }
    }
  },
  methods: {
    MyBlog() {
      this.$router.push('/blog')
    },
    MyWork() {
      this.$router.push('/blog/practice')
    }
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}
ul {
  list-style: none;
}
.container {
  width: 100%;
  height: 100%;
}
.slide {
  position: fixed;
  z-index: -1;
  top: 0px;
  width: 100%;
}
.index-content {
  overflow: hidden;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  .page {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease 0s;
  }
  .one {
    .banner {
      width: 200px;
      margin: 0 auto;
      padding-top: 10%;
      color: #fff;
      .title {
        .blogName {
          text-align: center;
        }
        .hr {
          width: 200px;
          height: 4px;
          background: #fff;
        }
        p {
          margin-top: 50px;
          text-align: center;
        }
      }
      .wrap {
        margin-top: 30px;
        text-align: center;
        .myBlog {
          background: #e96656;
          border: #e96656;
        }
        .myWork {
          background: #20aa73;
          border: #20aa73;
        }
        .btn {
          font-weight: 700;
          color: #fff;
        }
        .btn:hover {
          color: #000;
        }
      }
    }
  }
  .two {
    // background-image: url('../assets/swiper4.jpg');
    .lead-overlay {
      position: relative;
      height: 100%;
      width: 100%;
      background: rgba(49, 179, 131, 0.8);
      z-index: 1;
    }
    .blog {
      height: 50%;
      img {
        width: 40%;
        float: left;
      }
      .trait {
        width: 60%;
        float: left;
        padding-left: 20%;
        margin-top: 8%;
        box-sizing: border-box;
      }
    }
    .practice {
      height: 50%;
      .my-practice {
        width: 60%;
        float: left;
        padding-left: 10%;
        margin-top: 5%;
        box-sizing: border-box;
      }
      img {
        width: 40%;
        float: left;
      }
    }
    .item {
      font-size: 18px;
      color: #fff;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        padding: 4px 0;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 600;
    }
  }
  .three {
    // background-image: url('../assets/swiper2.jpg');
    .lead-overlay {
      position: relative;
      height: 100%;
      width: 100%;
      background: rgba(49, 199, 151, 0.8);
      z-index: 1;
    }
    .skill {
      width: 500px;
      padding-top: 8%;
      margin: 0 auto;
      text-align: center;
      p {
        font-weight: 700;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 40px;
      }
      .tag {
        margin-bottom: 0.5em;
        span {
          display: inline-block;
          background: #28da4f;
          margin: 5px;
          padding: 8px;
          color: #fff;
          border-radius: 5px;
          font-size: 14px;
        }
        span:nth-child(odd) {
          background: #2bb373;
        }
      }
    }
    .footer {
      text-align: center;
      margin-top: 10%;
      color: rgb(32, 13, 13);
      font-size: 16px;
      dt {
        margin: 10px 0;
      }
      dd {
        margin-top: 30px;
        position: relative;
        left: -4px;
        .icon {
          display: inline-block;
          width: 27px;
          height: 27px;
          background: url('../assets/mfw-footer-sprite7.png') no-repeat;
          margin-right: 30px;
        }
        .weibo {
          background-position: 0px 0px;
        }
        .none {
          background-position: -30px 0px;
        }
        .space {
          background-position: -60px 0px;
          margin-right: 0px;
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>



