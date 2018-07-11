#!/usr/bin/env node

const [,, ...args] = process.argv;

const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const chalk = require('chalk');
const options = require('./options');
const rand = randomInt(options.length);

let name = null;

if (args[0]) {
  name = args[0].toLowerCase();
}

if (name == 'jak') {
  console.log(chalk.red('sorry, I don\'t know how to do that :('));
} else if (name) {
  console.log(chalk.green(`hi ${name}, ${options[rand]}`));
} else {
  console.log(chalk.green(options[rand]));
}
