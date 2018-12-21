import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from 'views/login'
import CostDetail from 'components/costDetail'
import CustomMan from 'components/customMan'
import BlankPhone from 'components/blackPhone'

Vue.use(Router)

const router =new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path:'/costDetail',
          name: 'costDetail',
          component: CostDetail
        },
        {
          path: '/customMan',
          name: 'customMan',
          component: CustomMan
        },
        {
          path: '/blankPhone',
          name: 'blankPhone',
          component: BlankPhone
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
// router.beforeEach((to,form, next)=>{
//   let token = localStorage.getItem('token')
//   console.log(to.meta.requiresAuth)
//   if (!to.meta.requiresAuth && !token) {
//     next({
//       path:'/login',
//       query: {
//         redirect: to.fullPath
//       }
//     })
//   }else{
//     next()
//   }
// })
export default router
