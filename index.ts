#! /usr/bin/env node

// (SHABANG) this is use to run on cmd by command npx name 

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstname" },
  { message: "Enter your second number", type: "number", name: "secondname" },
  {
    message: "select one of the operatorto perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);
console.log(asnwer);
// contidtional statement
if (asnwer.operator === "Addition") {
  console.log(asnwer.firstname + asnwer.secondname);
} else if (asnwer.operator === "Substraction") {
  console.log(asnwer.firstname - asnwer.secondname);
} else if (asnwer.operator === "Multiplication") {
  console.log(asnwer.firstname * asnwer.secondname);
} else if (asnwer.operator === "Division") {
  console.log(asnwer.firstname / asnwer.secondname);
} else console.log("Invalid Operator");



console.log("THE END")