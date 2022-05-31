export default class Stylus {
  constructor(gameWidth, gameHeight) {
    this.width = 10;
    this.height = 10;
    this.maxSpeed = 5;
    this.speed = 0;
    this.verticalSpeed = 0;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight / 2 - this.height / 2,
    };
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
    this.verticalSpeed = 0;
  }

  moveUp() {
    this.verticalSpeed = -this.maxSpeed;
  }

  moveDown() {
    this.verticalSpeed = this.maxSpeed;
  }

  clear(ctx) {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  }
  
  update(deltaTime) {
    if (!deltaTime) {
      return;
    }
    this.position.x += this.speed;
    this.position.y += this.verticalSpeed;

    if (this.position.x < 0) {
      this.position.x = 0;
    }
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
    if (this.position.y < 0) {
      this.position.y = 0;
    }
    if (this.position.y + this.height > this.gameHeight) {
      this.position.y = this.gameHeight - this.height;
    }
  }
}
