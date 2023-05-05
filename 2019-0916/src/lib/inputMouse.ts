import Point from './point'
import DrawManager from './drawManager';
export class InputMouse {
  private static mouseInput: Array<boolean> = Array(2)
  private static mousePos: Point

  public static getMousepos(): Point {
    return this.mousePos
  }

  public static isMouseLeftDown(): boolean {
    return this.mouseInput[0]
  }

  public static setMousePos(pos: Point) {
    this.mousePos = pos
  }

  public static mouseDown(): void {
    this.mouseInput[0] = true
  }

  public static mouseUp(): void {
    this.mouseInput[0] = false
  }
}

document.onmousemove = e => {
  InputMouse.setMousePos(new Point(e.offsetX, e.offsetY))
}

document.onmousedown = () => {
  InputMouse.mouseDown()
}

document.onmouseup = () => {
  InputMouse.mouseUp()
}

document.ontouchstart = e => {
  const rect = DrawManager.canvas.getBoundingClientRect()
  const x = e.targetTouches[0].pageX - rect.left;
  const y = e.targetTouches[0].pageY - rect.top;
  InputMouse.setMousePos(new Point(x, y))
  InputMouse.mouseDown()
}

document.ontouchend = () => {
  InputMouse.mouseUp()
}
