$(document).ready(function() {
  p1_finished =  false
  p2_finished =  false
  
  $(document).on('keyup', function(event) {
    var p1End = $('#player1_strip  ').length
    console.log(p1End)
    if (event.keyCode == 32) {
      var tdActive1 = $('#player1_strip > .active');
      tdActive1.removeClass('active');
      tdActive1.next().addClass('active');
      if (p2_finished == false && $('td:last-child').hasClass('active')) {
        $('.finish').css("visibility", "visible");
        $('#winner').html("Henroid wins!");
        p1_finished = true
      }
    }

    // var p2End= $('#player2_strip td').length 
    else if (event.keyCode == 13) {
      var tdActive2 = $('#player2_strip > .active');
      tdActive2.removeClass('active');
      tdActive2.next().addClass('active');
      if (p1_finished == false && $('td:last-child').hasClass('active')) {
        $('.finish').css("visibility", "visible");
        $('#winner').html("Uku wins!");
        p2_finished = true
      } 
    }
 
  })
});

