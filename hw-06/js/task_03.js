"use strict";

<<<<<<< HEAD
import users from "./users";
=======
import users from "./users.js";
>>>>>>> d1d459d1518a7d21a0d930937fe2bfb2cf00d9ee

const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender);

console.log(getUsersWithGender(users, "male"));
