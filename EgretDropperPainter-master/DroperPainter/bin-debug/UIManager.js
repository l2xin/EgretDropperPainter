var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UIManager = (function () {
    function UIManager() {
    }
    UIManager.getInstance = function () {
        if (this.s_instance == null) {
            this.s_instance = new UIManager();
        }
        return this.s_instance;
    };
    UIManager.prototype.init = function (sceneRootStage) {
        this._uiRoot = sceneRootStage;
        this.openWnd(GameConfig.SceneName.MainScene);
    };
    UIManager.prototype.closeAllWnd = function () {
    };
    UIManager.prototype.openWnd = function (wndName) {
        this._mainUI = new MainUI();
        this._uiRoot.addChild(this._mainUI);
    };
    UIManager.prototype.closeWnd = function (wndName) {
    };
    return UIManager;
}());
__reflect(UIManager.prototype, "UIManager");
