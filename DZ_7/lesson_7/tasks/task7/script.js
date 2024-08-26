"use strict";


//Крок 0. Позначення величин




// Крок 1. Введення необхідних даних
let row = parseInt(prompt("Введіть кількість рядків у таблиці"));
let colum = parseInt(prompt("Введіть кількість стовпчиків у таблиці"));
let message = prompt("Введіть значення у таблиці");
// Крок 2. Cтворюемо функцiю
function createTable(row, colum, message) {
  document.write(`<table border="2">`);
  for (let i = 0; i < row; i++) {
    document.write(`<tr>`);
  for (let m = 0; m < colum; m++) 
	  document.write(`<td>${message}</td>`);
	    document.write(`</tr>`);
  }

	document.write(`</table>`);
}
// Крок 3. Виводимо  результат
 createTable(row, colum, message);




