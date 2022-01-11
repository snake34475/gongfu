
import { _decorator, Component, Node,Input, input,EventKeyboard, KeyCode,Animation } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = rolemove
 * DateTime = Tue Jan 11 2022 10:51:23 GMT+0800 (中国标准时间)
 * Author = snake34475
 * FileBasename = rolemove.ts
 * FileBasenameNoExtension = rolemove
 * URL = db://assets/js/rolemove.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('rolemove')
export class rolemove extends Component {
    // [1]
    // dummy = '';

    // [2]
    roleState=0 //设置状态机，0为静止，1为行走，2为奔跑
    // @property
    // serializableDummy = 0;
    onLoad () {
        input.on(Input.EventType.KEY_PRESSING,this.onKeyDown,this)|| input.on(Input.EventType.KEY_DOWN,this.onKeyDown,this)
        input.on(Input.EventType.KEY_UP,this.onKeyUp,this)
    }
    start () {
        // console.log(this.roleState)
    }

    onKeyDown (event: EventKeyboard) {
        let node:Node=this.node
        let pos=node.getPosition();
        switch(event.keyCode) {
            case KeyCode.KEY_W:
                node.setPosition(pos.x,pos.y+10>-200?-200:pos.y+10)
                this.roleWalkFn()
                break;
            case KeyCode.KEY_A:
                node.setPosition(pos.x-10<-840?-840:pos.x-10,pos.y)
                node.scale.x<0&&node.setScale(node.scale.x*-1,node.scale.y)
                this.roleWalkFn()
                break;
            case KeyCode.KEY_S:
                node.setPosition(pos.x,pos.y-10<-290?-290:pos.y-10)
                this.roleWalkFn()
                break;
            case KeyCode.KEY_D:
                node.setPosition(pos.x+10>840?840:pos.x+10,pos.y)
                node.scale.x>0&&node.setScale(node.scale.x*-1,node.scale.y)
                this.roleWalkFn()
                break;
            case KeyCode.KEY_K:
                const animationComponent = node.getComponent(Animation);
                const [ jump ] = animationComponent.clips;
                const idleState = animationComponent.getState(jump.name);
                idleState.play()
                break;    
        }
    }

    onKeyUp(){
        let animationComponent = this.node.getComponent(Animation);
        const [ jump,roleWalk ] = animationComponent.clips;
        const WalkState = animationComponent.getState(roleWalk.name);
        WalkState.stop()
    }
    roleWalkFn(){
        let animationComponent = this.node.getComponent(Animation);
        const [ jump,roleWalk ] = animationComponent.clips;
        const WalkState = animationComponent.getState(roleWalk.name);
        if(WalkState.isPlaying)return
        WalkState.play()
        console.log(WalkState)
    }   

onDestroy () {
    input.off(Input.EventType.KEY_DOWN,this.onKeyDown,this)
    input.off(Input.EventType.KEY_UP,this.onKeyUp,this)
}
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
