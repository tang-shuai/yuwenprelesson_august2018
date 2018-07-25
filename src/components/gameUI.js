class CongraBand extends PIXI.Container{
  constructor(){
    super();
    this.bandCtn = null;
    this.emitAgain_handler = null;
    this.emitContinue_handler = null;
    this.status = 'playing';//playing, over
    this.on('added',this.addedToStage,this);

  }
  addedToStage(){
    this.bandCtn = new PIXI.Container();
    let bgband = new PIXI.Graphics();
    let playAgain_btn = new PIXI.Graphics();
    let continuePlay_btn = new PIXI.Graphics();
    let gameover_btn = new PIXI.Graphics();

    bgband.beginFill(0xdecc66);
    bgband.drawRect(0,0,800,400);
    bgband.endFill();

    playAgain_btn.beginFill(0xd466de);
    playAgain_btn.drawRect(0,0,200,50);
    playAgain_btn.endFill();

    continuePlay_btn.beginFill(0xd466de);
    continuePlay_btn.drawRect(0,0,200,50);
    continuePlay_btn.endFill();

    gameover_btn.beginFill(0xd466de);
    gameover_btn.drawRect(0,0,200,50);
    gameover_btn.endFill();
    this.bandCtn.addChild(bgband);
    if(this.status == 'playing'){

      this.bandCtn.addChild(playAgain_btn);
      this.bandCtn.addChild(continuePlay_btn);
      playAgain_btn.x = 100;
      continuePlay_btn.x = 500;
      playAgain_btn.on('pointertap',this.playAgain_btnTap_handler,this);
      continuePlay_btn.on('pointertap',this.continuePlay_btnTap_handler,this);
      playAgain_btn.interactive = continuePlay_btn.interactive = true;
    }else if(this.status == 'over'){
      this.bandCtn.addChild(playAgain_btn);
      this.bandCtn.addChild(gameover_btn);
    }


    this.addChild(this.bandCtn);




  }
  playAgain_btnTap_handler(){

    if(this.emitAgain_handler){
      this.emitAgain_handler();
    }

  };
  continuePlay_btnTap_handler(){
    console.log('continue',this.emitContinue_handler)
    if(this.emitContinue_handler){
      this.emitContinue_handler();
    }

  };
}


class MenuBar extends PIXI.Container{
  constructor(){
    super();
    this.homeBtn = null;
    this.on('added',this.addedToStage,this);

  }
  addedToStage(){
    this.homeBtn = new PIXI.Sprite(PIXI.Texture.from('homebtn'));
    this.addChild(this.homeBtn)


  }

}
export {CongraBand,MenuBar};
