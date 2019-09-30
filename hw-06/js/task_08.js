"use strict";

import users from "./users";

const getUsersWithFriend = (users, friendName) =>
  users.filter(users => users.friends.includes(friendName));

console.log(getUsersWithFriend(users, "Briana Decker"));
