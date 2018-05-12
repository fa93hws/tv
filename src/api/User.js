import axios from 'axios';

const login = {
  baseUrl: 'https://www.easy-mock.com/mock/5af68f27eecc191f0f5604a0/tv/api/user/',
  withPassword: function (id, pass) {
    return axios({
      method: 'POST',
      url: this.baseUrl + 'login',
      params: {
          id: id,
          password: pass
      }
    })
  }
}
export default {
    login,
}