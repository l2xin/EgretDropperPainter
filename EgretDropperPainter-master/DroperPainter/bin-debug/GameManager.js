var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 游戏管理类
 */
var GameManager = (function () {
    function GameManager() {
        this.m_curSelectBottleType = GameConfig.BottleEnum.BLACK;
        //当前选中的颜色
        this.m_curFillColor = GameConfig.TextColors.black;
    }
    GameManager.getInstance = function () {
        if (this.s_instance == null) {
            this.s_instance = new GameManager();
        }
        return this.s_instance;
    };
    Object.defineProperty(GameManager.prototype, "curSelectBottleType", {
        get: function () {
            return this.m_curSelectBottleType;
        },
        set: function (bottleEnum) {
            this.m_curSelectBottleType = bottleEnum;
            switch (bottleEnum) {
                case GameConfig.BottleEnum.BLACK:
                    this.curFillColor = GameConfig.TextColors.black;
                    break;
                case GameConfig.BottleEnum.RED:
                    this.curFillColor = GameConfig.TextColors.red;
                    break;
                default:
                    this.curFillColor = GameConfig.TextColors.green;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameManager.prototype, "curFillColor", {
        get: function () {
            return this.m_curFillColor;
        },
        set: function (fillColor) {
            this.m_curFillColor = fillColor;
        },
        enumerable: true,
        configurable: true
    });
    return GameManager;
}());
__reflect(GameManager.prototype, "GameManager");
