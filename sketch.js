let x = [0,0,0,0,0];
let y = [0,0,0,0,0];
let speedX = [0,0,0,0,0];
let speedY = [0,0,0,0,0];


function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(255);
  let j=0;
  while(j<5){
    speedX[j]=random(1,5);
    speedY[j]=random(1,5);
    j++;
  }
}

function draw() {
  background(0,0,0,20);
  let i=0;
  
  while(i<5){
    ellipse(x[i],y[i],20,20)
    x[i] = x[i]+speedX[i];
    y[i] = y[i]+speedY[i];
    if(x[i]>width){
      speedX[i] = random(-5,-1);
      fill(100,100,random(0,255))
    }
    if(x[i]<0){
      speedX[i] = random(1,5);
      fill(100,100,random(0,255))
    }
    if(y[i]>height){
      speedY[i] = random(-5,-1);
      fill(100,100,random(0,255))
    }
    if(y[i]<0){
      speedY[i] = random(1,5);
      fill(100,100,random(0,255))
    }
    i++;
  }
  
}