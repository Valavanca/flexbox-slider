  let carousel = document.getElementById('carousel')
  let seats = document.getElementsByClassName("carousel-seat"); // list of slider's items 

  [].forEach.call(seats, function(element, index) { // default order
     element.style.order = index;
  });  


function displayWindow(colection) {
     this.itemsCollection = colection;
     this.length = colection.length;
     this.left = 0;
     this.right = 2;
}

displayWindow.prototype.hideItems = function() {
    function findeShowRange(index, left, right) {
      let range; 
      if(right>=left) {
        range = index >= left && index <= right;
      } else {
        range = index >= left || index <= right
      }
      return range;
    } 
    function changeOrder(element, index, context) {
      if(context.left<context.right) {
        element.style.order = index;
      } else {
        element.style.order = index < context.left ? context.length+index : index;
      }
    }

    [].forEach.call(this.itemsCollection, (element, index)=> {
      if(findeShowRange(index, this.left, this.right)) {
        changeOrder(element, index, this);
        element.classList.remove("hide");
        setTimeout((()=> {
          element.classList.remove("opacity");
        }), 1000);
      } else {
        element.classList.add("opacity");
        setTimeout((()=> {
          element.classList.add("hide");
        }), 1000);
      }
    });  
  };
displayWindow.prototype.moveLeft = function() {
/*    this.itemsCollection.item(this.right).classList.add("push_to");*/
    this.left = (this.left===0) ? this.length-1 : this.left-1;
    this.right = (this.right===0) ? this.length-1 : this.right-1;
    this.hideItems();
}
displayWindow.prototype.moveRight = function() {
    /* this.itemsCollection.item(this.left).classList.add("pull_from");*/
    this.left = (this.left===this.length-1) ? 0 : this.left+1;
    this.right = (this.right===this.length-1) ? 0 : this.right+1;
    this.hideItems();
}


let w = new displayWindow(seats);
w.hideItems();