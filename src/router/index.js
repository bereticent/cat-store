import Vue from 'vue'
import VueRouter from 'vue-router'


import main from '../pages/main/main.vue'
import types from '../pages/types/types.vue'
import shopping from '../pages/shopping/shopping.vue'
import  register  from '../pages/register/register.vue'
import goods from '../pages/types/goods.vue'
import brands from '../pages/types/brands.vue'


Vue.use(VueRouter)

export default new VueRouter({
  // linkExactActiveClass:"xfz",
  // linkActiveClass:"active",
  routes: [
    {
      path: '/',
      'redirect': '/main'
    },
    {
      path: '/types',
      component: types,
      children: [
        {
          path: '/types',
          'redirect': '/types/goods'
        },
        {
          path: 'goods',
          component: goods
        },
        {
          path: 'brands',
          component: brands
        },
        ]


    },
    {
      path: '/main',
      component: main  // 返回组件的函数
    },
    {
      path: '/shopping',
      component: shopping
    },
    {
      path: '/shopping',
      component: shopping
    },
    {
      path: '/register',
      component: register
    },

  ]
})
