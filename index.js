const m = 3.281; // 1 meter = 3.281 feet
const l = 0.264; // 1 liter = 0.264 gallon
const kg = 2.204; // 1 kilogram = 2.204 pound

const convertBtn = document.getElementById("convert-btn");

let lengthBox = document.getElementById("length");
let volumeBox = document.getElementById("volume");
let massBox = document.getElementById("mass");

convertBtn.addEventListener("click", function() {
    let input = Number(document.getElementById("unit-input").value);

    let feet = (input * m).toFixed(3);
    let meters = (input / m).toFixed(3);
    lengthBox.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters`;

    let gallons = (input * l).toFixed(3);
    let lites = (input / l).toFixed(3);
    volumeBox.textContent = `${input} liters = ${gallons} gallons | ${input} gallons = ${lites} liters`;

    let pounds = (input * kg).toFixed(3);
    let kilos = (input / kg).toFixed(3);
    massBox.textContent = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kilos} kilos`;


});