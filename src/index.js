import Stylus from "/src/stylus.js";
import InputHandler from "./input.js";

let canvas = document.getElementById("etchScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

let stylus = new Stylus(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(stylus);

stylus.draw(ctx);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.lineWidth = 0;

    // ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  stylus.update(deltaTime);
  stylus.draw(ctx);
  //   paddle.clear(ctx)

  requestAnimationFrame(gameLoop);
}

gameLoop();
