import Point from './lib/point';

import DrawManager from './lib/drawManager'

import SceneBase from './lib/sceneBase'
import Game from './game'
import { InputMouse } from './lib/inputMouse';

export default class Title implements SceneBase {
  constructor() {
  }

  public draw() {
    DrawManager.string(new Point(100, 300), "新しい順に選ぶ", 130, '#000')
    DrawManager.string(new Point(350, 500), "クリックで開始", 50, '#000')
  }

  public update(): SceneBase {
    if(InputMouse.isMouseLeftDown()) {
        return new Game()
    }
    return this
  }
}
