const state = {
    currentUser: null
}

const getters = {
    currentUser: state => state.currentUser
}

const mutations = {
    userStatus(state,user){
        if(user){
            state.isLogin = true;
            state.currentUser = user;    
        }else{
            state.isLogin = false
            state.currentUser = null
        }
    }
}

const actions = {
    setUser({commit},user){
        commit("userStatus",user)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}