import inquirer from "inquirer";
import chalk from "chalk";
let targetAge = 60;
let answer = await inquirer.prompt([
    {
        name: "age",
        type: "number",
        message: "Enter your Age"
    },
]);
console.log(chalk.yellow(`Insha Allah, In next ${60 - answer.age} years, I will be ${targetAge} years Old`));


