"use strict";

let input;
let total = 0;

do {
  let input = +prompt("Введите число", '')
  total += input;
  if (!input) break;
} while (true)

alert('Общая сумма чисел равна ' + total);