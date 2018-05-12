<template>
  <div id = 'right-col-user-board'>
    <div id = 'right-col-user-board-avatar-container' class = 'mlra avatar-medium clickable'>
      <Avatar :width="72" :height="72"/>
    </div>
    <span v-show="isLoggedIn"> 123 </span>
    <ul id = 'right-col-user-board-tool-bars' class = 'h-list no-padding mlra'>
      <li class = 'noselect clickable'><a class = 'circle'/>领淘金抵钱</li>
      <li class = 'noselect clickable'><a class = 'circle'/>会员俱乐部</li>
    </ul>
    <ul id = 'right-col-user-board-login-controls' class = 'h-list no-padding mlra'>
      <li><a class = 'bold noselect clickable'
        @mousedown="postLogin"
        >登录
      </a></li>
      <li><a class = 'bold noselect clickable'>注册</a></li>
      <li><a class = 'bold noselect clickable'>开店</a></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Avatar from '../components/Avatar.vue';

export default {
  name: 'UserBoard',
  components: {
    Avatar
  },
  computed: {
    something: () => 1 ,
    ...mapGetters({
      isLoggedIn: 'checkLoginStatus',
      userInfo: 'getUserInfo'
    })
  },
  methods: {
    somemethod: () => 1,
    ...mapActions({
      postLogin: 'logInWithPassword'
    })
  },
  mounted: function () {
  }
}
</script>

<style scoped>
#right-col-user-board {
  background: white;
  width: 100%;
  height: 150px;
}
#right-col-user-board-avatar-container {
  padding-top: 8px;
}
ul#right-col-user-board-tool-bars {
  width: 80%;
  margin-top: var(--margin-xxsmall);
  margin-bottom: 0px;
}
#right-col-user-board-tool-bars > li {
  display: inline-block;
  background:rgb(255,69,0,0.2);
  color: orangered;
  width: 40%;
  height: 20px;
  border-radius: 10px;
  line-height: 20px;
  font-size: var(--font-xsmall);
}
#right-col-user-board-tool-bars > li:nth-child(2) {
  margin-left: 15%;
}
a.circle {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: silver;
  border-radius: 10px;
  margin-right: 10px;
  vertical-align:top;
}

#right-col-user-board-login-controls {
  width: 95%;
  margin-top: var(--margin-xsmall);
}
#right-col-user-board-login-controls > li {
  display: inline;
}
a.clickable {
  display: inline-block;
  width: 30%;
  height: 25px;
  line-height: 25px;
  text-align: center;
  color: white;
  background: linear-gradient(to right,orangered, orange);
  border-radius: 8px;
}
</style>
