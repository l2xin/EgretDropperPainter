var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 场景管理类
 */
var SceneManager = (function () {
    function SceneManager() {
    }
    SceneManager.getInstance = function () {
        if (this.s_instance == null) {
            this.s_instance = new SceneManager();
        }
        return this.s_instance;
    };
    SceneManager.prototype.init = function (sceneRootStage) {
        this._sceneRoot = sceneRootStage;
        this.changeScene(GameConfig.SceneName.MainScene);
    };
    SceneManager.prototype.changeScene = function (sceneName) {
        switch (sceneName) {
            case GameConfig.SceneName.MainScene:
                if (this._mainScene == null) {
                    this._mainScene = new MainScene();
                    this._sceneRoot.addChild(this._mainScene);
                }
                break;
        }
    };
    SceneManager.prototype.dispose = function () {
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map