"use strict";
/*    Modern JavaScript
      Final Exam 2

      Project to create a drag and drop jigsaw puzzle
      Author: 
      Date:   

      Filename: finalExam2.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "img/piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);      
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

//Iterates through every item in the pieces node list.
for (let piece of pieces){
   piece.addEventListener("pointerdown", grabPiece);
}

function grabPiece(e) {

   //Set the value of the pointerX and pointerY variables to the values of the clientX and client properties of the event object.
   pointerX = e.clientX;
   pointerY = e.clientY;
   // Set the value of the touchAction style for the event target to “none”. 
   e.target.style.touchAction = "none";

   //Increase the value of the zCounter variable by 1
   zCounter++;

   e.target.style.zIndex = zCounter;
   pieceX = e.target.offsetLeft;
   pieceY = e.target.offsetTop;
   
   e.target.addEventListener("pointermove", movePiece);
   e.target.addEventListener("pointerup", dropPiece);
}

let movePiece = (e) => {

   let diffX = e.clientX - pointerX;
   let diffY = e.clientY - pointerY;

   e.target.style.left = pieceX + diffX + "px";
   e.target.style.top = pieceY + diffY + "px";
}

let dropPiece = (e) => {
   e.target.removeEventListener("pointermove", movePiece);
   e.target.removeEventListener("pointerup", dropPiece);
 }


