<template>
  <div class="vfooter">
    <dl class="footer-msg">
      <dt>豆子的个人小站</dt>
      <dt>©All rights reserved</dt>
      <dt>Powered by yemaobumei</dt>
      <dd>
        <a href="#" class="weibo icon"></a>
        <a href="#" class="none icon"></a>
        <a href="#" class="space icon"></a>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'vfooter'
}
</script>

<style lang="less">
.vfooter {
  padding: 10px 0;
  background: #f5f5f5;
  text-align: center;
  color: rgb(32, 13, 13);
  font-size: 16px;
  margin-top: 5%;
  dt {
    margin: 10px 0;
  }
  dd {
    margin-top: 30px;
    position: relative;
    .icon {
      display: inline-block;
      width: 23px;
      height: 23px;
      background: url('../../assets/mfw-footer-sprite7.png') no-repeat;
      margin-right: 30px;
    }
    .weibo {
      background-position: 5px 0px;
    }
    .none {
      background-position: -27px 0px;
    }
    .space {
      background-position: -60px 0px;
      margin-right: 0px;
    }
  }
}
</style>
