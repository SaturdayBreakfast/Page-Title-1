var items=[];

$('.addButton').click(function() {
  var item = $("#item").val();
  items.push(item);
  $(".itemAmount").append("<li>" + item + "</li>");                  
  
  var itemAmount = items.length;
  $(".itemAmount").text(itemAmount);
  
  console.log(itemAmount);
});

$('.addButton').click(function() {
  var price = $("#price").val();
  items.push(price);
  $(".priceAmount").append("<li>" + price + "</li>");                  
  
  var priceAmount = price.length;
  $(".priceAmount").text(priceAmount);
  
  console.log(priceAmount);
});