function Game(game_num, player_1, player_2) {
  this.game_num = game_num;
  this.player_1 = player_1;
  this.player_2 = player_2;
  this.done = false;
}

  Game.prototype.advance_player1 = function () {
      console.log('player 1 moves')
    //   if (event.keyCode == 32) {
        var tdActive1 = $('#player1_strip > .active');
        tdActive1.removeClass('active');

        // if player is at position 1, do stuff below
        tdActive1.next().addClass('active');

  };

  Game.prototype.winner = function () {
     if ($('#player1_strip td:last-child').hasClass('active')) {
      $(document).unbind('keyup');
     }
  };

  Game.prototype.advance_player2 = function () {
        console.log('player 2 moves')
        var tdActive1 = $('#player2_strip > .active');
        tdActive1.removeClass('active');

        tdActive1.next().addClass('active');

  }
