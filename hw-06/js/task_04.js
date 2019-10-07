"use strict";

import users from "./users.js";

const getInactiveUsers = users => users.filter(user => user.isActive === true);

console.log(getInactiveUsers(users));
