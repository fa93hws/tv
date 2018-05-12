import ResourcesAPI from '../api/Resources.js';

function getCityListFromTab (raw, divTab) {
  return state.cityList = ['0'].concat(state.divTab.filter( (item,idx)=>idx>0))
  .map( letters => 
    Array.from(letters.toLowerCase())
    .map( l => state.raw[l]).filter( cities => typeof cities != 'undefined')
    .map( group => [].concat(...group))
  ).map( group => [].concat(...group))
}
const state = {
  divTab: ['热门','ABC','DEF','GHI','JKG'],
  raw: null,
  cityList: null,
  // raw: require('../assets/data.json')['china-city'],
  downloaded: false,
  downloading: false
}

const getters = {
  cityList: state => state.cityList,

  isCityListReady: state => state.downloaded
}

const actions = {
  getCityList: function ( {commit, state}, callback ) {
    // state.downloading = true;
    if (state.downloaded || state.downloading) return;
    commit('downloadStart');
    ResourcesAPI.getChineCityList().then((response) => {
      commit('updateRawData', response.data['china-city']);
      callback( {success: true} );
    }).catch( (error)=>{
      console.log(error);
    }).finally( ()=>{
      commit('downloadFinish');
    })
  }
}

const mutations = {
  downloadStart: function (state) {
    state.downloading = true;
  },
  downloadFinish: function (state) {
    state.downloading = false;
  },
  updateRawData: function (state, raw) {
    state.raw = raw;
    state.downloaded = true;
    // update citylist
    state.cityList = getCityListFromTab(raw, state.divTab);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}