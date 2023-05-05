'use strict';

class Scene{
    constructor(sm){
        this.sm = sm;
    }
    update(ik){
    }
    draw(dm, ctx){
    }
}

class Title extends Scene{
    constructor(sm, data){
        super(sm);
        this.count = 0;
    }
    update(ik){
        if(ik.isDown("z")){
            this.sm.scene = new Game(this.sm, this.count);
        }
        if(ik.isDown("y")){
            this.count ++;
        }
    }
    draw(dm, ctx){
        //dm.Clear();
        dm.String(new Point(100, 300), "Zキーを押すとはじまるよ", "rgb(30,30,0)", 50);
    }
}

class Result extends Scene{
    constructor(sm, data){
        super(sm);
        this.score = data;
    }
    update(ik){
        if(ik.isDown("z")){
            this.sm.scene = new Title(this.sm);
        }
        if(ik.isDown("t")){
            const txt = "「止まってほしい」で" + this.score + "点だったよ！";
            const url = "http://3jam0504.mds_boy.trap.show/";
            const tweeturl = `https://twitter.com/intent/tweet?hashtags=traP3jam&text=${encodeURIComponent(txt)}&url=${encodeURIComponent(url)}`;
            location.href = tweeturl;
        }
    }
    draw(dm, ctx){
        //dm.Clear();
        dm.String(new Point(100, 230), "Score:" + this.score, "rgb(100,100,0)", 150);
        dm.String(new Point(100, 430), "Tでツイート", "rgb(0,100,100)", 100);
        dm.String(new Point(100, 580), "Zで戻る", "rgb(100,0,0)", 100);
    }
}

class SceneManager{
    constructor(){
        this.scene = new Title(this);
        //this.scene = new Game(this);
    }
    update(ik){
        this.scene.update(ik);
    }
    draw(dm, ctx){
        this.scene.draw(dm, ctx);
    }
}