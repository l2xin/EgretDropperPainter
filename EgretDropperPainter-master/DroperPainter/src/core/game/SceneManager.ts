/**
 * 场景管理类
 */
class SceneManager extends Singleton {
    private _sceneRootStage:egret.DisplayObjectContainer // 设置所有场景所在的舞台(根)

    public setStage(sceneRootStage:egret.DisplayObjectContainer) {
        this._sceneRootStage = sceneRootStage;
    }


    private changeScene(sceneName:string) {
      
    }

	private Dispose()
	{
		SceneManager.getInstance().destroy();
	}
}