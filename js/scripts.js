//Pizza object
function Pizza (crust, crustFlavor, size, sauce, toppings, cheese, price) {
  this.crust = crust;
  this.crustFlavor = crustFlavor
  this.size = size;
  this.sauce = sauce
  this.toppings = toppings;
  this.cheese = cheese;
  this.price = price;
}

Pizza.prototype.calculateTotal = function(crust, size, sauce, toppings, cheese) {
  var total = 0;
  for (var i = 0; i < toppings.length; i++) {
    if (i > 1) {
      total += 1;
    }
  }
  if (crust === "cauliflower") {
    total += 2;
  }
  if (sauce === "low") {
    total += 1;
  }
  if (cheese === "extra") {
    total += 1;
  }
  if (size === "large") {
    total += 5;
  } else if (size === "medium") {
    total += 3;
  } else if (size === "small") {
    total += 1;
  }
  this.price = total;
}

function newPizza(crust, crustFlavor, size, sauce, toppings, cheese) {
  var newPizza = new Pizza(crust, crustFlavor, size, sauce, toppings, cheese, 0);
  return newPizza;
}

$(document).ready(function() {
// Start Screen
  $("#newPizza").click(function(event) {
    $("#newPizza").hide();
    $("#pizzaMenu").show();
  });

  $("#addPizza").click(function(event){
    var crust = $("input:radio[name=pizzaCrust]:checked").val();
    var crustFlavor = $("input:radio[name=flavorCrust]:checked").val();
    var size = $("input:radio[name=pizzaSize]:checked").val();
    var sauce = $("input:radio[name=pizzaSauce]:checked").val();
    var toppingsArr = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val();
      toppingsArr.push(toppings);
    })
    var cheese = $("input:radio[name=cheese]:checked").val();
    var userPizza = newPizza(crust, crustFlavor, size, sauce, toppingsArr, cheese);
    // $("#pizzaMenu").hide();
    $("#order").show();
    $("#size").text(userPizza.size);      $("#selectedToppings").text(userPizza.toppings);
    userPizza.calculateTotal(crust, size, sauce, toppingsArr, cheese);
    $("#price").text(userPizza.price);
  });
});
