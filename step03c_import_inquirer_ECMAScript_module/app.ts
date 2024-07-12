import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        name: "age",
        type: "number",
        message: "Enter your Age"
    },
]);

let targetAge:number = 60;

console.log(`Insha Allah, in ${60 - answer.age} years, I will be ${targetAge} year Old`);