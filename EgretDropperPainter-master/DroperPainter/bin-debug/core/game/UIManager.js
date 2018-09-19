var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var UIManager = (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        return _super !== null && _super.apply(this, arguments) || this;
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
}(Singleton));
__reflect(UIManager.prototype, "UIManager");
//# sourceMappingURL=UIManager.js.map