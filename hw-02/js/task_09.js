"use strict";

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Operation = {
  TAKE: "take",
  PUT: "put"
};

let idCounter = 0;

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const user = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  operations: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  take(amount) {
    const operation = {
      id: idCounter++,
      type: Operation.TAKE,
      amount: amount
    };

    if (amount <= this.balance) {
      this.addOperation(operation);
      console.log(`Вы взяли ${amount} средств`);
      return (this.balance -= amount);
    } else {
      console.log("Недостаточно средств на Вашем счету!!!");
    }
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  put(amount) {
    const operation = {
      id: idCounter++,
      type: Operation.PUT,
      amount: amount
    };
    this.addOperation(operation);
    console.log(`Вы внесли ${amount} средств`);
    return (this.balance += amount);
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addOperation(operation) {
    return this.operations.push(operation);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getOperationDetails(id) {
    for (let currentOperation of this.operations) {
      if (id === currentOperation.id) {
        return currentOperation;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getOperationTotal(type) {
    let totalAmount = 0;
    for(const obj of this.operations){
      if( type === obj.type){
        totalAmount += obj.amount;
      }
    }
    return totalAmount;
  }
};

console.table(user);

user.put(2500);

user.take(900);

console.table(user);

user.put(4500);

console.log(user.operations);

console.log(user.getOperationDetails(2));

console.log(user.getOperationTotal('put'));
