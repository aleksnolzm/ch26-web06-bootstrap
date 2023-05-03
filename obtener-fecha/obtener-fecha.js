const btnCalculate = document.getElementById("btn-calculate");
const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");
validationExpression = '([0-3])?[0-9]{1}(\/|\-){1}([0-1])?[0-9]{1}(\/|\-|){1}[0-9]{4}';

btnCalculate.addEventListener("click", () => console.log("Boton presionao"));

const getStringDate = () => {}