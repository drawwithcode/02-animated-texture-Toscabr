function setup() {
  createCanvas(windowWidth, windowHeight);
 

}


function draw() {
  
  background("lightblue");
 

  for (let y = 0; y<windowHeight*2; y++){
    for (let x = 0; x<windowWidth*2; x++){
  
  
      if(x % (mouseX+50) === 0 && y % (mouseX+50) === 0){
      
        fill("white")
        ellipse(x-mouseY/2, y-mouseY/2, mouseX/2, mouseY/5)
        fill("red")
        ellipseMode(CENTER)
        ellipse(x, y, mouseX/10, mouseX/10)
        noFill()
        rect(x-mouseY, y-mouseY , (windowWidth-mouseX+10)/20,(windowHeight-mouseY+10)/10)
        fill("red")
      textAlign(CENTER)
      textSize(50);
      text('move mouse to screen edges', windowWidth/2, windowHeight/2);
      }

      if( x % (windowWidth-mouseX+30) === 0 && y % (windowWidth-mouseX+30) === 0){
        noFill()
        strokeWeight(5);
        ellipseMode(CENTER)
        ellipse(x, y, 20, 20)
        
       
      } 
    }
    }
    
  }


  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

  