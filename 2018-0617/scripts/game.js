import SceneBase from "./sceneBase.js";
import Player from "./player.js";
import Target from "./target.js";
import DrawManager from "./drawManager.js";
import { Utility,Point } from "./utility.js";
import { InputKey, InputMouse } from "./input.js";

export default class Game extends SceneBase{
    constructor(sceneManager, num, score){
        super(sceneManager);

        this.nokori = 3;
        this.score = score;
        this.num = num;
        this.now = 0;

        this.haba = 20;

        this.player = new Player(new Point(10, 10), this.haba, this.nokori);

        this.list = new Array();
        for(let i = 0; i < this.num; ++i){
            while(true){
                const x = Utility.range(this.haba * 2, 800 - this.haba * 2);
                const y = Utility.range(this.haba * 2, 600 - this.haba * 2);
                let check = true;
                for(let j = 0; j < i; ++j){
                    if(this.list[j].Judge(new Point(x, y), 20)){
                        check = false;
                    }
                }
                if(check){
                    this.list.push(new Target(new Point(x, y), i));
                    break;
                }
            }
        }

        this.nokori = 3;
        this.select = 0;
        this.launched = false;
        this.stop = true;

        this.end = false;
        this.clear = false;
        
        /*
        0 1
        2 3
        */

        console.log("Game");
    }

    Draw(){
        DrawManager.Clear();
        DrawManager.Rect(new Point(0, 0), 800, 600, 'rgb(0, 150, 150, 200)');
        DrawManager.Rect(new Point(this.haba, this.haba), 800 - this.haba * 2, 600 - this.haba * 2, 'rgb(255, 255, 255)');
        DrawManager.String(new Point(750, 20), this.score, 'rgb(0, 0, 0)', 20);
        this.list.forEach(e => e.Draw());
        if(this.clear){
            DrawManager.String(new Point(200, 250), "CLEAR!!", 'rgb(0, 0, 0)', 100);
            DrawManager.String(new Point(200, 250), "CLEAR!!", 'rgb(255, 255, 0)', 98);
            DrawManager.String(new Point(250, 400), "next:Z", 'rgb(0, 0, 0)', 80);
            DrawManager.String(new Point(250, 400), "next:Z", 'rgb(100, 100, 255)', 78);
        }
        if(this.end){
            DrawManager.String(new Point(200, 200), "GAME OVER", 'rgb(0, 0, 0)', 75);
            DrawManager.String(new Point(200, 200), "GAME OVER", 'rgb(255, 0, 0)', 74);
            DrawManager.String(new Point(230, 350), "SCORE:" + this.score, 'rgb(255, 0, 0)', 75);
            DrawManager.String(new Point(230, 350), "SCORE:" + this.score, 'rgb(200, 200, 0)', 74);
            DrawManager.String(new Point(250, 450), "tweet:T", 'rgb(0, 0, 0)', 80);
            DrawManager.String(new Point(250, 450), "tweet:T", 'rgb(100, 100, 255)', 78);
        } else {
            this.player.Draw();
        }
    }

    Update(){
        if(this.clear){
            if(InputKey.isKeyInput("z")){
                const next = this.num + 1;
                if(this.num >= 10) this.num = 9;
                this.sceneManager.scene = new Game(this.sceneManager, next, this.score);
            }
        }
        else if(this.end){
            if(InputKey.isKeyInput("t")){
                const txt = "「じゅんばんとつげき」で" + this.score + "点だったよ！";
                const url = "https://mdsboy.github.io/3Jam/2018-0617/";
                const tweeturl = `https://twitter.com/intent/tweet?hashtags=traP3jam&text=${encodeURIComponent(txt)}&url=${encodeURIComponent(url)}`;
                location.href = tweeturl;
            }
        }
        else if(!this.launched){
            this.SelectKado();
        }
        else if(!this.stop){
            this.player.Update();
            for(let i = 0; i < this.num; ++i){
                if(!this.list[i].checked && this.list[i].Judge(this.player.circle.pos, 10)){
                    if(this.now == i){
                        this.score ++;
                        this.list[i].Checked();
                        this.now ++;
                        if(this.now == this.num){
                            this.clear = true;
                            this.stop = true;
                        }
                    } else {
                        this.nokori --;
                        if(this.nokori <= 0){
                            this.end = true;
                        }
                        this.launched = false;
                        this.stop = true;
                        this.player = new Player(new Point(10, 10), this.haba, this.nokori);
                    }
                }
            }
            if(this.player.stop){
                this.nokori --;
                if(this.nokori <= 0){
                    this.end = true;
                }
                this.launched = false;
                this.stop = true;
                this.player = new Player(new Point(10, 10), this.haba, this.nokori);
            }
        }
        this.list.forEach(e => e.Update());
    }

    SelectKado(){
        if(InputKey.isKeyInput("ArrowRight") && this.select % 2 == 0){
            this.select ++;
        }
        if(InputKey.isKeyInput("ArrowLeft") && this.select % 2 == 1){
            this.select --;
        }
        if(InputKey.isKeyInput("ArrowUp") && this.select >= 2){
            this.select -= 2;
        }
        if(InputKey.isKeyInput("ArrowDown") && this.select <= 1){
            this.select += 2;
        }
        this.player.SetSelect(this.select);
        if(InputMouse.isMouseLeftDown()){
            this.launched = true;
            this.stop = false;
            this.player.Launched();
        }
        this.player.Update();
    }
}