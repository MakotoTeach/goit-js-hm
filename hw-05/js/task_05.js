"use strict";

class Car {
  constructor({ speed = 0, price, maxSpeed, isOn, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  set price(newPrice) {
    this._price = newPrice;
  }
  get price() {
    return this._price;
  }
  turnOn() {
    return (this.isOn = true);
  }
  turnOff() {
    this.speed = 0;
    return (this.isOn = false);
  }
  accelerate(value) {
    let addedSpeed = this.speed + value;
    if (addedSpeed <= this.maxSpeed) {
      this.speed = addedSpeed;
    } else console.log("СЛИШКОМ БОЛЬШАЯ СКОРОСТЬ!!");
    return this.speed;
  }
  decelerate(value) {
    let takenSpeed = this.speed - value;
    if (takenSpeed >= 0) {
      this.speed = takenSpeed;
    } else console.log("СЛИШКОМ МАЛЕНЬКАЯ СКОРОСТЬ!!");
    return this.speed;
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
    if (this.isOn) {
      return this.distance;
    }
    return this.distance;
  }
  static getSpecs(car) {
    return console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(190);
mustang.drive(2);

console.log(mustang);
// // Car.getSpecs(mustang);
// // // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(180);
mustang.drive(1);
mustang.turnOff();

console.log(mustang);

mustang.turnOn();
mustang.accelerate(20);
mustang.drive(1);
mustang.turnOff();

mustang.drive(5);
mustang.turnOn();

Car.getSpecs(mustang);

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

// // Напиши класс Car с указанными свойствами и методами.

// class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor() {}

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {}

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {}

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {}

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {}

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {}
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// // Car.getSpecs(mustang);
// // // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// // Car.getSpecs(mustang);
// // // maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
