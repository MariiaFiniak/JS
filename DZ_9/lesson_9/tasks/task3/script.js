"use strict"
//  Користувач вводить кількість елементів.
//  Створити масив, у якому перші 5 елементів заповнені 1 - цями,
//  а інші до кінця масиву заповнені 7 - ками.

if (confirm("Почати тестування?")) {
  let numbetOfElements = parseInt(prompt("Введіть кількість елементів", "10"));

  let usersElements = new Array(numbetOfElements).fill(1);
  usersElements.fill(7, 5);
  document.write(`${usersElements}`);
}