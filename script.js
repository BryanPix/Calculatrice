let pressed = 0;
let btnInput = document.querySelectorAll(".input-button");
let Aclear = document.getElementById("clear");
let erase = document.getElementById("erase");
let equal = document.getElementById("equal")


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


