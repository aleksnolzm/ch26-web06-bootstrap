// ------- Variables Globales -------
let stringCache = '0';
let auxNumber = 0;
let typeOfMathOperator = "";
let mathHistorial = "";
let mathMode = false;


console.log(stringCache);
console.log(typeOfMathOperator);

//------ Imprime en el Display en formato String
const printToDisplay = (valueToPrint) => {
    const display = document.getElementById("output-operation");
    display.innerText = valueToPrint;
}

//----- Obtiene valor actual del String a Entero en el Display --------
const getStringFromDisplay = () =>{ 
    return document.getElementById("output-operation").value;
}

//------ Imprime en el Historial -----------
const printToHistorial = (valueToPrint) => {
    const historial = document.getElementById("historial");
    historial.innerText = valueToPrint;
}

//------ Obtengo un numero de acuerdo a la tecla presionada e imprime en Display
const numberKeyPressed = (inputNumberAsString) => {
    if (stringCache.length <= 1 && stringCache.includes('0')) {
        stringCache = inputNumberAsString;
    }
    else {
        stringCache += inputNumberAsString;
    }
    printToDisplay(stringCache);
    console.log(stringCache);
}

//----- Añade punto decimal a la cifra --------
const dotKeyPressed = () => {
    while (stringCache.includes('.') === false) {
        stringCache = stringCache.concat('.');
        printToDisplay(stringCache);
    }
}


//---- Obtiene el tipo de tecla para la operacion -------

const operatorKeyPressed = (inputOperatorAsString) => {
    typeOfMathOperator = inputOperatorAsString; // Agrega a caché
        
  
        mathHistorial = ` ${stringCache}  ${typeOfMathOperator} `;
        auxNumber = parseFloat(stringCache);
        stringCache = '0';



        printToDisplay(stringCache);
        printToHistorial(mathHistorial);
        console.log(`auxNumber: ${auxNumber} | stringCache ${stringCache}`);
    
}

// ---- Cambia el signo del numero a ingresar --------
const changeSignOfNumber = () => {
    if (stringCache.length >= 1 && !stringCache.includes('0')) {

        let auxNumberCache = parseFloat(stringCache);
        auxNumberCache = -auxNumberCache;
        stringCache = auxNumberCache.toString();
        printToDisplay(stringCache);
    }
} 
//--------- Funcion para identificar operación -------------
const getResult = (number1, number2, operator) =>{
    if(operator == "+"){
        return (number1 + number2);
    }
    else if(operator == "-"){
        return (number1 - number2);
    }
    else if(operator == "x"){
        return (number1 * number2);
    }
    else if(operator == "/"){
        return (number1 / number2);
    }
}


// --------- Obtiene resultado de operacion con tecla Igual -----
const equalsToPressed = () => {
    
    let resultOfOperation = 0;
    let numberOnCache = parseFloat(stringCache);
    mathHistorial += `${stringCache} = `;

    resultOfOperation = getResult(auxNumber, numberOnCache, typeOfMathOperator);

    stringCache = resultOfOperation.toString();
    printToDisplay(stringCache);
    printToHistorial(mathHistorial);
    auxNumber = 0;
    typeOfMathOperator = "";
} 

//------------ Borra Toda la memoria de la calculadora ------------
const clearCache = () => {
    stringCache = "0";
    auxNumber = 0;
    typeOfMathOperator = "";
    mathHistorial = "";

    printToDisplay(stringCache);
    printToHistorial(mathHistorial);
}
// ------ Tecla para obtener la Raiz Cuadrada -------
const operatorSqrtPressed = () => {
    
    let numberOnCache = parseFloat(stringCache);
    numberOnCache = Math.sqrt(numberOnCache);
    stringCache = numberOnCache.toString();
    printToDisplay(stringCache);

}
