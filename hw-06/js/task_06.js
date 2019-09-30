"use strict";

<<<<<<< HEAD
import users from "./users";
=======
import users from "./users.js";
>>>>>>> d1d459d1518a7d21a0d930937fe2bfb2cf00d9ee

const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));
