'use strict';
class InputKey {
    constructor() {
		this.keyInput = new Map();
		const keyDown = (e) => {
            this.keyInput[e.key] = true;
            //console.log(e.key);
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

window.addEventListener("load", function(eve){
  const ctx = document.getElementById("can").getContext("2d");
  const inputkey = new InputKey();
  let game = new Game();

  setInterval(() => {
    game.update(inputkey);
    game.draw(ctx);
  } , 1000 / 60);
}, false);

window.addEventListener("keydown", (event) => {
  //console.log(event);
}, true);