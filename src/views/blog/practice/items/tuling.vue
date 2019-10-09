<template>
  <div>
    <div class="chatbox">
      <!-- 聊天内容 -->
      <div class="messages">
        <div class="self">
          <h5>我说</h5>
          <p>你好</p>
        </div>
        <div class="other">
          <h5>对方说</h5>
          <p>你好</p>
        </div>
      </div>
      <div class="form">
        <div class="input">
          <textarea></textarea>
        </div>
        <div class="btn">
          <input type="button" value="发送" id='btn'>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    $(function() {
      $('#btn').click(function() {
        var content = $('.input textarea').val()
        $('.input textarea').val('')
        if (content == '') {
          return
        }
        console.log(content)
        var $div = $('<div></div>')
          .addClass('self')
          .html('<h5>我说</h5><p>' + content + '</p>')
        $('.messages').append($div)

        $.ajax({
          type: 'post',
          url: 'http://www.tuling123.com/openapi/api',
          data: {
            key: '881203e32a024f43aa841032ba3757e0', // 机器人的唯一标示
            info: content, // 我说的内容
            userid: 'douzi' // 用户标示
          },
          dataType: 'json',
          success: function(info) {
            if (info.code === 100000) {
              var $div = $('<div></div>')
                .addClass('other')
                .html('<h5>对方说</h5><p>' + info.text + '</p>')
              $('.messages').append($div)
              $div[0].scrollIntoView(false)
            }
            if (info.code === 200000) {
              var $div = $('<div></div>')
                .addClass('other')
                .html(
                  '<h5>对方说</h5><p>' +
                    '<a href = ' +
                    info.url +
                    '>' +
                    info.text +
                    '</a>' +
                    '</p>'
                )
              $('.messages').append($div)
              $div[0].scrollIntoView(false)
            }
          }
        })
      })
    })
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

h3 {
  text-align: center;
}

.chatbox {
  width: 500px;
  height: 500px;
  margin: 20px auto;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
}

.messages {
  height: 350px;
  padding: 20px 40px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  overflow: scroll;
}

.messages h5 {
  font-size: 20px;
  margin: 10px 0;
}

.messages p {
  font-size: 18px;
  margin: 0;
}

.self {
  text-align: left;
}

.other {
  text-align: right;
}

.form {
  height: 150px;
}

.form .input {
  height: 110px;
  padding: 10px;
  box-sizing: border-box;
}

.form .btn {
  height: 40px;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
}

.form textarea {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: none;
  resize: none;
  outline: none;
  font-size: 20px;
}

.form input {
  display: block;
  width: 100px;
  height: 30px;
  margin-top: 5px;
  margin-right: 20px;
  float: right;
}
</style>
