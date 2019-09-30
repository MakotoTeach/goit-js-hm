"use strict";

import users from "./users.js";

const calculateTotalBalanceUsers = users =>
  users.reduce((totalBalance, users) => totalBalance + users.balance, 0);

console.log(calculateTotalBalanceUsers(users));
