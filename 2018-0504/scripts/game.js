'use strict';
const rnd = (n) => {
    return Math.floor(Math.random() * n);
};

const range = (x, y) => { //[min, max)
    return rnd(Max(x, y) - Min(x, y)) + Min(x, y);
}

const Min = (x, y) => {
	return x > y ? y : x;
}

const Max = (x, y) => {
	return x > y ? x : y;
}

class Game extends Scene{
    constructor(sm, data){
        super(sm);
        this.pl = new Array();
        this.pl.push(new Chara(new Point(0, 550 - 15)));
        console.log(data);
        //this.c = new Chara(new Point(0, 550 - 15));
        //this.rect = new Rect();
        this.invert = false;
        this.el = new Array();
        this.time = 0;
        this.time2 = 0;
        this.score = 0;
        this.end = false;
    }
    update(ik){
        ++this.time2;
        if(ik.isDown("x")){
            this.invert = true;
        } else {
            this.invert = false;
            ++this.time;
            this.score = Math.ceil(this.time / 60);
        }
        
        if(this.time2 % 1200 == 0 && this.pl.length < 5){
            this.pl.push(new Chara(new Point(0, 550 - 15)));
        }
        this.pl.forEach(function(p) {
            p.update(ik);
        }, this);

        if(this.time % 120 == 0 && !this.invert){
            this.el.push(new Enemy(new Point(range(50, 750), 0)));
        }
        this.el.forEach(function(e) {
            e.update(this.invert, this.pl);
            if(e.end){
                this.end = true;
            }
        }, this);

        if(this.end){
            this.sm.scene = new Result(this.sm, this.score);
        }
    }
    draw(dm, ctx){
        dm.invert = this.invert;
        dm.Clear();
        dm.Rect(new Point(0, 0), 800, 600, "rgb(255, 255, 255)");
        //this.c.draw(dm, ctx);
        //dm.Rect(new Point(0, 500), 800, 100, "rgba(0, 0, 0, 0.5)");
        this.pl.forEach(function(p) {
            p.draw(dm, ctx);
        }, this);
        this.el.forEach(function(e) {
            e.draw(dm, ctx);
        }, this);
        dm.String(new Point(600, 100), "Score:" + this.score, this.invert ? "rgb(255,255,255)" : "rgb(0,0,0)", 30);
        dm.Rect(new Point(0, 550), 800, 50, "rgba(255, 255, 255, 1.0)");
        dm.Rect(new Point(0, 550), 800, 50, "rgba(0, 255, 0, 0.5)");
        /*
        dm.Rect(this.p, 200, 300, "rgba(0, 0, 200, 0.5)", false);
        dm.Circle(this.p, 50, "blue");
        dm.Line(this.p, this.p.move(new Point(150, 300)), "blue", 10);
        dm.Polygon([new Point(30,50), new Point(300,80), new Point(50,100), new Point(80,500)], "black", false, 3);*/
    }
}

class Chara {
    constructor(p){
        this.p = p;
        this.b = true;
        this.speed = 1.0;
        this.r = 15;
    }
    update(ik){
        if(this.b){
            this.p.x += this.speed;
            if(this.p.x > 770){
                this.b = false;
            }
        }
        else {
            this.p.x -= this.speed;
            if(this.p.x < 30){
                this.b = true;
            }
        }
        
    }
    draw(dm, ctx){
        dm.Circle(this.p, this.r, "rgba(0, 0, 255, 0.5)");
        dm.Circle(this.p, this.r, "rgba(0, 0, 255, 1.0)", false, 3.0);
    }
}

class Enemy {
    constructor(p){
        this.p = p;
        this.ps = new Array();
        this.r = range(20, 50)
        this.speed = 50 / this.r;
        for(let i = 0; i < 5; ++i){
            this.ps.push(new Point(this.p.x + this.r * Math.cos(360 / 5 * (i * 2 % 5) * Math.PI / 180), this.p.y + this.r * Math.sin(360 / 5 * (i * 2 % 5) * Math.PI / 180)));
            //console.log(360 / 5 * (i * 2 % 5));
        }
        this.time = 0.0;
        this.end = false;
    }
    update(invert, ps){
        if(!invert){
            this.time += 0.2;
            this.p.y += this.speed;
        }
        for(let i = 0; i < 5; ++i){
            this.ps[i] = new Point(this.p.x + this.r * Math.cos((360 / 5 * (i * 2 % 5) + this.time) * Math.PI / 180), this.p.y + this.r * Math.sin((360 / 5 * (i * 2 % 5) + this.time) * Math.PI / 180));
        }
        ps.forEach(function(p) {
            if(this.judge(p.p, p.r)){
                this.end = true;
            }
        }, this);
    }
    draw(dm, ctx){
        //dm.Circle(this.p, this.r, 'rgba(255, 0, 0, 0.5)');
        dm.Polygon(this.ps, 'rgba(255, 255, 0, 0.7)');
        dm.Polygon(this.ps, 'rgba(255, 0, 0, 0.7)', false, 3.0);
    }
    judge(p, r){
        for(let i = 0; i < 5; ++i){
            if(this.ps[i].dis(p) <= r ** 2){
                return true;
            }
        }
        return false;
    }
}