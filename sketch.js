/* jshint esversion: 8 */
//let fish, ball;
let urchin, floor;
let bg;

//code insp. from Allison Parrish @ Creative Coding 
let spr;

function setup() {
  bg = loadImage('assets/a2.png');
  createCanvas(windowWidth, windowHeight);
  spr = createSprite(
    width/2, height/2, 25);
  spr.shapeColor = color(255, 255, 255);
  noStroke();

    //world.gravity.y = 10;
	//urchin = new Sprite(30, 30);
	//floor = new Sprite(30, 300, 60, 5, 'static');
	//floor.color = 'transparent';
  
//movement pattern for fish
//code from p5.play async function tutorial; doesn't work yet
  	//fish = new Turtle(30);
	//ball = new Sprite(80, 152, 50);
	//randomSequence();
}
function draw() {
  background(50);

  spr.velocity.x = (mouseX - spr.position.x) * 0.2;
  spr.velocity.y = (mouseY - spr.position.y) * 0.2;

//urchin shape
//code from star shape p5.js reference
  //push();
  //translate(width * 0.5, height * 0.5);
  //rotate(frameCount / 50.0);
  //star(0, 0, 80, 100, 40);
  //pop();
  
//urchin movement pattern (up and down)
  	//clear();
	//if (urchin.colliding(floor)) {
		//urchin.color = 'black';
	//} else urchin.color = 'purple';

	//if (urchin.colliding(floor) > 60) {
		//urchin.vel.y = -9;
	//}
  
//code built upon setAlpha() reference from p5.js library  
let c = color(255, 255, 255);
  fill(c);
  ellipse(mouseX, mouseY, 50);
 
  c.setAlpha(128);
  fill(c);
  ellipse(mouseX, mouseY, 70);
  
  c.setAlpha(50);
  fill(c);
  ellipse(mouseX, mouseY, 100);

}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
