import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PcMove')
export class PcMove extends Component {
    @property(Number)
    public timerNum: Number = 0;
    @property(null)
    public timer: null = 'null';

    onLoad () {
        //cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        //cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyDown (event: any) {
        //let node=this.node
        //let pos=node.getPosition();
        //switch(event.keyCode) {
        //    case cc.macro.KEY.w:
        //        node.setPosition(cc.v2(pos.x,pos.y+10>-200?-200:pos.y+10))
        //        break;
        //    case cc.macro.KEY.a:
        //        node.setPosition(cc.v2(pos.x-10<-840?-840:pos.x-10,pos.y))
        //        node.scale<0&&node.setScale(node.scaleX*-1,node.scaleY)
        //        break;
        //    case cc.macro.KEY.s:
        //        node.setPosition(cc.v2(pos.x,pos.y-10<-290?-290:pos.y-10))
        //        break;
        //    case cc.macro.KEY.d:
        //        node.setPosition(cc.v2(pos.x+10>840?840:pos.x+10,pos.y))
        //        node.scale>0&&node.setScale(node.scaleX*-1,node.scaleY)
        //        break;
        //    case cc.macro.KEY.k:
        //        if(!this.node.getComponent(cc.Animation).getAnimationState('jump').isPlaying){
        //            this.node.getComponent(cc.Animation).playAdditive('jump')
        //        }
        //        break;    
        //
    }

    start () {
        //console.log("node",this.node.zIndex=1)
    }

    update () {
    }

    onDestroy () {
        //cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        //cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// // Learn cc.Class:
// //  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// // import { _decorator, input, Input,  KeyCode } from 'cc';
// cc.Class({
//     extends: cc.Component,
//     // onDestroy () {
//     //     cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
//     //     cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
//     // },
//     properties: {
//         timerNum:{
//             default:0,
//             type: Number
//         },
//         timer:{
//             default:null,
//             type: null
//         }
//     },
// 
//     // LIFE-CYCLE CALLBACKS:
// 
//     onLoad () {
//         cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
//         cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
//        
//     },
// 
//     onKeyDown (event) {
//         let node=this.node
//         let pos=node.getPosition();
//         switch(event.keyCode) {
//             case cc.macro.KEY.w:
//                 node.setPosition(cc.v2(pos.x,pos.y+10>-200?-200:pos.y+10))
//                 break;
//             case cc.macro.KEY.a:
//                 node.setPosition(cc.v2(pos.x-10<-840?-840:pos.x-10,pos.y))
// 
//                 node.scale<0&&node.setScale(node.scaleX*-1,node.scaleY)
//                 break;
//             case cc.macro.KEY.s:
//                 node.setPosition(cc.v2(pos.x,pos.y-10<-290?-290:pos.y-10))
// 
//                 break;
//             case cc.macro.KEY.d:
//                 node.setPosition(cc.v2(pos.x+10>840?840:pos.x+10,pos.y))
//                 node.scale>0&&node.setScale(node.scaleX*-1,node.scaleY)
//                 break;
//             case cc.macro.KEY.k:
//                 if(!this.node.getComponent(cc.Animation).getAnimationState('jump').isPlaying){
//                     this.node.getComponent(cc.Animation).playAdditive('jump')
//                     
//                 }
//                 break;    
//     }
// },
// 
//     start () {
//         console.log("node",this.node.zIndex=1)
//     },
//     update(){
//     },
//     onDestroy () {
//         cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
//         cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
// }
//     // update (dt) {},
// });
