import Vec2 from 'lib/vec2'

import DrawManager from 'lib/drawManager'
import { InputKey, KeyCode } from 'lib/inputKey'

import SceneBase from 'lib/sceneBase'
import Game from './game/game'
import Color from 'lib/color'

export default class Title implements SceneBase {
  constructor() {
  }

  public draw() {
    DrawManager.clear()
    DrawManager.string(new Vec2(150, 300), "20200220", 150, Color.black)
    DrawManager.string(new Vec2(400, 600), "Z: start", 80, Color.black)
  }

  public update(): SceneBase {
    if (InputKey.isKeyDown(KeyCode.Z)) {
      return new Game()
    }
    return this
  }
}
