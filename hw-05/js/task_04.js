'use strict';

// Напиши класс StringBuilder. На вход он получает один параметр - строку, 
// которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value



const StringBuilder = function (string) {
    this.string = string;
    this.value = string;

  
}

StringBuilder.prototype.get = function () {
return this.value;
};

StringBuilder.prototype.append = function(str) {
    return this.value += str;
}

StringBuilder.prototype.prepend = function (str) {
    this.value =  str + this.value;
    return this.value;
}

StringBuilder.prototype.pad = function (str) {

    this.value = str + this.value + str;
    return this.value;
}



const builder = new StringBuilder('.');

console.log(builder.get());




builder.append('^');
console.log(builder.get()); // '.^'



builder.prepend('^');
console.log(builder.get()); // '^.^'




builder.pad('=');
console.log(builder.get()); // '=^.^='

