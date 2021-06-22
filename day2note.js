// Declare function

function sayHello(){
  console.log("Hello");
}

// Call or invoke a function
sayHello();

// Declaring a function with variable
function sayGoodbye(name){
  console.log("Goodbye"+name);
}
sayGoodbye("Ash");
sayGoodbye("Raj");
sayGoodbye("Syamil");

// Function with 2 parameters with result
function sum(a,b){
  return a+b;
}
console.log(sum(2,3));
console.log(sum(4,8));

//Function with result (Example for abstraction)
function checkEven(number){
  if(number % 2 == 0) {
    return true;
  } else{
    return false;
  }
}
console.log(checkEven(4));

// Function with multiple result
function areaVolume(width,length,height){
  return [width * length, width * height * length];
}
console.log(areaVolume(3,4,5));
