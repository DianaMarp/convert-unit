/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



let inputEl = document.getElementById("num-type")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
const btnConvert = document.getElementById("btn-convert")
const oneMeter = 3.281
const oneLiter = 0.624
const oneKilogram = 2.204
const onefeet = 0.3048;
const oneGallon = 3.78541
const onePound = 0.453592

btnConvert.addEventListener("click", function() {
    let baseValue = Number(inputEl.value)
    renderLength(baseValue)
    renderVolume(baseValue)
    renderMass(baseValue)
   baseValue = ""
    
})

function renderLength(length){
    lengthEl.textContent = `
        ${length} meters = ${(length * oneMeter).toFixed(3)} feet | 
        ${length} feet = ${(length * onefeet).toFixed(3)} meters
    `
}

function renderVolume(volume){
    volumeEl.textContent = `
    ${volume} liters = ${(volume * oneLiter).toFixed(3)} gallons | 
    ${volume} gallons = ${(volume * oneGallon).toFixed(3)} liters
`
}

function renderMass(mass){
    massEl.textContent = `
    ${mass} kilos = ${(mass * oneKilogram).toFixed(3)} pounds | 
    ${mass} pounds = ${(mass * onePound).toFixed(3)} kilos
`
}