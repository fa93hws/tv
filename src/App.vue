<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './container/NavBar';
export default {
  name: 'App',
  components:{
    NavBar
  }
}
</script>

<style>
  @import './assets/css/site.css'
</style>
