const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnC = document.getElementById("btnC");
const btnX = document.getElementById("btnX");
const btnAdd = document.getElementById("btnAdd");
const btnSub = document.getElementById("btnSub");
const btnDiv = document.getElementById("btnDiv");
const btnEqual = document.getElementById("btnEqual");
const displayText = document.getElementById("displaytext");

let string = "";

btn1.addEventListener("click", calculate);
btn2.addEventListener("click", calculate);
btn3.addEventListener("click", calculate);
btn4.addEventListener("click", calculate);
btn5.addEventListener("click", calculate);
btn6.addEventListener("click", calculate);
btn7.addEventListener("click", calculate);
btn8.addEventListener("click", calculate);
btn9.addEventListener("click", calculate);
btn0.addEventListener("click", calculate);
btnC.addEventListener("click", calculate);
btnX.addEventListener("click", calculate);
btnAdd.addEventListener("click", calculate);
btnSub.addEventListener("click", calculate);
btnDiv.addEventListener("click", calculate);
btnEqual.addEventListener("click", calculate);

function calculate() {
  if (this.innerHTML == "=") {
    string = eval(string);
  } else if (this.innerHTML == "C") {
    string = "";
    displayText.value = string;
  } else {
    string = string + this.innerHTML;
    displayText.value = string;
  }
}
