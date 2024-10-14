"use strict"
// Дано масив елементів. Знайти добуток додатних елементів

if (confirm("Почати тестування?")) {
	let arr = [-20, 40, 50, -10, 28, -80]
	let product=1
		for (const element of arr) {
			if (element > 0) {
			product*=element	
					document.write(`Добуток додатнiх елементiв${product}`)
			}
	
		}
	}


