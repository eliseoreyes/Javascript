"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Eliceo Reyes
      Date: May 9, 2023  

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {

      let codeValue = postalCode.value;
      let countryValue = country.value;
      place.value = "";
      region.value = "";

      let apiPromise = fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`);

      apiPromise.then(response => {return response.json()})
                .then(json => {
                  place.value = json["places"][0]["place name"];
                  region.value = json["places"][0]["state abbreviation"];
                })
                .catch(err => {console.log(err)})
                
}



