import * as PIXI from 'pixi.js'
import SingleAlpha from "./SingleAlpha.js";
import {SceneManager} from "./EasyPIXI";
class MainScene extends PIXI.Container{
  constructor(){
    super();
    this.lessonCtn = null;
    this.lessonCards_arr = [];


    this.on('added',this.addedToStage,this);
  }

  destroyed(){
    this.lessonCtn.destroy();
    this.lessonCards_arr.forEach((item)=>{
      item.destroy();
    })
    this.lessonCtn = null;
    this.lessonCards_arr = null;

  }
  addedToStage(){
    const self  = this;
    this.lessonCtn = new PIXI.Container();

    for(let i=0;i<3;i++) {
      let cards = new PIXI.Graphics();
      cards.beginFill(0xff0000,.6);
      cards.drawRect(0, 0, 200, 400);
      cards.endFill();
      cards.interactive = true;

      cards.on('pointertap',self.lessonCardsTap_handler.bind(self,i),self)


      this.lessonCtn.addChild(cards);
      this.lessonCards_arr.push(cards);

      if (i > 0) {
        this.lessonCards_arr[i].x = this.lessonCards_arr[i - 1].x + (250 + i);
      }else{
        this.lessonCards_arr[i].x = 0;
      }


    }
    this.addChild(this.lessonCtn);




  }
  lessonCardsTap_handler(i,event){
    console.log('i ams:',i+1)
    SceneManager.run('lessonPart'+(i+1));

    this.destroyed();

  }
}
export default MainScene;
