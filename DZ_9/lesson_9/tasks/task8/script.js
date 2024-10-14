"use strict"
// Дано масив номерів авто.
//  Сформувати новий масив тих, які починаються на «А»
if (confirm("Почати тестування?")) {
  
	let carNumbers = ["AA5687", "BA3456", "AH7869", "DB8989"]
	let filterCarNumbers = []

  carNumbers.forEach((number) => {
    if (number.startsWith(`A`)) {
      filterCarNumbers.push(number)
    }
  })

  document.write(`${filterCarNumbers}`)


	
	}
