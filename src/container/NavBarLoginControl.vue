<template>
  <div>
    <!-- Logged in-->
    <div 
      v-if="isLoggedIn"
      key="logged-in"
    >
      {{userInfo.userName}}
    </div>

    <!-- not loged in-->
    <div 
      v-else
      key="not-logged-in"
      id = 'nav-login-control'
      class="nav-item float-left"
    >
      <div 
        class = 'float-left'
        style = "color:red;"
        @mousedown="postLogin({id:'user',password:'password'})"
      >
        亲，请登录
      </div>
      <div
        class = 'float-left'
      >
        免费注册
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "NavBarLoginControl",
  data: function () {
    return{
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'getUserInfo',
      isLoggedIn: 'checkLoginStatus',
    })
  },
  methods: {
    ...mapActions({
      postLogin: 'logInWithPassword'
    })
  },
}
</script>

<style scoped>
#nav-login-control > div {
  margin-right: var(--margin-small);
}
</style>
