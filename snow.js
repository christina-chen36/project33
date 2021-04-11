class Snow {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.8,
      friction: 3.0,
      density: 1.0,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("snow4.webp");
    World.add(world, this.body);
  }
  update() {
    var pos = this.body.position;
    if (pos.y > 400) {
      Matter.Body.setPosition(this.body, {
        x: random(0, 800),
        y: random(0, 400),
      });
    }
  }
  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
