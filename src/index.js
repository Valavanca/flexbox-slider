(function() {
  var carousel = $('.carousel');
  var seats = $('.carousel-seat'); // list of slider's items 

  [].forEach.call(seats, function(element, index) { // default order
     element.style.order = index;
  });  

  $('.toggle').on('click', function(e) {
    var droppWhen = 0,                          // default moving back 
    valueForDropp = seats.length-1,      //
    delta = -1;                                         //

    if ($(e.currentTarget).data('toggle') === 'next') {
          droppWhen = seats.length-1;
          valueForDropp = 0;
          delta = 1;
    }

    [].forEach.call(seats, function(element, index) { // shuffle cards
      var tempOrder = parseInt(element.style.order, 10)
      if (tempOrder===droppWhen) {
        element.style.order = valueForDropp;
      } else {
        element.style.order = tempOrder + delta;
      }
    });        

    carousel.removeClass('is-set');
    return setTimeout((function() {
      return carousel.addClass('is-set');
    }), 50);
  });

}).call(this);
