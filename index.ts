#! /usr/bin/env node

import inquirer from "inquirer";


const RandomNumber = Math.floor(Math.random() * 6 +1);
const answer = await inquirer.prompt([{
    name : "userguessedNumber",
    type : "number",
    message :" please guess a number between 1-6 : ",
},
])
if (answer.userguessedNumber === RandomNumber) 
{console.log ("Congratulation you guessed right number.")}
else { console.log( "You gussed wrong number.")}

