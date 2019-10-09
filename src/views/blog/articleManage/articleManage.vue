<template>
  <div class="articleManage">
    <div class="container-fluid">
      <div class="art-list">文章列表</div>
      <el-table ref="multipleTable" :data="tableData" @selection-change="handleSelectionChange" border>
        <el-table-column type="selection" width="70" align="center">
        </el-table-column>
        <el-table-column prop="article_title" label="标题" width="450">
        </el-table-column>
        <el-table-column prop="user_name" label="作者" width="150">
        </el-table-column>
        <el-table-column prop="sort_name" label="分类" width="150" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="article_date" label="发布时间" :formatter="dateFormat" show-overflow-tooltip align="center">
        </el-table-column>
        <el-table-column prop="date" label="操作" show-overflow-tooltip width="250" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="artPagination">
        <el-pagination background layout="prev, pager, next" :total="total" :pageSize="pageSize" @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="编辑文章" :visible.sync="dialogFormVisible" width="80%" top="5vh" :modal-append-to-body="false">
      <el-form label-position="top" ref="form" :model="form">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item label="文章标题">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="文章内容">
              <vue-ueditor-wrap class="edui" v-model="form.content" :config="myConfig"></vue-ueditor-wrap>
            </el-form-item>
          </el-col>
          <el-col :span="4">
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
          </el-col>
        </el-row>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="articleUpdate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import moment from 'moment'
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
  inject: ['reload'],
  created() {
    this.AllArticleList(this.currentPage)
    this.sortList = this.$store.state.sortList
    this.tagList = this.$store.state.tagList
  },
  data() {
    return {
      //每页文章数据
      tableData: null,
      // 所有文章数据（数组，里面包含每页内容）
      pageList: null,
      total: null,
      pageSize: 6,
      currentPage: 1,
      multipleSelection: [],
      form: {
        name: '',
        content: '',
        sort: '',
        pubTime: '',
        label: []
      },
      sortList: '',
      tagList: '',
      dialogFormVisible: false,
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
        enableAutoSave: true
      }
    }
  },
  components: { VueUeditorWrap },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    async AllArticleList(Page) {
      const res = await this.$http.get(
        'http://106.54.118.86:8888/articleManage'
      )
      const { data, meta } = res.data
      if (meta.status === 200) {
        this.pageList = this.chunkArrayInGroups(data, this.pageSize)
        this.total = data.length
        this.tableData = this.pageList[Page - 1]
      }
    },
    dateFormat: function(row, column) {
      var date = row[column.property]
      if (date == undefined) {
        return ''
      }
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
    },
    chunkArrayInGroups(arr, size) {
      var length = arr.length
      var newArr = []
      var i = Math.ceil(length / size * 1.0)
      var j = 0
      while (j < i) {
        var spare = length - j * size >= size ? size : length - j * size
        var temp = arr.slice(j * size, j * size + spare)
        newArr.push(temp)
        j++
      }
      return newArr
    },
    handleCurrentChange(clickPage) {
      this.AllArticleList(clickPage)
    },
    handleEdit(data) {
      this.dialogFormVisible = true
      this.form.name = data.article_title
      this.form.content = data.article_content
      this.form.pubTime = data.article_date
      this.form.sort = data.sort_id
      this.form.label = data.label_id
      this.form.article_id = data.article_id
    },
    handleDelete(data) {
      this.$confirm('您确定要删除这条文章吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const res = await this.$http.post(
            'http://106.54.118.86:8888/articleDelete',
            {
              params: {
                id: data.article_id
                // label: data.label_id
              }
            }
          )
          const { meta } = res.data
          if (meta.status === 200) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.reload()
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    async articleUpdate() {
      const res = await this.$http.post(
        'http://106.54.118.86:8888/articleUpdate',
        {
          params: this.form
        }
      )
      const { meta } = res.data
      if (meta.status === 200) {
        this.$alert('文章修改成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.dialogFormVisible = false
            this.reload()
          }
        })
      }
    }
  }
}
</script>

<style lang="less">
.container-fluid {
  margin-top: 40px;
  padding: 40px;
  background: #f8f9fb;
  min-height: 700px;
  .art-list {
    margin-bottom: 20px;
    color: burlywood;
    font-size: 20px;
  }
  .artPagination {
    margin-top: 40px;
  }
}
</style>
