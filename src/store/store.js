import Vue from 'vue'
import Vuex from 'vuex'

// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'

import menu from './module/menu'
import status from './module/status'
import users from './module/users'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        menu,
        status,
        users
    }
});

// export const store = new Vuex.Store({
//     strict: true,
//     state: {
//         //设置属性
//         // currentUser: null,
//         // isLogin: false,
//         // menuItems:{}
//     },
//     getters,
//     // {
//     //     // //获取属性的状态
//     //     // getMenuItems: state => state.menuItems,
//     //     // currentUser: state => state.currentUser,
//     //     // isLogin: state => state.isLogin
//     // },
//     mutations,
//     // {
//     //     // //改变属性的状态(事件)
//     //     // setMenuItems: (state,data) => {
//     //     //     state.menuItems = data
//     //     // },
//     //     // //将匹配到的对象在,在menuItems数组中删除
//     //     // removeMenuItems: (state,data) => {
//     //     //     state.menuItems.forEach( (item,index) => {
//     //     //         if(item == data){
//     //     //             state.menuItems.splice(index,1)
//     //     //         }
//     //     //     });
//     //     // },
//     //     // //将新添加的Pizza push到menuItems中
//     //     // pushToMenuItems: (state,data) => {
//     //     //     state.menuItems.push(data)
//     //     // },
//     //     // //更改用户的状态信息
//     //     // userStatus: (state,user) =>{
//     //     //     if(user){
//     //     //         state.isLogin = true;
//     //     //         state.currentUser = user;    
//     //     //     }else{
//     //     //         state.isLogin = false
//     //     //         state.currentUser = null
//     //     //     }
//     //     // }
//     // },
//     actions
//     // {
//     //     // //应用mutations(异步操作)
//     //     // setUser({commit},user){
//     //     //     commit("userStatus",user)
//     //     // }
//     // }
// });