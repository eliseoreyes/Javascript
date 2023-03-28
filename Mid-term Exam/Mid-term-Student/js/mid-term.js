"use strict";

// Array of Quotes from Famous People
let quotes = [
   "The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark. <p>~Michelangelo</p>",
   "It's one of the greatest gifts you can give yourself, to forgive.  Forgive everybody.  <p>~Maya Angelou</p>",
   "The greatest glory in living lies not in never falling, but in rising every time we fall.  <p>~Nelson Mandela</p>",
   "I attribute my success to this:  I never gave or took any excuse.  <p>~Florence Nightingale</p>",
   "How wonderful it is that nobody need wait for a single moment before starting to improve the world. <p>~Anne Frank</p>",
   "The most difficult thing is the decision to act, the rest is merely tenacity. <p>~Amelia Erhart</p>",
   "You miss 100% of the shots you don't take.  <p>~Wayne Gretzky</p>",
   "In the end, it's not the years in your life that count.  It's the life in your years.  <p>~Abraham Lincoln</p>",
   "It is during our darkest moments that we must focus to see the light.  <p>~Aristotle</p>",
   "Try not to become a person of success.  Rather become a person of value. <p>~Albert Einstein</p> <br /><small>(Note: Quote has been modified from 'man' to 'person'.)</small>"
];


// Run the quote generator every time the page loads
window.addEventListener("load", quoteGenerator);


// Function to generate and display a random quote
function quoteGenerator() {
   
   // Number of quotes in the array
   let quoteCount = quotes.length - 1; // The length of the quotes array is 10 but the minimun index is 0 and maximum is 9 so, I substract 1 to the length in order to avoid the undefined error when quoteCount == 10
   
   // Generate a random integer to select a quote
   let randomQuotes = randomInt(0, quoteCount);
   
   // Retrieve a randomly-selected quote
   let quote = quotes[randomQuotes];
   
   
   // Display the random quote
   document.getElementsByTagName("blockquote")[0].innerHTML = quote;
}

/*=================================================================*/
// Function to return a randomly-selected integer between lowest and highest, inclusive
function randomInt(lowest, highest) {
   let size = highest - lowest + 1;
   return Math.floor(lowest + size*Math.random());
}