let cor;

let posicaoHorizontal; //x
let posicaoVertical; //y

let posicaoHorizontal2; //x
let posicaoVertical2; //y

let circuloX; //horizontal
let circuloY;//Vertical

let contador;

function setup() {
  createCanvas(400, 400);
   background(color(100, 0, 0));
  
  cor = color(random(255), random(255), random(255));

  posicaoHorizontal= 0;
  posicaoVertical= random(height);
  
  posicaoHorizontal2= 0;
  posicaoVertical2= random(height);
  
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)];
}


function draw() {
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  circle(posicaoHorizontal2, posicaoVertical2, 50);
  
  circle(circuloX[0], circuloY[0], 50);
  circle(circuloX[1], circuloY[1], 50);
  
  posicaoHorizontal+= random(0, 3);
  posicaoVertical+= random(-3, 3);
  
  posicaoHorizontal2+= random(0, 3);
  posicaoVertical2+= random(-3, 3);
  
      
  circuloX[0]+= random(0, 0);
  circuloY[0]+= random(-3, 3);
  
  circuloX[1]+= random(0, 0);
  circuloY[1]+= random(-3, 3);
  
  for(let contador in circuloX ){
    circle(circuloX[contador], circuloY[contador], 50);
    circuloX[contador]+= random(0, 3);
    circuloY[contador]+= random(-3, 3);
  }
  
  if(circuloX[contador] >= width){
    circuloX[contador] = 0;
    circuloY[contador] = random(height);
  }
  
  if(mouseIsPressed) {
    
  cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }    
}