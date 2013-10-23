$(document).ready(function() {

  var game_num = $('#game_id').text();

  var current_game = new Game(game_num, newPlayer1, newPlayer2);
  $(document).on('keyup',function(event) {
    if (event.keyCode == 32) {
      current_game.advance_player1();
      current_game.winner();
    }
    else if (event.keyCode == 13) {
      current_game.advance_player2();
      current_game.winner();
    }
  });
});

















// $(document).ready(function() {

//   var player_name = $('#player1').text()
//   var game_num = $("h1").text()
//   current_game = new Game(game_num, player_name)
//   current_game.loop()
// });


// $(document).ready(function() {
//   console.log(game)
//   p1_finished =  false
//   p2_finished =  false

//   $(document).on('keyup', function(event) {
//     var p1End = $('#player1_strip td ').length
//     console.log(p1End)
//     if (event.keyCode == 32) {
//       var tdActive1 = $('#player1_strip > .active');
//       tdActive1.removeClass('active');
//       tdActive1.next().addClass('active');
//       if (p2_finished == false && $('td:last-child').hasClass('active')) {
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
//     }

//     // var p2End= $('#player2_strip td').length
//     else if (event.keyCode == 13) {
//       var tdActive2 = $('#player2_strip > .active');
//       tdActive2.removeClass('active');
//       tdActive2.next().addClass('active');
//       if (p1_finished == false && $('td:last-child').hasClass('active')) {
//         $('.finish').css("visibility", "visible");
//         $('#winner').html("Uku wins!");
//         p2_finished = true


//         var data = { winner : player2, game: game }
//         console.log(data)
//         $.post('/results', data, function(response) {
//           console.log(data);
//           console.log(response);
//           $('table').append(response);
//         },"json");
//       }
//     }

//   })
// });

