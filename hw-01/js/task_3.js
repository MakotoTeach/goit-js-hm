'use strict';

Task-3

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const input = prompt("Веедите пароль!!");

if (input === ADMIN_PASSWORD) {
  alert((message = "Добро пожаловать!"));
} else if (input === null) {
  alert((message = "Действие отменено"));
} else {
  alert((message = "Неверный пароль!!"));
}