let pieces;
let isPlayersTurn;
let isSecondPlayersTurn;
let assignLetter;
let winner;
let gameFinished;

//Setup function
function setup() {
  //Creates canvas
  createCanvas(702, 701);
  //Set framerate
  frameRate(10);
  //Initialises variables
  isPlayersTurn = true;
  isCPUsTurn = false;
  assignLetter = "f";
  gameFinished = false;
  //Initialise piece array
  pieces = [[null, null, null, null, null, null],[null, null, null, null, null, null],[null, null, null, null, null, null],[null, null, null, null, null, null],[null, null, null, null, null, null],[null, null, null, null, null, null],[null, null, null, null, null, null]];
}

//Draw function
function draw() {
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
  //Draw info
  stroke(31, 46, 255);
  fill(31, 46, 255);
  textSize(20);
  text("Blue = Player 1", 500, 25);
  stroke(255, 54, 54);
  fill(255, 54, 54);
  textSize(20);
  text("Red = CPU", 500, 60);
  //Draw pieces
  if (!gameFinished){
    drawPieces();
    checkWinner();
  }
  //Logic for CPUs turn
  //
  //
  let isCPUPlaced = false;
  if (isCPUsTurn && !gameFinished){
    //Get random column to place piece in
    let column = random(7);
    column = floor(column);
    print(column);
    for (i = 0; i < 6; i++){
      //If piece not placed and place empty, place piece
      if (!isCPUPlaced && pieces[column][i] === null){
      pieces[column][i] = assignLetter;
      isCPUPlaced = true;
      }
    }
  }
    //If player has placed piece, make it so it switches which player's turn it is
  if (isCPUPlaced){
    //Draw updated board
    drawPieces();
    //Switch players turn
    if (isPlayersTurn){
        isPlayersTurn = false;
        isCPUsTurn = true;
        assignLetter = "s";
    }
    else if (isCPUsTurn){
        isPlayersTurn = true;
        isCPUsTurn = false;
        assignLetter = "f";
    }
  }
}

//Function to draw pieces on grid
function drawPieces(){
  //Loop through x values
  for (i = 0; i < pieces.length; i++){
    let YMult;
    //Loop through y values
    for (j = 0; j < pieces[i].length; j++){
      YMult = 6 - j;
      //Draw piece in relevant colour
      if (pieces[i][j] === "f"){
        stroke(31, 46, 255);
        fill(31, 46, 255);
        square((i*100)+1, (YMult*100), 99);
      }
      else if (pieces[i][j] === "s"){
        stroke(255, 54, 54);
        fill(255, 54, 54);
        square((i*100)+1, (YMult*100), 99);
      }
    }
  }
}

//Function to run when the mouse is clicked
function mouseClicked(){
  //Let player place token
  //Check if its either player's turn
  let isPlaced = false;
  if (isPlayersTurn && !gameFinished){
    //Check if in boundaries of top selection section
    if (mouseY > 0 && mouseY < 100 && mouseX > 0 && mouseX < 702){
      //Check if in first selection section
      if (mouseX < 101){
        //Loop through list, see if any free spaces
        for (i = 0; i < 6; i++){
          //If piece not placed and place empty, place piece
          if (!isPlaced && pieces[0][i] === null){
              pieces[0][i] = assignLetter;
              isPlaced = true;
          }
        }
      }
      //Check if in second selection section
      else if (mouseX < 201){
        //Loop through list, see if any free spaces
        for (i = 0; i < 6; i++){
          //If piece not placed and place empty, place piece
          if (!isPlaced && pieces[1][i] === null){
              pieces[1][i] = assignLetter;
              isPlaced = true;
          }
        }
      }
      //Check if in third selection section
      else if (mouseX < 301){
        //Loop through list, see if any free spaces
        for (i = 0; i < 6; i++){
          //If piece not placed and place empty, place piece
          if (!isPlaced && pieces[2][i] === null){
              pieces[2][i] = assignLetter;
              isPlaced = true;
          }
        }
      }
      //Check if in fourth selection section
      else if (mouseX < 401){
        //Loop through list, see if any free spaces
        for (i = 0; i < 6; i++){
          //If piece not placed and place empty, place piece
          if (!isPlaced && pieces[3][i] === null){
              pieces[3][i] = assignLetter;
              isPlaced = true;
          }
        }
      }
      //Check if in fifth selection section
      else if (mouseX < 501){
        //Loop through list, see if any free spaces
        for (i = 0; i < 6; i++){
          //If piece not placed and place empty, place piece
          if (!isPlaced && pieces[4][i] === null){
              pieces[4][i] = assignLetter;
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
              pieces[5][i] = assignLetter;
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
              pieces[6][i] = assignLetter;
              isPlaced = true;
          }
        }
      }
    }
  }
  //If player has placed piece, make it so it switches which player's turn it is
  if (isPlaced){
    //Draw updated board
    drawPieces();
    //Switch players turn
    if (isPlayersTurn){
        isPlayersTurn = false;
        isCPUsTurn = true;
        assignLetter = "s";
    }
    else if (isCPUsTurn){
        isPlayersTurn = true;
        isCPUsTurn = false;
        assignLetter = "f";
    }
  }
}

//Function to check for a winner
function checkWinner(){
  //Four is the boolean as to whether a four-in-a-row is found
  let four = false;
  //Loop through x positions
  for (i = 0; i < pieces.length; i++){
    //Loop through y positions
    for (j = 0; j < pieces[i].length; j++){
      //Check if 1st player has a four
      if (pieces[i][j] === "f" && checkAllDirections(i, j, "f")){
        four = true;
        winner = "P1";
      }
      //Check if 2nd player has a four
      else if (pieces[i][j] === "s" && checkAllDirections(i, j, "s")){
        four = true;
        winner = "P2";
      }
    }
  }
  //If someone has won
  if (four){
    textSize(32);
    stroke(0);
    fill(0);
    text("Winner: " + winner + "!", 10, 50);
    gameFinished = true;
  }
}

//Function to check if a four-in-a-row has occurred in any direction from the current piece
//Since I scan top-left to bottom-right, vertically, only four directions need to be checked
function checkAllDirections(x, y, checkChar){
  let four = false;
  //Check all directions
  if (checkDirection("r", x, y, checkChar) || checkDirection("br", x, y, checkChar) || checkDirection("d", x, y, checkChar) || checkDirection("bl", x, y, checkChar)){
    four = true;
  }
  return four;
}

//Function to check if a four-in-a-row has occurred in a given direction from the current piece
function checkDirection(direction, startX, startY, checkChar){
  //If connected == 3 then there is a four-in-a-row
  let connected = 0;
  let tried = 0;
  //Checking right
  if (direction === "r"){
    let x = startX;
    //Keep trying until 3 in line have been checked
    while (tried <= 2 && x < 6){
      //Try next position to the right
      x++;
      //If piece is there, increment number found
      if (pieces[x][startY] === checkChar){
        connected++;
      }
      tried++;
    }
  }
  //Checking diagonally down right
  else if (direction === "br"){
    let x = startX;
    let y = startY;
    //Keep trying until 3 in line have been checked
    while (tried <= 2 && x < 6 && y < 5){
      //Try next x position & y (i.e. diagonally down right)
      x++;
      y++;
      //If piece is there, increment number found
      if (pieces[x][y] === checkChar){
        connected++;
      }
      tried++;
    }
  }
  //Checking down
  else if (direction === "d"){
    let y = startY;
    //Keep trying until 3 in line have been checked
    while (tried <= 2 && y < 5){
      //Try next position down
      y++;
      //If piece is there, increment number found
      if (pieces[startX][y] === checkChar){
        connected++;
      }
      tried++;
    }
  }
  //Checking diagonally down left
  else if (direction === "bl"){
    let x = startX;
    let y = startY;
    //Keep trying until 3 in line have been checked
    while (tried <= 2 && x > 0 && y < 5){
      //Try next x position & y (i.e. diagonally down left)
      x--;
      y++;
      //If piece is there, increment number found
      if (pieces[x][y] === checkChar){
        connected++;
      }
      tried++;
    }
  }
  //If four in a row, return true
  if (connected === 3){
    return true;
  }
  else{
    return false;
  }
}