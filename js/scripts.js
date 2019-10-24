$(document).ready(function() {
  $("#triangle").submit(function(event) {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var number3 = parseInt($("#input3").val());


    if (number1 === number2 && number2 === number3 && number3 === number1) {
      alert ("Equilateral")
    }
    if (number1 === number2 && number2 < number3) {
       alert ("Isosceles");
     }
     if (number1 === number2 && number2 > number3) {
       alert ("Isosceles");
     }
     if (number1 === number3 && number2 < number3) {
       alert ("Isosceles");
     }
     if (number1 === number3 && number2 > number3) {
       alert ("Isosceles");
     }
     if (number2 === number3 && number1 > number3) {
       alert ("Isosceles");
     }
     if (number2 === number3 && number1 < number3) {
       alert ("Isosceles");
     }
     if (number1 > number2 && number2 > number3) {
       alert ("Scalene");
     }
     if (number1 < number2 && number2 < number3) {
       alert ("Scalene");
     }
    event.preventDefault();
  });
});
