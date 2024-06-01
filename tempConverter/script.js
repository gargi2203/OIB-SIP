// script.js

function convertTemperature() {
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;

    if (inputValue === '' || isNaN(inputValue)) {
        alert('Please enter a valid temperature value');
        return;
    }

    const temperature = parseFloat(inputValue);
    let result;

    if (inputUnit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        const kelvin = temperature + 273.15;
        result = `${temperature.toFixed(2)} °C = ${fahrenheit.toFixed(2)} °F = ${kelvin.toFixed(2)} K`;
    } else if (inputUnit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        const kelvin = (temperature - 32) * 5/9 + 273.15;
        result = `${temperature.toFixed(2)} °F = ${celsius.toFixed(2)} °C = ${kelvin.toFixed(2)} K`;
    } else if (inputUnit === 'kelvin') {
        const celsius = temperature - 273.15;
        const fahrenheit = (temperature - 273.15) * 9/5 + 32;
        result = `${temperature.toFixed(2)} K = ${celsius.toFixed(2)} °C = ${fahrenheit.toFixed(2)} °F`;
    }

    document.getElementById('result').textContent = result;
}
