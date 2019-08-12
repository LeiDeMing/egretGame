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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onState, _this);
        return _this;
    }
    Main.prototype.onState = function (evt) {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        var spr = new egret.Sprite();
        spr.x = 100;
        spr.y = 100;
        this.addChild(spr);
        spr.addChild(shp);
    };
    return Main;
}(egret.Sprite));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map