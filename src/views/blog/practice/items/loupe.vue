<template>
  <div class="box" id="box">
    <div class="small" id="small">
      <img src="../../../../assets/loupe/small.jpg" width="350" alt="" />
      <div class="mask" id="mask"></div>
    </div>
    <div class="big" id="big">
      <img src="../../../../assets/loupe/big.jpg" width="800" alt="" id="img" />
    </div>
  </div>

</template>

<script>
export default {
  mounted() {
    //获取元素
    var box = document.getElementById('box')
    var small = document.getElementById('small')
    var mask = document.getElementById('mask')
    var big = document.getElementById('big')
    var img = document.getElementById('img')
    var scrollTop = 0

    window.addEventListener('scroll', function() {
      scrollTop = document.documentElement.scrollTop
    })

    //需求:
    //    1. 鼠标移入到小盒子里面,黄色盒子和大盒子出现,移出,则黄色盒子和大盒子消失
    small.onmouseover = function() {
      big.style.display = 'block'
      mask.style.display = 'block'
    }
    small.onmouseout = function() {
      big.style.display = 'none'
      mask.style.display = 'none'
    }

    //
    //    2. 黄色盒子在小盒子范围内活动,鼠标在黄色盒子中间
    small.onmousemove = function(e) {
      var x = e.clientX
      var y = e.clientY - 170 + scrollTop

      var offLeft = box.offsetLeft
      var offTop = box.offsetTop

      var targetleft = x - offLeft
      var targetTop = y - offTop

      targetleft -= mask.offsetWidth / 2
      targetTop -= mask.offsetHeight / 2

      var maxX = small.offsetWidth - mask.offsetWidth
      var maxY = small.offsetHeight - mask.offsetHeight

      targetleft = targetleft < 0 ? 0 : targetleft
      targetleft = targetleft > maxX ? maxX : targetleft
      targetTop = targetTop < 0 ? 0 : targetTop
      targetTop = targetTop > maxY ? maxY : targetTop

      mask.style.left = targetleft + 'px'
      mask.style.top = targetTop + 'px'
      //    3. 黄色盒子覆盖到哪里,对应的大盒子里图片展示哪里
      //       mask相对small已移动距离/mask可移动最大距离=big相对img已移动距离/big可移动最大距离
      var imgx = targetleft / maxX * (img.offsetWidth - big.offsetWidth)
      var imgy = targetTop / maxY * (img.offsetHeight - big.offsetHeight)

      img.style.left = -imgx + 'px'
      img.style.top = -imgy + 'px'
    }
  }
}
</script>

<style scoped>
img {
  display: block;
}

* {
  margin: 0;
  padding: 0;
}

.box {
  width: 350px;
  height: 350px;
  margin: 50px auto;
  border: 1px solid #ccc;
  position: relative;
}

.big {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 0;
  left: 360px;
  overflow: hidden;
  display: none;
}

.big img {
  position: absolute;
}

.mask {
  width: 175px;
  height: 175px;
  background: rgba(255, 255, 0, 0.4);
  position: absolute;
  top: 0px;
  left: 0px;
  cursor: move;
  display: none;
}

.small {
  position: relative;
}
</style>
