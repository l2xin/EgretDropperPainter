
class UIManager
{

  static s_instance:UIManager;

    public static getInstance():UIManager
    {
        if(this.s_instance == null)
        {
            this.s_instance = new UIManager();
        }
        return this.s_instance;
    }

    private _uiRoot:egret.DisplayObjectContainer; // 设置所有场景所在的舞台(根)
    private _mainUI:MainUI;

    public init(sceneRootStage:egret.DisplayObjectContainer) 
    {
        this._uiRoot = sceneRootStage;
        this.openWnd(GameConfig.SceneName.MainScene);
    }

    private closeAllWnd() {
        
    }

    private openWnd(wndName:string) {
        this._mainUI = new MainUI();
        this._uiRoot.addChild(this._mainUI);
    }

    private closeWnd(wndName:string) {
      
    }
  
}