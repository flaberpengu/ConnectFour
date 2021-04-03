let pieces;
let isPlayersTurn;

function setup() {
  //print("yeet");
  createCanvas(702, 701);
  //background(255);
  frameRate(10);
  isPlayersTurn = true;
  //pieces[x][y]
  pieces = [[null, null, null, null, null, null],[null, null, null, null, null, null],[null, null, null, null, null, null],[null, null, null, null, null, null],[null, null, null, null, null, null],[null, null, null, null, null, null],[null, null, null, null, null, null]];
}

function draw() {
  //background();
  //Create grid
  stroke(0);
  //Vertical lines
  line(1, 100, 1, 701);
  line(101, 100, 101, 701);
  line(201, 100, 201, 701);
  line(301, 100, 301, 701);
  line(401, 100, 401, 701);
  line(501, 100, 501, 701);
  line(601, 100, 601, 701);
  line(701, 100, 701, 701);
  //Horizontal lines
  line(0, 100, 702, 100);
  line(0, 200, 702, 200);
  line(0, 300, 702, 300);
  line(0, 400, 702, 400);
  line(0, 500, 702, 500);
  line(0, 600, 702, 600);
  line(0, 700, 702, 700);
  //Draw pieces
  drawPieces();
  checkWinner();
}

//Function to draw pieces on grid
function drawPieces(){
  print(pieces);
  //print("Draw");
  for (i = 0; i < pieces.length; i++){
    let YMult;
    for (j = 0; j < pieces[i].length; j++){
      YMult = 6 - j;
      if (pieces[i][j] === "p"){
        //background(0);
        fill(100);
        square((i*100)+1, (YMult*100), 99);
      }
    }
  }
 //background(0);
}

function mouseClicked(){
  //background(0);
  //Let player place token
  //Check if its player's turn
  if (isPlayersTurn){
    //background(0);
    let isPlaced = false;
    //Check if mouse is pressed
    //if (mouseIsPressed){
      //Check if in boundaries of top selection section
    if (mouseY > 0 && mouseY < 100 && mouseX > 0 && mouseX < 702){
        //background(0);
        //Check if in first selection section
      if (mouseX < 101){
          //background(0);
          //Loop through list, see if any free spaces
        for (i = 0; i < 6; i++){
            //If piece not placed and place empty, place piece
          if (!isPlaced && pieces[0][i] === null){
              //background(0);
              pieces[0][i] = "p";
              isPlaced = true;
              //textSize(32);
              //text("0", 600, 50);
          }
        }
      }
        //Check if in second selection section
      else if (mouseX < 201){
          //Loop through list, see if any free spaces
        for (i = 0; i < 6; i++){
            //If piece not placed and place empty, place piece
          if (!isPlaced && pieces[1][i] === null){
              pieces[1][i] = "p";
              isPlaced = true;
              //textSize(32);
              //text("1", 630, 50);
          }
        }
      }
        //Check if in third selection section
      else if (mouseX < 301){
          //Loop through list, see if any free spaces
        for (i = 0; i < 6; i++){
            //If piece not placed and place empty, place piece
          if (!isPlaced && pieces[2][i] === null){
              pieces[2][i] = "p";
              isPlaced = true;
              //textSize(32);
              //text("2", 660, 50);
          }
        }
      }
        //Check if in fourth selection section
      else if (mouseX < 401){
          //Loop through list, see if any free spaces
        for (i = 0; i < 6; i++){
            //If piece not placed and place empty, place piece
          if (!isPlaced && pieces[3][i] === null){
              pieces[3][i] = "p";
              isPlaced = true;
              //textSize(32);
              //text("3", 690, 50);
          }
        }
      }
        //Check if in fifth selection section
      else if (mouseX < 501){
          //Loop through list, see if any free spaces
        for (i = 0; i < 6; i++){
            //If piece not placed and place empty, place piece
          if (!isPlaced && pieces[4][i] === null){
              pieces[4][i] = "p";
              isPlaced = true;
          }
        }
      }
        //Check if in sixth selection section
      else if (mouseX < 601){
          //Loop through list, see if any free spaces
        for (i = 0; i < 6; i++){
            //If piece not placed and place empty, place piece
          if (!isPlaced && pieces[5][i] === null){
              pieces[5][i] = "p";
              isPlaced = true;
          }
        }
      }
        //Check if in third selection section
      else if (mouseX < 702){
          //Loop through list, see if any free spaces
        for (i = 0; i < 6; i++){
            //If piece not placed and place empty, place piece
          if (!isPlaced && pieces[6][i] === null){
              pieces[6][i] = "p";
              isPlaced = true;
          }
        }
      }
    }
    //}
    //If player has placed piece, make it so it isnt player's turn
    if (isPlaced){
      //isPlayersTurn = false;
      drawPieces();
      //background(0);
    }
  }
  //checkWinner();
}

function checkWinner(){
  //background(0);
  //print("Hello");
  let four = false;
  //textSize(16);
  //text(pieces, 20, 50);
  for (i = 0; i < pieces.length; i++){
    //background();
    //fill(0);
    //text("y", i*20, 40);
    for (j = 0; j < pieces[i].length; j++){
      if (pieces[i][j] === "p" && checkAllDirections(i, j)){
        //background(0);
        four = true;
      }
    }
  }
  if (four){
    //background(0);
    textSize(32);
    text("Winner!", 10, 50);
  }
}

function checkAllDirections(x, y){
  //background(0);
  let four = false;
  if (checkDirection("r", x, y) || checkDirection("br", x, y) || checkDirection("d", x, y) || checkDirection("bl", x, y)){
    four = true;
  }
  return four;
}

function checkDirection(direction, startX, startY){
  //background(0);
  //If connected == 3 then there is 4 in a row
  let connected = 0;
  let tried = 0;
  //If checking right
  if (direction === "r"){
    //background(0);
    let x = startX;
    //Keep trying
    while (tried <= 2 && x < 6){
      //background(0);
      x++;
      if (pieces[x][startY] === "p"){
        //background(x*50);
        //fill(255);
        //square(5, 45, 25);
        //fill(0);
        //text(x, 10, 50);
        connected++;
      }
      tried++;
    }
  }
  //If checking diag down right
  else if (direction === "br"){
    let x = startX;
    let y = startY;
    //Keep trying
    while (tried <= 2 && x < 6 && y < 5){
      x++;
      y++;
      if (pieces[x][y] === "p"){
        connected++;
      }
      tried++;
    }
  }
  //If checking down
  else if (direction === "d"){
    let y = startY;
    //Keep trying
    while (tried <= 2 && y < 5){
      y++;
      if (pieces[startX][y] === "p"){
        connected++;
      }
      tried++;
    }
  }
  //If checking diag down left
  else if (direction === "bl"){
    let x = startX;
    let y = startY;
    //Keep trying
    while (tried <= 2 && x > 0 && y < 5){
      x--;
      y++;
      if (pieces[x][y] === "p"){
        connected++;
      }
      tried++;
    }
  }
  //If four in a row, return true
  if (connected === 3){
    //background(0);
    return true;
  }
  else{
    return false;
  }
}

//DETECTS TWO NEXT TO EACH OTHER AS WINNING STATE?