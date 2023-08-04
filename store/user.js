import axios from "axios"
require('dotenv').config()

const state = {
    userInfo: {},
  }
const getters = {
    
    getUserInfo: (state) => state.userInfo,
  }
const actions = {  
     
    async register({ commit }, userInfo) {
        try {
 
            const res = await axios.post('http://127.0.0.1:8000/api/user/register/', userInfo)
            commit('SET_USERINFO', userInfo)

            return res
        } catch (error) {
            return error
        }
    }
 }
const mutations = {
    SET_USERINFO(state, userInfo) {
        state.userInfo = userInfo
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}