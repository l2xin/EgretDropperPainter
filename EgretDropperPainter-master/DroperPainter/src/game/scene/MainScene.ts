class MainScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "resource/ui/scene/MainSceneSkin.exml";
        this.addEventListener(eui.UIEvent.COMPLETE,this.createCompleteEvent,this);
    }

	public createCompleteEvent(event: eui.UIEvent): void {
		this.removeEventListener(eui.UIEvent.COMPLETE,this.createCompleteEvent,this);
		
		//GameLayerManager.getInstance().sceneLayer.addChild(this);            
	}	

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}