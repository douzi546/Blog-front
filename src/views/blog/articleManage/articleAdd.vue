<template>
  <div class="container-fluid">
    <el-form label-position="top" ref="form" :model="form">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-form-item label="文章标题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="文章内容">
            <vue-ueditor-wrap v-model="form.content" :config="myConfig"></vue-ueditor-wrap>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="所属分类">
            <el-select v-model="form.sort" placeholder="未分类" style="width:100%">
              <el-option v-for="item in sortList" :key="item.sorts_id" :label="item.sort_name" :value="item.sorts_id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布时间">
            <div class="block">
              <el-date-picker v-model="form.pubTime" type="datetime" placeholder="选择发布时间" style="width:100%">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="所属标签">
            <el-checkbox-group v-model="form.label">
              <el-checkbox v-for="item in tagList" :label="item.label_id" name="label">{{item.label_name}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">发布文章</el-button>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
  </div>
</template>

<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
  data() {
    return {
      form: {
        name: '',
        label: [],
        content: '',
        sort: '',
        pubTime: '',
        user_id: ''
      },
      myConfig: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        // serverUrl: this.$config.baseUrl + 'ueditor/ueditorConfig',
        // serverUrl: 'http://106.54.118.86:8090/ueditor/ueditorConfig',
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: '/Ueditor/',
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 工具栏是否可以浮动
        autoFloatEnabled: false,
        // 初始容器高度
        initialFrameHeight: 340,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 关闭自动保存
        enableAutoSave: true,
        Zindex: '0'
      },
      sortList: '',
      tagList: ''
    }
  },
  components: { VueUeditorWrap },
  methods: {
    async onSubmit() {
      if (
        this.form.name === '' ||
        this.form.label === [] ||
        this.form.content === '' ||
        this.form.sort === '' ||
        this.form.pubTime === ''
      ) {
        this.$message('您有内容未填写，无法发布。')
        return
      }
      const res = await this.$http.post(
        'http://106.54.118.86:8888/addArticle',
        {
          params: this.form
        }
      )
      console.log(res)
      const { meta } = res.data
      if (meta.status === 200) {
        this.$alert('文章发布成功，即将跳转首页', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({ path: `/blog/index` })
          }
        })
      }
    }
  },
  created() {
    this.sortList = this.$store.state.sortList
    this.tagList = this.$store.state.tagList
    this.form.user_id = this.$store.state.userInfo.data.user_id
  }
}
</script>

<style lang="less">
.container-fluid {
  margin-top: 40px;
  padding: 40px;
  background: #f8f9fb;
}
</style>
