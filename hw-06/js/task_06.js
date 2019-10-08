"use strict";

<<<<<<< HEAD

=======
>>>>>>> bac1f732fc021130669ac3404dd3547c3b001a0e
import users from "./users.js";

const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));
