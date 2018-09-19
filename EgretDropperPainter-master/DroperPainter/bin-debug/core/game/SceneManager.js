var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 场景管理类
 */
var SceneManager = (function () {
    function SceneManager() {
    }
    SceneManager.prototype.setStage = function (sceneRootStage) {
        this._sceneRootStage = sceneRootStage;
    };
    SceneManager.prototype.changeScene = function (sceneName) {
    };
    SceneManager.prototype.Dispose = function () {
        //Singleton.getInstance(SceneManager).Init();
    };
    SceneManager.prototype.Init = function () {
        console.log("SceneManager.Init");
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map