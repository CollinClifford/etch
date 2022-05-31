export default class InputHandler {
  constructor(stylus) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 32:
          stylus.clear()
          break;
        case 37:
          stylus.moveLeft();
          break;
        case 38:
          stylus.moveUp();
          break;
        case 39:
          stylus.moveRight();
          break;
        case 40:
          stylus.moveDown();
          break;
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          if (stylus.speed < 0) {
            stylus.stop();
          }
          break;
        case 38:
          if (stylus.verticalSpeed < 0) {
            stylus.stop();
          }
          break;
        case 39:
          if (stylus.speed > 0) {
            stylus.stop();
          }
          break;
        case 40:
          if (stylus.verticalSpeed > 0) {
            stylus.stop();
          }
          break;
      }
    });
  }
}
