import userApi from '../api/user'

// initial state
// shape: [{ id, quantity }]
const state = {
    isLoggedIn: false,
    userName: null,
    avatar: null,
    userId: -1
}

// getters
const getters = {
  checkLoginStatus: state => state.isLoggedIn,

  getUserInfo: (state) => {
    return {
      'userName': state.userName, 
      'avatar': state.avatar, 
      'userId': state.userId
    }
  },
}

// actions
const actions = {
  logInWithPassword: function ({ commit, state }, id, password) {
    let {userInfo, success} = userApi.login.withPassword(id, password);
    if (success) {
      commit('loggedIn', userInfo);
    }
  }
}

// mutations
const mutations = {
  loggedIn: function (state,  userInfo) {
    state.isLoggedIn = true;
    state = {...state, ...userInfo};
  },

  loggedOut: function (state) {
    state = {...state, ...{

    } }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}