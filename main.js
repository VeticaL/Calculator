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

let array1 = [];
let array2 = [];
let a;
let b;
let clicked = false;
let operator;

btn1.onclick = () => {
  if (clicked === false) {
    array1.push("1");
  } else if (clicked === true) {
    array2.push("1");
  }
};

btn2.onclick = () => {
  if (clicked === false) {
    array1.push("2");
  } else if (clicked === true) {
    array2.push("2");
  }
};

btn3.onclick = () => {
  if (clicked === false) {
    array1.push("3");
  } else if (clicked === true) {
    array2.push("3");
  }
};

btn4.onclick = () => {
  if (clicked === false) {
    array1.push("4");
  } else if (clicked === true) {
    array2.push("4");
  }
};

btn5.onclick = () => {
  if (clicked === false) {
    array1.push("5");
  } else if (clicked === true) {
    array2.push("5");
  }
};

btn6.onclick = () => {
  if (clicked === false) {
    array1.push("6");
  } else if (clicked === true) {
    array2.push("6");
  }
};

btn7.onclick = () => {
  if (clicked === false) {
    array1.push("7");
  } else if (clicked === true) {
    array2.push("7");
  }
};

btn8.onclick = () => {
  if (clicked === false) {
    array1.push("8");
  } else if (clicked === true) {
    array2.push("8");
  }
};

btn9.onclick = () => {
  if (clicked === false) {
    array1.push("9");
  } else if (clicked === true) {
    array2.push("9");
  }
};

btn0.onclick = () => {
  if (clicked === false) {
    array1.push("0");
  } else if (clicked === true) {
    array2.push("0");
  }
};

btnC.onclick = () => {};

btnX.onclick = () => {
  clicked = true;
  operator = "X";
};

btnAdd.onclick = () => {
  operator = "Add";
  if (clicked === false) {
    // add array
    for (let i = 0; i < array1.length; i += 1) {
        a += array1[i];
    }
    clicked = true;
    console.log(parseInt(a, 10));
  } else if (clicked === true) {

  }
};

btnSub.onclick = () => {
  clicked = true;
  operator = "Sub";
};

btnDiv.onclick = () => {
  clicked = true;
  operator = "Div";
};

btnEqual.onclick = () => {
    switch (operator) {
        case "Add":
            
            break;
    
        default:
            break;
    }
};
