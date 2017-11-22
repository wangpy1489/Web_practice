<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1> -->
    <top></top>
    <calendar></calendar>
    <c_log></c_log>
    <!-- <firstcomponent></firstcomponent> -->
    <!-- <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li> -->
    <!-- </ul>
  -->
  </div>
  
</template>

<script>

import calendar from './calendar.vue'
import top from './top.vue'
import c_log from './calen_log.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{calendar,top,c_log}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}




ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;

}

a {
  color: #42b983;
}
</style>
