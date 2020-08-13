"use strict";

let total = 100;
let ordered = 50;

if (ordered < total) {
    alert ("Заказ оформлен, с вами свяжется менеджер");
} else if ((ordered === total)) {
    alert ("Заказ оформлен, с вами свяжется менеджер!")
} else {
    alert ("На складе недостаточно товаров!")
}

// Для проверки работоспособности

ordered = 20;
if (ordered < total) {
    alert ("Заказ оформлен, с вами свяжется менеджер");
} else if ((ordered === total)) {
    alert ("Заказ оформлен, с вами свяжется менеджер!")
} else {
    alert ("На складе недостаточно товаров!")
}

ordered = 80;
if (ordered < total) {
    alert ("Заказ оформлен, с вами свяжется менеджер");
} else if ((ordered === total)) {
    alert ("Заказ оформлен, с вами свяжется менеджер!")
} else {
    alert ("На складе недостаточно товаров!")
}

ordered = 130;
if (ordered < total) {
    alert ("Заказ оформлен, с вами свяжется менеджер");
} else if ((ordered === total)) {
    alert ("Заказ оформлен, с вами свяжется менеджер!")
} else {
    alert ("На складе недостаточно товаров!")
}