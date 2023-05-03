"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-04

    Chess Board Drag and Drop
    
    Author: Eliceo Reyes
    Date: May 2, 2023   

    Filename: project10-04.js
*/


// Page Objects
let pieces = document.getElementsByTagName("span");
let boardSquares = document.querySelectorAll("table#chessboard td");
let whiteBox = document.getElementById("whiteBox");
let blackBox = document.getElementById("blackBox");
let piecesCollection = document.querySelectorAll("span");

for (let items of pieces){
    items.draggable = true;

   items.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", event.target.id);
   }) ;
}

for (let boards of boardSquares) {
    
    boards.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    boards.addEventListener("drop", (event) => {
        event.preventDefault();

        let pieceID = event.dataTransfer.getData("text");
        let movingPiece = document.getElementById(pieceID);
        
        if (event.target.tagName == "TD") {
            event.target.appendChild(movingPiece);
        } else if (event.target.tagName == "SPAN") {
            
          let occupyingPiece = event.target;  
          let square = occupyingPiece.parentElement;
          square.appendChild(movingPiece);

          if (occupyingPiece.className == "white"){
            whiteBox.appendChild(occupyingPiece);
          }else {
            blackBox.appendChild(occupyingPiece);
          }

        }
    });
}