<template>
  <div id = 'right-col-user-board'>
    <div 
      id = 'right-col-user-board-avatar-container'
      class = 'mlra avatar-medium clickable'>
      <Avatar 
        :width="50"
        :height="50"
        :url="userInfo.avatar"
      />
    </div>
    <!-- welcome infomation -->
    <span
      id = 'user-board-welcome-info'
    >
      Hi! {{isLoggedIn ? userInfo.userName : '你好'}}
    </span>
    <!-- stick button -->
    <ul 
      id = 'right-col-user-board-tool-bars'
      class = 'h-list no-padding mlra'
    >
      <li class = 'noselect clickable'>
        <a class = 'circle'/>领淘金抵钱
      </li>
      <li class = 'noselect clickable'>
        <a class = 'circle'/>会员俱乐部
      </li>
    </ul>
    <!-- login button -->
    <ul
      v-if="isLoggedIn"
      key="is-logged-in"
      id = 'right-col-user-board-pending-info'
      class = 'h-list no-margin no-padding'
    >
      <li
        v-for="(text, idx) in pendingTexts"
        class='right-col-user-board-pending-info-item clickable'
        v-bind:key = idx
      >
        <p class='no-margin bold'>{{pendingNumber[idx]}}</p>
        <p class='no-margin'>{{text}}</p>
      </li>
    </ul>
    <ul
      v-else
      key="not-logged-in"
      id = 'right-col-user-board-login-controls'
      class = 'h-list no-padding mlra'>
      <li>
        <a 
          class = 'bold noselect clickable'
          @mousedown="postLogin({id:'user',password:'password'})"
        >登录
      </a></li>
      <li>
        <a class = 'bold noselect clickable'>注册</a>
      </li>
      <li>
        <a class = 'bold noselect clickable'>开店</a>
      </li>
    </ul>
    <!-- pendding information -->

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
    pendingNumber: function () {
      return [this.pendingStatus.confirm,
      this.pendingStatus.ship, this.pendingStatus.pay,
      this.pendingStatus.comment];
    },
    ...mapGetters({
      isLoggedIn: 'checkLoginStatus',
      userInfo: 'getUserInfo',
      pendingStatus: 'getPendingStatus',
    })
  },
  data: function () {
    return {
      pendingTexts: ['待收货','待发货','待付款','待评价'],
    }
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
  /* margin-top: 8px; */
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
#user-board-welcome-info {
  display: block;
  width: 100%;
  text-align: center;
  margin-top: var(--margin-xsmall);
}
#right-col-user-board-pending-info {
  width: 100%;
  margin-top: var(--margin-xxsmall);
}
.right-col-user-board-pending-info-item {
  width: 25%;
  text-align: center;
}
.right-col-user-board-pending-info-item:hover {
  color: orangered;
}
.right-col-user-board-pending-info-item > p:first-child {
  color: orangered;
}
</style>
