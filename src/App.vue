<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    PIXI.utils.skipHello();
  }
}
</script>

<style>
  html,div{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
#app {
  position: fixed;
  width: 19.2rem;
  height:10.8rem;
  background:white;
  transform-origin: center center;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
