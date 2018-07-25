import * as PIXI from 'pixi.js'
import SingleAlpha from "./SingleAlpha.js";
class LessonPart3 extends PIXI.Container{
  constructor(){
    super();
    this.initial();
    this.on('added',this.addedToStage,this);
  }
  initial(){
    this.textArea = null;


    this.worldsManifest = [
      ["《",""],
      ["厉","shi"],
      ["孩","ji"],
      ["》",""],
      ["又","you"],
      ["名","ming"],
      ["《",""],
      ["太","tai"],
      ["史","shi"],
      ["公","gong"],
      ["书","shu"],
      ["》",""],
      ["，"]

    ]


  }
  addedToStage(){
    const self  = this;

    this.textArea = new PIXI.Container();


    //
    //
    // this.worldsManifest.forEach((item,index)=>{
    //   let myText = new SingleAlpha();
    //   myText.chineseContent_str = item.word;
    //   myText.phoneticContent_str = item.phontic;
    //   // myText.fontSize = 60;
    //   self.addChild(myText)
    //   console.log(item.word,myText.width)
    //   myText.x = index*100
    //   console.log(item.word)
    //
    //
    //
    // })
    var arr = [];
    var start_posX = 100;
    var start_posY = 0;
    var textArea_width = 800;
    var lineHeight = 100;
    var rowsNum = 0;

    for(let i=0;i<this.worldsManifest.length;i++){
      let myText = new SingleAlpha();
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
      console.log(arr[i].x,i,'<<<X')
      //  console.log(item.word,myText.width)

      //   console.log(item.word)
    }
    self.addChild(self.textArea);

    // let myText = new SingleAlpha();
    // myText.chineseContent_str = this.worldsManifest[2].word;
    // myText.phoneticContent_str = this.worldsManifest[2].phonetic;
    // // myText.fontSize = 60;
    // self.addChild(myText)
    // myText.x = 100*(index+50);
    // console.log(item.word)


  }

}
export default LessonPart3;
