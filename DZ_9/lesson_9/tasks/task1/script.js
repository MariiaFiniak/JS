"use strict"
//  Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.
//Крок 0. Позначення величин
// Крок 1. Введення необхідних даних

// Крок 3. Виводимо  результат
if (confirm("Почати тестування?")) {

}
	let numberOfElements = Math.floor(
    prompt("Введiть будь ласка кiлькicть елементiв")
  )
  let newNumberOfElement = new Array(numberOfElements).fill(0)
document.write(newNumberOfElement)