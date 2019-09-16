import SceneBase from './lib/sceneBase'
import Stage from './stage';

export default class Game implements SceneBase {
  private stage = new Stage(3, 0)

  constructor() {
  }

  public draw() {
    this.stage.draw()
  }

  public update(): SceneBase {
    this.stage = this.stage.update()
    return this
  }
}
