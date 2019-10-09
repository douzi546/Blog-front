<template>
  <div class="aside-right">
    <div class="sortList">
      <header class=" rightheader sortTitle">
        分类列表
      </header>
      <div class=" body sortBody">
        <ul>
          <li v-for="sortItem in sortList" :key="sortItem.sorts_id">
            <a href="javascript:;" @click="articleBySortName(sortItem.sort_name)"> {{sortItem.sort_name}}({{sortItem.articleNum}})</a>
            <!-- <router-link :to="{path:'/blog/sorts/category'}">{{sortItem.sort_name}}({{sortItem.articleNum}})</router-link> -->
          </li>
        </ul>
      </div>
    </div>
    <div class="labelList">
      <header class=" rightheader sortTitle">
        标签列表
      </header>
      <div class=" body sortBody">
        <ul>
          <li v-for="tagItem in tagList" :key="tagItem.label_id">
            <a href="javascipt:;" @click="articleByTagName(tagItem.label_name)"> {{ tagItem.label_name}}({{tagItem.articleNum}})</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  name: 'asideRight',
  data() {
    return {
      sortList: 1,
      tagList: 1,
      msg: '我是首页'
    }
  },
  created() {
    this.allSort()
    this.allTag()
  },
  methods: {
    async allSort() {
      const res = await this.$http.get('http://106.54.118.86:8888/sort')
      const { data, meta } = res.data
      if (meta.status === 200) {
        this.sortList = data
        this.$store.commit('sortList', this.sortList)
      }
    },
    articleBySortName(name) {
      this.$router.push({ path: `/blog/sorts/category/${name}` })
      this.reload()
    },
    async allTag() {
      const res = await this.$http.get('http://106.54.118.86:8888/tag')
      const { data, meta } = res.data
      if (meta.status === 200) {
        this.tagList = data
        this.$store.commit('tagList', this.tagList)
      }
    },
    articleByTagName(name) {
      this.$router.push({ path: `/blog/labels/tag/${name}` })
      this.reload()
    }
  }
}
</script>

<style lang="less" scoped>
.aside-right {
  width: 150px;
  position: absolute;
  right: 20px;
  top: 0;
  border: 1px solid #dddddd;
  border-radius: 5px;
  margin-right: 5px;
  .rightheader {
    text-align: center;
    color: #000;
    background: #f5f5f5;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
  }
  .body {
    padding: 0.5em;
    li {
      margin: 0.5em 0;
    }
    a {
      font-size: 14px;
      width: 96%;
      display: block;
      text-align: center;
    }
  }
}
</style>
