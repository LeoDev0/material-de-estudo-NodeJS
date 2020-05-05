const getNotes = require("./notes.js");
const validator = require("validator");
const chalk = require("chalk");

// console.log(getNotes());
// console.log(validator.isURL("duckduckgo.com"));
// console.log(chalk.green.bold.inverse("Success"));

const command = process.argv[2];

if (command === "add") {
  console.log(chalk.green("Note added!"));
} else if (command === "remove") {
  console.log(chalk.red("Note removed"));
}
