<template>
  <div class="lunbotu" id="lunbotu">
    <div class="imagelist" id="imagelist">
      <ul id="oul">
        <li class="first">
          <img src="../../../../assets/breathecarousel/image/aaa.jpg">
        </li>
        <li>
          <img src="../../../../assets/breathecarousel/image/bbb.jpg">
        </li>
        <li>
          <img src="../../../../assets/breathecarousel/image/ccc.jpg">
        </li>
        <li>
          <img src="../../../../assets/breathecarousel/image/ddd.jpg">
        </li>
        <li>
          <img src="../../../../assets/breathecarousel/image/eee.jpg">
        </li>
      </ul>
    </div>
    <div class="btnl" id="btnl"></div>
    <div class="btnr" id="btnr"></div>
    <div class="yuanlist">
      <ul class="yuanul" id="circle">
        <li class="currentc"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var olunbotu = document.getElementById('lunbotu')
    // var imagelist= document.getElementById('imagelist');

    //按钮
    var oBtnl = document.getElementById('btnl')
    var oBtnr = document.getElementById('btnr')

    //小圆点的li
    var oCircle = document.getElementById('circle').getElementsByTagName('li')
    //图片的li
    var oul = document.getElementById('oul')
    var oli = oul.getElementsByTagName('li')

    var width = 672
    var time = 1000
    var tween = 'BounceEaseOut'
    var interval = 500
    var lislength = oli.length
    var nowbtn = 0

    oBtnr.onclick = oBtnrHandler
    var timer = setInterval(oBtnrHandler, 2000)

    olunbotu.onmouseover = function() {
      clearInterval(timer)
    }
    olunbotu.onmouseout = function() {
      timer = setInterval(oBtnrHandler, 2000)
    }

    function oBtnrHandler() {
      if (oli[nowbtn].isanimated) return
      animate(oli[nowbtn], { opacity: 0 }, interval)
      nowbtn++
      if (nowbtn > lislength - 1) {
        nowbtn = 0
      }
      animate(oli[nowbtn], { opacity: 1 }, interval)
      circlemove()
    }
    oBtnl.onclick = function() {
      if (oli[nowbtn].isanimated) return
      animate(oli[nowbtn], { opacity: 0 }, interval)
      nowbtn--
      if (nowbtn < 0) {
        nowbtn = lislength - 1
      }
      animate(oli[nowbtn], { opacity: 1 }, interval)
      circlemove()
    }

    for (let i = 0; i < oCircle.length; i++) {
      ;(function(i) {
        oCircle[i].onclick = function() {
          if (oli[nowbtn].isanimated) return
          animate(oli[nowbtn], { opacity: 0 }, interval)
          nowbtn = i
          circlemove()
          animate(oli[i], { opacity: 1 }, interval)
        }
      })(i)
    }

    function circlemove() {
      for (let i = 0; i < oCircle.length; i++) {
        oCircle[i].className = ''
      }
      oCircle[nowbtn].className = 'currentc'
    }
    function animate(box, targetJSON, time, tweenstring, callback) {
      if (
        arguments.length < 3 ||
        typeof arguments[0] != 'object' ||
        typeof arguments[1] != 'object' ||
        typeof arguments[2] != 'number'
      ) {
        throw new Error('对不起，你输入的对象有误或者对象类型错误、')
        return
      } else if (arguments.length == 3) {
        tweenstring = 'Linear'
        callback = null
      } else if (arguments.length == 4) {
        switch (typeof arguments[3]) {
          case 'string':
            callback = null
            break
          case 'function':
            callback = arguments[3]
            tweenstring = 'Linear'
            break
          default:
            throw new Error(
              '抱歉，第4个参数要么是缓冲描述词，要么是回调函数，请检查！'
            )
        }
      }

      //浏览器速度兼容，IE浏览器时间隔设置为50，其他浏览器为10.
      if (window.navigator.userAgent.indexOf('MSIE') != -1) {
        var Interval = 50
      } else {
        var Interval = 10
      }

      var count = 0 //计数器，用于计算当前定时器调用次数
      var maxcount = time / Interval //需调用次数

      var variationJSON = {} //变化量信号量对象
      var originalJSON = {} //原始信号量对象

      box.isanimated = true

      for (var k in targetJSON) {
        originalJSON[k] = parseFloat(fetchComputedStyle(box, k))
        targetJSON[k] = parseFloat(targetJSON[k]) //目标信号量对象
        variationJSON[k] = targetJSON[k] - originalJSON[k]
      }
      // console.log(originalJSON)
      // console.log(variationJSON)
      // console.log(targetJSON)
      var n

      var timer = setInterval(function() {
        for (var k in targetJSON) {
          n = Tween[tweenstring](
            count,
            originalJSON[k],
            variationJSON[k],
            maxcount
          )
          if (k != 'opacity') {
            box.style[k] = n + 'px'
          } else {
            box.style[k] = n
            box.style.fliter = 'alpha(opacity=' + n * 100 + ')'
          }
        }
        count++
        //判断计数器是否达到需调用次数，达到后强行将盒子当前属性值拉回到终点属性值
        if (count == maxcount) {
          for (var k in targetJSON) {
            //判断属性是否为opacity，是的话去掉px，加上fliter属性
            if (k != 'opacity') {
              box.style[k] = targetJSON[k] + 'px'
            } else {
              box.style[k] = targetJSON[k] + 'px'
              box.style.fliter = 'alpha(opacity=' + targetJSON[k] * 100 + ')'
            }
          }
          //达到目的后清除定时器，盒子停止运动
          clearInterval(timer)
          box.isanimated = false
          callback && callback.call(box)
        }
      }, Interval)

      //计算后样式
      function fetchComputedStyle(obj, property) {
        //能力检测
        if (window.getComputedStyle) {
          //现在要把用户输入的property中检测一下是不是驼峰，转为连字符写法
          //强制把用户输入的词儿里面的大写字母，变为小写字母加-
          //paddingLeft  →  padding-left
          property = property.replace(/([A-Z])/g, function(match, $1) {
            return '-' + $1.toLowerCase()
          })

          return window.getComputedStyle(obj)[property]
        } else {
          //IE只认识驼峰，我们要防止用户输入短横，要把短横改为大写字母
          //padding-left  → paddingLeft
          property = property.replace(/\-([a-z])/g, function(match, $1) {
            return $1.toUpperCase()
          })

          return obj.currentStyle[property]
        }
      }

      var Tween = {
        Linear: function(t, b, c, d) {
          return c * t / d + b
        },
        //二次的
        QuadEaseIn: function(t, b, c, d) {
          return c * (t /= d) * t + b
        },
        QuadEaseOut: function(t, b, c, d) {
          return -c * (t /= d) * (t - 2) + b
        },
        QuadEaseInOut: function(t, b, c, d) {
          if ((t /= d / 2) < 1) return c / 2 * t * t + b
          return -c / 2 * (--t * (t - 2) - 1) + b
        },
        //三次的
        CubicEaseIn: function(t, b, c, d) {
          return c * (t /= d) * t * t + b
        },
        CubicEaseOut: function(t, b, c, d) {
          return c * ((t = t / d - 1) * t * t + 1) + b
        },
        CubicEaseInOut: function(t, b, c, d) {
          if ((t /= d / 2) < 1) return c / 2 * t * t * t + b
          return c / 2 * ((t -= 2) * t * t + 2) + b
        },
        //四次的
        QuartEaseIn: function(t, b, c, d) {
          return c * (t /= d) * t * t * t + b
        },
        QuartEaseOut: function(t, b, c, d) {
          return -c * ((t = t / d - 1) * t * t * t - 1) + b
        },
        QuartEaseInOut: function(t, b, c, d) {
          if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b
          return -c / 2 * ((t -= 2) * t * t * t - 2) + b
        },
        QuartEaseIn: function(t, b, c, d) {
          return c * (t /= d) * t * t * t * t + b
        },
        QuartEaseOut: function(t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b
        },
        QuartEaseInOut: function(t, b, c, d) {
          if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b
          return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
        },
        //正弦的
        SineEaseIn: function(t, b, c, d) {
          return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
        },
        SineEaseOut: function(t, b, c, d) {
          return c * Math.sin(t / d * (Math.PI / 2)) + b
        },
        SineEaseInOut: function(t, b, c, d) {
          return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
        },
        ExpoEaseIn: function(t, b, c, d) {
          return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
        },
        ExpoEaseOut: function(t, b, c, d) {
          return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
        },
        ExpoEaseInOut: function(t, b, c, d) {
          if (t == 0) return b
          if (t == d) return b + c
          if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b
          return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
        },
        CircEaseIn: function(t, b, c, d) {
          return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
        },
        CircEaseOut: function(t, b, c, d) {
          return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
        },
        CircEaseInOut: function(t, b, c, d) {
          if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b
          return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
        },
        ElasticEaseIn: function(t, b, c, d, a, p) {
          if (t == 0) return b
          if ((t /= d) == 1) return b + c
          if (!p) p = d * 0.3
          if (!a || a < Math.abs(c)) {
            a = c
            var s = p / 4
          } else var s = p / (2 * Math.PI) * Math.asin(c / a)
          return (
            -(
              a *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin((t * d - s) * (2 * Math.PI) / p)
            ) + b
          )
        },
        ElasticEaseOut: function(t, b, c, d, a, p) {
          if (t == 0) return b
          if ((t /= d) == 1) return b + c
          if (!p) p = d * 0.3
          if (!a || a < Math.abs(c)) {
            a = c
            var s = p / 4
          } else var s = p / (2 * Math.PI) * Math.asin(c / a)
          return (
            a *
              Math.pow(2, -10 * t) *
              Math.sin((t * d - s) * (2 * Math.PI) / p) +
            c +
            b
          )
        },
        ElasticEaseInOut: function(t, b, c, d, a, p) {
          if (t == 0) return b
          if ((t /= d / 2) == 2) return b + c
          if (!p) p = d * (0.3 * 1.5)
          if (!a || a < Math.abs(c)) {
            a = c
            var s = p / 4
          } else var s = p / (2 * Math.PI) * Math.asin(c / a)
          if (t < 1)
            return (
              -0.5 *
                (a *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin((t * d - s) * (2 * Math.PI) / p)) +
              b
            )
          return (
            a *
              Math.pow(2, -10 * (t -= 1)) *
              Math.sin((t * d - s) * (2 * Math.PI) / p) *
              0.5 +
            c +
            b
          )
        },
        //冲过头系列
        BackEaseIn: function(t, b, c, d, s) {
          if (s == undefined) s = 1.70158
          return c * (t /= d) * t * ((s + 1) * t - s) + b
        },
        BackEaseOut: function(t, b, c, d, s) {
          if (s == undefined) s = 1.70158
          return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
        },
        BackEaseInOut: function(t, b, c, d, s) {
          if (s == undefined) s = 1.70158
          if ((t /= d / 2) < 1)
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b
          return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
        },
        //弹跳系列
        BounceEaseIn: function(t, b, c, d) {
          return c - Tween.BounceEaseOut(d - t, 0, c, d) + b
        },
        BounceEaseOut: function(t, b, c, d) {
          if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b
          } else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
          } else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
          } else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
          }
        },
        BounceEaseInOut: function(t, b, c, d) {
          if (t < d / 2) return Tween.BounceEaseIn(t * 2, 0, c, d) * 0.5 + b
          else
            return Tween.BounceEaseOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
        }
      }
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.lunbotu {
  width: 672px;
  height: 340px;
  margin: 50px auto;
  position: relative;
}
.lunbotu .imagelist {
  position: absolute;
  top: 0;
  left: 0;
}
.lunbotu .imagelist ul {
  list-style: none;
}
.lunbotu .imagelist li {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
.lunbotu .imagelist .first {
  opacity: 1;
}
.lunbotu .btnl {
  width: 55px;
  height: 55px;
  left: 10px;
  top: 50%;
  margin-top: -27px;
  position: absolute;
  background: url(../../../../assets/breathecarousel/image/slide-btnL.png);
  cursor: pointer;
}
.lunbotu .btnr {
  width: 55px;
  height: 55px;
  right: 10px;
  top: 50%;
  margin-top: -27px;
  position: absolute;
  background: url(../../../../assets/breathecarousel/image/slide-btnR.png);
  cursor: pointer;
}
.lunbotu .yuanlist {
  position: absolute;
  width: 110px;
  height: 7px;
  bottom: 0;
  left: 50%;
  margin-left: -55px;
}
.lunbotu .yuanlist li {
  float: left;
  margin-right: 15px;
  width: 7px;
  height: 7px;
  background: url(../../../../assets/breathecarousel/image/ico.png) no-repeat -138px -133px;
  cursor: pointer;
  list-style: none;
}
.lunbotu .yuanlist .currentc {
  background: url(../../../../assets/breathecarousel/image/ico.png) no-repeat -125px -133px;
}
</style>



