//Pizza object
function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.calculateTotal = function(size, toppings) {
  var total = 0;
    if (size === "Large") {
      total += 5;
    } else if (size === "medium") {
      total += 3;
    } else if (size === "small") {
      total += 1;
    }
    if (toppings.indexOf('extraCheese') === 0) {
      total += 1;
    }
  this.price = total;
}

function newPizza(size, toppings) {
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
  });
});
