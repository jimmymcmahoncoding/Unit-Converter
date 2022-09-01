/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

let convertBtn = document.getElementById("convert-btn");
let inputValue = document.getElementById("input");
let lengthParagraph = document.getElementById("length");
let volumeParagrah = document.getElementById("volume");
let massParagraph = document.getElementById("mass");


convertBtn.addEventListener("click", function () {
    valueEntered = inputValue.value;
    lengthParagraph.innerText = `${valueEntered} meters = ${(meterToFeet * valueEntered).toFixed(3)} feet | ${valueEntered} feet = ${(valueEntered / meterToFeet).toFixed(3)} meters`;
    volumeParagrah.innerText = `${valueEntered} liters = ${(literToGallon * valueEntered).toFixed(3)} gallons | ${valueEntered} gallons = ${(valueEntered / literToGallon).toFixed(3)} liters`;
    massParagraph.innerText = `${valueEntered} kilograms = ${(kilogramToPound * valueEntered).toFixed(3)} pounds | ${valueEntered} pounds = ${(valueEntered / kilogramToPound).toFixed(3)} kilograms`;
})
