import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/Main',
    },
    {
      path: '/Main',
      name: 'Main',
      component:resolve => require(['./views/Main.vue'],resolve),
      children:[
        {
          path:'/categories/create',
          component:resolve => require(['./views/CategoryEdit.vue'],resolve)
        },
        {
          path:'/categories/edit/:id',
          component:resolve => require(['./views/CategoryEdit.vue'],resolve),
          props:true
        },
        {
          path:'/categories/list',
          component:resolve => require(['./views/CategoryList.vue'],resolve)
        },


        {
          path:'/items/create',
          component:resolve => require(['./views/itemEdit.vue'],resolve)
        },
        {
          path:'/items/edit/:id',
          component:resolve => require(['./views/itemEdit.vue'],resolve),
          props:true
        },
        {
          path:'/items/list',
          component:resolve => require(['./views/itemList.vue'],resolve)
        },

        {
          path:'/heros/create',
          component:resolve => require(['./views/HeroEdit.vue'],resolve)
        },
        {
          path:'/heros/edit/:id',
          component:resolve => require(['./views/HeroEdit.vue'],resolve),
          props:true
        },
        {
          path:'/heros/list',
          component:resolve => require(['./views/HeroList.vue'],resolve)
        },

        {
          path:'/articles/create',
          component:resolve => require(['./views/ArticlesEdit.vue'],resolve)
        },
        {
          path:'/articles/edit/:id',
          component:resolve => require(['./views/ArticlesEdit.vue'],resolve),
          props:true
        },
        {
          path:'/articles/list',
          component:resolve => require(['./views/ArticlesList.vue'],resolve)
        },

        {
          path:'/ads/create',
          component:resolve => require(['./views/AdEdit.vue'],resolve)
        },
        {
          path:'/ads/edit/:id',
          component:resolve => require(['./views/AdEdit.vue'],resolve),
          props:true
        },
        {
          path:'/ads/list',
          component:resolve => require(['./views/AdList.vue'],resolve)
        },
      ]
    },
    {
      path: '/register',
      name: 'register',
      component:resolve => require(['./views/register.vue'],resolve)
    },
    {
      path: '/login',
      name: 'login',
      component:resolve => require(['./views/login.vue'],resolve)
    },
    {
      path: '/home',
      name: 'home',
      component:resolve => require(['./components/HeadNav.vue'],resolve)
    },
    {
      path: '*',
      name: '/404',
      component:NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if (to.path == "/login" || to.path == "/register") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
})

export default router