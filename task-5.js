"use strict";

let cost;
let country = prompt("Укажите страну доставки");

country = country.toLowerCase();
let newCountry = country[0].toUpperCase() + country.slice(1);

switch (newCountry) {
    case "Китай":
        cost = 100;
        alert(`Доставка в ${newCountry} будет стоить ${cost} кредитов`);
        break;

    case "Чили":
        cost = 250;
        alert(`Доставка в ${newCountry} будет стоить ${cost} кредитов`);
        break;

    case "Австралия":
        cost = 170;
        alert(`Доставка в ${newCountry} будет стоить ${cost} кредитов`);
        break;

    case "Индия":
        cost = 80;
        alert(`Доставка в ${newCountry} будет стоить ${cost} кредитов`);
        break;

    case "Ямайка":
        cost = 120;
        alert(`Доставка в ${newCountry} будет стоить ${cost} кредитов`);
        break;
    
    default:
    alert("В вашей стране доставка недоступна");
}