import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sortList: JSON.parse(sessionStorage.getItem('sortList')) || null,
    tagList: JSON.parse(sessionStorage.getItem('tagList')) || null,
    userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || null,
    articleList: JSON.parse(sessionStorage.getItem('articleList')) || null,

  },
  mutations: {
    sortList(state, msg) {
      sessionStorage.setItem('sortList', JSON.stringify(msg))
      state.sortList = msg
    },
    tagList(state, msg) {
      sessionStorage.setItem('tagList', JSON.stringify(msg))
      state.tagList = msg
    },
    userInfo(state, msg) {
      sessionStorage.setItem('userInfo', JSON.stringify(msg))
      state.userInfo = msg
    }

  },
  actions: {

  }
})
