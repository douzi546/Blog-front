<template>
  <div class="aside-left">
    <div class="autorweibo">
      <h3>关于作者</h3>
      <div>
        <p>
          <a href="javascript:;"><img src="../../assets/weibo.png"> 暂无</a>
        </p>
        <p>中国</p>
      </div>
    </div>
    <div class="github">
      项目地址
      <span>
        <a class="address" href="https://github.com/douzi546">Github:https://github.com/douzi546 </a>
      </span>
      <img src="../../assets/logo.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: 'aside-left'
}
</script>

<style lang="less">
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
</style>
