var side;
class Polygon {
  constructor(x) {
    this.x = x;
  }

  toString() {
    return `This is ${this.constructor.name} With area ${this.area}`;
  }
}
class Rectangle extends Polygon {
  constructor(x, y) {
    super(x);
    this.y = y;
  }
  get area() {
    return this.x * this.y;
  }
  drawRect() {
    const canvas = document.getElementById("canvasRect");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var userColor = document.getElementById("colorRect").value;
    ctx.fillStyle = userColor;
    ctx.fillRect(100, 100, this.x, this.y);
  }
}
class Square extends Polygon {
  constructor(x) {
    super(x);
  }
  get area() {
    return Math.pow(this.x, 2);
  }
  drawSquare() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var userColor = document.getElementById("color").value;
    ctx.fillStyle = userColor;
    ctx.fillRect(100, 100, this.x, this.x);
  }
}

class Circle extends Polygon {
  constructor(x) {
    super(x);
  }
  get area() {
    return Math.PI * 2 * this.x;
  }
  drawCircle() {
    const canvas = document.getElementById("canvas1");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      var userColor = document.getElementById("color1").value;
      ctx.fillStyle = userColor;
      //context.arc($centerX, $centerY, $radius, $startAngle, $endAngle);
      ctx.arc(100, 75, this.x, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}
class Triangle extends Polygon {
  constructor(x, y) {
    super(x);
    this.y = y;
  }
  get area() {
    return 0.5 * this.x * this.y;
  }

  drawTriangle() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      ctx.beginPath();
      ctx.moveTo(100, 100); // Where to start path from
      ctx.lineTo(100, 300); //Draw line from moveTo to this point
      ctx.lineTo(300, 300); //From the Above point to this point
      ctx.fill();
    }
  }
}

function createSquare() {
  side = parseInt(document.getElementById("squareSide").value);
  var square = new Square(side);
  square.drawSquare();
  document.getElementById("Description").innerHTML = square.toString();
}
function createCircle() {
  var radius = parseInt(document.getElementById("radius").value);
  var circle = new Circle(radius);
  circle.drawCircle();
  document.getElementById("DescriptionCircle").innerHTML = circle.toString();
}
function createRect() {
  var Length = parseInt(document.getElementById("rectLength").value);
  var width = parseInt(document.getElementById("rectWidth").value);
  var Rect = new Rectangle(Length, width);
  Rect.drawRect();
  document.getElementById("DescriptionRect").innerHTML = Rect.toString();
}
// var rec1 = new Rectangle(5, 10);
// var circle1 = new Circle(20);
// var triangle1 = new Triangle(30, 50);
// var square1 = new Square(50);
