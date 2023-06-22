// Declaración de variables utilizando "let"
let display = document.getElementById("display");
let clearButton = document.getElementById("clear");
let equalButton = document.getElementById("equal");
let numberButtons = document.getElementsByClassName("number");
let operatorButtons = document.getElementsByClassName("operator");

// Inicialización del valor del display
let currentValue = "0";

// Función para actualizar el valor en el display
const updateDisplay = () => {
    display.value = currentValue;
};

// Función para manejar los clics en los botones
const handleClick = (value) => {
    if (currentValue === "0") {
        currentValue = value;
    } else {
        currentValue += value;
    }
    updateDisplay();
};

// Función para realizar el cálculo
const calculate = () => {
    try {
        currentValue = eval(currentValue); // Utilizando eval() para evaluar la expresión matemática
        updateDisplay();
    } catch (error) {
        currentValue = "Error";
        updateDisplay();
    }
};

// Función para borrar el contenido del display
const clearDisplay = () => {
    currentValue = "0";
    updateDisplay();
};