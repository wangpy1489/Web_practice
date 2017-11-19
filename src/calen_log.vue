<<template>
  <div id="Log">
      <h1> {{msg}}</h1>
    </div>
</template>
<<script>
export default {
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  
}
</script>
<<style>
#Log :{
  height:500px;
}
</style>
