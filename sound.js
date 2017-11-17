var five = require("johnny-five"), board, lcd;

var analog = "A1"
// var digital = "2";

new five.Board().on("ready", function() {

  var heart = [
     "01100110",
     "10011001",
     "10000001",
     "10000001",
     "01000010",
     "00100100",
     "00011000",
     "00000000"
   ];

   var smile = [
     "00000000",
     "00100100",
    "00000000",
    "00000000",
    "10000001",
    "01000010",
    "00111100",
    "00000000"]

    var sad = [
      "00000000",
      "00100100",
     "00000000",
     "00000000",
     "00000000",
     "00111100",
     "01000010",
     "10000001"
     ]

   var matrix = new five.Led.Matrix({
     pins: {
       data: 6,
       clock: 4,
       cs: 5
     }
   });

  var ledRed = new five.Led(0);
  var ledYellow = new five.Led(1);
  var ledGreen = new five.Led(2)

  var lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 2,
    rows: 2,
    cols: 20
  });

  // // Tell the LCD you will use these characters:
  lcd.useChar("heart");

  var analogSensor = new five.Sensor({pin:analog,
    freq: 500
    });


  analogSensor.on("data", function() {
    // this formula may need work but was inspired by https://forum.arduino.cc/index.php?topic=376308.0
    var decibels = Math.round(40 + (20 * Math.log10(this.value/40)));
    console.log('decibels', decibels);
    if(decibels > 60){
      matrix.draw(sad);
      lcd.clear().cursor(0, 0).print(decibels + " Too loud :(");

    } else {
      matrix.draw(smile);
      lcd.clear().print(decibels + " :heart:");

    }
 });

});
