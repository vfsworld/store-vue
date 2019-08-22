//应用mutations(异步操作)
export const setUser = ({commit},user) => {
    commit("userStatus",user)
}
    

