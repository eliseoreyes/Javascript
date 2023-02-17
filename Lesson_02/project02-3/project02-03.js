/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Eliceo Reyes
      Date: Wednesday, February 1, 2023

      Filename: project02-03.js
 */

addEventListener('DOMContentLoaded', function() {

      //Square
      document.getElementById('square').addEventListener('mouseover', function() {
            document.getElementById('feedback').innerHTML = "You're hovering over the square";
      }, false);

      document.getElementById('square').addEventListener('mouseout', function() {
            document.getElementById('feedback').innerHTML = "";
      }, false);

      //Triangle
      document.getElementById('triangle').addEventListener('mouseover',function() {
            document.getElementById('feedback').innerHTML = "You're hovering over the triangle";
      }, false);

      document.getElementById('triangle').addEventListener('mouseout', function(){
            document.getElementById('feedback').innerHTML = "";
      }, false);

      //Circle
      document.getElementById('circle').addEventListener('mouseover', function(){
            document.getElementById('feedback').innerHTML = "You're hovering over the circle";
      }, false);

      document.getElementById('circle').addEventListener('mouseout', function() {
            document.getElementById('feedback').innerHTML = "";
      }, false);
});

