"use strict";
//Крок 0. Позначення величин
// Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення
// (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>


// Крок 1. Введення необхідних даних
let titleBaner = "Baner";
let imageBaner = "./img1.png";
let linkBaner = "https://youtu.be/yJcCKuxfb2o?si=zOVkUQ-nhK7C2dIV";
// Крок 2. Cтворюемо функцiю
function itBaner(titleBaner, imageBaner, linkBaner) {
  document.write(
    `<h1>${titleBaner}</h1><a href="${linkBaner}"><img src="${imageBaner}" alt="JS"></a>`
  );
}
itBaner(titleBaner, imageBaner, linkBaner);
// Крок 3. Виводимо  результат
