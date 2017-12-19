var Board = require("../");

var board = new Board("/dev/cu.uart-30FF518F41100A47", {
  serialport: {
    baudRate: 9600,
    bufferSize: 256,
  }
});

board.on("ready", function() {
  console.log("READY");
  var pin = 2;
  var state = 1;

  board.pinMode(pin, board.MODES.OUTPUT);

  setInterval(function() {
    board.digitalWrite(pin, (state ^= 1));
  }, 500);
});
