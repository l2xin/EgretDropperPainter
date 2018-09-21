var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UIManager = (function () {
    function UIManager() {
    }
    // 设置所有UI所在的舞台(根)
    UIManager.prototype.setRootStage = function (uiRootStage) {
        this.m_uiRootStage = uiRootStage;
    };
    UIManager.prototype.closeAllWnd = function () {
    };
    UIManager.prototype.openWnd = function (wndName) {
    };
    UIManager.prototype.closeWnd = function (wndName) {
    };
    return UIManager;
}());
__reflect(UIManager.prototype, "UIManager");
//# sourceMappingURL=UIManager.js.map