"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};


user.mood = 'happy'

user.hobby = 'javascript';

user.premium = false;

console.log(user)

const keys = Object.keys(user);

console.log(keys);

for (const key of keys) {

  console.log(`key: ${key}, value: ${user[key]} `);
}


