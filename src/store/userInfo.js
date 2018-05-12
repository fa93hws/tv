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

  getUserInfo: state => {
    return {
      'userName': state.userName, 
      'avatar': state.avatar, 
      'userId': state.userId
    }
  },
}

// actions
const actions = {
  logInWithPassword: function ({ commit }, {id, password}) {
    userApi.login.withPassword(id,password).then( (userInfo) => {
      commit('loggedIn', userInfo)
    }).catch( (error) => {
      console.log(error);
    })
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