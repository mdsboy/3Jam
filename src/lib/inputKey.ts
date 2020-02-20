export class InputKey {
  private static keyMap = new Map<KeyCode, Boolean>()
  private static keyPress = new Map<KeyCode, Boolean>()

  public static keyDown(ev: KeyboardEvent) {
    this.keyMap.set(keyCode[ev.key], true)
    this.keyPress.set(keyCode[ev.key], true)
  }

  public static keyUp(ev: KeyboardEvent) {
    this.keyMap.set(keyCode[ev.key], false)
    this.keyPress.set(keyCode[ev.key], false)
  }

  public static isKeyDown(code: KeyCode): Boolean {
    const result = this.keyMap.get(code)
    return result == undefined ? false : result
  }

  public static isKeyPressed(code: KeyCode): Boolean {
    const result = this.keyPress.get(code)
    this.keyPress.set(code, false)
    return result == undefined ? false : result
  }
}

document.onkeydown = e => {
  console.log(e.key)
  InputKey.keyDown(e)
}
document.onkeyup = e => {
  InputKey.keyUp(e)
}

export enum KeyCode {
  A,
  D,
  S,
  W,
  Z,
  X,
  T,
  Up,
  Down,
  Left,
  Right
}
const keyCode: { [id: string]: KeyCode } = {
  a: KeyCode.A,
  d: KeyCode.D,
  s: KeyCode.S,
  w: KeyCode.W,
  z: KeyCode.Z,
  x: KeyCode.X,
  t: KeyCode.T,
  ArrowUp: KeyCode.Up,
  ArrowDown: KeyCode.Down,
  ArrowLeft: KeyCode.Left,
  ArrowRight: KeyCode.Right,
}
