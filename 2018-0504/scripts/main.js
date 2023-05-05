'use strict';

window.addEventListener("load", function(eve){
    const ctx = document.getElementById("po").getContext("2d");
    const ik = new InputKey();
    let dm = new DrawManager(ctx);
    const sm = new SceneManager();
  
    setInterval(() => {
      sm.update(ik);
      sm.draw(dm, ctx);
    } , 1000 / 60);
  }, false);

  
window.addEventListener("keydown", (event) => {
  console.log(event);
}, true);