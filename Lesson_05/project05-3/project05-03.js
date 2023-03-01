"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Eliceo Reyes
      Date: Tuesday February 28, 2023

      Filename: project05-03.js
*/

let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

for (let x = sourceDoc.firstElementChild; x != null; x = x.nextElementSibling){
  
      if (x.nodeName == heading){
            let anchor = document.createElement("a");
           // anchor.setAttribute("name", "doclink" + headingCount);
            anchor.id = "doclink" + headingCount;
            
            // Use the insertBefore() method to insert anchor before first child of the n node.
            x.insertBefore(anchor, x.lastElementChild);

           let listItem = document.createElement("li");
           let link = document.createElement("a");
           listItem.appendChild(link);
           link.textContent = x.textContent;
           link.href = "#doclink" + headingCount;
           toc.appendChild(listItem);
           headingCount++;
      }
}
