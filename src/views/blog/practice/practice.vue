<template>
  <div class="practice">
    <div class="aside-practice">
      <h3>
        <a href="">练手项目</a>
      </h3>
      <ul>
        <!-- <li>
          <router-link :to="{path:'/blog/practice/items/breathecarousel'}">原生js实现呼吸轮播图</router-link>
        </li>
        <li>
          <router-link :to="{path:'/blog/practice/items/snakes'}">原生js简易版贪吃蛇</router-link>
        </li>
        <li>
          <router-link :to="{path:'/blog/practice/items/tuling'}">jq+ajax调用图灵机器人接口</router-link>
        </li> -->
        <li v-for="item in practiceLists" :key="item.id">
          <a href="javascript:;" @click="practiceList(item.path,item.practiceTitle)">{{item.practiceTitle}}</a>
        </li>
      </ul>
    </div>
    <div class="content-practice">
      <p class="practice-title">{{practiceName}}</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      practiceName: '原生js实现呼吸轮播图',
      practiceLists: [
        {
          id: 1,
          practiceTitle: '原生js呼吸轮播图',
          path: '/blog/practice/items/breathecarousel'
        },
        {
          id: 2,
          practiceTitle: '原生js简易版贪吃蛇',
          path: '/blog/practice/items/snakes'
        },
        {
          id: 3,
          practiceTitle: '原生js图片放大镜',
          path: '/blog/practice/items/loupe'
        },
        {
          id: 4,
          practiceTitle: 'jq+ajax调用图灵机器人接口',
          path: '/blog/practice/items/tuling'
        },
        {
          id: 5,
          practiceTitle: 'html+css仿写马蜂窝首页',
          path: '/blog/practice/items/mafengwo'
        },
        {
          id: 6,
          practiceTitle: 'html+css+js仿写移动端京东首页',
          path: '/blog/practice/items/JDindex'
        }
      ]
    }
  },
  methods: {
    practiceList(path, title) {
      this.practiceName = title
      this.$router.push({ path: path })
    }
  }
}
</script>

<style lang="less" scoped>
.practice {
  margin-top: 30px;
  width: 100%;
  height: 750px;
  .aside-practice {
    position: absolute;
    left: 0;
    top: 0;
    margin: 30px;
    h3 {
      padding: 10px 0;
      font-size: 16px;
      a {
        color: #707922;
      }
    }
    ul {
      padding: 15px 0;
      font-size: 14px;
      li {
        border: 1px solid #ccc;
        border-bottom: none;
        padding: 10px;
      }
      li:last-child {
        border: 1px solid #ccc;
      }
    }
  }
  .practice-title {
    text-align: center;
    font-size: 28px;
    color: #c3a373;
  }
  .content-practice {
    margin-left: 10%;
    margin-right: 10%;
    border: 1px solid #ccc;
    height: 100%;
    border-radius: 5px;
    background-color: rgba(204, 204, 204, 0.2);
    padding-top: 10px;
  }
}
</style>
