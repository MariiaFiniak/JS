"use strict"
// Дано масив елементів.
//  Усі елементи, які більші за перший елемент помножити на 2

if (confirm("Почати тестування?")) {
  let number = [3, 6, 10, 35, 48, 69]
  number.forEach((el, index, arr) => {
	  if (el > number[0]) arr[index] *= 2
	})
	document.write(`${number}`)
  
}
