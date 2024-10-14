"use strict"
// Дано масив елементів.
//  Вивести на екран елементи, що більші за 100

if (confirm("Почати тестування?")) {
  
	let arr = [5, 80, 107, 208, 789]
	for (const element of arr) {
		if (element > 100) 
			document.write(`${element}<br>`)
	}
}

