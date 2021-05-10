// default
import Vue from 'vue'
import Router from 'vue-router'
  
import store from './store/store.js' 

// Components
import Login from './components/Login.vue'
import Secure from './components/Secure.vue'
import Register from './components/Register.vue'
 
Vue.use(Router)

// Pages
import Home from '@/pages/Home'
import Statistics from '@/pages/Statistics'
import NotFound from '@/pages/404'
 

// Routering
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
      meta: { 
        requiresAuth: false
      }
    }, 
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { 
        requiresAuth: false
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: Register, 
      meta: { 
        requiresAuth: false
      }
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics,
      meta: { 
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//       if (localStorage.getItem('jwt') == null) {
//         console.log(to.fullPath);
//           next({
//               path: '/login',
//               params: { nextUrl: to.fullPath }
//           })

//       } else {
//           // let user = this.$store.state.user;
//           // if(to.matched.some(record => record.meta.is_admin)) {
//           //     if(user.is_admin == 1){
//           //         next()
//           //     }
//           //     else{
//           //         next({ name: 'userboard'})
//           //     }
//           // }else {
//           //     next()
//           // }
//           next();
//       }
//   } else if(!to.matched.some(record => record.meta.requiresAuth)) {
//       if(localStorage.getItem('jwt') == null){
//           next()
//       }
//       else{
//           next({ name: 'userboard'})
//       }
//   }else {
//       next()
//   }
// }) 

export default router