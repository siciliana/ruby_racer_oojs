$(document).ready(function() { 

  function Game(game_num, player_1, player_2) {
    this.game_num = game_num;
    this.player_1 = player_1;
    this.player_2 = player_2;
    this.done = false;
  }

  function Player(name) {
    this.name = name;
  }

      var p1Name = $('#p1_name').html();
      var p2Name = $('#p2_name').html();
      console.log(p1Name)

      var new_player1 = new Player(p1Name);
      var new_player2 = new Player(p2Name);
      console.log(new_player1);
      console.log(new_player2);

  Game.prototype.advance_player1 = function (player) {
    $(document).on('keyup', function(event) {
      if (event.keyCode == 32) {
  //       var tdActive1 = $('#player1_strip > .active');
  //       tdActive1.removeClass('active');

  //       tdActive1.next().addClass('active');
  //       if (new_player2.done == false && $('td:last-child').hasClass('active')) {
  //         $('.finish').css("visibility", "visible");
  //         $('#winner').html("Henroid wins!");
  //         p1_finished = true
  //         var data = { winner : player1, game: game }
  //         console.log(data)
  //         $.post('/results', data, function(response) {
  //           console.log(data); 
  //           console.log(response);
  //           $('table').append(response);
  //         },"json");
  //       }
        };
    }); 
  };

  // Game.prototype.advance_player2 = function (player) {

  //   $(document).on('keyup', function(event) {
  //   if (event.keyCode == 13) {
  //       var tdActive1 = $('#player1_strip > .active');
  //       tdActive1.removeClass('active');

  //       tdActive1.next().addClass('active');
  //       if (new_player1.done == false && $('td:last-child').hasClass('active')) {
  //         $('.finish').css("visibility", "visible");
  //         $('#winner').html("Uku wins!");
  //         p1_finished = true
  //         var data = { winner : player2, game: game }
  //         console.log(data)
  //         $.post('/results', data, function(response) {
  //           console.log(data); 
  //           console.log(response);
  //           $('table').append(response);
  //         },"json");
  //       }
  //   }; 
  // };

  // Game.prototype.loop = function() {
     

  // }
      // testGame.advance_player1(new_player1)



});
