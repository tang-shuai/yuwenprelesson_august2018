<template>
  <div class="hello" ref="pixicanvas">

  </div>
</template>

<script>
  import BootScene from "./BootScene.js";

  var CanvasApp = null;
  var PixiScene = null;
  export default {
    name: 'Boot',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      var self = this;
      CanvasApp = new PIXI.Application({
        width:1920,
        height:1080,
        transparent:true
      });
      CanvasApp.view.style.position = 'absolute';
      CanvasApp.view.style.width = '100%';
      CanvasApp.view.style.height = '100%';
      CanvasApp.view.style.top = '0px';
      CanvasApp.view.style.left = '0px';
      this.$refs.pixicanvas.appendChild(CanvasApp.view);


      self.axios.get('static/resources.json').then((response)=>{
        PIXI.loader.add(response.data)
          .load(()=>{
            PixiScene = new BootScene({vueInstance:self});

            CanvasApp.stage.addChild(PixiScene);

            self.$store.commit('setInit',true);
          })
      })


      //init PIXI loader;




    },
    destroyed(){
      CanvasApp.destroy(true);
      PixiScene.destroy();
      PixiScene = null;
      CanvasApp = null;
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
