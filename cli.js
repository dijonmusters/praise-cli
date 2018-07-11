#!/usr/bin/env node

const chalk = require('chalk');

const [,, ...args] = process.argv;

const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

if (args[0] && args[0].toLowerCase() == '-jak') {
  console.log(chalk.red('sorry, I don\'t know how to do that :('));
} else {
  const options = require('./options');
  const rand = randomInt(options.length);
  console.log(chalk.green(options[rand]));
}
