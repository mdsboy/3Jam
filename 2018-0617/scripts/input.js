export class InputKey{
    //初期化
    static Init(){
        this.keyList = new Map();
        this.keyList['ArrowRight'] = false;
    }

    static isKeyInput(keyCode){
        return this.keyList[keyCode];
    }
}

//イベントハンドラ
document.onkeydown = e=>{
    InputKey.keyList[e.key] = true;
};

document.onkeyup = e=>{
    InputKey.keyList[e.key] = false;
};

import { Point } from "./utility.js";
export class InputMouse{
    static Init() {
        InputMouse.mouseInput = new Array(2);
        InputMouse.mousePos = new Point(0, 0);
    }
    static getMousepos(){
        return this.mousePos;
    }
    static isMouseLeftDown() {
        return this.mouseInput[0];
    }
    static SetMousePos(x, y){
        InputMouse.mousePos.x = x;
        InputMouse.mousePos.y = y;
    }
}

document.onmousemove = e => {
    InputMouse.SetMousePos(e.offsetX, e.offsetY);
};

document.onmousedown = function (e){
    InputMouse.mouseInput[0] = true;
};

document.onmouseup = function (e){
    InputMouse.mouseInput[0] = false;
};