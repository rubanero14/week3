// 1) Variable - (String)
var name = "Rajaruban";
console.log(name);
// String operation
var message = "Hello "+name;
console.log(message);
// 2) Variable number
var a = 10;
var b = 3;
var sum = a + b;
console.log(sum);
// Number operation
var minus = a - b;
console.log(minus);
var product = a * b;
console.log(product);
var division = a / b;
console.log(division);
var modulo = a % b;
console.log(modulo);
// Boolean
var hungry = true;
var diet = false;
// or & and
console.log(hungry && diet); // AND- both of it need to be true for it to be true...
console.log(hungry || diet); // OR- one of it need to be true for it to be true...
console.log(!hungry); // The reverse of the condition


// Condition (if else)
var age = 15;

if (age < 18) {
    console.log("You cannot watch the movie");
}
else {
    console.log("You may watch the movie");
}
if (age < 13) {
  console.log("You cannot watch the movie");
}
else if (age < 18) {
  console.log("You can watch the movie with parents");
}
else {
  console.log("You may watch the movie");
}
// Even number validator
var number = 30;
if (number % 2 == 0) {
  console.log(number+" is a even number");
}
else {
   console.log(number+" is an odd number");
}

//Ticket price condition
var ticPrice = 100;
var age = 45;

if (age < 18 && age > 66) {
 var price=ticPrice*0.5;
  console.log("Ticket price is RM"+price);
}
else if (age > 18 && age < 40) {
  var price=ticPrice;
  console.log("Ticket price is RM"+price);
}
else {
  console.log("Ticket price is RM"+ ticPrice * 0.75);
}
// For loop = repeat 10 times..
//from... 0 until 10; each iteration add by one
for (var i = 0; i < 10 ; i++){
  // show the number
  console.log(i);
}
//from... 10 until 0... each iteration i will minus by one
for (var i = 10; i > 0; i--){
  // show the number
  console.log(i);
}
//from... 0 until 10... each iteration add by two
for (var i = 1; i < 10; i+=2){
  console.log(i);
}
// Multiplication table generator
var multiplier = 4;
var lines = 15;
// in this example <= smaller or equals to 15(until including 15)
for (var i = 1 ; i <= lines ; i++){
  console.log(i+ " x "+multiplier+" = "+i*multiplier);
}
