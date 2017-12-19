var Board = require("../");

Board.requestPort(function(error, port) {
  if (error) {
    console.log(error);
    return;
  }

  var board = new Board(port.comName, {samplingInterval: 1000});

  board.on("ready", function() {
    this.i2cConfig();
    this.i2cRead(8,4, function(data) {
      console.log("received data");
      console.log(data);
    });
  });
});
