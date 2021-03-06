import Vue from 'vue';
import Vuex from 'vuex';
import userInfo from './userInfo';
import cityPicker from './cityPicker';
// import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    userInfo,
    cityPicker
  },
  strict: debug,
//   plugins: debug ? [createLogger()] : []
})