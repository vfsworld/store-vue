//引入一级路由组件
import Home from './components/Home'//引入主页组件
import Menu from './components/Menu'//引入菜单组件
import Admin from './components/Admin'//引入管理组件
import About from './components/about/About'//引入关于我们组件
import Login from './components/login'//引入登录组件
import Register from './components/Register'//引入注册组件

//引入二级路由组件
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//引入三级路由组件
import PersonName from './components/about/contact/PersonName'
import PhoneNumber from './components/about/contact/PhoneNumber'

//配置路由
export const routes = [
    {path:'/', name:'homeLink', components:{
        default: Home,
        'delivery': Delivery,
        'history': History,
        'orderingGuide': OrderingGuide
    }},
    {path:'/menu', name:'menuLink', component: Menu},
    {path:'/admin',name:'adminLink', component: Admin,
        // beforeEnter:(to,from,next) => {
        //   // //路由独享的守卫
        //   // //判断store.gettes.isLogin === false
        //   // if(to.path == '/login' || to.path == '/register'){
        //   //   next();
        //   // }else{
        //   //   alert('您还未登录,请先登录');
        //   //   next('/login');
        //   // }
        // }
    },
    {path:'/about', name:'aboutLink',redirect:'/contact' ,component: About,
      children:[
      {path:'/contact', name:'contactLink',redirect:'/personName',component: Contact,
        children:[
          {path:'/personName', name:'personLink', component: PersonName},
          {path:'/phoneNumber', name:'phoneLink', component: PhoneNumber}
        ]},
      {path:'/delivery', name:'deliveryLink', component: Delivery},
      {path:'/history', name:'historyLink', component: History},
      {path:'/orderingGuide', name:'orderingGuideLink', component: OrderingGuide}
    ]},
    {path:'/login', name:'loginLink', component: Login},
    {path:'/register',name:'registerLink',  component: Register},
    {path:'*', redirect:'/'}
  ]