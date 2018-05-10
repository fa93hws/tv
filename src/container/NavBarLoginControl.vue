<template>
  <div>
    <!-- Logged in-->
    <div v-if="userInfo.login">
      {{userInfo.userName}}
    </div>

    <!-- not loged in-->
    <div v-else id = 'nav-login-control' class="nav-item float-left" >
      <div  class = 'float-left' style="color:red;">
        亲，请登录
      </div>
      <div class = 'float-left'>
        免费注册
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarLoginControl",
  data: function () {
    return{
    }
  },
  computed: {
    userInfo: function () {
      return {
        // login: true,
        login:false,
        userName: "某人",
        userId: "1"
      }
    }
  }
}
</script>

<style scoped>
#nav-login-control > div {
  margin-right: var(--margin-small);
}
</style>
