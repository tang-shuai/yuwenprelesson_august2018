<template>
  <div class="hello" ref="pixicanvas">

  </div>
</template>

<script>
  import {SceneManager} from './EasyPIXI.js'
  import SinggleApha from "./SingleAlpha.js";
  import MainScene from "./MainScene.js";
  import LessonPart1 from "./LessonPart1.js";
  import LessonPart2 from './LessonPart2.js';
  import LessonPart3 from './LessonPart3.js';

  var CanvasApp = null;
  var PixiScene = null;
  export default {
    name: 'Boot',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    beforeCreate() {
      if (this.$store.state.init == false) {
        this.$router.push('/');
        window.location.reload()
      }

    },
    mounted() {
      CanvasApp = new PIXI.Application({
        width: 1920,
        height: 1080,
        transparent: true
      });
      CanvasApp.view.style.position = 'absolute';
      CanvasApp.view.style.width = '100%';
      CanvasApp.view.style.height = '100%';
      CanvasApp.view.style.top = '0px';
      CanvasApp.view.style.left = '0px';
      this.$refs.pixicanvas.appendChild(CanvasApp.view);
      // PixiScene = new MainScene();
      // CanvasApp.stage.addChild(PixiScene);
      SceneManager.stage = CanvasApp.stage;

      SceneManager.pushScene('mainScene', new MainScene())
      SceneManager.pushScene('lessonPart1', new LessonPart1());
      SceneManager.pushScene('lessonPart2', new LessonPart2());
      SceneManager.pushScene('lessonPart3', new LessonPart3());

      SceneManager.run('mainScene');

    },
    destroyed() {
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
