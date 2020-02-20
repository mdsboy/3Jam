import SceneBase from 'lib/sceneBase'

import Vec2 from 'lib/vec2'
import DrawManager from 'lib/drawManager'
import Camera from 'lib/camera'
import Rect from 'lib/rect'
import Color from 'lib/color'
import { InputKey, KeyCode } from 'lib/inputKey'

export default class Game implements SceneBase {
  private numbers: Array<Array<number>> = []
  private pos: Vec2 = Vec2.zero()
  private readonly size = 80
  private readonly xnum = 50
  private readonly ynum = 50
  private target: [number, number] = [this.xnum / 2, this.ynum / 2]
  private mode = false
  private checks: Array<[number, number]> = []
  private checking: Array<[number, number]> = []
  private po = [2, 0, 2, 0, 0, 2, 2, 0]
  private time = 10 * 60
  private score = 0

  constructor() {
    for(let i = 0; i < this.xnum; i++) {
      let po = []
      for(let j = 0; j < this.ynum; j++) {
        const random = Math.random()
        if (random <= 0.45) {
          po.push(2);
        } else if (random <= 0.9){
          po.push(0)
        } else {
          po.push(Math.floor(Math.random() * 10))
        }
      }
      this.numbers.push(po)
    }
  }

  public draw() {
    DrawManager.clear()

    DrawManager.setCameraPos(Camera.getCameraPos())
    DrawManager.clear()
    
    for(let i = 0; i < this.numbers.length; i++) {
      for(let j = 0; j < this.numbers[i].length; j++) {
        const pos = new Vec2(i * this.size, j * this.size)
        DrawManager.strokeRect(new Rect(pos, this.size, this.size), Color.black)
        DrawManager.string(pos.add(new Vec2(this.size/4, this.size/4*3)),
          String(this.numbers[i][j]), this.size / 3 * 2, Color.black)
      }
    }

    
    for (const [x, y] of this.checks) {
      DrawManager.fillRect(new Rect(new Vec2(x * this.size, y * this.size), this.size, this.size), new Color(255, 100, 100, 0.3))
    }
    for (const [x, y] of this.checking) {
      DrawManager.fillRect(new Rect(new Vec2(x * this.size, y * this.size), this.size, this.size), new Color(255, 0, 0, 0.5))
    }

    DrawManager.strokeRect(new Rect(this.pos, this.size, this.size), Color.red, 3)
    //console.log(this.target)

    const timePos = new Vec2(800, 50).add(Camera.getCameraPos())
    DrawManager.fillRect(new Rect(timePos, 250, 70), Color.white)
    DrawManager.strokeRect(new Rect(timePos, 250, 70), Color.green, 3)

    DrawManager.string(timePos.add(new Vec2(this.size/4, this.size/4*3)),
      "time:"+String(Math.floor(this.time / 60)), this.size / 3 * 2, Color.black)

    const scorePos = new Vec2(50, 50).add(Camera.getCameraPos())
    DrawManager.fillRect(new Rect(scorePos, 250, 70), Color.white)
    DrawManager.strokeRect(new Rect(scorePos, 250, 70), new Color(255, 255, 0), 3)

    DrawManager.string(scorePos.add(new Vec2(this.size/4, this.size/4*3)),
      "score:"+String(Math.floor(this.score)), this.size / 3 * 2, Color.black)

    if (this.time < 60) {
      const scorePos = new Vec2(425, 450).add(Camera.getCameraPos())
      DrawManager.fillRect(new Rect(scorePos, 250, 70), Color.white)
      DrawManager.strokeRect(new Rect(scorePos, 250, 70), Color.blue, 3)
  
      DrawManager.string(scorePos.add(new Vec2(this.size/4, this.size/4*3)),
        "T: tweet", this.size / 3 * 2, Color.black)
    }
  }

  public update(): SceneBase {
    if (this.time < 60){
      if(InputKey.isKeyDown(KeyCode.T)) {
        const txt = "「20200220」で" + this.score + "点だったよ！";
        const url = "http://3jam0220.mds_boy.trap.show/";
        const tweeturl = `https://twitter.com/intent/tweet?hashtags=traP3jam&text=${encodeURIComponent(txt)}&url=${encodeURIComponent(url)}`;
        location.href = tweeturl;
      }

      return this
    }
    this.time --

    if (InputKey.isKeyPressed(KeyCode.Right) && this.target[0] < this.xnum-1) {
      if (this.mode) {
        if (this.nextOk(this.target[0] + 1, this.target[1])) {
          this.target[0] += 1
          this.checking.push([this.target[0], this.target[1]])
        } else if (this.isPrev(this.target[0] + 1, this.target[1])) {
          this.target[0] += 1
          this.checking.pop()
        }
      } else {
        this.target[0] += 1
      }
    }

    if (InputKey.isKeyPressed(KeyCode.Left) && this.target[0] > 0) {
      if (this.mode) {
        if (this.nextOk(this.target[0] - 1, this.target[1])) {
          this.target[0] -= 1
          this.checking.push([this.target[0], this.target[1]])
        } else if (this.isPrev(this.target[0] - 1, this.target[1])) {
          this.target[0] -= 1
          this.checking.pop()
        }
      } else {
        this.target[0] -= 1
      }
    }

    if (InputKey.isKeyPressed(KeyCode.Up) && this.target[1] > 0) {
      if (this.mode) {
        if (this.nextOk(this.target[0], this.target[1] - 1)) {
          this.target[1] -= 1
          this.checking.push([this.target[0], this.target[1]])
        } else if (this.isPrev(this.target[0], this.target[1] - 1)) {
          this.target[1] -= 1
          this.checking.pop()
        }
      } else {
        this.target[1] -= 1
      }
    }
    if (InputKey.isKeyPressed(KeyCode.Down) && this.target[1] < this.ynum-1) {
      if (this.mode) {
        if (this.nextOk(this.target[0], this.target[1] + 1)) {
          this.target[1] += 1
          this.checking.push([this.target[0], this.target[1]])
        } else if (this.isPrev(this.target[0], this.target[1] + 1)) {
          this.target[1] += 1
          this.checking.pop()
        }
      } else {
        this.target[1] += 1
      }
    }

    if (this.checking.length == this.po.length) {
      this.score += this.po.length
      this.checks = this.checks.concat(this.checking)
      this.checking = []
      this.mode = false
      this.time += 3 * 60
    }
    
    if (InputKey.isKeyPressed(KeyCode.Z) && this.nextOk(this.target[0], this.target[1])) {
      this.mode = true
      this.checking.push([this.target[0], this.target[1]])
    }
    if (InputKey.isKeyPressed(KeyCode.X)) {
      this.mode = false
      this.checking = []
    }
    //console.log(this.checks)

    this.pos = new Vec2(this.target[0] * this.size, this.target[1] * this.size)
    const sub = Camera.getDistFromCetner(
      this.pos.add(new Vec2(this.size/2, this.size/2)))
    Camera.move(sub)

    return this
  }

  private nextOk(x: number, y: number): Boolean {
    if (this.po[this.checking.length] != this.numbers[x][y]) {
      return false
    }
    for (const [x0, y0] of this.checks) {
      if (x == x0 && y == y0) {
        return false;
      }
    }
    for (const [x0, y0] of this.checking) {
      if (x == x0 && y == y0) {
        return false;
      }
    }
    return true
  }

  private isPrev(x: number, y: number): Boolean {
    if (this.checking.length <= 1) {
      return false
    }
    const prev = this.checking[this.checking.length-2]
    return prev[0] == x && prev[1] == y
  }
}
