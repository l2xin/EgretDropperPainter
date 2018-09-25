

// 游戏配置文件

module GameConfig 
{
	export var SceneName = 
	{
		MainScene: "MainScene",	//主场景
	}

    export enum BottleEnum
	{
		BLACK = 0,	//黑
		RED = 1,	//红
	}


    //全局字体颜色表--可以扩展
    export var TextColors = 
	{
        white: 0xFFFFFF,//白色
        milkWhite: 0xfbf1af,//乳白色 
        grayWhite: 0xceb6a2,//灰白色
        yellow: 0xffff00,//金黄色 
        lightYellow: 0xffd375,//淡黄色
        orangeYellow: 0xff9900,//橘黄色//道具名称 //玩家姓名
        red: 0xf11300,//红色
        green: 0x00e500,//绿色 
        blue: 0x1a94d7,//蓝色 
        grayBlue: 0x2f5177,//墨蓝色 
        purple: 0xe938f2,//紫色 
        pink: 0xFF3030,//粉色 
        black: 0x2e2d2d,//黑色
        golden: 0xFFD700 //金色
    }

    //全局字体大小表--可以扩展
    export var LabelFontSize = 
	{
        littleSize: 12,//小型字体大小
        middleSize: 18,//中型字体大小
        normalSize: 24,//正常字体大小
        bigSize: 36//大型字体大小
    }
}