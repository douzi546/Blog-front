<template>
  <div>
    <div class="aboutMe">
      <header class="theTitle">
        天道酬勤 + 求知欲 == success =>True
      </header>
      <div class="descBody">
        <p>作者92年生，来自浙江衢州。本科毕业于美丽的兰州大学，学的是原子核物理专业。目前就读于北京师范大学，攻读理论物理硕士。要说怎么一个学物理的来写网站了，那要从接触Python说起。</p>
        <p>
          研究僧阶段一直在水知乎，知乎上程序猿貌似挺多的。看到各种人夸Python的好用，"人生苦短，use Python"。然后我就在闲暇时间学习了Python,看的是《Python核心编程》。看完后认识了什么是面向对象编程，这与Fortran是很不一样的。类，多态，继承，闭包好多从来没接触的概念让我感觉自己进入了一个崭新的世界。Python功能真是太强大了，太灵活了，太适合开发了。写Python代码就跟写英文文章一样优雅，让我爱上了编程。而且Python有各种好用的库。接下来就选择了一个方向去学，觉得做网站比较酷炫，能把自己的东西立马展示出来。花了一个多月时间在Django框架的学习上，起初官方文档的各种枯燥的术语弄的我头很大，就去看些教学视频，相对更加通俗易懂，而且立马了解了大致框架。紧接着进入寒假，学习了《Python Web开发测试驱动》,撇去测试。这本书真是告诉了你网站开发的学习流程，让你一下子思路清晰起来，不在那么迷茫。在回来的火车上看完了tang with Django。没办法，就是这么好学。这个时候已经能做出简陋难看的静态网站，就是各种链接跳转。在知乎上python有哪些好的练手项目里看到一位学生写的图书管理系统，于是乎fork了来自己学习，然后各种搜索教程，将它部署到了新浪云上。这个时候已经能通过网络访问自己的网站了。成就感大大的有木有。
        </p>
        <p>后来就放弃了这个项目，开始学习html,css,js，练习如何写出一个好看一点的页面。边看书边刷慕课网上的前端工程师计划课程。期间看的书有《精通css》《javascript高级程序设计》《深入理解Bootstrap》《javascript设计模式与开发实践》《锋利的Jquery》看完这些，自己差不多有了开发一个丰富页面的能力。对于前端js很重要，就多读了几本书，《js语言精粹》《javascript DOM编程艺术》。然后好好学习了一下《pro git》。版本库对于一个写代码的真是非常有用。 学习了这么多，也就有了现在这个网站，基于Django,Bootstrap开发。目前主要有的功能是博客，还展示了一些自己写的js动画效果。
        </p>
        <dl>
          <dt>关于博客,实现如下功能</dt>
          <dd>用户注册激活登陆模块</dd>
          <dd>用户发表评论留言</dd>
          <dd>用户中心展示用户发表的评论回复数</dd>
          <dd>文章归档分类</dd>
          <dd>前端实现作者的文章发表修改删除</dd>
          <dt>博客的小插曲</dt>
          <dd>前后端交互时　运用了ajax提高了用户体验</dd>
          <dd>良好的实现了移动端与pc端的兼容</dd>
          <dd>不足的是各个浏览器的兼容做的不够好。</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.aboutMe {
  width: 700px;
  margin: 20px auto;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 14px;
  .theTitle {
    text-align: center;
    color: #000;
    background: #f5f5f5;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
  }
  .descBody {
    padding: 1em;
    p {
      margin-bottom: 10px;
    }
  }
}
</style>
