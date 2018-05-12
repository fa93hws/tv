import userApi from '../api/User'

// initial state
// shape: [{ id, quantity }]
const state = {
  isLoggedIn: false,
  userName: null,
  avatar: null,
  userId: -1,
  points: -1,
  pending: {
    ship: -1,
    confirm: -1,
    pay: -1,
    comment: -1
  }
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
  getPendingStatus: state => state.pending,
  getPoints: state => state.points
}

// actions
const actions = {
  logInWithPassword: function ({ commit }, {id, password}) {
    userApi.login.withPassword(id,password).then( (response) => {
      // console.log(response.data.userInfo);
      if (response.data.success)
        commit('loggedIn', response.data.userInfo);
      // else
      //   failed event
    }).catch( (error) => {
      console.log(error);
    })
  }
}

// mutations
const mutations = {
  loggedIn: function (state,  userInfo) {
    state.isLoggedIn = true;  
    Object.keys(userInfo).forEach( k=>{
      state[k] = userInfo[k];
    })
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