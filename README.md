# iot-decibel-meter
A decibel meter built with johnny-five

The eventual aim is to get the decibel meter running just on the raspberry pi. However as we are newbies and did not want to have to solder on an ADC converter, we have started off using an arduino and running the johnny-five script on the raspberry pi.

## You will need:
- a positive mental attitude :heart: :smile: :heart:
- a laptop or a raspberry pi :cake: with node installed
- an arduino
- a sparkfun sound detector (with envelope readings)
- a breadboard :bread:
- some male-male wires :boy: :boy:
- USB A to B cable

#### Optional:
- an 8 x 8 Matrix (we have MAX7219)
- LCD screen (we have the LCD 1602 module) and potentiometer (10k)

## Steps
- Clone the repository
- ```npm install```
- Hook up the sparkfun sound detector. Follow instructions [here](https://learn.sparkfun.com/tutorials/sound-detector-hookup-guide?_ga=2.42092133.1361593521.1505302503-234789299.1505302503#introducing-the-sound-detector)
On our setup, we have connected the envelope output to A1 and gate output to digital 3 (as well as 5V VCC and gnd). We have left the audio output disconnected because we do not need to use it.

- Connect your matrix. Our output pins are data: 6, clock: 4, cs: 5. Please see hook up instructions [here](http://johnny-five.io/examples/led-matrix)
- Connect LCD screen. We use pins: [7, 8, 9, 10, 11, 12]. Please see hook up instructions [here](http://johnny-five.io/examples/lcd/)
- Run ```sudo node sound.js```

You should now see the decibels (roughly) on the lcd screen and the matrix should switch between a :smile: and :disappointed: depending on the volume
