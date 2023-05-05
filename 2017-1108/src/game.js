'use strict';
class Game {
    constructor(){
        this.mouse_x = 0;
        this.mouse_y = 0;
        // クリックされていなければtrue
        this.mode = true;
        this.rx1 = 0;
        this.ry1 = 0;
        this.rx2 = 0;
        this.ry2 = 0;

        this.rectx = new Array(4);
        this.recty = new Array(4);
        this.rectw = new Array(4);
        this.recth = new Array(4);
        this.count = new Array(4);
        this.colorList = [
            'red', 'blue', 'green', "black"
        ];

        this.size_w = 1000;
        this.size_h = 500;
        this.maxS = this.size_w * this.size_h / 6;
        this.hannin = new Hannin(this.size_w, this.size_h, this.maxS);

        this.times = 0;
    }
    update(ik, im){
        if(this.times == 4){
            if(ik.isDown("t")){
                const txt = "犯人はこの中に" + this.count[3] + "人います!!";
                const url = "https://mdsboy.github.io/3Jam/2017-1108/";
                const tweeturl = `https://twitter.com/intent/tweet?hashtags=traP3jam&text=${encodeURIComponent(txt)}&url=${encodeURIComponent(url)}`;
                location.href = tweeturl;
            }
        }
        else {
            if(this.mode){
                if(im.isMouseLeftToggle()){
                    this.rx1 = im.mouseX;
                    this.ry1 = im.mouseY;
                    this.rx2 = this.rx1;
                    this.ry2 = this.ry1;
                    this.mode = false;
                }
            }
            else {
                this.rx2 = im.mouseX;
                this.ry2 = im.mouseY;
                //console.log(this.rx2, this.ry2);

                let w = this.rx2 - this.rx1;
                let h = this.ry2 - this.ry1;
                //console.log(w, h);
                if(w < 0 || h < 0){
                    this.rx2 = this.rx1;
                    this.ry2 = this.ry1;
                }
                if(w * h > this.maxS){
                    let rate = w * h / this.maxS;
                    this.rx2 = this.rx1 + Math.sqrt(w * this.maxS / h);
                    this.ry2 = this.ry1 + Math.sqrt(h * this.maxS / w);
                    //console.log(this.rx2, this.ry2);
                }
                if(this.rx2 > this.size_w){
                    this.rx2 = this.size_w;
                }
                if(this.ry2 > this.size_h){
                    this.ry2 = this.size_h;
                }
                if(im.isMouseLeftToggle() && w > 0 && h > 0){
                    this.mode = true;
                    this.rectx[this.times] = this.rx1;
                    this.recty[this.times] = this.ry1;
                    this.rectw[this.times] = this.rx2 - this.rx1;
                    this.recth[this.times] = this.ry2 - this.ry1;
                    this.count[this.times] = this.hannin.check(this.rx1, this.ry1, this.rx2, this.ry2);
                    this.times++;
                    this.rx1 = 0;
                    this.ry1 = 0;
                    this.rx2 = 0;
                    this.ry2 = 0;
                }
            }
        }
    }
    draw(ctx){
        ctx.clearRect(0, 0, 1920, 1080);
        ctx.strokeRect(0, 0, this.size_w, this.size_h);
        //ctx.strokeRect(100, 100, 100, 100);
        ctx.strokeRect(this.rx1, this.ry1, this.rx2 - this.rx1, this.ry2 - this.ry1);
        ctx.font = "50px 'Arial'";
        for(let i = 0; i < this.times; ++i){
            ctx.strokeStyle = this.colorList[i];
            ctx.strokeRect(this.rectx[i], this.recty[i], this.rectw[i], this.recth[i]);
            ctx.strokeStyle = 'black';
            if(i != 3){
                ctx.fillText((i + 1) + "回目:" + this.count[i] + "人", 1050, 200 + i * 100);
            }
        }
        
        if(this.times == 4){
            this.hannin.draw(ctx);
            ctx.font = "70px 'Arial'";
            ctx.fillStyle = "yellow";
            ctx.fillText("犯人はこの中に" + this.count[3] + "人います!!", 0, 80);
            ctx.strokeStyle = 'black';
            ctx.strokeText("犯人はこの中に" + this.count[3] + "人います!!", 0, 80);
            ctx.fillStyle = "blue";
            ctx.fillText("Tでツイート", 0, 200);
            ctx.strokeStyle = "black";
            ctx.strokeText("Tでツイート", 0, 200);
            ctx.fillStyle = "black";
            //ctx.fillText("犯人はこの中に" + this.count[3] + "人います!!", 1050, 200 + i * 100);
        }
    }
}

class Hannin {
    constructor(w, h, S){
        this.hx = new Array(100);
        this.hy = new Array(100);
        
        this.w = range(S / h, w);
        this.h = (S) / this.w;
        //console.log(this.w, this.h);
        this.x = range(0, w - this.w);
        this.y = range(0, h - this.h);

        this.size = 100;

        for(let i = 0; i < this.size; ++i){
            this.hx[i] = range(this.x + 10, this.x + this.w - 20);
            this.hy[i] = range(this.y + 10, this.y + this.h - 20);
        }
    }
    update(ik, im){
    }
    draw(ctx){
        ctx.font = "10px 'Arial'";
        for(let i = 0; i < this.size; ++i){
            ctx.fillStyle = 'white';
            ctx.fillRect(this.hx[i], this.hy[i] - 10, 20, 10);
            ctx.fillStyle = 'black';
            ctx.fillText("犯人", this.hx[i], this.hy[i]);
            ctx.strokeRect(this.hx[i], this.hy[i] - 10, 20, 10);
        }
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
    check(x1, y1, x2, y2){
        let count = 0;
        for(let i = 0; i < this.size; ++i){
            if(x1 <= this.hx[i] && this.hx[i] + 20 <= x2 && y1 <= this.hy[i] - 10 && this.hy[i] <= y2){
                count++;
            }
        }
        return count;
    }
}