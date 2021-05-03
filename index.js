//Creating page

const generateHTML = require ('./src/generateHTML');

//Manager profiles

const Manager = require('./lib/manager');

//Engineer profile

cont engineer =require('./lib/engineer');

//node modules
const fs=require('fs');
const inquirer = require('inquirer');

//Prompt for Manager

const addManager = () => {
    return inquirer.promot ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the manager?',
            validate: (nameInput) {
                return true;
            }else {
                console.log ("Please enter the name of the manager");
                return false:
            }
            }
        }
    ])
}