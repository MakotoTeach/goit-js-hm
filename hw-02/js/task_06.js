"use strict";

let spamWord1 = 'spam';
let spamWord2 = 'sale';

const checkForSpam = function(string) {
  let words = string.toLowerCase();
 
  let ifIncludes = words.includes(spamWord1) || words.includes(spamWord2);

  return ifIncludes;
};

console.log(checkForSpam("Get best  offers now SaLE  !"));
