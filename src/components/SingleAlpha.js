import {TweenMax} from 'gsap'
class SingleAlpha extends PIXI.Container{
  constructor(){
    super();
    this.initial();
    this.on('added',this.addedToStage,this);
  }
  initial(){
    this.phonetic = null;//拼音
    this.chinese = null;//中文字符
    this.phoneticSize_num = 50;//拼音的大小
    this.phoneticColor_num = 0x000000;//拼音的颜色
    this.phoneticContent_str = '';//拼音的内容
    this.chineseColor_num = 0x000000;
    this.chineseSize_num = 50;
    this.chineseContent_str = '';
    this.showTime = 1000;
  }
  addedToStage(){
    var self = this;
    this.phonetic = new PIXI.Text();
    this.chinese = new PIXI.Text();

    this.chinese.text = this.chineseContent_str;
    this.phonetic.text = this.phoneticContent_str;

    this.phonetic.style.fontSize  = this.phoneticSize_num;
    this.phonetic.style.fill = this.phoneticColor_num;
    this.chinese.style.fontSize = this.chineseSize_num;
    this.chinese.style.fill = this.chineseColor_num;


    this.chinese.style.align = 'center';
    this.phonetic.style.align = 'center';

    this.phonetic.pivot.x = this.phonetic.width/2;
    this.chinese.pivot.x = this.chinese.width/2;
    this.addChild(this.chinese);
    this.addChild(this.phonetic);

    this.chinese.y = 50;


    if(this.showTime){
      setTimeout(()=>{
        self.chinese.style.fill = 0xff0000;
        self.phonetic.style.fill = 0xff0000;
      },this.showTime)
      //TweenMax.to(self.chinese,4,{tint:0xeecf26});
      //self.chinese.tint = 0x1a47ba;
      // console.log("???")
      //
      // let colorMatrix = new PIXI.filters.ColorMatrixFilter();
      //

      // TweenMax.to(self.chinese,4,{onUpdate:(delta)=>{
      //     // container.filters = [colorMatrix];
      //     // colorMatrix.contrast(2);
      //     console.log(delta)
      //   }})
      //
      //
      // let hueNum = {num:0};
      // TweenMax.to(hueNum,4,{num:1,onUpdate:()=>{
      //     let colorMatrix = new PIXI.filters.ColorMatrixFilter();
      //     colorMatrix.filters = [colorMatrix];
      //     colorMatrix.brightness(hueNum.num);
      //     self.chinese.filters = [colorMatrix];
      //     console.log(hueNum.num)
      //   }})

      // setTimeout(()=>{
      //   self.chinese.style.fill = 0xeecf26;
      // },self.showTime)

    }



  }
}
export default SingleAlpha;
