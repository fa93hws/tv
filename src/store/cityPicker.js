const state = {
  divTab: ['热门','ABC','DEF','GHI','JKG'],
  raw: require('../assets/data.json')['china-city']
}

const getters = {
  cityList: state => {
    return ['0'].concat(state.divTab.filter( (item,idx)=>idx>0))
    .map( letters => 
      Array.from(letters.toLowerCase())
      .map( l => state.raw[l]).filter( cities => typeof cities != 'undefined')
      .map( group => [].concat(...group))
    ).map( group => [].concat(...group))
  }
}

export default {
  state,
  getters
}