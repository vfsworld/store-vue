import Vue from 'vue'
import VueRouter from 'vue-router'//引入路由
import App from './App.vue'
import {routes} from './routes'
import axios from 'axios'
import { store } from './store/store'

//配置axios默认根路径
axios.defaults.baseURL='https://wd2723187178hbfrpk.wilddogio.com/'
//配置Vue原型
Vue.prototype.$axios = axios;

Vue.use(VueRouter)//使用路由
//实例化Router
const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    // return 期望滚动到哪个的位置
    //return {x:0, y:100}
    //return {selector: '.btn'}
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0, y:0}
    }
  }
})

//全局前置守卫
// router.beforeEach((to,from,next) => {
  // alert('还没登录,请先登录!');
  // next();
  //console.log(to)
  //判断store.gettes.isLogin === false
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert('您还未登录,请先登录');
//     next('/login');
//   }
//})

//全局后置钩子
// router.afterEach((to,from) => {
//   alert('111')
// })

new Vue({
  el: '#app',
  store: store,
  router,//使用router
  render: h => h(App)
})
