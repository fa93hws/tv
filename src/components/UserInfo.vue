<template>
  <div>
    <!-- Logged in-->
    <div v-if="userInfo.login">
      {{userInfo.userName}}
    </div>

    <!-- not loged in-->
    <div class="nav-item float-left" v-else>
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
function getUserInfo(){
  // if loged in
  return {
    // login: true,
    login:false,
    userName: "某人",
    userId: "1"
  }
}

let userInfo = getUserInfo();

// console.log(userInfo.login)

export default {
  name: "UserInfo",
  data: ()=>{
    return{
      userInfo
    }
  }
}
</script>