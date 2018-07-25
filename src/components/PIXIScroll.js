class PIXIScroll extends PIXI.Container {
  constructor($options = {}) {
    super();

    this.scrollContent = $options.content || null;
    this.scrollArea = null;
    this.scrollBar = null;

    this.scrollWidth = $options.width || 100;
    this.scrollHeight = $options.height || 100;
    this.stage = $options.stage;

    this.allowScrollDir = $options.allowScrollDir || 'vertical';


    this.canDragScroller = false;
    this.canDragContent = false;

    this.cursorDistPos = null;//鼠标指针和滑动条的位置距离
    this.scrollContentDistPos = null;//滑动内容与指针的位置距离；

    this.scaleDiff = 1;//长度比值;scroll高度与页面长度的比
    this.maxDraggedDist = null;
    this.maxContentDraggedDist = null;//内容区域最大可拖动距离
    this.scrollProgress = 0;//浏览的进度条;


    this.on('added', this.addedToStage, this);
  }

  addedToStage() {
    if (!this.scrollContent) {
      console.warn('scroll 必须要有内容！')
      return;
    }
    ;
    if (this.scrollContent) {
      this.scaleDiff = (this.scrollHeight / this.scrollContent.height) < 1 ? (this.scrollHeight / this.scrollContent.height) : 1;
      this.scrollBar = new PIXI.Graphics();
      //设置滚动条;
      this.scrollBar.beginFill(0x2b007c, 0.8);
      this.scrollBar.drawRect(0, 0, 20, this.scaleDiff * this.scrollHeight);
      this.scrollBar.endFill();
      //滚动条可以拖动的最大距离;
      this.maxDraggedDist = Math.abs(this.scrollHeight - this.scrollBar.height);
      this.maxContentDraggedDist = Math.abs(this.scrollHeight - this.scrollContent.height);

      this.scrollArea = new PIXI.Graphics();
      this.scrollArea.beginFill(0x6d3dc8);
      this.scrollArea.drawRect(0, 0, this.scrollWidth, this.scrollHeight);
      this.scrollArea.endFill();
      this.scrollContent.mask = this.scrollArea;
      this.addChild(this.scrollArea);
      this.addChild(this.scrollContent);

      this.scrollBar.x = this.scrollWidth;
      this.addChild(this.scrollBar);


      //Events;
      this.scrollBar.interactive = true;


      if (this.scaleDiff < 1) {


        this.scrollBar.on('pointerdown', this.scrollBarPointerDown_handler, this);


        this.scrollBar.on('pointerup', this.scrollBarPointerUp_handler, this);
        this.scrollBar.on('pointerupoutside', this.scrollBarPointerUp_handler, this);
        this.scrollBar.on('pointermove', this.scrollBarPointerMove_handler, this);


        //滑动的内容;
        this.scrollContent.interactive = true;

        this.scrollContent.on('pointerdown', this.scrollContentPointerDown_handler, this);
        this.scrollContent.on('pointerup', this.scrollContentPointerUp_handler, this);
        this.scrollContent.on('pointerupoutside', this.scrollContentPointerUp_handler, this);
        this.scrollContent.on('pointermove', this.scrollContentPointerMove_handler, this);
      }


    }


  }


  scrollBarPointerDown_handler(event) {
    this.canDragScroller = true;


    this.cursorDistPos = this.scrollBar.toLocal(event.data.global, this.stage);


  }

  scrollBarPointerUp_handler() {
    this.canDragScroller = false;


  }

  scrollBarPointerMove_handler(event) {
    if (this.canDragScroller) {


      this.scrollBar.y = event.data.global.y - this.cursorDistPos.y - this.y;
      //限制滚动条可拖动范围
      if (this.scrollBar.y <= 0) {
        this.scrollBar.y = 0;
      }
      if (this.scrollBar.y > this.maxDraggedDist) {
        this.scrollBar.y = this.maxDraggedDist
      }
      //设置滚动条进度
      this.scrollProgress = this.scrollBar.y / this.maxDraggedDist;

      //设置滚动内容的位置；
      this.scrollContent.y = this.scrollProgress * (this.maxContentDraggedDist) * -1;


    }
  }

  //内容滑动条
  scrollContentPointerDown_handler(event) {
    this.canDragContent = true;

    this.scrollContentDistPos = this.scrollContent.toLocal(event.data.global, this.stage);


  }

  scrollContentPointerUp_handler() {
    this.canDragContent = false;


  }

  scrollContentPointerMove_handler(event) {
    if (this.canDragContent) {
      this.scrollContent.y = event.data.global.y - this.scrollContentDistPos.y - this.y;

      if (this.scrollContent.y > 0) {
        this.scrollContent.y = 0
      }
      if (this.scrollContent.y < this.maxContentDraggedDist * -1) {
        this.scrollContent.y = this.maxContentDraggedDist * -1
      }
      //进度总路程;
      let percents = this.scrollContent.y / this.maxContentDraggedDist;
      this.scrollBar.y = (percents * this.maxDraggedDist) * -1;


    }

  }
  destroyed(){
    super.destroy();
    this.destroy();

    this.scrollContent = null;
    this.scrollArea = null;
    this.scrollBar = null;

    this.scrollWidth = null;
    this.scrollHeight = null;
    this.stage = null;

    this.allowScrollDir = null;


    this.canDragScroller = null;
    this.canDragContent = null;

    this.cursorDistPos = null;//鼠标指针和滑动条的位置距离
    this.scrollContentDistPos = null;//滑动内容与指针的位置距离；

    this.scaleDiff = null;//长度比值;scroll高度与页面长度的比
    this.maxDraggedDist = null;
    this.maxContentDraggedDist = null;//内容区域最大可拖动距离
    this.scrollProgress = null;//浏览的进度条;


  }
}

export default PIXIScroll;
