/**
 * 场景管理类
 */
class SceneManager 
{
    static s_instance:SceneManager;

    public static getInstance():SceneManager
    {
        if(this.s_instance == null)
        {
            this.s_instance = new SceneManager();
        }
        return this.s_instance;
    }

    private _sceneRoot:egret.DisplayObjectContainer; // 设置所有场景所在的舞台(根)

    private _mainScene:MainScene;

    public init(sceneRootStage:egret.DisplayObjectContainer) 
    {
        this._sceneRoot = sceneRootStage;
        this.changeScene(GameConfig.SceneName.MainScene);
    }

   
    private changeScene(sceneName:string) 
    {
        switch(sceneName)
        {
            case GameConfig.SceneName.MainScene:
                if(this._mainScene == null)
                {
                    this._mainScene = new MainScene();
                    this._sceneRoot.addChild(this._mainScene);
                }
                break;
        }
    }

    private dispose()
	{
       
	}

}