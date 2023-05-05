'use strict';

class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(p){
        return new Point(this.x + p.x, this.y + p.y);
    }
    dis(p){
        return (this.x - p.x) ** 2 + (this.y - p.y) ** 2;
    }
}

class DrawManager{
    constructor(ctx) {
        this.ctx = ctx;
        this.invert = false;
    }
    Clear(){
        this.ctx.clearRect(0, 0, 800, 600);
    }
    Rect(p, w, h, c, f = true, l = 1){
        this.ctx.beginPath();
        this.ctx.rect(p.x, p.y, w, h);
        this.Draw(c, f, l);
    }
    Circle(p, r, c, f = true, l = 1){ 
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, r, Math.PI * 2, false);
        this.Draw(c, f, l);
    }
    Line(p1, p2, c, l = 1){
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.Draw(c, false, l);
    }
    Polygon(ps, c, f = true, l = 1) {
        this.ctx.beginPath();
        this.ctx.lineWidth = l;
        this.ctx.moveTo(ps[0].x, ps[0].y);
        for(let i = 1; i < ps.length; ++i){
            this.ctx.lineTo(ps[i].x, ps[i].y);
        }
        this.ctx.lineTo(ps[0].x, ps[0].y);
        this.Draw(c, f, l);
    }
    String(p, s, color, size) {
        this.ctx.fillStyle = color;
        this.ctx.font = "" + size + "px 'メイリオ'";
        this.ctx.fillText(s, p.x, p.y);
        //this.ctx.fillText(s, x, y);
    }
    Draw(c, f, l){
        if(this.invert){
            c = this.ColorInvert(c);
        }
        if(f){
            this.ctx.fillStyle = c;
            this.ctx.fill();
        } else {
            this.ctx.strokeStyle = c;
            this.ctx.lineWidth = l;
            this.ctx.stroke();
        }
    }
    ColorInvert(c){
        this.ctx.fillStyle = c;
        this.ctx.fillRect(0, 0, 1, 1);
        const d = this.ctx.getImageData(0, 0, 1, 1).data;
        return 'rgba(' + (255 - d[0]) + ',' + (255 - d[1]) + ',' + (255 - d[2]) + ',' + d[3] + ')';
    }
}
/*
class Rect{
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(x, y, w, h);
        ctx.fill();
    }
}*/