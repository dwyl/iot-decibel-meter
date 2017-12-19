var Board = require("../");

Board.requestPort(function(error, port) {
  if (error) {
    console.log(error);
    return;
  }

  var board = new Board(port.comName);

  board.on("ready", function() {
    console.log(board.RESOLUTION);
  });
});
