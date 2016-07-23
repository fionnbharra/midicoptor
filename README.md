# MidiCoptor

**WORK IN PROGRESS DOESN'T DO MUCH YET **

## What?
Fly a drone using your synthesizer

## How?
You'll need a [drone](https://www.amazon.co.uk/dp/B00D8UP6I0/) and a [midi keyboard](https://www.amazon.co.uk/M-Audio-Oxygen-Midi-Keyboard-Controller/dp/B00006I5HL).

Plug in your keyboard.

Connect your laptop to the drone’s WiFi.

Install:

`npm install midicopter`;

Require

`var MidiCoptor = require('midicopter');`

Start

`MidiCoptor();`

Hit middle C on your keyboard, you should hear the note and **YOUR DRONE WILL TAKE OFF**.

That's it for now, I plan on adding some more controls later. A way to stop the drone is urgently required. PRs welcome.
