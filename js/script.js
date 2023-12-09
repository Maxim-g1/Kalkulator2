let button = document.getElementById("convert");
let input = document.getElementById("one");
let input2=document.getElementById("two")
let output = document.getElementById("three");
let select=document.getElementById('select')
function print() {
    let one = Number(input.value);   
let two = Number(input2.value);  
  let znak=(select.value) 
    output.value = one+znak +two;
}
button.addEventListener("click", print); 
