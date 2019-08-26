'use strict';

let country = prompt("Введите страну");

let selectedCountry;

let string;

function capitalize(country) {
  return country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
}
let price;
if (country === null) {
  alert("Очень жаль, приходите еще");
} else {
  country = capitalize(country);
  switch (country) {
    case "Китай":
      price = 100;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    case "Чили":
      price = 250;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    case "Австралия":
      price = 170;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    case "Индия":
      price = 80;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    case "Ямайка":
      price = 120;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    default:
      alert("в Вашей стране доставка не доступна");
  }
}