import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/Test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/blog',
      name: 'blog',
      redirect: '/blog/index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/blog/Blog.vue'),
      children: [
        {
          path: '/blog/index',
          name: 'index',
          component: () => import(/* webpackChunkName: "about" */ './views/blog/index/blogIndex.vue'),
        },
        {
          path: '/blog/filing',
          name: 'filing',
          component: () => import(/* webpackChunkName: "about" */ './views/blog/filing/filing.vue'),
        },
        {
          path: '/blog/practice',
          name: 'practice',
          component: () => import(/* webpackChunkName: "about" */ './views/blog/practice/practice.vue'),
        },
        {
          path: '/blog/aboutMe',
          name: 'aboutMe',
          component: () => import(/* webpackChunkName: "about" */ './views/blog/aboutMe/aboutMe.vue'),
        },
        {
          path: '/blog/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "about" */ './views/blog/login/login.vue'),
        },
        {
          path: '/blog/signup',
          name: 'signup',
          component: () => import(/* webpackChunkName: "about" */ './views/blog/signup/signup.vue'),
        }
      ]
    }
  ]
})
