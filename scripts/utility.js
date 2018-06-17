import DrawManager from "./drawManager.js";

export class Utility{
    static rnd(n){
        return Math.floor(Math.random() * n);
    }

    static range(x, y){ //[min, max)
        return Utility.rnd(Utility.Max(x, y) - Utility.Min(x, y)) + Utility.Min(x, y);
    }

    static Min(x, y){
        return x > y ? y : x;
    }

    static Max(x, y){
        return x > y ? x : y;
    }
}

export class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    Move(p){
        return new Point(this.x + p.x, this.y + p.y);
    }
}

class Shape {
    constructor(pos, color, f = true, l = 1){
        this.pos = pos;
        this.color = color;
        this.f = f;
        this.l = l;
    }

    Draw(){
    }

    Move(pos){
        this.pos.x += pos.x;
        this.pos.y += pos.y;
    }

    SetPos(pos){
        this.pos = pos;
    }
}

export class Rect extends Shape{
    constructor(pos, w, h, color, f = true, l = 1) {
        super(pos, color, f, l);
        this.w = w;
        this.h = h;
    }

    Draw(){
        DrawManager.Rect(this.pos, this.w, this.h, this.color);
    }

    SizeChange(w, h){
        this.w = w;
        this.h = h;
    }
}

export class Circle extends Shape{
    constructor(pos, r, color, f = true, l = 1) {
        super(pos, color, f, l);
        this.r = r
    }

    Draw(){
        DrawManager.Circle(this.pos, this.r, this.color, this.f, this.l);
    }

    SizeChange(r){
        this.r = r;
    }
}