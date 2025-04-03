let createNo = "";
let firstNo = 0, secondNo = 0, flag = 1, variabl = 0, sign = "";
let buttons = document.querySelector('#buttons').addEventListener('click', pressBtn)
function pressBtn(event){
  let target = event.target;
  if (target.matches('button')) {
    value = target.innerHTML
    //console.log(value + "<--");
  }
  
 /*
 Cand trebuie sa concatenez un numar cu virgula. 
  createNo  += value;
  console.log(createNo + " <- Concatenam")

let createReal = parseFloat(createNo);
console.log(typeof createReal + " <- Transformam  pe asta ->" + createNo)
*/
  if (value >= 0 && value <= 9 && flag == 1 || value == "." && flag == 1){
   
    createNo += value;
    firstNo  = parseFloat(createNo);// 2 
    console.log(firstNo + "<-nr transformat ")
    document.querySelector('#output').value = firstNo;
    variabl = firstNo;
    
  } else if (flag == 0 && value >= 0 && value <= 9 ||value == "." && flag == 0) {
    createNo += value;
    secondNo = parseFloat(createNo);// 2 
    //console.log(secondNo + "<-nr transformat ")
    document.querySelector('#output').value = secondNo;
    //flag = 1;
    
  }
  if (value == "+" || value == "-" || value == "*" || value == "/" || value == "%)") {
    sign = value;
    createNo = " "
    flag = 0;
  } else if (value == "=" ) {
    flag = 1;
    var result = eval(variabl + sign + secondNo);
    document.querySelector('#output').value = result;
    variabl = result;
    console.log(result + "<- rezultatul ")
  }

  if (value == "C") {
    result = 0;
    secondNo = 0;
    firstNo = 0;
    variabl = 0
    createNo = 0;
    document.querySelector('#output').value = " ";
  }
  if (value == "-/+") {

  }
  //document.querySelector('#output').value = result;
}


