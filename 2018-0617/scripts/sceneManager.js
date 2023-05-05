import DrawManager from "./drawManager.js";
import { InputKey, InputMouse } from "./input.js";
import Title from "./title.js";

export default class SceneManager{
    static Init(){
        DrawManager.Init();
        InputKey.Init();
        InputMouse.Init();
        
        this.scene = new Title(this);
        this.Run();
    }

    static Run(){
        SceneManager.Update()
        SceneManager.Draw();
        requestAnimationFrame(SceneManager.Run);
    }

    static Update(){
        this.scene.Update();
    }

    static Draw(){
        this.scene.Draw();
    }
}