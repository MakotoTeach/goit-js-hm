"use strict";

<<<<<<< HEAD
import users from "./users";
=======
import users from "./users.js";
>>>>>>> d1d459d1518a7d21a0d930937fe2bfb2cf00d9ee

const getUsersWithFriend = (users, friendName) =>
  users.filter(users => users.friends.includes(friendName));

console.log(getUsersWithFriend(users, "Briana Decker"));
