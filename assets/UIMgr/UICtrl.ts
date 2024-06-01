import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UICtrl')
export class UICtrl extends Component {

   private static FindNode(name:string,n:Node):Node|null{

        for(let item of n.children){
            if(item.name===name){
                return item;
            }else {
               let res:Node= UICtrl.FindNode(name,item);
               if(res!==null){
                return res;
               }
            }
        }

        return null;
    }

    static FindComp(name:string,cp,c):Component|null{
        let n:Node =c.node;
       let res:Node|null=  UICtrl.FindNode(name,n);
       if(res!==null){
            let comp =res.getComponent(cp);
            if(comp!==null){
                return comp;
            }
       }

       return null;
    }
}


