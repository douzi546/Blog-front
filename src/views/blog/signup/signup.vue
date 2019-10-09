<template>
  <div class="sign">
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm signup">
          <p>完善注册信息</p>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="submitForm('ruleForm')">立即注册</el-button>
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
          this.signUp()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    async signUp() {
      const res = await this.$http.post('http://106.54.118.86:8888/signup', {
        username: this.ruleForm.username,
        password: this.ruleForm.password
      })
      console.log(res.data)
      if (res.data.status === 201) {
        this.$message('用户名已存在')
      } else if (res.data.status === 200) {
        this.$message(res.data.msg)
        this.$router.push({ path: `/blog/login` })
      } else {
        this.$message('网络错误')
      }
    }
  }
}
</script>


<style lang="less">
.sign {
  min-height: 500px;
}
.signup {
  margin-top: 45px;
  background: #eeeeee;
  padding: 20px;
  border-radius: 5px;
  p {
    margin-bottom: 20px;
    color: #606266;
    font-size: 18px;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 2px;
  }
}
</style>
