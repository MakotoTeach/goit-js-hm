"use strict";

import users from "./users";

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
