import SceneBase from "./sceneBase.js";
import { InputKey, InputMouse } from "./input.js";
import Game from "./game.js";
import DrawManager from "./drawManager.js";
import { Point } from "./utility.js";

export default class Title extends SceneBase{
    constructor(sceneManager){
        super(sceneManager);
        console.log("title");
    }

    Draw(){
        DrawManager.Clear();
        DrawManager.Rect(new Point(0, 0), 800, 600, 'rgb(0, 0, 0)');
        DrawManager.String(new Point(50, 200), "じゅんばんとつげき", 'rgb(255, 255, 255)', 80);
        DrawManager.String(new Point(50, 200), "じゅんばんとつげき", 'rgb(200, 100, 0)', 79.5);
        DrawManager.String(new Point(250, 400), "Press Z", 'rgb(255,255,255)', 80);
        DrawManager.String(new Point(250, 400), "Press Z", 'rgb(0, 100, 100)', 79);
    }

    Update(){
        if(InputKey.isKeyInput('z')){
            this.sceneManager.scene = new Game(this.sceneManager, 3, 0);
        }
    }
}