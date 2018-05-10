<template>
  <div id = 'right-col-user-board'>
    <div id = 'right-col-user-board-avatar-container' class = 'mlra avatar-medium clickable'>
      <Avatar :width="72" :height="72"/>
    </div>
    <ul id = 'right-col-user-board-tool-bars' class = 'h-list no-padding mlra'>
      <li class = 'noselect clickable'><a class = 'circle'/>领淘金抵钱</li>
      <li class = 'noselect clickable'><a class = 'circle'/>会员俱乐部</li>
    </ul>
    <ul id = 'right-col-user-board-login-controls' class = 'h-list no-padding mlra'>
      <li><a class = 'bold noselect clickable'>登录</a></li>
      <li><a class = 'bold noselect clickable'>注册</a></li>
      <li><a class = 'bold noselect clickable'>开店</a></li>
    </ul>
  </div>
</template>

<script>
import Avatar from '../components/Avatar.vue';

export default {
  name: 'UserBoard',
  components: {
    Avatar
  }
}
</script>

<style scoped>
#right-col-user-board-avatar-container {
  margin-top: 8px;
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
