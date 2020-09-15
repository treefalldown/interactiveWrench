let circ01 = {
  c: 0,
  tx: 0,
  ty: 600,
  s: 0,
  x: 400,
  y: 0,
  d: 80
}

let rect01 = {
  c: 0,
  tx: 400,
  ty: 250,
  ta: 0,
  s: 0,
  x: 0,
  y: 200,
  l: 80,
  w: 300,
  r: 0
}

let circ02 = {
  c: 255,
  tx: 440,
  ty: 300,
  s: 0,
  x: -40,
  y: 300,
  d: 40
}

let rect02 = {
  c: 255,
  tx: 400,
  ty: 155,
  ta: 0,
  s: 0,
  x: 0,
  y: 300,
  l: 5,
  w: 270,
  r:0
}

let circ03 = {
  c: 0,
  tx: 350,
  ty: 250,
  s: 0,
  x: 50,
  y: 0,
  d: 150
}

let rect03 = {
  c: 255,
  tx: 380,
  ty: 220,
  ta: 151,
  s: 0,
  x: 0,
  y: 0,
  l: 60,
  w: 110,
  r: 10
}

let shapesArray = [circ01, rect01, circ02, rect02, circ03, rect03];
let shapes = [];

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER)
  angleMode(DEGREES);

  for (let i = 0; i<shapesArray.length; i++){
    let shape = shapesArray[i];

    if (shape.l != null) {
      shapes[i] = new rectangle(shape.c, shape.tx, shape.ty, shape.ta, shape.s, shape.x, shape.y, shape.l, shape.w, shape.r)
    } else {
      shapes[i] = new circ(shape.c, shape.tx, shape.ty, shape.s, shape.x, shape.y, shape.d)
    }
  }
}

function draw() {
  background(255);
  noStroke();

  for (let i = 0; i < shapesArray.length; i++) {
    shapes[i].display();
    shapes[i].diagram();
  }
}

class circ{
  constructor(color, tranX, tranY, rSpeed, circX, circY, circD) {
    this.color = color;
    this.tranX = tranX;
    this.tranY = tranY,
    this.speed = rSpeed;
    this.x = circX;
    this.y = circY;
    this.d = circD
  }
  display() {
    noStroke();
    fill(this.color);
    push();
    translate(this.tranX, this.tranY);
    rotate(this.speed);
    ellipse(this.x, this.y, this.d, this.d);
    pop();
    this.speed = this.speed + 0.25;
  }
  diagram() {
    let hypotenuse = dist(0, 0, this.x, this.y);
    stroke('black');
    noFill();
    strokeWeight(10);
    point(this.tranX, this.tranY);
    strokeWeight(0.5);
    fill(20, 20, 20, 20);
    circle(this.tranX, this.tranY, hypotenuse*2 + this.d);
  }
}

class rectangle{
  constructor(color, tranX, tranY, transAngle, rSpeed, rectX, rectY, rectL, rectW, rectR) {
    this.color = color;
    this.tranX = tranX;
    this.tranY = tranY;
    this.transAngle = transAngle;
    this.speed = rSpeed;
    this.x = rectX;
    this.y = rectY;
    this.l = rectL;
    this.w = rectW;
    this.r = rectR;
  }
  display() {
    fill(this.color);
    noStroke();
    if (this.transAngle === 0) {
      push()
      translate(this.tranX, this.tranY);
      rotate(this.speed);
      rect(this.x, this.y, this.l, this.w, this.r);
      pop()
      this.speed = this.speed + 0.25;
    } else {
      push()
      translate(this.tranX, this.tranY);
      rotate(this.transAngle);
      rect(this.x, this.y, this.l, this.w, this.r);
      pop()
    }
  }
  diagram() {
    stroke('black')
    strokeWeight(10);
    point(this.tranX, this.tranY)
    strokeWeight(0.5)
    fill(20, 20, 20, 20);
    circle(this.tranX, this.tranY, this.y*2 + this.w)
    circle(this.tranX, this.tranY, this.y*2 - this.w)
  }
}
