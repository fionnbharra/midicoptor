'use strct';
var EventEmitter = require('events').EventEmitter;
var Synth = require('./synth').Synth;
var Drone = require('./drone').Drone;

function MidiCoptor(){
  var emitter = new EventEmitter();

  Synth({
    emitter
  });

  Drone({
    emitter
  });
}

exports.MidiCoptor = MidiCoptor;
