"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Application to generate a slide show
      Author: Eliceo Reyes
      Date:  Friday, February 24, 2023

      Filename: js05.js
*/

window.addEventListener("load", createLightbox);

/*  !IMPORTANT NOTE:
 *  Be sure to watch the first video to see code changes 
 *     you need to make in the lightbox_data.js file.  
 *     You will be shown a quick way to make those changes.
 * 
 *          OR
 * 
 *   On page 174, in your book, when told to add the code
 * 
 *           image.src = imgFiles[i];
 * 
 *      instead, type in 
 * 
 *          image.src = "images/" + imgFiles[i];
 */

function createLightbox(){

      //Lightbox Container

      let lightBox = document.getElementById("lightbox");

      //Parts of the lightbox
    
      let lbTitle = document.createElement("h1");
      let lbCounter = document.createElement("div");
      let lbPrev = document.createElement("div");
      let lbNext = document.createElement("div");
      let lbPlay = document.createElement("div");
      let lbImages = document.createElement("div");
     
      lightBox.appendChild(lbImages);
      lbImages.id = "lbImages";

      // Add images from the imgFiles array to the container
      for (let x = 0; x < imgCount; x++) {
            let image = document.createElement("img");
            image.src = imgFiles[x];
            image.alt = imgCaptions[x];
            image.onclick = createOverlay;
            lbImages.appendChild(image);

      }

     
      //Design the lightbox title
      lightBox.appendChild(lbTitle);
      lbTitle.id = "lbTitle";

      let currentImg = 1;
      lbCounter.textContent = currentImg + " / "+imgCount;

      //Design the lightBox slide counter
      lightBox.appendChild(lbCounter);
      lbCounter.id = "lbCounter";

      //Design the lightBox previous slide button
      lightBox.appendChild(lbPrev);
      lbPrev.id = "lbPrev";
      lbPrev.onclick = showPrev;

      lbPrev.innerHTML = "&#9664";
      // Design the lightBox next slide button
      lightBox.appendChild(lbNext);
      lbNext.id = "lbNext";
      lbNext.innerHTML = "&#9654";
      lbNext.onclick = showNext;

      // Design the lightBox Play-Pause button
      lightBox.appendChild(lbPlay);
      lbPlay.id = "lbPlay";
      lbPlay.innerHTML = "&#9199";
     
      let timeId;

      lbPlay.onclick = function(){
          
            if (timeId){
                  //Stop the slideshow
                  window.clearInterval(timeId);
                  timeId = undefined;
            }else {
                  //Start the slideshow
                  showNext();
                  timeId = window.setInterval(showNext, 1500);
            }
      }
     
       //Function to move forward through the image list
       function showNext(){

        
            lbImages.appendChild(lbImages.firstElementChild);
            (currentImg < imgCount) ? currentImg++ : currentImg = 1;

            lbCounter.textContent = currentImg + " / "+imgCount;
        
      }

       //Function to move backguard through the image list
       function showPrev(){
            lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
            (currentImg > 1) ? currentImg-- : currentImg = imgCount;
            lbCounter.textContent = currentImg + " / "+imgCount;
      }

      function createOverlay(){

            let overlay = document.createElement("div");
            overlay.id = "lbOverlay";

            //Add the figure box to the overlay
            let figureBox = document.createElement("figure");
            overlay.appendChild(figureBox);

            //Add the image to the figure box
            let overlayImage = this.cloneNode("true");
            figureBox.appendChild(overlayImage);

            //Add the caption to the figure box
            let overlayCaption = document.createElement("figurecaption");
            overlayCaption.textContent = this.alt;
            figureBox.appendChild(overlayCaption);

            //Add a close button to the overlay
            let closeBox = document.createElement("div");
            closeBox.id = "lbOverlayClose";
            closeBox.innerHTML = "&times;";

            //Add anonymous function 
            closeBox.onclick = function(){
                  document.body.removeChild(overlay);
            }

            overlay.appendChild(closeBox);

            document.body.appendChild(overlay);

      }
}