"use strict";
// Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.

//Крок 0. Позначення величин
// Сантиметри у дюйми-1 дюйм это 2,54 см
//Кілограми у фунти- 1 kg * 2.2046
// Кілометри у милі-1 км 1км еквівалентний 0,6214 милі

// Крок 1. Введення необхідних даних

// Крок 2. створюемо функцiю
function getCountInches(getCentimeters, inces = 2.54) {
  return getCentimeters * inces
}
let getCentimeters = Math.floor(prompt(`Введiть будь-ласка число в сантиметрах`))

let resInces = getCountInches (getCentimeters);
document.write(
  `<div>${getCentimeters}cантиметрiв буде:${resInces.toFixed(2)} дюймiв</div>`
);




// // Крок 2. створюемо функцiю
function getCountPounds(getKilograms, pounds = 2.2046) {
  return getKilograms * 2.2046
}
let getKilograms = Math.floor(prompt(`Введiть будь-ласка число в кiлограмах`))
// Крок 3. Виводимо  результат
let resPounds = getCountPounds(getKilograms)
// Крок 3. Виводимо  результат
document.write(
  `<div>${getKilograms} кiлограмм буде:${resPounds.toFixed(2)}фунтiв</div>`
);



//  створюемо функцiю
function getCountMile(getKilometers, mile = 0.6214) {
	return getKilometers * mile
}
let getKilometers = Math.floor(prompt(`Введiть будь-ласка число в кiлометрах`))
let resMile = getCountMile(getKilometers);
document.write(
  `<div>${getKilometers}кiлометрiв буде:${resMile.toFixed(2)}миль</div>`
);
// // Крок 3. Виводимо  результат
