let createNo = "";
let firstNo = 0, secondNo = 0, flag = 1, sign = "";
let buttons = document.querySelector('#buttons').addEventListener('click', pressBtn);
function pressBtn(event) {
  let target = event.target;
  if (target.matches('button')) {
    value = target.innerHTML
  }
  if (value >= 0 && value <= 9 && flag == 1 || value == "." && flag == 1){
    createNo += value;
    firstNo  = parseFloat(createNo);
    document.querySelector('#output').value = firstNo; 
  } else if (flag == 0 && value >= 0 && value <= 9 ||value == "." && flag == 0) {
    createNo += value;
    secondNo = parseFloat(createNo);
    document.querySelector('#output').value = secondNo;
  }
  if (value == "+" || value == "-" || value == "*" || value == "/" || value == "%") {
    sign = value;
    document.querySelector('#output').value = sign;
    createNo = " "
    flag = 0;
    if (value == "%") {
      firstNo = firstNo / 100;
      document.querySelector('#output').value = firstNo;
    }
  } else if (value == "=" ) {
    flag = 1;
    var result = eval(firstNo + sign + secondNo);
    document.querySelector('#output').value = result;
    firstNo = result;
  }
  if (value == "C") {
    result = 0;
    secondNo = 0;
    firstNo = 0;
    createNo = 0;
    document.querySelector('#output').value = " ";
  }
}


