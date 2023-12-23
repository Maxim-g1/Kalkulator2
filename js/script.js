let button = document.getElementById("equals");
let input = document.getElementById("num1");
let input2=document.getElementById("num2")
let output = document.getElementById("result");
let select=document.getElementById('select')

function plus(number1, number2){
  return Number(number1.value) + Number(number2.value);
}

function minus(number1, number2){
  return number1.value - number2.value;
}

function umnoj(number1, number2){
  return number1.value * number2.value;
}

function deli(number1, number2){
  return number1.value / number2.value;
}

function ostatok(number1, number2){
  return number1.value % number2.value;
}

function protsent(number1, number2){
  return (number1.value / number2.value)*100;
}

equals.addEventListener('click', function(){
if(select.value == '+'){
  result.value = plus(num1, num2)
}
if(select.value == '-') {
  result.value = minus(num1, num2)
}
if(select.value == '*') {
  result.value = umnoj(num1, num2)
}
if(select.value == '/') {
  result.value = deli(num1, num2)
}
if(select.value == '%') {
  result.value = ostatok(num1, num2)
}
if(select.value == '%2'){
  result.value = protsent(num1, num2)
}
})


