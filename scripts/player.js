import Entity from "./entity.js";
import { InputKey, InputMouse } from "./input.js";
import DrawManager from "./drawManager.js";
import { Point, Rect, Circle } from "./utility.js";

export default class Player extends Entity{
    constructor(pos, haba, nokori){
        super(pos);
        this.haba = haba;
        this.circle = new Circle(pos, 10, 'rgb(255, 0, 0)');
        this.zahyo = {
            0 : new Point(haba * 2, haba * 2),
            1 : new Point(800 - haba * 2, haba * 2),
            2 : new Point(haba * 2, 600 - haba * 2),
            3 : new Point(800 - haba * 2, 600 - haba * 2)
        };
        this.kado = new Point(0, 0);
        this.launched = false;
        this.vec = new Point(0, 0);
        this.speed = 18;
        this.speeddown = 0.995;
        this.stop = false;
        this.nokori = nokori;
    }

    Draw(){
        //DrawManager.Rect(this.pos, 32, 32, 'rgb(255, 0, 0');
        for(let i = 0; i < this.nokori - 1; ++i){
            DrawManager.Circle(new Point(10 + i * 25, 10), 10, 'rgb(255, 0, 0)');
        }
        this.circle.Draw();
        if(!this.launched){
            DrawManager.DashLine([5, 5], this.kado, InputMouse.getMousepos(), 'rgb(0, 0, 0)');
            for(let i = 0; i < 4; ++i){
                DrawManager.Circle(this.zahyo[i], 10, 'rgb(255, 0, 0)', false);
            }
        }
    }

    Update(){
        if(this.launched){
            this.circle.Move(this.vec);
            this.vec.x *= this.speeddown;
            this.vec.y *= this.speeddown;
            const d = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
            if(d <= 3){
                this.stop = true;
            }
            this.Judge();
            //this.circle.pos.x += this.vec.x;
        }
    }

    Retry(){
        this.launched = false;
    }

    SetSelect(select){
        this.circle.SetPos(this.zahyo[select]);
        this.kado = this.zahyo[select];
    }

    Launched(){
        this.launched = true;
        this.vec.x = InputMouse.getMousepos().x - this.kado.x;
        this.vec.y = InputMouse.getMousepos().y - this.kado.y;
        const d = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
        this.vec.x /= d;
        this.vec.y /= d;
        this.vec.x *= this.speed;
        this.vec.y *= this.speed;
        //console.log(this.vec);
    }

    Judge(){
        if(this.circle.pos.x + this.circle.r >= 800 - this.haba){
            this.vec.x *= -1;
        }
        if(this.circle.pos.x - this.circle.r <= this.haba){
            this.vec.x *= -1;
        }
        if(this.circle.pos.y + this.circle.r >= 600 - this.haba){
            this.vec.y *= -1;
        }
        if(this.circle.pos.y - this.circle.r <= this.haba){
            this.vec.y *= -1;
        }
        const d = Math.sqrt(this.vec.x * this.vec.x + this.vec.y * this.vec.y);
        //console.log(d);
    }
}