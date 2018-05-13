import axios from 'axios';

export default {
  baseUrl: 'https://www.easy-mock.com/mock/5af68f27eecc191f0f5604a0/tv/api/',
  getUpperCarouselImages: function () {
    return axios({
      method: 'GET',
        url: this.baseUrl + 'images/home/uppercarousel'
    })
  },
  getLowerCarouselImages: function () {
    return axios({
      method: 'GET',
      url: this.baseUrl + 'images/home/lowercarousel'
    })
  },
  getChineCityList: function () {
    return axios ({
      methods: 'GET',
      url: this.baseUrl + 'json/chinacity'
    })
  }
}