const btnCalculate = document.getElementById("btn-calculate");
const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");
const outputText = document.getElementById("date-result-text");
//regExpDateValidation = '([0-3])?[0-9]{1}(\/|\-){1}([0-1])?[0-9]{1}(\/|\-|){1}[0-9]{4}';

//---------- Borrar campos ------------------
const clearInputs = () => {
    inputDay.value = '';
    inputMonth.value = '';
    inputYear.value = '';
}

//---------- Validacion de fecha ingresada por usuario -----------
const validateDate = (inDay, inMonth, inYear) => {    
    if(!Number.isNaN(inDay) && !Number.isNaN(inMonth) && !Number.isNaN(inYear)){
        if(inDay <= 31 && inDay > 0 && inMonth <= 12 && inMonth > 0 && inYear <= 2050 && inYear > 1900){
            console.table(inDay, inMonth, inYear);
            return true;
        }else{
            alert("Por favor ingrese una fecha valida mayor a 0/0/1900 y menor a 31/12/2050");
            clearInputs();
            return false;
        }
    }
    else{
        alert("Uno o más campos vacíos");
        return false;
    }
}

const checkIfLeepYear = (date) => {
    let year = date.getFullYear();

    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        return `${year} es bisiesto`;
    }
    else{
        return `${year} no es bisiesto`;
    }
}
//---------- Funcion para obtener dia a partir de un string generado DD-MM-YYYY --------
const getDayAndLeepYear = (inDay, inMonth, inYear) => {
    userDay = new Date(inYear, inMonth-1, inDay);
    let dayOfTheWeek = userDay.getDay();
    let nameOfDay = '';

    switch(dayOfTheWeek){
        case 0:
            nameOfDay = 'Domingo (No Laborable)';
            break;
        case 1: 
            nameOfDay = 'Lunes (Día Laborable)';
            break;
        case 2: 
            nameOfDay = 'Martes (Día Laborable)';
            break;
        case 3: 
            nameOfDay = 'Miércoles (Día Laborable)';
            break;
        case 4: 
            nameOfDay = 'Jueves (Día Laborable)';
            break;
        case 5: 
            nameOfDay = 'Viernes (Día Laborable)';
            break;
        case 6:  
            nameOfDay = 'Sábado (Día Laborable)';
            break;
        default:
            nameOfDay = 'Domingo entre semana';
            break;
    }

    return {
        'nameDay': nameOfDay,
        'leepYear': checkIfLeepYear(userDay)
    };

}

btnCalculate.addEventListener("click", () => {

    let userDay = parseInt(inputDay.value);
    let userMonth = parseInt(inputMonth.value);
    let userYear = parseInt(inputYear.value);

    if(validateDate(userDay, userMonth, userYear)){
    
        const userDate = getDayAndLeepYear(userDay, userMonth, userYear);
        let {nameDay, leepYear} = userDate;
        outputText.innerText = `El día ${userDay} es ${nameDay} y el año ${leepYear}`;
        //clearInputs();
    }
    else{
        outputText.innerText = 'No se encontró fecha :(';
        clearInputs();
    }
});
