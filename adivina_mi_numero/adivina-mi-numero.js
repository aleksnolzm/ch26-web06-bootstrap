let listOfNumbers = []; // Rango de numeros deñ 0 al 100 para iterar
let numberSelected = 0; // Numero seleccionado por el usuario
const initGameBtn = document.getElementById("btn-input-number");
const answerByNumber = document.getElementById("answer-by-correct-num");
const btnYes = document.getElementById("btn-correct-number");
const inputUserNumber = document.getElementById("input-user-number");

for (let number = 1; number <= 100; number++) {
    listOfNumbers.push(number);
}

let minNumberIndex = 0;
let maxNumberIndex = listOfNumbers.length - 1;
let middleNumberIndex = 0;
let auxNumber = 0;


const resetGame = () => {

    minNumberIndex = 0;
    maxNumberIndex = listOfNumbers.length - 1;
    middleNumberIndex = 0;
    auxNumber = 0;
    numberSelected = 0;
    inputUserNumber.removeAttribute("disabled", "");
    inputUserNumber.value = "";
    btnYes.setAttribute("disabled", "");
    btnYes.classList.add("btn-no-display");
}

const validatingInput = () => {

    if (inputUserNumber.value == "" || inputUserNumber.value > 100) {
        alert("Debes ingresar un valor valido no más grande que 100 ni menor a 0");
        return false;
    }
    else if (inputUserNumber.value !== "") {
        return true;
    }
}


initGameBtn.addEventListener("click", function () {

    if (validatingInput()) {
        numberSelected = inputUserNumber.value;
        searchNumber(function (guessNumber) {
            answerByNumber.innerText = `el numero ${guessNumber} es correcto?`;
            initGameBtn.innerText = "Adivinar Otra Vez";
            inputUserNumber.setAttribute("disabled", "");
            btnYes.removeAttribute("disabled", "");
            btnYes.classList.remove("btn-no-display");
        });
    } else {
        answerByNumber.innerText = `No hay numero :(`;
    }
});

btnYes.addEventListener("click", function () {

    answerByNumber.innerText = `Tu numero es el ${auxNumber}, excelente decisión!`;
    resetGame();
});



function printConsole(min, mid, max, aux) {
    console.log(`min: ${min}, mid: ${mid}, max: ${max}, aux: ${aux}`);
}

const searchNumber = (printNumber) => {

    middleNumberIndex = (maxNumberIndex + minNumberIndex) / 2;
    middleNumberIndex = parseInt(middleNumberIndex);
    auxNumber = listOfNumbers[middleNumberIndex];
    printConsole(minNumberIndex, middleNumberIndex, maxNumberIndex, numberSelected);

    if (auxNumber > numberSelected) {
        maxNumberIndex = middleNumberIndex - 1;
        //printConsole(minNumberIndex, middleNumberIndex, maxNumberIndex, auxNumber);
    }
    else if (auxNumber < numberSelected) {
        minNumberIndex = middleNumberIndex + 1;
    }
    printNumber(auxNumber);
}
