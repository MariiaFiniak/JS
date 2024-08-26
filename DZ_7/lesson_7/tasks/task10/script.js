"use strict";
//Крок 0. Позначення величин
// Дано покази температур (довільна кількість).
//  Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури

// // Крок 1. Введення необхідних даних
let numberIndicators = parseFloat(
  prompt(`Введiть будь ласка кiлькicть показникiв`)
);

// Крок 2. Cтворюемо функцiю
function getNegativeIndicators(numberIndicators) {
  let indicator = 0;
  for (let i = 1; i <= numberIndicators; i++) {
    let indicatorsTemperature = parseInt(
      prompt(`Введiть будь ласка покази температури`)
    );
    if (indicatorsTemperature < 0) indicator++;
  }
  return indicator;
}

// Крок 3. Виводимо  результат
document.write(
  `Вiдемних показникiв:${getNegativeIndicators(numberIndicators)}`
);
