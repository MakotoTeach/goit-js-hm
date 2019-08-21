"use strict";

const countTotalSalary = function(employees) {
  let sum = 0;

  const salaryValues = Object.values(employees);

  for (const value of salaryValues) {
    sum += value;
  }

  return sum;
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
);


console.log(countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }));
