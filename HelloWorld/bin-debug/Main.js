//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
//匀速运动
// class Main extends egret.Sprite {
//     public constructor() {
//         super()
//         this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
//     }
//     private shp: egret.Shape = new egret.Shape()
//     private ang: number = 0
//     private r: number = 30;
//     private drawCircle() {
//         let distance = 50
//         let cir = new egret.Shape()
//         cir.graphics.beginFill(0xffffff)
//         cir.graphics.drawCircle(0, 0, 30)
//         cir.x = distance;
//         cir.y = distance
//         this.addChild(cir)
//     }
//     private move(evt: egret.Event) {
//         this.shp.x = 50 + Math.cos(this.ang * Math.PI / 180) * this.r
//         this.shp.y = 50 + Math.sin(this.ang * Math.PI / 180) * this.r
//         this.ang++
//     }
//     private onAddToStage(evt: egret.Event) {
//         this.drawCircle()
//         this.shp.graphics.beginFill(0x0000ff)
//         this.shp.graphics.drawRect(0, 0, 100,100)
//         this.shp.graphics.endFill()
//         this.addChild(this.shp)
//         this.stage.frameRate = 120
//         this.addEventListener(egret.Event.ENTER_FRAME,this.move,this)
//     }
// }
// class Main extends egret.Sprite {
//     constructor() {
//         super()
//         this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onState, this)
//     }
//     private onState(evt: egret.Event) {
//         // let shp = new egret.Shape()
//         // shp.graphics.lineStyle(10,0x00ff00)
//         // shp.graphics.beginFill(0xff0000)
//         // shp.graphics.drawRect(0, 0, 100, 100)
//         // shp.graphics.endFill()
//         // let spr = new egret.Sprite()
//         // spr.x = 100
//         // spr.y = 100
//         // this.addChild(spr)
//         // spr.addChild(shp)
//         // setTimeout(()=>{
//         //     shp.graphics.clear()
//         // },3000)
//         // 曲线
//         let shp = new egret.Shape()
//         shp.graphics.lineStyle(2,0x00ff00)
//         shp.graphics.moveTo(50,50)
//         shp.graphics.curveTo(100,100,200,50)
//         shp.graphics.endFill()
//         this.addChild(shp)
//     }
// }
//抛物线
// class Main extends egret.Sprite {
//     constructor() {
//         super()
//         this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
//     }
//     private onAddToStage(evt:egret.Event) {
//         let shp = new egret.Shape()
//         shp.graphics.beginFill(0x1122cc)
//         shp.graphics.drawArc(200,200,100,0,Math.PI,true)
//         shp.graphics.endFill()
//         this.addChild(shp)
//     }
// }
//多个矩形
// class Main extends egret.Sprite {
//     constructor() {
//         super()
//         this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
//     }
//     private onAddToStage() {
//         let shp = new egret.Shape()
//         shp.graphics.beginFill(0x0000ff)
//         shp.graphics.drawRect(0,0,50,50)
//         shp.graphics.endFill()
//         shp.graphics.beginFill(0x0000ff)
//         shp.graphics.drawRect(50,50,50,50,)
//         shp.graphics.endFill()
//         shp.graphics.beginFill(0xff0000)
//         shp.graphics.drawRect(50,0,50,50)
//         shp.graphics.endFill()
//         shp.graphics.beginFill(0xff0000)
//         shp.graphics.drawRect(0,50,50,50)
//         shp.graphics.endFill()
//         this.addChild(shp)
//     }
// }
//显示容器
// class GridSprite extends egret.Sprite {
//     constructor() {
//         super()
//         this.drawGrid()
//     }
//     private drawGrid() {
//         let shp = new egret.Shape()
//         shp.graphics.beginFill(0x0000ff)
//         shp.graphics.drawRect(0, 0, 50, 50)
//         shp.graphics.endFill()
//         shp.graphics.beginFill(0x0000ff)
//         shp.graphics.drawRect(50, 50, 50, 50, )
//         shp.graphics.endFill()
//         shp.graphics.beginFill(0xff0000)
//         shp.graphics.drawRect(50, 0, 50, 50)
//         shp.graphics.endFill()
//         shp.graphics.beginFill(0xff0000)
//         shp.graphics.drawRect(0, 50, 50, 50)
//         shp.graphics.endFill()
//         this.addChild(shp)
//     }
// }
// class Main extends egret.DisplayObjectContainer {
//     constructor() {
//         super()
//         this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
//     }
//     private onAddToStage() {
//         let gridSprite: GridSprite = new GridSprite()
//         this.addChild(gridSprite)
//     }
// }
//显示/删除 显示对象
// class Main extends egret.Sprite {
//     constructor() {
//         super()
//         this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
//     }
//     private onAddToStage() {
//         let shp: egret.Sprite = new egret.Sprite()
//         shp.graphics.beginFill(0x00ff00)
//         shp.graphics.drawRect(0,0,100,100)
//         shp.graphics.endFill()
//         this.addChild(shp)
//         setTimeout(()=>{
//             this.removeChild(shp)
//         },2000)
//     }
// }
//坐标系
// class Main extends egret.Sprite {
//     constructor() {
//         super()
//         this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
//     }
//     private onAddToStage() {
//         let sprCon1: egret.Sprite = new egret.Sprite()
//         sprCon1.graphics.beginFill(0x00ff00)
//         sprCon1.graphics.drawRect(0, 0, 100, 100)
//         sprCon1.graphics.endFill()
//         this.addChild(sprCon1)
//         sprCon1.x = 120
//         let sprCon2: egret.Sprite = new egret.Sprite()
//         sprCon2.graphics.beginFill(0xff0000)
//         sprCon2.graphics.drawRect(0, 0, 100, 100)
//         sprCon2.graphics.endFill()
//         this.addChild(sprCon2)
//         sprCon2.y = 130
//         let spr: egret.Sprite = new egret.Sprite()
//         spr.graphics.beginFill(0x0000ff)
//         spr.graphics.drawRect(0, 0, 50, 50)
//         spr.graphics.endFill()
//         // this.addChild(spr)
//         // sprCon2.addChild(spr)
//         spr.x = 10
//         spr.y = 10
//         console.log(spr.parent,sprCon1.parent)
//         //移除显示对象，必须判断显式对象的是否有parent
//         if(spr.parent){
//             this.removeChild(spr)
//         }
//     }
// }
//遮罩
// class Main extends egret.Sprite {
//     constructor() {
//         super()
//         this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onStage, this)
//     }
//     private onStage() {
//         this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onStage, this)
//         RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.configcom, this)
//         RES.loadConfig("resource/default.res.json", "resource/")
//     }
//     private configcom(evt: RES.ResourceEvent) {
//         RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.configcom, this)
//         RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this)
//         RES.loadGroup("preload")
//     }
//     private onResourceLoadComplete(evt: RES.ResourceEvent) {
//         RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this)
//         this.init()
//     }
//     private init() {
//         let bmg: egret.Bitmap = new egret.Bitmap()
//         bmg.texture = RES.getRes('bg_jpg')
//         bmg.width = 800
//         bmg.height = 600
//         this.addChild(bmg)
//         let rect: egret.Rectangle = new egret.Rectangle(250, 50, 800, 600)
//         bmg.mask = rect
//     }
// }
//非精确碰撞检测
// class Main extends egret.DisplayObjectContainer {
//     constructor() {
//         super()
//         this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onStage, this)
//     }
//     private onStage(evt: egret.Event) {
//         let shp: egret.Shape = new egret.Shape()
//         shp.graphics.beginFill(0x00ff00)
//         shp.graphics.drawRect(0, 0, 100, 100)
//         shp.graphics.endFill()
//         this.addChild(shp)
//         console.log(shp.hitTestPoint(30, 30))
//         console.log(shp.hitTestPoint(300, 400))
//     }
// }
//精确碰撞
// class Main extends egret.Sprite {
//     constructor() {
//         super()
//         this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onStage, this)
//     }
//     private onStage() {
//         this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onStage, this)
//         RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.configcom, this)
//         RES.loadConfig("resource/default.res.json", "resource/")
//     }
//     private configcom(evt: RES.ResourceEvent) {
//         RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.configcom, this)
//         RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this)
//         RES.loadGroup("preload")
//     }
//     private onResourceLoadComplete(evt: RES.ResourceEvent) {
//         RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this)
//         this.init()
//     }
//     private init() {
//         let bmg: egret.Bitmap = new egret.Bitmap()
//         bmg.texture = RES.getRes('bg_jpg')
//         bmg.width = 300
//         bmg.height = 400
//         this.addChild(bmg)
//         console.log(bmg.hitTestPoint(30, 30, true))
//     }
// }
//包围盒碰撞
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        // this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onStage, this)
        _this.onStage();
        return _this;
    }
    Main.prototype.onStage = function () {
        var shp1 = new egret.Shape();
        shp1.graphics.beginFill(0xff0000);
        shp1.graphics.drawRect(0, 0, 100, 100);
        shp1.graphics.endFill();
        this.addChild(shp1);
        var shp2 = new egret.Shape();
        shp2.graphics.beginFill(0xff0000);
        shp2.graphics.drawRect(250, 250, 50, 50);
        shp2.graphics.endFill();
        this.addChild(shp2);
        var rect1 = new egret.Rectangle(shp1.x, shp1.y, shp1.width, shp1.height);
        var rect2 = new egret.Rectangle(shp2.x, shp2.y, shp2.width, shp2.height);
        console.log(rect1.intersects(rect2));
    };
    return Main;
}(egret.Sprite));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map