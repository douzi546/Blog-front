<template>
  <div class="login">
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm loginin">
          <h1>登录</h1>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="success" @click="submitForm('ruleForm')">立即登录</el-button>
            <el-button type="warning" @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, message: '长度必须大于2个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '长度必须大于6个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    async login() {
      const res = await this.$http.post('http://106.54.118.86:8888/login', {
        username: this.ruleForm.username,
        password: this.ruleForm.password
      })
      if (res.data.meta.status === 200) {
        this.$store.commit('userInfo', res.data)
        this.$router.push({ path: `/` })
      } else {
        this.$message('登录失败，请检查账号密码是否正确')
      }
    }
  }
}
</script>


<style lang="less">
.loginin {
  margin-top: 45px;
  background: #eeeeee;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 200px;
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #007722;
    // font-size: 24px;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 2px;
  }
}
</style>
