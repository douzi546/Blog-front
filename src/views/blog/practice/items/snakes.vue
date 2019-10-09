<template>
  <div>
    <div id="map">
    </div>
    <button id="start">开始游戏</button>
    <p class="desc">键盘方向键控制方向</p>
  </div>

</template>

<script>
export default {
  mounted() {
    let Tools = {
      getRandom: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
    }
    function addLimitedEvent(domID, eventName, callback, interval) {
      var _dom = document.getElementById(domID)

      if (Number.isNaN(Number.parseInt(interval))) interval = 1
      else interval = Number.parseInt(interval)

      if (_dom.addEventListener)
        _dom.addEventListener(eventName, removeLimitedEvent)
      else _dom.attachEvent('on' + eventName, removeLimitedEvent)

      function removeLimitedEvent() {
        callback()

        if (_dom.removeEventListener)
          _dom.removeEventListener(eventName, removeLimitedEvent)
        else _dom.detachEvent('on' + eventName, removeLimitedEvent)

        setTimeout(function() {
          addLimitedEvent(domID, eventName, callback)
        }, interval * 1000)
      }
    }

    ;(function() {
      var container
      //食物数据
      function Food(obj) {
        var obj = obj || {}
        this.width = obj.width || 20
        this.height = obj.height || 20
        this.bgc = obj.bgc || 'green'
        this.x = obj.x || 0
        this.y = obj.y || 0
      }
      //食物方法（渲染到页面）
      Food.prototype.render = function() {
        if (container) {
          map.removeChild(container)
        }
        var div = document.createElement('div')
        container = div
        div.style.width = this.width + 'px'
        div.style.height = this.height + 'px'
        div.style.backgroundColor = this.bgc
        div.style.position = 'absolute'
        this.x =
          Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width
        this.y =
          Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height
        div.style.left = this.x + 'px'
        div.style.top = this.y + 'px'
        map.appendChild(div)
      }
      window.Food = Food
    })()
    ;(function() {
      var arr = []
      //蛇的数据
      function Snake(obj) {
        var obj = obj || {}
        this.width = obj.width || 20
        this.height = obj.height || 20
        this.direction = obj.direction || 'right'
        this.body = [
          { x: 3, y: 2, col: 'red' },
          { x: 2, y: 2, col: 'blue' },
          { x: 1, y: 2, col: 'blue' }
        ]
      }
      //蛇的方法（渲染到页面）
      Snake.prototype.render = function() {
        for (let i = 0, leng = arr.length; i < leng; i++) {
          map.removeChild(arr[0])
          arr.splice(0, 1)
        }
        this.body.forEach(
          function(item) {
            var div = document.createElement('div')
            arr.push(div)
            div.style.width = this.width + 'px'
            div.style.height = this.height + 'px'
            div.style.left = item.x * this.width + 'px'
            div.style.top = item.y * this.height + 'px'
            div.style.position = 'absolute'
            div.style.backgroundColor = item.col
            map.appendChild(div)
          }.bind(this)
        )
      }

      //蛇的移动方法
      Snake.prototype.move = function() {
        for (let i = this.body.length - 1; i > 0; i--) {
          this.body[i].x = this.body[i - 1].x
          this.body[i].y = this.body[i - 1].y
        }
        switch (this.direction) {
          case 'left':
            this.body[0].x -= 1
            break
          case 'right':
            this.body[0].x += 1
            break
          case 'top':
            this.body[0].y -= 1
            break
          case 'bottom':
            this.body[0].y += 1
            break
        }
      }

      window.Snake = Snake
    })()
    ;(function() {
      //封装调用的实例和方法
      function Game() {
        this.food = new Food()
        this.snake = new Snake()
      }
      //调用实例和方法
      Game.prototype.start = function() {
        this.food.render()
        var timeid = setInterval(
          function() {
            if (document.getElementById('map') === null) {
              clearInterval(timeid)
              return
            }
            this.snake.move()
            var maxX = map.offsetWidth / this.snake.width - 1
            var maxY = map.offsetHeight / this.snake.height - 1
            var head = this.snake.body[0]
            if (head.x < 0 || head.x > maxX || head.y < 0 || head.y > maxY) {
              alert('游戏结束！！！')
              clearInterval(timeid)
              return
            }
            // 获取食物的坐标和蛇头的坐标
            var headX = this.snake.body[0].x * this.snake.width
            var headY = this.snake.body[0].y * this.snake.height
            if (headX == this.food.x && headY == this.food.y) {
              this.food.render()
              var last = this.snake.body[this.snake.body.length - 1]
              this.snake.body.push({
                x: last.x,
                y: last.y,
                col: last.col
              })
            }
            var snakelist = this.snake.body.slice(1)
            for (let i = 0; i < snakelist.length; i++) {
              if (
                snakelist[i].x * this.snake.width == headX &&
                snakelist[i].y * this.snake.height == headY
              ) {
                alert('游戏结束!!!')
                clearInterval(timeid)
                return
              }
            }

            this.snake.render()
          }.bind(this),
          150
        )

        document.onkeydown = function(e) {
          event.preventDefault()
          switch (e.keyCode) {
            case 37:
              if (this.snake.direction === 'right') break
              this.snake.direction = 'left'
              break
            case 38:
              if (this.snake.direction === 'bottom') break
              this.snake.direction = 'top'
              break
            case 39:
              if (this.snake.direction === 'left') break
              this.snake.direction = 'right'
              break
            case 40:
              if (this.snake.direction === 'top') break
              this.snake.direction = 'bottom'
              break
          }
        }.bind(this)
      }
      window.Game = Game
    })()

    var start = document.getElementById('start')
    start.onclick = function() {
      var map = document.getElementById('map')
      var game = new Game()
      game.start()
    }
  }
}
</script>

<style>
#map {
  height: 600px;
  width: 800px;
  position: relative;
  margin: 0 auto;
}
#start {
  display: block;
  height: 70px;
  margin: 10px auto;
  padding: 10px;
  font-size: 24px;
  border-radius: 5px;
}
.desc {
  font-size: 18px;
  text-align: center;
}
</style>
