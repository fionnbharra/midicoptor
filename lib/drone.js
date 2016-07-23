'use strict';
var arDrone = require('ar-drone');

function Drone(options){
  var client = arDrone.createClient();

  function handleMessage(note) {
    if(note === 60) { client.takeoff(); } // Take off if middle C
    console.log("FLYING!");
  }

  options.emitter.on('note', (note) => {
    handleMessage(note);
  });
}

exports.Drone = Drone;
