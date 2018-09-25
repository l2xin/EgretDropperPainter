/**
 * 游戏管理类
 */
class GameManager 
{
    static s_instance:GameManager;

    public static getInstance():GameManager
    {
        if(this.s_instance == null)
        {
            this.s_instance = new GameManager();
        }
        return this.s_instance;
    }


    private m_curSelectBottleType:GameConfig.BottleEnum = GameConfig.BottleEnum.BLACK;
    public get curSelectBottleType() 
    {
        return this.m_curSelectBottleType;
    }
    public set curSelectBottleType(bottleEnum:GameConfig.BottleEnum) 
    {
        this.m_curSelectBottleType = bottleEnum;
        switch(bottleEnum)
        {
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
    }

    //当前选中的颜色
    private m_curFillColor:number = GameConfig.TextColors.black;
    public get curFillColor() 
    {
        return this.m_curFillColor;
    }
    public set curFillColor(fillColor:number) 
    {
        this.m_curFillColor = fillColor;
    }
   
}