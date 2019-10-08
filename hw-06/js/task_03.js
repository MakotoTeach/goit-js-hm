"use strict";

import users from "./users.js";

const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender)
  .map(user => user.name);

console.log(getUsersWithGender(users, "male"));
