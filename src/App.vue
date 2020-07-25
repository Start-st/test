<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <router-view/>
    
  </div>
</template>
<script>
export default{
    data(){
        return {
          
      }
    },
    computed:{
    },
    methods:{
     
    },
    created(){
      
    },
    mounted(){
    }
}
</script>
<style lang="less">
body{
  margin: 0;
  padding: 0;
    background-color:#fafafa;
}
#app {
 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
padding: 0;
margin: 0;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
