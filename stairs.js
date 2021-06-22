// loop add #
var lines = 10;
for (var i = 0 ; i< lines; i++){
  for (var j = 0; j <= i; j++){
  document.write("#");
}
  document.write("<br/>");  
}
// loop minus #
for (var i = 0 ; i< lines; i++){
  for (var j = 0; j <= lines-i-1; j++){
  document.write("#");
}
  document.write("<br/>");  
}
