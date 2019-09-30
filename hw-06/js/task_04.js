"use strict";

<<<<<<< HEAD
import users from "./users";
=======
import users from "./users.js";
>>>>>>> d1d459d1518a7d21a0d930937fe2bfb2cf00d9ee

const getInactiveUsers = users => users.filter(user => user.isActive === true);

console.log(getInactiveUsers(users));
