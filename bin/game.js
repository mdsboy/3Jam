'use strict';
class Game {
    constructor(){
        this.title = new Title();
        this.main;// = new Main();
        this.result;// = new Result();
        this.scene = 0;
    }
    update(inputkey){
        if(this.scene == 0){
            this.title.update(inputkey);
            if(this.title.next){
                this.scene = 1;
                this.main = new Main();
            }
        }
        else if(this.scene == 1){
            this.main.update(inputkey);
            if(this.main.next){
                this.scene = 2;
                this.result = new Result(this.main.points);
            }
        }
        else {
            this.result.update(inputkey);
            if(this.result.next){
                this.scene = 0;
                this.title = new Title();
            }
        }
    }
    draw(ctx){
        if(this.scene == 0){
            this.title.draw(ctx);
        }
        else if(this.scene == 1){
            this.main.draw(ctx);
        }
        else {
            this.result.draw(ctx);
        }
    }
}

class Title {
    constructor(){
        this.axis = new Axis(400, 300);
        this.next = false;
    }
    update(inputkey){
        if(inputkey.isDown("z")){
            this.next = true;
        }
    }
    draw(ctx){
        ctx.clearRect(0, 0, 800, 600);
        this.axis.draw(ctx);
        ctx.font = "50px 'Arial'";
        ctx.fillText("sin おえかき", 250, 200);
        ctx.font = "30px 'Arial'";
        ctx.fillText("原点からx軸の正の方向に点が動きます", 150, 400);
        ctx.fillText("上下キーで動かしてsin波を描いてみてください", 100, 450);
        ctx.fillText("Zを押すと始まります", 300, 500);
    }
}

class Result {
    constructor(points){
        this.axis = new Axis(0, 300);
        this.next = false;
        this.points = points;
        this.points.Set();
        this.ans = new Points('rgb(255, 0, 0)');
        for(let i = 0; i < 800; ++i){
            this.ans.Add(i, 300 - 250 * Math.sin(i * Math.PI / 400));
        }
        this.score = 100;
        for(let i = 0; i < 800; ++i){
            this.score -= Math.abs(this.points.Gety(i) - this.ans.Gety(i)) / 800;
        }
        if(this.score < 0) this.score = 0;
    }
    update(inputkey){
        if(inputkey.isDown("x")){
            this.next = true;
        }
        if(inputkey.isDown("t")){
            const txt = "";
            const url = "http://n-a.rip/gamejam/eitango/";
            const tweeturl = `https://twitter.com/intent/tweet?hashtags=traP3jam&text=${encodeURIComponent(txt)}&url=${encodeURIComponent(url)}`;
            location.href = tweeturl;
        }
    }
    draw(ctx){
        ctx.clearRect(0, 0, 800, 600);
        this.points.draw(ctx);
        this.axis.draw(ctx);
        this.ans.draw(ctx);
        ctx.font = "30px 'Arial'";
        ctx.fillText("score:" + Math.round(this.score) + "点", 100, 400);
        ctx.fillText("Tで点数をツイート", 100, 450);
        ctx.fillText("Xでタイトルにもどる", 100, 500);
    }
}

class Main {
  constructor(){
    this.player = new Player(400, 300);
    this.axis = new Axis(400, 300);
    this.points = new Points('rgb(0, 0, 0)');
    this.time = 0;
    this.next = false;
  }
  update(inputkey){
    this.time++;
    this.player.update(inputkey);
    this.axis.update();
    this.points.update();
    //if(this.time % 10 == 0){
        this.points.Add(this.player.x, this.player.y);
    //}
    if(this.time > 800){
        this.next = true;
    }
  }
  draw(ctx){
    ctx.clearRect(0, 0, 800, 600);
    this.player.draw(ctx);
    this.axis.draw(ctx);
    this.points.draw(ctx);
  }
}

class Player {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.speed = 3;
  }
  update(inputkey){
    /*
    if(inputkey.isDown("ArrowLeft")){
      this.x -= 5;
    }
    if(inputkey.isDown("ArrowRight")){
      this.x += 5;
    }
    */
    if(inputkey.isDown("ArrowUp") && this.y > 0){
      this.y -= this.speed;
    }
    if(inputkey.isDown("ArrowDown") && this.y < 600){
      this.y += this.speed;
    }
  }
  draw(ctx){
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    ctx.fill();
  }
}

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    update(){
        this.x--;
    }
    draw(ctx, color){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

class Points {
    constructor(color){
        this.points = new Array();
        this.color = color;
        //console.log(color);
    }
    update(){
        for(let i = 0; i < this.points.length; ++i){
            this.points[i].update();
        }
    }
    draw(ctx){
        for(let i = 0; i < this.points.length; ++i){
            this.points[i].draw(ctx, this.color);
        }
    }
    Add(x, y){
        this.points.push(new Point(x, y));
    }
    Set(){
        for(let i = 0; i < this.points.length; ++i){
            this.points[i].x += 400;
        }
    }
    Gety(i){
        return this.points[i].y;
    }
}

class Axis {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    update(){
        this.x --;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.setLineDash([0]);
        ctx.moveTo(0, this.y);
        ctx.lineTo(800, this.y);
        ctx.moveTo(this.x, 0);
        ctx.lineTo(this.x, 600);
        ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([2]);
        ctx.moveTo(this.x, this.y - 250);
        ctx.lineTo(this.x + 200, this.y - 250);
        ctx.moveTo(this.x, this.y + 250);
        ctx.lineTo(this.x + 600, this.y + 250);
        ctx.moveTo(this.x + 200, 50);
        ctx.lineTo(this.x + 200, 300);
        ctx.moveTo(this.x + 600, 300);
        ctx.lineTo(this.x + 600, 550);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(this.x + 400, this.y, 2, 0, Math.PI * 2, false);
        ctx.arc(this.x + 800, this.y, 2, 0, Math.PI * 2, false);
        ctx.fill();

        //ctx.beginPath();
        //ctx.font = "15px 'ＭＳ Ｐゴシック'"
        ctx.font = "25px 'Arial'";
        //ctx.font = "15px 'sans-serif'";
        ctx.fillText("0", this.x, this.y + 30);
        ctx.fillText("π/2", this.x + 200, this.y + 30);
        ctx.fillText("π", this.x + 400, this.y + 30);
        ctx.fillText("3π/2", this.x + 600, this.y + 30);
        ctx.fillText("2π", this.x + 800 - 30, this.y + 30);
        ctx.fillText("1", this.x - 30, this.y - 250);
        ctx.fillText("-1", this.x - 30, this.y + 250);
    }
}