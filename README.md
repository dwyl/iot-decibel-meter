# iot-decibel-meter
An arduino decibel meter

![img_4568](https://user-images.githubusercontent.com/11833296/34159583-afba8346-e4c1-11e7-946e-8052d99149c2.jpg)
![img_4569](https://user-images.githubusercontent.com/11833296/34159585-afe318c4-e4c1-11e7-8041-bea868c1ef4c.jpg)

The eventual aim is to get the decibel meter running just on the raspberry pi. However as we are newbies and did not want to have to solder on an ADC converter, we have started off using an arduino

## You will need:
- a positive mental attitude :heart: :smile: :heart:
- a laptop or a raspberry pi :cake:
- an arduino
- a sparkfun sound detector (with envelope readings)
- a breadboard :bread:
- some male-male wires :boy: :boy:
- USB A to B cable
- LCD screen (we have the LCD 1602 module) and potentiometer (10k)

## Steps
- Clone the repository
- Download the [arduino IDE](https://www.arduino.cc/en/Main/Software)
- Hook up the sparkfun sound detector. Follow instructions [here](https://learn.sparkfun.com/tutorials/sound-detector-hookup-guide?_ga=2.42092133.1361593521.1505302503-234789299.1505302503#introducing-the-sound-detector)
On our setup, we have connected the envelope output to A1 and gate output to digital 3 (as well as 5V VCC and gnd). We have left the audio output disconnected because we do not need to use it.

- Connect LCD screen. We use pins: [7, 8, 9, 10, 11, 12]. Please see hardware hook up instructions [here](http://johnny-five.io/examples/lcd/)
- Connect arduino to usb port of computer and check you are connected to your arduino port (Tools -> Port)
- Open the sound.ino file in the arduino IDE
- Click Sketch -> Upload to upload the sound.ino code onto your arduino

You should now see the decibels on the lcd screen.

Feel free to plug into a wall plug or power the arduino with a battery instead.

Video of it in action: https://youtu.be/mYaD5LH4KYI
