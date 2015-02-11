var coinCounter = function(amount) {
  var coins = [25, 10, 5, 1];
  var results = [];
  var count = 0;

  coins.forEach(function(coin) {
    if (amount >= coin) {
      count = parseInt(amount / coin);
      results.push(count);
      amount = amount % coin;
    } else {
      results.push(0);
    }
  });
  return results;
};

$(document).ready(function() {
  $("form#change").submit(function(event) {
    var amount = parseInt($("input#amount").val());
    var results = coinCounter(amount);

    $(".amount").text(amount);
    $(".quarter").text(results[0]);
    $(".dime").text(results[1]);
    $(".nickel").text(results[2]);
    $(".penny").text(results[3]);

    $("#result").show();
    event.preventDefault();
  });
});
