'use strict';
const rnd = (n) => {
    return Math.floor(Math.random() * n);
};

const range = (x, y) => { //[min, max)
    return rnd(Max(x, y) - Min(x, y)) + Min(x, y);
}

const Min = (x, y) => {
	return x > y ? y : x;
}

const Max = (x, y) => {
	return x > y ? x : y;
}

class InputKey {
    constructor() {
		this.keyInput = new Map();
		const keyDown = (e) => {
            this.keyInput[e.key] = true;
        };
		const keyUp = (e) => {
		    this.keyInput[e.key] = false;
		};
        if (window.addEventListener) {
            document.addEventListener("keydown", keyDown, true);
            document.addEventListener("keyup", keyUp, true)
        }
    }
    isDown(key_code){
      return this.keyInput[key_code];
    }
}

class InputMouse {
	constructor() {
		this.mouseInput = new Array(2);
		this.mouseInputLock = new Array(2);
		this.mouseX = 0;
		this.mouseY = 0;
		const mouseDown = (e) => {
			if(e.button === 0) {
				this.mouseInput[0] = true;
			}
			else if(e.button === 2) {
				this.mouseInput[1] = true;
			}
		};
		const mouseUp = (e) => {
			if(e.button === 0) {
				this.mouseInput[0] = false;
				this.mouseInputLock[0] = false;
			}
			else if(e.button === 2) {
				this.mouseInput[1] = false;
				this.mouseInputLock[1] = false;
			}
		};
		const mouseMove = (e) => {
			this.mouseX = e.offsetX;
			this.mouseY = e.offsetY;
		};
		if (window.addEventListener) {
            document.addEventListener("mousedown", mouseDown, true);
            document.addEventListener("mouseup", mouseUp, true);
            window.addEventListener("mousemove", mouseMove, true);
        }
	}
	isMouseLeftDown() {
		return this.mouseInput[0];
	}
	isMouseLeftToggle() {
		if(this.mouseInput[0] && !this.mouseInputLock[0]) {
			this.mouseInputLock[0] = true;
			return true;
		}
		else {
			return false;
		}
	}
	isMouseRightDown() {
		return this.mouseInput[1];
	}
	isMouseRightToggle() {
		if(this.mouseInput[1] && !this.mouseInputLock[1]) {
			this.mouseInputLock[1] = true;
			return true;
		}
		else {
			return false;
		}
	}
}

window.addEventListener("load", function(eve){
  const ctx = document.getElementById("can").getContext("2d");
  const ik = new InputKey();
  const im = new InputMouse();
  let game = new Game();

  setInterval(() => {
    game.update(ik, im);
    game.draw(ctx);
  } , 1000 / 60);
}, false);

window.addEventListener("keydown", (event) => {
}, true);