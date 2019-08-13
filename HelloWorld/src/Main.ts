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