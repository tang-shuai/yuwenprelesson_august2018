import * as PIXI from 'pixi.js'
import SingleAlpha from "./SingleAlpha.js";
import {CongraBand, MenuBar} from "./gameUI";
import {SceneManager} from "./EasyPIXI";
class LessonPart1 extends PIXI.Container{
  constructor(){
    super();
    this.textArea = null;


    this.worldsManifest = [
      ["《","",300],
      ["史","shi",600],
      ["记","ji",900],
      ["》","",1200],
      ["又","you",1500],
      ["名","ming",1800],
      ["《","",2100],
      ["太","tai",2400],
      ["史","shi",2700],
      ["公","gong",3000],
      ["书","shu",3300],
      ["》","",3600],
      ["，","",3900]

    ]

    this.on('added',this.addedToStage,this);
  }

  addedToStage(){
    var arr = [];
    var start_posX = 100;
    var start_posY = 0;
    var textArea_width = 800;
    var lineHeight = 100;
    var rowsNum = 0;
    const self  = this;

    this.textArea = new PIXI.Container();




    for(let i=0;i<this.worldsManifest.length;i++){
      let myText = new SingleAlpha();
      myText.showTime = this.worldsManifest[i][2]
      if(self.worldsManifest[i][0]){
        myText.chineseContent_str = self.worldsManifest[i][0];

      };
      if(self.worldsManifest[i][1]){
        myText.phoneticContent_str = self.worldsManifest[i][1];
      }
      // myText.fontSize = 60;
      self.textArea.addChild(myText);
      arr.push(myText);

      if(i>0){
        if(arr[i-1].x>textArea_width){
          rowsNum++;
          arr[i-1].x = start_posX+arr[i-1].width/2;
          arr[i-1].y = start_posY+(rowsNum*lineHeight);
        }
        arr[i].x = arr[i-1].x+arr[i-1].width/2+arr[i].width/2+20;
        arr[i].y = arr[i-1].y;

      }else{
        arr[i].x = start_posX+arr[i].width/2;
        arr[i].y = start_posY;
      }
    }
    self.addChild(self.textArea);


    let band = new CongraBand();
    band.emitContinue_handler = function(){
      console.log('跳转场景2');
      SceneManager.run('lessonPart2');
    }
    this.addChild(band)
    band.x = 1920/2-band.width/2;
    band.y = 1080/2-band.height/2;


    let menu = new MenuBar();
    this.addChild(menu)





  }

}
export default LessonPart1;
