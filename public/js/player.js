function Player(name, position, keyCode) {
  this.name = name;
}


var p1Name = $('#p1_name').html();
var p2Name = $('#p2_name').html();

var newPlayer1 = new Player(p1Name);
var newPlayer2 = new Player(p2Name);

