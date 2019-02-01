//Pizza object
function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.calculateTotal = function(size, toppings) {
  if (size === "Large") {
    this.price = 5;
  } else if (size === "medium") {
    this.price = 3;
  } else if (size === "small") {
    this.price = 1;
  }
}

function newPizza(size, toppings, price) {
  var newPizza = new Pizza(size, toppings, 0);
  return newPizza;
}

$(document).ready(function() {
// Start Screen
  $("#newPizza").click(function(event) {
    $("#newPizza").hide();
  });

  $("#addPizza").click(function(event){
    var toppingsArr = [];
    var size = $("input:radio[name=pizzaSize]:checked").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val();
      toppingsArr.push(toppings);
    })
    var userPizza = newPizza(size, toppingsArr);
    $("#size").text(userPizza.size);      $("#selectedToppings").text(userPizza.toppings);
    userPizza.calculateTotal(size, toppingsArr);
    $("#price").text(userPizza.price);
    console.log(userPizza.toppings);
  });
});
