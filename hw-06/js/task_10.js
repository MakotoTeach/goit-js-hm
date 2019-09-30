"use strict";

import users from "./users.js";

const getSkills = users =>
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .filter((item, i, arr) => arr.indexOf(item) === i)
    .sort();

console.log(getSkills(users));
