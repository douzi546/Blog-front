import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/Test.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
          components: {
            default: () => import(/* webpackChunkName: "about" */ './views/blog/index/blogIndex.vue'),
            vfooter: () => import(/* webpackChunkName: "about" */ './components/publicModule/vfooter.vue'),
            asideLeft: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-left.vue'),
            asideRight: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-right.vue'),
          }
        },
        {
          path: '/blog/sorts/category/:params',
          name: 'category',
          components: {
            default: () => import(/* webpackChunkName: "about" */ './views/blog/sorts/category.vue'),
            vfooter: () => import(/* webpackChunkName: "about" */ './components/publicModule/vfooter.vue'),
            asideLeft: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-left.vue'),
            asideRight: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-right.vue'),
          }
        },
        {
          path: '/blog/labels/tag/:params',
          name: 'tag',
          components: {
            default: () => import(/* webpackChunkName: "about" */ './views/blog/labels/tag.vue'),
            vfooter: () => import(/* webpackChunkName: "about" */ './components/publicModule/vfooter.vue'),
            asideLeft: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-left.vue'),
            asideRight: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-right.vue'),
          }
        },
        {
          path: '/blog/article/details',
          name: 'details',
          components: {
            default: () => import(/* webpackChunkName: "about" */ './views/blog/article/details/details.vue'),
            vfooter: () => import(/* webpackChunkName: "about" */ './components/publicModule/vfooter.vue'),
            asideLeft: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-left.vue'),
            asideRight: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-right.vue'),
          }
        },
        {
          path: '/blog/filing',
          name: 'filing',
          components: {
            default: () => import(/* webpackChunkName: "about" */ './views/blog/filing/filing.vue'),
            asideLeft: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-left.vue'),
            asideRight: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-right.vue'),
            vfooter: () => import(/* webpackChunkName: "about" */ './components/publicModule/vfooter.vue'),
          }
        },
        {
          path: '/blog/practice',
          name: 'practice',
          redirect: '/blog/practice/items/breathecarousel',
          components: {
            default: () => import(/* webpackChunkName: "about" */ './views/blog/practice/practice.vue'),
            vfooter: () => import(/* webpackChunkName: "about" */ './components/publicModule/vfooter.vue'),
            asideRight: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-right.vue'),
          },
          children: [
            {
              path: '/blog/practice/items/breathecarousel',
              name: 'breathecarousel',
              component: () => import(/* webpackChunkName: "about" */ './views/blog/practice/items/breathecarousel.vue'),
            },
            {
              path: '/blog/practice/items/snakes',
              name: 'snakes',
              component: () => import(/* webpackChunkName: "about" */ './views/blog/practice/items/snakes.vue'),
            },
            {
              path: '/blog/practice/items/tuling',
              name: 'tuling',
              component: () => import(/* webpackChunkName: "about" */ './views/blog/practice/items/tuling.vue'),
            },
            {
              path: '/blog/practice/items/loupe',
              name: 'loupe',
              component: () => import(/* webpackChunkName: "about" */ './views/blog/practice/items/loupe.vue'),
            }
          ]

        },
        // {
        //   path: '/blog/aboutMe',
        //   name: 'aboutMe',
        //   components: {
        //     default: () => import(/* webpackChunkName: "about" */ './views/blog/aboutMe/aboutMe.vue'),
        //     vfooter: () => import(/* webpackChunkName: "about" */ './components/publicModule/vfooter.vue'),
        //   }
        // },
        {
          path: '/blog/login',
          name: 'login',
          components: {
            default: () => import(/* webpackChunkName: "about" */ './views/blog/login/login.vue'),
            vfooter: () => import(/* webpackChunkName: "about" */ './components/publicModule/vfooter.vue')
          }
        },
        {
          path: '/blog/signup',
          name: 'signup',
          components: {
            default: () => import(/* webpackChunkName: "about" */ './views/blog/signup/signup.vue'),
            vfooter: () => import(/* webpackChunkName: "about" */ './components/publicModule/vfooter.vue'),
          }
        },
        {
          path: '/blog/articleAdd',
          name: 'articleAdd',
          components: {
            default: () => import(/* webpackChunkName: "about" */ './views/blog/articleManage/articleAdd.vue'),
            vfooter: () => import(/* webpackChunkName: "about" */ './components/publicModule/vfooter.vue'),
            asideLeft: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-left.vue'),
            asideRight: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-right.vue'),
          }
        },
        {
          path: '/blog/articleManage',
          name: 'articleManage',
          components: {
            default: () => import(/* webpackChunkName: "about" */ './views/blog/articleManage/articleManage.vue'),
            vfooter: () => import(/* webpackChunkName: "about" */ './components/publicModule/vfooter.vue'),
            asideLeft: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-left.vue'),
            asideRight: () => import(/* webpackChunkName: "about" */ './components/publicModule/aside-right.vue'),
          }
        },
      ]
    },
    {
      path: '/blog/practice/items/mafengwo',
      name: 'mafengwo',
      component: () => import(/* webpackChunkName: "about" */ './views/blog/practice/items/mafengwo.vue'),
    },
    {
      path: '/blog/practice/items/JDindex',
      name: 'JDindex',
      component: () => import(/* webpackChunkName: "about" */ './views/blog/practice/items/JDindex.vue'),
    }
  ]
})
