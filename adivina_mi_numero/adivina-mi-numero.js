const initGameBtn = document.getElementById("btn-input-number");
const answerByNumber = document.getElementById("answer-by-correct-num");
const btnIsLower = document.getElementById("btn-is-lower");
const btnYes = document.getElementById("btn-correct-number");
const btnIsHigher = document.getElementById("btn-is-higher");
let listOfNumbers = []; // Rango de numeros deñ 0 al 100 para iterar

for (let number = 1; number <= 100; number++) {
    listOfNumbers.push(number);
}

let minNumberIndex = 0;
let maxNumberIndex = listOfNumbers.length - 1;
let middleNumberIndex = 0;
let auxNumber = 0;

//============== Function Declarations ====================
function printAnswer(){
    answerByNumber.innerText = `Tu numero es ${auxNumber} ?`;
}


//------------- Resuelve rango medio -----------------
const midNumResolve = () =>{
    middleNumberIndex = (maxNumberIndex + minNumberIndex) / 2;
    middleNumberIndex = parseInt(middleNumberIndex);
    auxNumber = listOfNumbers[middleNumberIndex];
}

const gameBtnAvailable = () => {
    initGameBtn.setAttribute("disabled", "");
    btnIsHigher.removeAttribute("disabled", "");
    btnIsLower.removeAttribute("disabled", "");
    btnYes.removeAttribute("disabled", "");
}

function clearAll() {  
    minNumberIndex = 0;
    maxNumberIndex = listOfNumbers.length - 1;
    middleNumberIndex = 0;
    auxNumber = 0;

    initGameBtn.removeAttribute("disabled", "");
    btnIsHigher.setAttribute("disabled", "");
    btnIsLower.setAttribute("disabled", "");
    btnYes.setAttribute("disabled", "");
}

//------------- Inicializar juego -------------
initGameBtn.addEventListener("click", function () {
    midNumResolve();
    gameBtnAvailable();
    printAnswer();

});

//------------ Si es más chico -----------------
btnIsLower.addEventListener("click", function () {
    maxNumberIndex = middleNumberIndex - 1;
    midNumResolve();
    printAnswer();
});

//------------ Si es el correcto -------------
btnYes.addEventListener("click", function () {
    answerByNumber.innerText = `Tu numero es ${auxNumber}!, excelente decision.`;
    clearAll();
});

// ------------ Si es mas grande -------------
btnIsHigher.addEventListener("click", function () {
    minNumberIndex = middleNumberIndex + 1;
    midNumResolve();
    printAnswer();
});
