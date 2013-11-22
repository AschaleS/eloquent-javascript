function absolute(number) {
  if (number < 0)
    return -number;
  else
    return number;
}

function greaterThan(number1){
  return function(number2){
    return number2 > number1;
      };
}
