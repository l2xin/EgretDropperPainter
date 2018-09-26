class MainUI extends eui.Component implements  eui.UIComponent 
{
	private m_buttonSubmit:eui.Button;	//提交按钮
	private m_buttonCavas:eui.Button;	//画布点击区域

	private m_buttonBottle0:eui.Button;	//黑色瓶子
	private m_buttonBottle1:eui.Button;	//红色瓶子

	private m_imageCavas:eui.Image;		//画布蒙版
	private m_groupDroper:eui.Group;	//吸管

	private m_shapeCavas:egret.Shape;
	
	public constructor() 
	{
		super();
		this.skinName = "resource/ui/main/MainUISkin.exml";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

		this.m_buttonSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSubmitButtonTouchTap, this);
		this.m_buttonBottle0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCavasButtonBottle0Tap, this);
		this.m_buttonBottle1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCavasButtonBottle1Tap, this);
		this.m_buttonCavas.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCavasButtonTouchTap, this);
		this.m_buttonCavas.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onCavasButtonTouchEvent, this);
		this.m_buttonCavas.addEventListener(egret.TouchEvent.TOUCH_END, this.onCavasButtonTouchEvent, this);
	}

	private onCavasButtonBottle0Tap(e:egret.TouchEvent):void
	{
		GameManager.getInstance().curSelectBottleType = GameConfig.BottleEnum.BLACK;
	}

	private onCavasButtonBottle1Tap(e:egret.TouchEvent):void
	{
		GameManager.getInstance().curSelectBottleType = GameConfig.BottleEnum.RED;
	}

	private onSubmitButtonTouchTap(e:egret.TouchEvent):void
	{
		
	}

	private onCavasButtonTouchTap(e:egret.TouchEvent):void
	{	
		this.drawCircle(e.stageX, e.stageY, GameManager.getInstance().curFillColor);
	}

	private onCavasButtonTouchEvent(event:egret.TouchEvent):void
	{
		switch(event.type)
		{
			case egret.TouchEvent.TOUCH_BEGIN:

			break;
		}
	}

	 private drawCircle(x:number, y:number, color:number):void 
	 {
		 if(this.m_shapeCavas == null)
		 {
			 this.m_shapeCavas = new egret.Shape();
			 let childindex = this.m_buttonCavas.parent.getChildIndex(this.m_buttonCavas);
			 this.m_imageCavas.parent.addChildAt(this.m_shapeCavas, childindex + 1);
			 this.m_shapeCavas.width = this.m_imageCavas.width;
			 this.m_shapeCavas.height = this.m_imageCavas.height;
		 }
         var shape:egret.Shape = this.m_shapeCavas;
        //  shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
        //  shape.graphics.lineStyle(2, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
        //  shape.graphics.drawCircle(x, y, Math.random() * 50 + 50);

		 shape.graphics.beginFill(color, 1);
         shape.graphics.lineStyle(2, color);
         shape.graphics.drawCircle(x, y, Math.random() * 50 + 50);

         shape.graphics.endFill();
		 shape.mask = this.m_imageCavas;

		 this.m_groupDroper.x = x;
		 this.m_groupDroper.y = y;
    }
	
}