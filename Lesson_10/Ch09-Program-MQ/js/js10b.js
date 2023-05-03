"use strict";
/*  JavaScript 7th Edition
    Chapter 10 - revised from Google Maps to Maquest
    Chapter revision

    Oak Top House Directions
    Author: Eliceo Reyes
    Date: April 26, 2023

    Filename: js10b.js
*/

const btnDir = document.getElementById('directions');

window.onload = function () {


    // Setup API key and initalize the map
    // Note: 'map' refers to a <div> element with the ID map
    L.mapquest.key = 'sZY9KmPUeOafDIMAzhmVIi1eaP4zoaLh';

    var baseLayer = L.mapquest.tileLayer('map');

    var map = L.mapquest.map('map', {
       // center: [37.7749, -122.4194],
       center: [0,0],
        layers: baseLayer,
        zoom: 12
    });

    // Add the Map layers control (map layer styles)


    //Add the Map layers
    
    L.control.layers({
        'Map': baseLayer,
        'Hybrid': L.mapquest.tileLayer('hybrid'),
        'Satellite': L.mapquest.tileLayer('satellite'),
        'Light': L.mapquest.tileLayer('light'),
        'Dark': L.mapquest.tileLayer('dark')
    }).addTo(map);
    // Map with Leaflet Draw Control
    var drawnItems = L.featureGroup().addTo(map);

  map.addControl(new L.Control.Draw({
        edit: {
            featureGroup: drawnItems,
            poly: {
                allowIntersection: false
            }
        },
        draw: {
            polygon: {
                allowIntersection: false,
                showArea:true
            }
        }
    }));

    map.on(L.Draw.Event.CREATED, function(event){
        var layer = event.layer;
        drawnItems.addLayer(layer);
    });


    // Basic Geocoding
    L.mapquest.geocoding().geocode('1825 N Bluemound Dr, Appleton WI');

    // Add switch to add and remove the directions panel

    btnDir.addEventListener('click', () => {

        switch(btnDir.value) {
            case "Map Directions":
                console.log("Showing..");
                btnDir.value = "Hide Directions";
    
                 // Map Directions Click Event
            L.mapquest.directionsControl({
                routeSummary: {
                    enabled: false,
                    draggable: true
                },
                narrativeControl: {
                    enabled: true,
                    compactResults: false
                },
                routeRibbon: {
                    showTraffic: true
                },
                alternateRouteRibbon: {
                    showTraffic: true
                }
            }).addTo(map);
    
            break; 
    
            case "Hide Directions":
                console.log("Hiding");
                btnDir.value = "Map Directions";
                location.reload();
                break;
                
        }
    
    });

    // Add the Mapquest Control
    map.addControl(L.mapquest.control());
} // end .onload() event
