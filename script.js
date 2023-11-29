let pressed = 0;
let btnInput = document.querySelectorAll(".input-button");
let Aclear = document.getElementById("clear");
let erase = document.getElementById("erase");
let equal = document.getElementById("equal");
let input = document.getElementById("input");



// code shamss a modif 
let inputBox = document.querySelector("#inputBox")
let buttons = document.querySelectorAll("button")
let string = ""
let oprClicked = false; // Nouvelle variable pour suivre si un opr a été cliqué
let switchs = document.querySelector("#icon")
const secretCode = "23152631619"

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
      const buttonText = event.target.innerText;
  
      if (buttonText === "=") {
        string = String(eval(string))
        inputBox.value = string
        oprClicked = false; // Réinitialise la variable après le calcul
      } else if (buttonText === "AC") {
        string = ""
        inputBox.value = string
        oprClicked = false; // Réinitialise la variable
      } else if (buttonText === "DEL") {
        string = string.substring(0, string.length - 1)
        inputBox.value = string
        oprClicked = false; // Réinitialise la variable
      } else if (event.target.id === "plusMinus") {
        string = String(-eval(string))
        inputBox.value = string
      } else if (event.target.classList.contains("opr") && !oprClicked) {
        string += buttonText
        inputBox.value = string
        oprClicked = true; // Désactive les opr après un clic
      } else if (!event.target.classList.contains("opr")) {
        string += buttonText
        inputBox.value = string
      } else if (inputBox.value = secretCode){
  
      }
    });
  });



// Afficher dans la calculatrice l'operation
btnInput.forEach((button_class) => {
    button_class.addEventListener("click", () => {
      if (pressed == 1) {
        input.value = "";
        pressed = 0;
      }
      input.value += button_class.value;
    });
  });



// bouton ALL clear
  Aclear.addEventListener("click", ()=>{
    input.value = "";
  } );



//bouton delete
  let btnErase = document.getElementById("erase").value;
  erase.addEventListener("click", ()=>{
   let string = input.value.toString();
    input.value= string.slice(0,-1);
 });


function calculateResult() {
  let input = document.getElementById("input").value;
  const regex = /(\d+\.\d+|\d+)([\+\-\*\/])(\d+\.\d+|\d+)/;
  const match = input.match(regex);

  if (match) {
      const firstNum = parseFloat(match[1]);
      const operator = match[2];
      const secondNum = parseFloat(match[3]);
      let result;

      switch (operator) {
          case '+':
              result = firstNum + secondNum;
              break;
          case '-':
              result = firstNum - secondNum;
              break;
          case '*':
              result = firstNum * secondNum;
              break;
          case '/':
              if (secondNum !== 0) {
                  result = firstNum / secondNum;
              } else {
                  result = 'Error';
              }
              break;
      }

      document.getElementById('input').value = result;
  }
}



let lastCharIsSpecial = false; // Dernier charactere ajouté

function appendToResult(value) {
    const resultInput = document.getElementById('result');
    const currentValue = resultInput.value;

    if (value === '.') {
        // regarde si la valeur actuel contien deja une decimale
        if (currentValue.indexOf('.') === -1) {
            resultInput.value += value;
            lastCharIsSpecial = false; //reset charactere special
        }
    } else if (value.match(/[+\-*/]/)) {
        // regarde si le dernier charactere ajouté etait un charactere special
        if (!lastCharIsSpecial) {
            resultInput.value += value;
            lastCharIsSpecial = true;
        }
    } else {
        resultInput.value += value;
        lastCharIsSpecial = false; // reset special charactere
    }
}
