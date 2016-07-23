'use strict';
var Midi = require('midi');
var Timbre = require('timbre');

function Synth() {

  function sound() {
    var timbre = new Timbre('SynthDef').play();
    timbre.def = function(opts) {
      var osc1, osc2, env;
      osc1 = new Timbre('saw', {freq:opts.freq         , mul:0.25});
      osc2 = new Timbre('saw', {freq:opts.freq * 1.0045, mul:0.20});
      var bpf = new Timbre('bpf', {freq: 660, Q: 3}, osc1, osc2);
      env  = new Timbre('adsr', {a:100,d:250,s:0.6,r:500}, bpf);
      return env.on('ended', opts.doneAction).bang();
    };

    return timbre;
  }

  function midiInput() {
    var input = new Midi.input();
    input.openPort(0);
    return input;
  }

  function handleMessage(message, sound) {
    var note = message[1];
    if (message[2] === 0) {
      sound.noteOff(note);
    } else {
      sound.noteOn(note, message[2]);
      console.log('m: ' + message);
    }
  }
  
  function bindEvents(midiInput, sound) {
    midiInput.on('message', function(deltaTime, message) {
      handleMessage(message, sound);
    });
  }


  function init(){
    bindEvents(midiInput(), sound());
  }

  init();
}

exports.Synth = Synth;
