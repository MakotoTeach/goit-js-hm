"use strict";

<<<<<<< HEAD
import users from "./users";
=======
import users from "./users.js";
>>>>>>> d1d459d1518a7d21a0d930937fe2bfb2cf00d9ee

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

console.log(getUserWithEmail(users, "elmahead@omatom.com"));
