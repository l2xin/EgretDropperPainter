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
var MainUI = (function (_super) {
    __extends(MainUI, _super);
    function MainUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/main/MainUISkin.exml";
        return _this;
    }
    MainUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.m_buttonSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSubmitButtonTouchTap, this);
        this.m_buttonCavas.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCavasButtonTouchTap, this);
    };
    MainUI.prototype.onSubmitButtonTouchTap = function (e) {
        this.drawCircle(e.stageX, e.stageY);
    };
    MainUI.prototype.onCavasButtonTouchTap = function (e) {
        this.drawCircle(e.stageX, e.stageY);
    };
    MainUI.prototype.drawCircle = function (x, y) {
        if (this.m_shapeCavas == null) {
            this.m_shapeCavas = new egret.Shape();
            this.m_imageCavas.parent.addChild(this.m_shapeCavas);
            this.m_shapeCavas.width = this.m_imageCavas.width;
            this.m_shapeCavas.height = this.m_imageCavas.height;
        }
        var shape = this.m_shapeCavas;
        shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
        shape.graphics.lineStyle(2, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
        shape.graphics.drawCircle(x, y, Math.random() * 50 + 50);
        shape.graphics.endFill();
        shape.mask = this.m_imageCavas;
    };
    return MainUI;
}(eui.Component));
__reflect(MainUI.prototype, "MainUI", ["eui.UIComponent", "egret.DisplayObject"]);
