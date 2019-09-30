"use strict";

import users from "./users";

const calculateTotalBalanceUsers = users =>
  users.reduce((totalBalance, users) => totalBalance + users.balance, 0);

console.log(calculateTotalBalanceUsers(users));
