"use strict";
//  Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

//Крок 0. Позначення величин


// Крок 1. Введення необхідних даних
// Крок 2. Cтворюемо функцiю
function randImage() {
  const randImageIndex = 1 + Math.floor(Math.random() * 4);
  document.write(`<img src="./img${randImageIndex}.jpg">`);
}
randImage();
// Крок 3. Виводимо  результат
