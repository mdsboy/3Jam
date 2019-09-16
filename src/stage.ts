import Point from './lib/point'

//import { InputKey, KeyCode } from './lib/inputKey'
import dm from './lib/drawManager'

import Circle from './lib/circle'
import { InputMouse } from './lib/inputMouse'
import Rect from './lib/rect'

export default class Stage {
  readonly speed = 3
  readonly cir_r = 20
  readonly time = 100

private score: number
  private cir_size: number
  private count = 0
  private circles: Array<Circle> = []
  private vec: Array<Point> = []
  private colors: Array<[number, number, number]> = []
  private color_vec: Array<[number, number, number]> = []
  private color_dir: Array<[boolean, boolean, boolean]> = []

  private select_num: Array<number> = []
  private select_now = 1
  private end = false
  private clear = true

  readonly area = new Rect(
    new Point(this.cir_r, this.cir_r),
    1080 - this.cir_r * 2,
    720 - this.cir_r * 2
  )
  readonly next = new Rect(new Point(440, 400), 150, 50)
  readonly tweet = new Rect(new Point(440, 400), 150, 50)

  constructor(cir_size: number, score: number) {
    this.cir_size = cir_size
    this.score = score
  }

  public draw() {
    if (this.count >= this.time * (this.cir_size + 1)) {
        dm.rect(new Rect(Point.zero, 1080, 720), 'rgba(0, 0, 0, 0.1)', true)
    }

    for (let i = 0; i < this.circles.length; i++) {
      const circle = this.circles[i]
      const color = this.colors[i]

      dm.circle(
        circle,
        'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ', 0.8)',
        true
      )
      dm.circle(
        circle,
        'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ', 1)',
        false
      )

      const select_num = this.select_num[i]
      if (select_num != -1) {
        if (select_num + 1 >= 10) {
          dm.string(
            circle.pos.add(new Point(-12, 7)),
            select_num + '',
            20,
            '#ffffff'
          )
        } else {
          dm.string(
            circle.pos.add(new Point(-5, 7)),
            select_num + '',
            20,
            '#ffffff'
          )
        }
      }
    }

    if (!this.clear) {
      dm.string(new Point(283, 240), 'GameOver', 100, 'rgba(0, 0, 0, 1)')
      dm.string(new Point(280, 240), 'GameOver', 100, 'rgba(255, 0, 0, 1)')
      dm.string(new Point(353, 340), 'Score:'+this.score, 80, 'rgba(0, 0, 0, 1)')
      dm.string(new Point(350, 340), 'Score:'+this.score, 80, 'rgba(200, 200, 0, 1)')
      dm.string(new Point(450, 440), 'tweet', 50, 'rgba(0, 0, 200, 1)')
      dm.rect(this.tweet, 'rgba(0, 0, 200, 0.3)', true)
      dm.rect(this.tweet, 'rgba(0, 0, 200, 1)', false)
    }

    if (this.end) {
        dm.string(new Point(383, 300), 'Clear', 100, 'rgba(0, 0, 0, 1)')
        dm.string(new Point(380, 300), 'Clear', 100, 'rgba(200, 200, 0, 1)')
      dm.string(new Point(460, 440), 'next', 50, '#ff0000')
      dm.rect(this.next, 'rgba(200, 0, 0, 0.3)', true)
      dm.rect(this.next, 'rgba(200, 0, 0, 1)', false)
    }
  }

  public update(): Stage {
    if (this.count % this.time == 0 && this.circles.length < this.cir_size) {
      this.circles.push(new Circle(new Point(30, 30), this.cir_r))
      this.vec.push(
        new Point(
          1 + Math.random() * this.speed,
          1 + Math.random() * this.speed
        )
      )
      this.colors.push([
        Math.random() * 200,
        Math.random() * 200,
        Math.random() * 200
      ])
      this.color_vec.push([Math.random(), Math.random(), Math.random()])
      this.color_dir.push([true, true, true])
      this.select_num.push(-1)
    }

    if (this.count < this.time * (this.cir_size + 1)) {
      for (let i = 0; i < this.circles.length; i++) {
        const pos = this.circles[i].pos
        const vec = this.vec[i]
        /*
        vec.move(
          new Point((Math.random() - 0.5) / 5, (Math.random() - 0.5) / 5)
        )*/
        //vec.move(new Point(Math.sin(this.count), Math.sin(this.count)))
        pos.move(
          vec.add(
            new Point(
              Math.sin((Math.PI / 360) * this.count),
              Math.sin((Math.PI / 360) * this.count)
            )
          )
        )

        const color = this.colors[i]
        const color_vec = this.color_vec[i]
        const color_dir = this.color_dir[i]
        for (let j = 0; j < 3; j++) {
          if (color_dir[j]) {
            color[j] = color[j] + color_vec[j]
            if (color[j] > 200) {
              color_dir[j] = false
            }
          } else {
            color[j] = color[j] - color_vec[j]
            if (color[j] < 50) {
              color_dir[j] = true
            }
          }
          color[j] %= 255
        }

        const area = this.area
        if (!area.inPoint(pos)) {
          if (
            (pos.x < area.pos.x && vec.x < 0) ||
            (area.pos.x + area.width < pos.x && vec.x > 0)
          ) {
            vec.x *= -1
          }
          if (
            (pos.y < area.pos.y && vec.y < 0) ||
            (area.pos.y + area.height < pos.y && vec.y > 0)
          ) {
            vec.y *= -1
          }
          pos.move(vec)
        }
      }
    } else {
      if (
        this.end &&
        InputMouse.isMouseLeftDown() &&
        this.next.inPoint(InputMouse.getMousepos())
      ) {
        return new Stage(this.cir_size + 1, this.score)
      }

      if(!this.clear &&
        InputMouse.isMouseLeftDown() &&
        this.tweet.inPoint(InputMouse.getMousepos())) {
        const txt = "「新しい順に選ぶ」で" + this.score + "点だったよ！";
        const url = "http://3jam0916.mds_boy.trap.show/";
        const tweeturl = `https://twitter.com/intent/tweet?hashtags=traP3jam&text=${encodeURIComponent(txt)}&url=${encodeURIComponent(url)}`;
        location.href = tweeturl;
      }

      for (let i = 0; i < this.circles.length; i++) {
        if (
          this.select_num[i] == -1 &&
          InputMouse.isMouseLeftDown() &&
          this.circles[i].inPoint(InputMouse.getMousepos())
        ) {
          this.select_num[i] = this.select_now // + 10
          if (this.select_now == this.circles.length - i) {
              this.score ++;
          } else {
            this.clear = false
          }
          this.select_now++
        }
      }

      if (this.select_now > this.circles.length && this.clear) {
        this.end = true
      }
    }

    this.count++

    return this
  }
}
