import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { UICtrl } from './UIMgr/UICtrl';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {


    start() {
        let s:Component|null=UICtrl.FindComp("Label-002",Label,this);
        console.log(s);
    }

    update(deltaTime: number) {
        
    }
}


