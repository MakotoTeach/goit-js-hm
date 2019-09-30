"use strict";

<<<<<<< HEAD
import users from "./users";
=======
import users from "./users.js";
>>>>>>> d1d459d1518a7d21a0d930937fe2bfb2cf00d9ee

const calculateTotalBalanceUsers = users =>
  users.reduce((totalBalance, users) => totalBalance + users.balance, 0);

console.log(calculateTotalBalanceUsers(users));
