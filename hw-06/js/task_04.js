"use strict";

import users from "./users";

const getInactiveUsers = users => users.filter(user => user.isActive === true);

console.log(getInactiveUsers(users));
