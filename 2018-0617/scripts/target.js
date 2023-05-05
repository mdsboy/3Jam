import Entity from "./entity.js";
import DrawManager from "./drawManager.js";
import { InputKey, InputMouse } from "./input.js";
import { Point, Rect, Circle } from "./utility.js";

export default class Target extends Entity{
    constructor(pos, num){
        super(pos);
        this.circle = new Circle(pos, 20, 'rgb(0, 0, 255)', false, 2);
        this.number = num;
        this.checked = false;
    }

    Draw(){
        this.circle.Draw();
        DrawManager.String(new Point(this.pos.x - 8, this.pos.y + 8), this.number, 'rgb(0, 0, 0)', 25);
    }

    Update(){
    }

    Judge(pos, r){
        const d = (pos.x - this.pos.x) * (pos.x - this.pos.x) + (pos.y - this.pos.y) * (pos.y - this.pos.y);
        return d < (r + 20) * (r + 20);
    }

    Checked(){
        this.circle.color = 'rgb(0, 255, 0)';
        this.checked = true;
    }
}