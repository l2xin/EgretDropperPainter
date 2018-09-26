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
        this.m_buttonBottle0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCavasButtonBottle0Tap, this);
        this.m_buttonBottle1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCavasButtonBottle1Tap, this);
        this.m_buttonCavas.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCavasButtonTouchTap, this);
        this.m_buttonCavas.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onCavasButtonTouchEvent, this);
        this.m_buttonCavas.addEventListener(egret.TouchEvent.TOUCH_END, this.onCavasButtonTouchEvent, this);
    };
    MainUI.prototype.onCavasButtonBottle0Tap = function (e) {
        GameManager.getInstance().curSelectBottleType = GameConfig.BottleEnum.BLACK;
    };
    MainUI.prototype.onCavasButtonBottle1Tap = function (e) {
        GameManager.getInstance().curSelectBottleType = GameConfig.BottleEnum.RED;
    };
    MainUI.prototype.onSubmitButtonTouchTap = function (e) {
    };
    MainUI.prototype.onCavasButtonTouchTap = function (e) {
        this.drawCircle(e.stageX, e.stageY, GameManager.getInstance().curFillColor);
    };
    MainUI.prototype.onCavasButtonTouchEvent = function (event) {
        switch (event.type) {
            case egret.TouchEvent.TOUCH_BEGIN:
                break;
        }
    };
    MainUI.prototype.drawCircle = function (x, y, color) {
        if (this.m_shapeCavas == null) {
            this.m_shapeCavas = new egret.Shape();
            var childindex = this.m_buttonCavas.parent.getChildIndex(this.m_buttonCavas);
            this.m_imageCavas.parent.addChildAt(this.m_shapeCavas, childindex + 1);
            this.m_shapeCavas.width = this.m_imageCavas.width;
            this.m_shapeCavas.height = this.m_imageCavas.height;
        }
        var shape = this.m_shapeCavas;
        //  shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
        //  shape.graphics.lineStyle(2, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
        //  shape.graphics.drawCircle(x, y, Math.random() * 50 + 50);
        shape.graphics.beginFill(color, 1);
        shape.graphics.lineStyle(2, color);
        shape.graphics.drawCircle(x, y, Math.random() * 50 + 50);
        shape.graphics.endFill();
        shape.mask = this.m_imageCavas;
        this.m_groupDroper.x = x;
        this.m_groupDroper.y = y;
    };
    return MainUI;
}(eui.Component));
__reflect(MainUI.prototype, "MainUI", ["eui.UIComponent", "egret.DisplayObject"]);
