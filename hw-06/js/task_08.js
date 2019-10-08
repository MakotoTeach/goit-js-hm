"use strict";

import users from "./users.js";

const getUsersWithFriend = (users, friendName) =>
  users.filter(users => users.friends.includes(friendName))
  .map(user => user.name);

console.log(getUsersWithFriend(users, "Briana Decker"));
