import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_IS_AUTHENTIATED: 'SET_IS_AUTHENTIATED', // 是否认证通过
  SET_USER: 'SET_USER' // 用户信息
}

const state = { // 需要维护的状态
  isAuthenticated: false,  // 是否认证
  user: {}   // 存储用户信息
}

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  user: state => state.user
}

const mutations = {
  [types.SET_IS_AUTHENTIATED](state, isAuthenticated) {
    if (isAuthenticated)
      state.isAuthenticated = isAuthenticated
    else
      state.isAuthenticated = false
  },
  [types.SET_USER](state, user) {
    if (user)
      state.user = user
    else
      state.user = {}
  }
}
const actions = {
  setIsAutnenticated: ({ commit }, isAutnenticated) => {
    commit(types.SET_IS_AUTNENTIATED, isAutnenticated)
  },
  setUser:({commit},user) =>{
    commit(types.SET_USER,user)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
