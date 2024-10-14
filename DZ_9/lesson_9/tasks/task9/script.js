"use strict"
//  Дано масив імен.
//  Сформувати масив з перших літер цих імен.
if (confirm("Почати тестування?")) {
  const  names = ["Ivan", "Oleg", "Mariia", "Olena", "Makar"]
  
  const firstLetters = names.map((name) => name[0])

  console.log(firstLetters) 
  document.write(`${firstLetters}`)
}

