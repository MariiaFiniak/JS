"use strict"
// Дано масив цін у грн. Податок складає 20%.
//  Сформувати масив, який буде містити величину сплаченого податку у грн.

if (confirm("Почати тестування?")) {
	const priceList = [100, 1000, 2345, 3458, 43, 656]

  const priceTaxList = priceList.map((el) => Math.round(el * 0.2))

  document.write(`Величина сплаченого податку:${priceTaxList}`)


}
