  let carousel = document.getElementById('carousel')
  let seats = document.getElementsByClassName("carousel-seat"); // list of slider's items 

  [].forEach.call(seats, function(element, index) { // default order
     element.style.order = index;
  });  


  [].forEach.call(document.getElementsByClassName("toggle"), function(el) {
    el.addEventListener("click", function(e) {
      let droppWhen = 0,                            // default config for moving back  
      valueForDropp = seats.length-1,       //
      delta = -1,                                         //
      directionClass = "left";                      //

      if (e.target.dataset.toggle === 'next') {
            droppWhen = seats.length-1;
            valueForDropp = 0;
            delta = 1;
            directionClass = "right"; 
      }

      [].forEach.call(seats, function(element, index) { // shuffle cards
        var tempOrder = parseInt(element.style.order, 10)
        if (tempOrder===droppWhen) {
          element.style.order = valueForDropp;
        } else {
          element.style.order = tempOrder + delta;
        }
      });        

      carousel.className = "";
      setTimeout((function() {
        carousel.classList.add(directionClass);
      }), 50);       
    });
  });