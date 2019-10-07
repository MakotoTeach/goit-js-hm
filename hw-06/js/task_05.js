"use strict";

import users from "./users.js";

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

console.log(getUserWithEmail(users, "elmahead@omatom.com"));
